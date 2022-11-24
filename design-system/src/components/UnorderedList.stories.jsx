import UnorderedList from "./UnorderedList";
import { Box, Stack } from "@mui/material";

export default {
  title: "Molecules/Unordered List",
};

export const _UnorderedList = ({
  color,
  checkedItems,
  successItems,
  item1Content,
  item2Content,
  item3Content,
  item4Content,
}) => (
  <UnorderedList color={color}>
    <UnorderedList.Item
      checked={checkedItems.includes(1)}
      success={successItems.includes(1)}
    >
      {item1Content || "Item 1"}
    </UnorderedList.Item>
    <UnorderedList.Item
      checked={checkedItems.includes(2)}
      success={successItems.includes(2)}
    >
      {item2Content || "Item 2"}
    </UnorderedList.Item>
    <UnorderedList.Item
      checked={checkedItems.includes(3)}
      success={successItems.includes(3)}
    >
      {item3Content || "Item 3"}
    </UnorderedList.Item>
    <UnorderedList.Item
      checked={checkedItems.includes(4)}
      success={successItems.includes(4)}
    >
      {item4Content || "Item 4"}
    </UnorderedList.Item>
  </UnorderedList>
);
_UnorderedList.argTypes = {
  color: {
    control: "select",
    type: { required: true },
    options: [
      "inherit",
      "textPrimary",
      "textSecondary",
      "primary",
      "secondary",
      "info.main",
      "error.main",
    ],
  },
};
_UnorderedList.args = {
  item1Content: "",
  item2Content: "",
  item3Content: "",
  item4Content: "",
  checkedItems: [3, 4],
  successItems: [2, 3],
  color: ["inherit"],
};

export const AllUncheckedWidth = () => (
  <Stack gap={2}>
    <Box>
      <UnorderedList>
        <UnorderedList.Item checked>Item 1</UnorderedList.Item>
        <UnorderedList.Item checked>Item 2</UnorderedList.Item>
      </UnorderedList>
    </Box>
    <Box>
      <UnorderedList>
        <UnorderedList.Item>Item 1</UnorderedList.Item>
        <UnorderedList.Item>Item 2</UnorderedList.Item>
      </UnorderedList>
    </Box>
  </Stack>
);
