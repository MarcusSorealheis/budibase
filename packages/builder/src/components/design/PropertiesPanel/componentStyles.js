import { Input, Select, ColorPicker } from "@budibase/bbui"
import FlatButtonGroup from "./PropertyControls/FlatButtonGroup"
// import Colorpicker from "./PropertyControls/ColorPicker.svelte"

export const layout = [
  {
    label: "Display",
    key: "display",
    control: Select,
    options: [
      { label: "Block", value: "block" },
      { label: "Inline Block", value: "inline-block" },
      { label: "Flex", value: "flex" },
      { label: "Inline Flex", value: "inline-flex" },
    ],
  },
  {
    label: "Direction",
    key: "flex-direction",
    control: FlatButtonGroup,
    buttonProps: [
      { icon: "ri-arrow-right-line", padding: "0px 5px", value: "row" },
      { icon: "ri-arrow-left-line", padding: "0px 5px", value: "rowReverse" },
      { icon: "ri-arrow-down-line", padding: "0px 5px", value: "column" },
      {
        icon: "ri-arrow-up-line",
        padding: "0px 5px",
        value: "columnReverse",
      },
      { icon: "ri-close-line", value: "" },
    ],
  },
  {
    label: "Justify",
    key: "justify-content",
    control: Select,
    options: [
      { label: "Flex Start", value: "flex-start" },
      { label: "Flex End", value: "flex-end" },
      { label: "Center", value: "center" },
      { label: "Space Between", value: "space-between" },
      { label: "Space Around", value: "space-around" },
      { label: "Space Evenly", value: "space-evenly" },
    ],
  },
  {
    label: "Align",
    key: "align-items",
    control: Select,
    options: [
      { label: "Flex Start", value: "flex-start" },
      { label: "Flex End", value: "flex-end" },
      { label: "Center", value: "center" },
      { label: "Baseline", value: "baseline" },
      { label: "Stretch", value: "stretch" },
    ],
  },
  {
    label: "Wrap",
    key: "flex-wrap",
    control: Select,
    options: [
      { label: "Wrap", value: "wrap" },
      { label: "No wrap", value: "nowrap" },
    ],
  },
  {
    label: "Gap",
    key: "gap",
    control: Select,
    options: [
      { label: "None", value: "0px" },
      { label: "4px", value: "4px" },
      { label: "8px", value: "8px" },
      { label: "16px", value: "16px" },
      { label: "20px", value: "20px" },
      { label: "32px", value: "32px" },
      { label: "48px", value: "48px" },
      { label: "64px", value: "64px" },
    ],
  },
]

export const margin = {
  label: "Margin",
  columns: "1fr 1fr",
  settings: [
    {
      label: "Top",
      key: "margin-top",
      control: Select,
      bindable: false,
      placeholder: "None",
      options: [
        { label: "4px", value: "4px" },
        { label: "8px", value: "8px" },
        { label: "16px", value: "16px" },
        { label: "20px", value: "20px" },
        { label: "32px", value: "32px" },
        { label: "48px", value: "48px" },
        { label: "64px", value: "64px" },
        { label: "128px", value: "128px" },
        { label: "256px", value: "256px" },
        { label: "Auto", value: "auto" },
        { label: "100%", value: "100%" },
      ],
    },
    {
      label: "Right",
      key: "margin-right",
      control: Select,
      bindable: false,
      placeholder: "None",
      options: [
        { label: "4px", value: "4px" },
        { label: "8px", value: "8px" },
        { label: "16px", value: "16px" },
        { label: "20px", value: "20px" },
        { label: "32px", value: "32px" },
        { label: "48px", value: "48px" },
        { label: "64px", value: "64px" },
        { label: "128px", value: "128px" },
        { label: "256px", value: "256px" },
        { label: "Auto", value: "auto" },
        { label: "100%", value: "100%" },
      ],
    },
    {
      label: "Bottom",
      key: "margin-bottom",
      control: Select,
      bindable: false,
      placeholder: "None",
      options: [
        { label: "4px", value: "4px" },
        { label: "8px", value: "8px" },
        { label: "16px", value: "16px" },
        { label: "20px", value: "20px" },
        { label: "32px", value: "32px" },
        { label: "48px", value: "48px" },
        { label: "64px", value: "64px" },
        { label: "128px", value: "128px" },
        { label: "256px", value: "256px" },
        { label: "Auto", value: "auto" },
        { label: "100%", value: "100%" },
      ],
    },
    {
      label: "Left",
      key: "margin-left",
      control: Select,
      bindable: false,
      placeholder: "None",
      options: [
        { label: "4px", value: "4px" },
        { label: "8px", value: "8px" },
        { label: "16px", value: "16px" },
        { label: "20px", value: "20px" },
        { label: "32px", value: "32px" },
        { label: "48px", value: "48px" },
        { label: "64px", value: "64px" },
        { label: "128px", value: "128px" },
        { label: "256px", value: "256px" },
        { label: "Auto", value: "auto" },
        { label: "100%", value: "100%" },
      ],
    },
  ],
}

export const padding = {
  label: "Padding",
  columns: "1fr 1fr",
  settings: [
    {
      label: "Top",
      key: "padding-top",
      control: Select,
      bindable: false,
      placeholder: "None",
      options: [
        { label: "4px", value: "4px" },
        { label: "8px", value: "8px" },
        { label: "16px", value: "16px" },
        { label: "20px", value: "20px" },
        { label: "32px", value: "32px" },
        { label: "48px", value: "48px" },
        { label: "64px", value: "64px" },
        { label: "128px", value: "128px" },
        { label: "256px", value: "256px" },
        { label: "Auto", value: "auto" },
        { label: "100%", value: "100%" },
      ],
    },
    {
      label: "Right",
      key: "padding-right",
      control: Select,
      bindable: false,
      placeholder: "None",
      options: [
        { label: "4px", value: "4px" },
        { label: "8px", value: "8px" },
        { label: "16px", value: "16px" },
        { label: "20px", value: "20px" },
        { label: "32px", value: "32px" },
        { label: "48px", value: "48px" },
        { label: "64px", value: "64px" },
        { label: "128px", value: "128px" },
        { label: "256px", value: "256px" },
        { label: "Auto", value: "auto" },
        { label: "100%", value: "100%" },
      ],
    },
    {
      label: "Bottom",
      key: "padding-bottom",
      control: Select,
      bindable: false,
      placeholder: "None",
      options: [
        { label: "4px", value: "4px" },
        { label: "8px", value: "8px" },
        { label: "16px", value: "16px" },
        { label: "20px", value: "20px" },
        { label: "32px", value: "32px" },
        { label: "48px", value: "48px" },
        { label: "64px", value: "64px" },
        { label: "128px", value: "128px" },
        { label: "256px", value: "256px" },
        { label: "Auto", value: "auto" },
        { label: "100%", value: "100%" },
      ],
    },
    {
      label: "Left",
      key: "padding-left",
      control: Select,
      bindable: false,
      placeholder: "None",
      options: [
        { label: "4px", value: "4px" },
        { label: "8px", value: "8px" },
        { label: "16px", value: "16px" },
        { label: "20px", value: "20px" },
        { label: "32px", value: "32px" },
        { label: "48px", value: "48px" },
        { label: "64px", value: "64px" },
        { label: "128px", value: "128px" },
        { label: "256px", value: "256px" },
        { label: "Auto", value: "auto" },
        { label: "100%", value: "100%" },
      ],
    },
  ],
}

export const size = {
  label: "Size",
  columns: "1fr 1fr",
  settings: [
    {
      label: "Width",
      key: "width",
      control: Input,
      placeholder: "Auto",
    },
    {
      label: "Height",
      key: "height",
      control: Input,
      placeholder: "Auto",
    },
  ],
}

export const typography = [
  {
    label: "Font",
    key: "font-family",
    control: Select,
    options: [
      { label: "Arial", value: "Arial" },
      { label: "Arial Black", value: "Arial Black" },
      { label: "Cursive", value: "Cursive" },
      { label: "Courier", value: "Courier" },
      { label: "Comic Sans MS", value: "Comic Sans MS" },
      { label: "Helvetica", value: "Helvetica" },
      { label: "Helvetica Neue", value: "Helvetica Neue" },
      { label: "Impact", value: "Impact" },
      { label: "Inter", value: "Inter" },
      { label: "Lucida Sans Unicode", value: "Lucida Sans Unicode" },
      { label: "Source Sans Pro", value: "Source Sans Pro" },
      { label: "Times New Roman", value: "Times New Roman" },
      { label: "Verdana", value: "Verdana" },
    ],
    styleBindingProperty: "font-family",
  },
  {
    label: "Weight",
    key: "font-weight",
    control: Select,
    options: [
      { label: "200", value: "200" },
      { label: "300", value: "300" },
      { label: "400", value: "400" },
      { label: "500", value: "500" },
      { label: "600", value: "600" },
      { label: "700", value: "700" },
      { label: "800", value: "800" },
      { label: "900", value: "900" },
    ],
  },
  {
    label: "size",
    key: "font-size",
    control: Select,
    options: [
      { label: "8px", value: "8px" },
      { label: "10px", value: "10px" },
      { label: "12px", value: "12px" },
      { label: "14px", value: "14px" },
      { label: "16px", value: "16px" },
      { label: "18px", value: "18px" },
      { label: "20px", value: "20px" },
      { label: "24px", value: "24px" },
      { label: "32px", value: "32px" },
      { label: "48px", value: "48px" },
      { label: "60px", value: "60px" },
      { label: "72px", value: "72px" },
    ],
  },
  {
    label: "Line H",
    key: "line-height",
    control: Select,
    options: [
      { label: "1", value: "1" },
      { label: "1.25", value: "1.25" },
      { label: "1.5", value: "1.5" },
      { label: "1.75", value: "1.75" },
      { label: "2", value: "2" },
      { label: "4", value: "4" },
    ],
  },
  {
    label: "Color",
    key: "color",
    control: ColorPicker,
  },
  {
    label: "align",
    key: "text-align",
    control: FlatButtonGroup,
    buttonProps: [
      { icon: "ri-align-left", padding: "0px 5px", value: "left" },
      { icon: "ri-align-center", padding: "0px 5px", value: "center" },
      { icon: "ri-align-right", padding: "0px 5px", value: "right" },
      { icon: "ri-align-justify", padding: "0px 5px", value: "justify" },
      { icon: "ri-close-line", value: "" },
    ],
  },
  {
    label: "transform",
    key: "text-transform",
    control: FlatButtonGroup,
    buttonProps: [
      { text: "BB", value: "uppercase" },
      { text: "Bb", value: "capitalize" },
      { text: "bb", value: "lowercase" },
      { icon: "ri-close-line", value: "" },
    ],
  },
  {
    label: "Decoration",
    key: "text-decoration-line",
    control: Select,
    options: [
      { label: "Underline", value: "underline" },
      { label: "Overline", value: "overline" },
      { label: "Line-through", value: "line-through" },
      { label: "Under Over", value: "underline overline" },
    ],
  },
]

export const background = {
  label: "Background",
  inline: true,
  columns: "auto 1fr",
  settings: [
    {
      label: "Color",
      key: "background",
      control: ColorPicker,
    },
    {
      label: "Gradient",
      key: "background-image",
      control: Select,
      options: [
        {
          label: "Warm Flame",
          value:
            "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);",
        },
        {
          label: "Night Fade",
          value: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);",
        },
        {
          label: "Spring Warmth",
          value: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%);",
        },
        {
          label: "Sunny Morning",
          value: "linear-gradient(120deg, #f6d365 0%, #fda085 100%);",
        },
        {
          label: "Winter Neva",
          value: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);",
        },
        {
          label: "Tempting Azure",
          value: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);",
        },
        {
          label: "Heavy Rain",
          value: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);",
        },
        {
          label: "Deep Blue",
          value: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);",
        },
        {
          label: "Near Moon",
          value: "linear-gradient(to top, #5ee7df 0%, #b490ca 100%);",
        },
        {
          label: "Wild Apple",
          value: "linear-gradient(to top, #d299c2 0%, #fef9d7 100%);",
        },
        {
          label: "Plum Plate",
          value: "linear-gradient(135deg, #667eea 0%, #764ba2 100%);",
        },
        {
          label: "Peach Kiss",
          value:
            "radial-gradient(circle farthest-corner at 50% 100%,rgba(255,173,138,.50), rgba(255,248,247,1) 100%);",
        },
        {
          label: "Flamingo Sunrise",
          value:
            "-webkit-radial-gradient(center top, rgb(255, 250, 245), rgb(255, 242, 242))",
        },
        {
          label: "Budi Mist",
          value:
            "radial-gradient(circle, rgba(252,215,212,1) 0%, rgba(255,227,214,1) 50%, rgba(207,218,255,1) 100%);",
        },
        {
          label: "Ballet Slipper",
          value:
            "linear-gradient(135deg, rgba(252,215,212,1) 20%, rgba(207,218,255,1) 100%);",
        },
        {
          label: "Black Noir",
          value:
            "linear-gradient(312deg, rgba(60,60,60,1) 0%, rgba(42,42,42,1) 100%);",
        },
      ],
    },
  ],
}

export const border = {
  label: "Border",
  columns: "auto 1fr",
  settings: [
    {
      label: "Color",
      key: "border-color",
      control: ColorPicker,
    },
    {
      label: "Width",
      key: "border-width",
      control: Select,
      options: [
        { label: "Small", value: "1px" },
        { label: "Medium", value: "2px" },
        { label: "Large", value: "4px" },
      ],
    },
    {
      label: "Radius",
      key: "border-radius",
      control: Select,
      column: "1 / 3",
      options: [
        { label: "Small", value: "0.25rem" },
        { label: "Medium", value: "0.5rem" },
        { label: "Large", value: "1rem" },
        { label: "Round", value: "100%" },
      ],
    },
    {
      label: "Shadow",
      key: "box-shadow",
      control: Select,
      column: "1 / 3",
      options: [
        {
          label: "Small",
          value:
            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        },
        {
          label: "Medium",
          value:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        },
        {
          label: "Large",
          value:
            "0 8px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        },
      ],
    },
  ],
}

export const transitions = [
  {
    label: "Property",
    key: "transition-property",
    control: Select,
    options: [
      { label: "None", value: "none" },
      { label: "All", value: "all" },
      { label: "Background Color", value: "background color" },
      { label: "Color", value: "color" },
      { label: "Font Size", value: "font size" },
      { label: "Font Weight", value: "font weight" },
      { label: "Height", value: "height" },
      { label: "Margin", value: "margin" },
      { label: "Opacity", value: "opacity" },
      { label: "Padding", value: "padding" },
      { label: "Rotate", value: "rotate" },
      { label: "Shadow", value: "shadow" },
      { label: "Width", value: "width" },
    ],
  },
  {
    label: "Duration",
    key: "transition-duration",
    control: Select,
    placeholder: "sec",
    options: [
      { label: "0.4s", value: "0.4s" },
      { label: "0.6s", value: "0.6s" },
      { label: "0.8s", value: "0.8s" },
      { label: "1s", value: "1s" },
      { label: "2s", value: "2s" },
      { label: "4s", value: "4s" },
    ],
  },
  {
    label: "Ease",
    key: "transition-timing-function",
    control: Select,
    options: [
      { label: "Linear", value: "linear" },
      { label: "Ease", value: "ease" },
      { label: "Ease in", value: "ease-in" },
      { label: "Ease out", value: "ease-out" },
      { label: "Ease in out", value: "ease-in-out" },
    ],
  },
]

export const all = [margin]
