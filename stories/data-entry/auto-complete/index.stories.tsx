import { AutoComplete, Input, Tooltip } from "@/src";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof AutoComplete> = {
  component: AutoComplete,
  title: "Components/Data Entry/AutoComplete",
};

export default meta;
type Story = StoryObj<typeof AutoComplete>;

const data = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Ivy gourd",
  "Jackfruit",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tomato",
];
export const Default: Story = {
  args: {
    placeholder: "Please Enter",
    style: { width: 200 },
    data,
  },
  render: (args) => <AutoComplete {...args} />,
};

const { TextArea } = Input;
export const TriggerElement: Story = {
  ...Default,
  args: {
    ...Default.args,
    triggerElement: <TextArea />,
  },
};

export const Strict: Story = {
  ...Default,
  args: {
    ...Default.args,
    strict: true,
  },
};

export const FilterOption: Story = {
  ...Default,
  args: {
    ...Default.args,
    filterOption: (inputValue, option: { props: any }) =>
      option?.props.value?.startsWith(inputValue),
  },
};

const fruitEmojiMap: Record<string, string> = {
  Apple: "🍎",
  Banana: "🍌",
  Cherry: "🍒",
  Date: "🌴",
  Elderberry: "🍇",
  Fig: "🥝",
  Grape: "🍇",
  Honeydew: "🍈",
  "Ivy gourd": "🥒",
  Jackfruit: "🍈",
  Kiwi: "🥝",
  Lemon: "🍋",
  Mango: "🥭",
  Nectarine: "🍑",
  Orange: "🍊",
  Papaya: "🥭",
  Quince: "🍐",
  Raspberry: "🍓",
  Strawberry: "🍓",
  Tomato: "🍅",
};
export const Complex: Story = {
  render: () => {
    const [value, setValue] = useState<string>("");
    const [options, setOptions] = useState<any[]>([]);

    const handleSearch = (searchValue: string) => {
      if (searchValue) {
        const filteredOptions = data.filter((item) =>
          item.toLowerCase().includes(searchValue.toLowerCase()),
        );
        setOptions(filteredOptions);
      } else {
        setOptions([]);
      }
    };

    const handleChange = (newValue: string) => {
      if (Object.hasOwn(fruitEmojiMap, newValue)) {
        setValue(fruitEmojiMap[newValue]);
      } else {
        setValue(newValue);
      }
    };

    return (
      <Tooltip trigger={"focus"} content="When select fruit, it will be replaced with its emoji.">
        <AutoComplete
          value={value}
          data={options}
          style={{ width: 300 }}
          placeholder="Search fruits..."
          onChange={handleChange}
          onSearch={handleSearch}
          filterOption={false}
        />
      </Tooltip>
    );
  },
};
