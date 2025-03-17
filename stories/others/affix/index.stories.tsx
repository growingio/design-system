import { Affix, AffixProps, Button, Message } from "@/src";
import type { Meta, StoryObj } from "@storybook/react";
import "./index.css";
import BrowserWindow from "@/components/browser-window";

const meta: Meta<typeof Affix> = {
  component: Affix,
  title: "Components/Others/Affix",
  parameters: {
    layout: null,
  },
};

export default meta;
type Story = StoryObj<AffixProps & { id?: string }>;

export const Default: Story = {
  args: {
    id: "affix-default-container",
  },
  render: (args) => (
    <BrowserWindow bodyStyle={{ position: "relative" }}>
      <div id={`${args.id}-wraper`} className="demo-affix-container">
        <div style={{ height: 400, padding: "80px 0", position: "relative" }}>
          <Affix {...args}>
            <Button type="primary">Affix</Button>
          </Affix>
        </div>
      </div>
    </BrowserWindow>
  ),
};

export const OffsetTop: Story = {
  ...Default,
  args: {
    id: "affix-offset-top-container",
    offsetTop: 60,
  },
};

export const OffsetBottom: Story = {
  ...Default,
  args: {
    id: "affix-offset-bottom-container",
    offsetBottom: 120,
  },
};

export const Callback: Story = {
  ...Default,
  args: {
    id: "affix-callback-container",
    offsetTop: 60,
    onChange: (fixed: boolean) => {
      Message.info({
        content: `${fixed}`,
        showIcon: true,
      });
    },
  },
};
