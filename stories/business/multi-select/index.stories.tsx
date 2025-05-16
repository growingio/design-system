import type { Meta, StoryObj } from "@storybook/react";
import MultipleSelect from "@/src/multiple-select";

const meta: Meta<typeof MultipleSelect> = {
  component: MultipleSelect,
  title: "Components/Business/MultipleSelect",
  tags: ["beta"],
};
export default meta;

type Story = StoryObj<typeof MultipleSelect>;

export const Default: Story = {
  args: {
    style: { width: 260 },
    placeholder: "Please select",
    options: [
      { label: "Beijing", value: "beijing" },
      { label: "Shanghai", value: "shanghai" },
      { label: "Guangzhou", value: "guangzhou" },
      { label: "Shenzhen", value: "shenzhen" },
      { label: "Chengdu", value: "chengdu" },
      { label: "Hangzhou", value: "hangzhou" },
      { label: "Chongqing", value: "chongqing" },
      { label: "Suzhou", value: "suzhou" },
      { label: "Wuhan", value: "wuhan" },
      { label: "Xi'an", value: "xi'an" },
      { label: "Nanjing", value: "nanjing" },
      { label: "Changsha", value: "changsha" },
      { label: "Tianjin", value: "tianjin" },
      { label: "Zhengzhou", value: "zhengzhou" },
      { label: "Dongwan", value: "dongwan" },
      { label: "Wuxi", value: "wuxi" },
      { label: "Ningbo", value: "ningbo" },
      { label: "Qingdao", value: "qingdao" },
      { label: "Hefei", value: "hefei" },
    ],
  },
};
