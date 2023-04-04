import type { Meta, StoryObj } from "@storybook/react";
import MyLabel from "../../components/MyLabel";

const meta: Meta<typeof MyLabel> = {
  title: "UI/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["normal", "h1", "h2", "h3"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "select" },
    },
    allCaps: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    fontColor: {
      control: {
        matchers: {
          color: /(background|color)$/i,
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic Label",
    size: "normal",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps",
    size: "normal",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    color: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    label: "Tertiary",
    color: "tertiary",
  },
};

export const CustomFont: Story = {
  args: {
    label: "Custom Font Color",
    fontColor: "#333",
  },
};
