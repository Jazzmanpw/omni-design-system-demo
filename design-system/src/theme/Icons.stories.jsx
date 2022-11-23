import {
  Check,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import { withGrid } from "../utils/decorators";
import { Box } from "@mui/material";

const iconsMap = {
  Visibility: VisibilityOutlined,
  "Visibility off": VisibilityOffOutlined,
  Check: Check,
};

const iconLabels = Object.keys(iconsMap).sort();

const colors = [
  "default",
  "inherit",
  "action",
  "disabled",
  "primary",
  "secondary",
  "error",
  "info",
  "success",
  "warning",
];

const fontSizes = ["inherit", "small", "medium", "large"];

export default {
  title: "Atoms/Icons",
  argTypes: {
    icon: {
      type: { required: true },
      control: "select",
      options: iconLabels,
      mapping: iconsMap,
      description: "Icon to display",
    },
    color: {
      control: "select",
      description: "Colors that the icon can take from the theme",
      options: colors,
      mapping: { default: undefined },
    },
    fontSize: {
      control: "inline-radio",
      description: "Font size that controls the size of an icon",
      options: fontSizes,
    },
  },
  args: { icon: iconLabels[0], color: colors[0], fontSize: "inherit" },
};

export const Icon = ({ icon: Component, color, fontSize }) => (
  <Component color={color} fontSize={fontSize} />
);

export const Icons = ({ color, fontSize }) => (
  <>
    {iconLabels.map((label) => {
      const Component = iconsMap[label];
      return (
        <Box
          key={label}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Component color={color} fontSize={fontSize} />
          {label}
        </Box>
      );
    })}
  </>
);
Icons.argTypes = { icon: { table: { disable: true } } };
Icons.decorators = [withGrid(10)];

export const Colors = ({ icon: Component, fontSize }) => (
  <>
    {Component ? (
      colors.map((color) => {
        console.log(color);
        return (
          <Box
            key={color}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Component color={color} fontSize={fontSize} />
            {color}
          </Box>
        );
      })
    ) : (
      <p>Choose an icon first</p>
    )}
  </>
);
Colors.argTypes = { color: { table: { disable: true } } };
Colors.decorators = [withGrid(10)];

export const Sizes = ({ icon: Component, color, containerFontSize }) => {
  console.log(Component);
  return (
    <>
      {fontSizes.map((fontSize) => (
        <Box
          key={fontSize}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: containerFontSize,
          }}
        >
          <Component color={color} fontSize={fontSize} />
          {fontSize}
        </Box>
      ))}
    </>
  );
};
Sizes.argTypes = {
  fontSize: { table: { disable: true } },
  containerFontSize: {
    control: { type: "range", min: 12, max: 104, step: 2 },
    name: "container font size",
    description:
      'Font size for the wrapper to change the size of an icon with "size: inherit"',
  },
};
Sizes.args = { containerFontSize: 16 };
Sizes.decorators = [withGrid(5, "150px")];
