import{j as x}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";const t=({label:s="No Label",size:S="normal",allCaps:z=!1,color:L="primary",fontColor:q})=>x("span",{className:`label ${S} text-${L}`,style:{color:q},children:z?s.toUpperCase():s});try{t.displayName="MyLabel",t.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No Label"},description:"Content of label",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Optional: Determines the size of the label",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"Optional: Determines if the label should be in uppercase",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Optional: Determines color of label",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},fontColor:{defaultValue:null,description:"Optional: Determines a custom font color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const V={title:"UI/MyLabel",component:t,tags:["autodocs"],argTypes:{size:{options:["normal","h1","h2","h3"],control:{type:"radio"}},color:{options:["primary","secondary","tertiary"],control:{type:"select"}},allCaps:{control:{type:"boolean"}},label:{control:{type:"text"}},fontColor:{control:{matchers:{color:/(background|color)$/i}}}}},e={args:{label:"Basic Label",size:"normal"}},a={args:{label:"All Caps",size:"normal",allCaps:!0}},r={args:{label:"Secondary",color:"secondary"}},o={args:{label:"Tertiary",color:"tertiary"}},l={args:{label:"Custom Font Color",fontColor:"#333"}};var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Basic Label",
    size: "normal"
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "All Caps",
    size: "normal",
    allCaps: true
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var d,y,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Secondary",
    color: "secondary"
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,g,C;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Tertiary",
    color: "tertiary"
  }
}`,...(C=(g=o.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var h,v,_;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Custom Font Color",
    fontColor: "#333"
  }
}`,...(_=(v=l.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};const A=["Basic","AllCaps","Secondary","Tertiary","CustomFont"];export{a as AllCaps,e as Basic,l as CustomFont,r as Secondary,o as Tertiary,A as __namedExportsOrder,V as default};
//# sourceMappingURL=MyLabel.stories-fbfdf7c1.js.map
