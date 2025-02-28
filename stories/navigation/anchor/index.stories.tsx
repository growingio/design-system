import type { Meta, StoryObj } from "@storybook/react";
import { Anchor, Space } from "@/src";

const meta: Meta<typeof Anchor> = {
  component: Anchor,
  title: "Components/Navigation/Anchor",
  parameters: {
    layout: null,
  },
};

export default meta;
type Story = StoryObj<typeof Anchor>;

const { Link: AnchorLink } = Anchor;

export const Basic: Story = {
  args: {
    offsetTop: 10,
  },
  render: (args) => (
    <Anchor {...args}>
      <AnchorLink href="#Basic" title="Basic">
        <AnchorLink href="#Static" title="Static">
          <AnchorLink href="#Lineless-mode" title="Lineless mode" />
          <AnchorLink href="#Affix" title="Affix" />
        </AnchorLink>
      </AnchorLink>
      <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
      <AnchorLink href="#Hash-mode" title="Hash mode" />
    </Anchor>
  ),
};

export const Affix: Story = {
  args: {
    affix: false,
  },
  render: (args) => (
    <Anchor {...args}>
      <AnchorLink href="#Basic" title="Basic" />
      <AnchorLink href="#Static" title="Static" />
      <AnchorLink href="#Lineless-mode" title="Lineless mode" />
      <AnchorLink href="#Affix" title="Affix" />
      <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
      <AnchorLink href="#Hash-mode" title="Hash mode" />
    </Anchor>
  ),
};

export const Lineless: Story = {
  ...Affix,
  args: {
    affix: false,
    lineless: true,
  },
};

export const Boundary: Story = {
  ...Affix,
  args: {
    affix: false,
    boundary: "center",
  },
};

export const Hash: Story = {
  ...Affix,
  args: {
    affix: false,
    hash: false,
  },
};

export const Horizontal: Story = {
  args: {
    affix: false,
    direction: "horizontal",
  },
  render: (args) => (
    <Space direction="vertical" size={"large"}>
      <Anchor {...args}>
        <AnchorLink href="#Basic" title="Basic" />
        <AnchorLink href="#Static" title="Static" />
        <AnchorLink href="#Lineless-mode" title="Lineless mode" />
        <AnchorLink href="#Affix" title="Affix" />
        <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
        <AnchorLink href="#Hash-mode" title="Hash mode" />
      </Anchor>
      <Anchor {...args} lineless>
        <AnchorLink href="#Basic" title="Basic" />
        <AnchorLink href="#Static" title="Static" />
        <AnchorLink href="#Lineless-mode" title="Lineless mode" />
        <AnchorLink href="#Affix" title="Affix" />
        <AnchorLink href="#Scroll-boundary" title="Scroll boundary" />
        <AnchorLink href="#Hash-mode" title="Hash mode" />
      </Anchor>
    </Space>
  ),
};
