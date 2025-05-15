import type { Meta, StoryObj } from "@storybook/react";
import MultipleSelect from "@/src/multiple-select";

const meta: Meta<typeof MultipleSelect> = {
  component: MultipleSelect,
  title: "Components/Business/MultipleSelect",
};
export default meta;

type Story = StoryObj<typeof MultipleSelect>;

export const Default: Story = {
  args: {
    style: { width: 260 },
    placeholder: "Please select",
    options: [
      "Beijing",
      "Shanghai",
      "Guangzhou",
      "Shenzhen",
      "Chengdu",
      "Hangzhou",
      "Chongqing",
      "Suzhou",
      "Wuhan",
      "Xi'an",
      "Nanjing",
      "Changsha",
      "Tianjin",
      "Zhengzhou",
      "Dongwan",
      "Wuxi",
      "Ningbo",
      "Qingdao",
      "Hefei",
    ],
  },
};
