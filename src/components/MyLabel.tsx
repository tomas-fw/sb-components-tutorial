import "./mylabel.css";

interface MyLabelProps {
  /**
   * Content of label
   */
  label?: string;
  /**
   * Optional: Determines the size of the label
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Optional: Determines if the label should be in uppercase
   */
  allCaps?: boolean;
  /**
   * Optional: Determines color of label
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Optional: Determines a custom font color
   */
  fontColor?: string;
}

const MyLabel = ({
  label = "No Label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{
        color: fontColor,
      }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
