import { Mentions } from "@/src";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Mentions> = {
  component: Mentions,
  title: "Components/Data Entry/Mentions",
};

export default meta;
type Story = StoryObj<typeof Mentions>;

export const Default: Story = {
  args: {
    options: [
      "Aston Martin",
      "Bentley",
      "Bugatti",
      "Ferrari",
      "Lamborghini",
      "Maserati",
      "Rolls Royce",
    ],
    defaultValue: "@Bentley",
  },
};

export const Prefix: Story = {
  args: {
    options: ["React", "Angular", "Vue", "Svelte", "Solid"],
    prefix: "#",
    placeholder: "Type # to mention",
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    error: true,
  },
};

export const Readonly: Story = {
  args: {
    ...Default.args,
    readOnly: true,
  },
};

export const AllowClear: Story = {
  args: {
    ...Default.args,
    allowClear: true,
  },
};

export const DisabledOptions: Story = {
  args: {
    options: [
      { label: "United States", value: "us" },
      { label: "United Kingdom", value: "uk" },
      { label: "Canada", value: "ca" },
      { label: "Australia", value: "au", disabled: true },
      { label: "Germany", value: "de", disabled: true },
    ],
    placeholder: "Type @ to mention a country",
    onChange: action("onChange"),
    onSearch: action("onSearch"),
  },
};
