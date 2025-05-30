import { PageHeader, Space, Button, Divider, Typography } from "@/src";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { defaultArticle } from "../../general/typography/index.stories";
import "./index.css";

const meta: Meta<typeof PageHeader> = {
  component: PageHeader,
  title: "Components/Navigation/PageHeader",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Transparent: Story = {
  args: {
    title: "GrowingIO Design",
    subTitle: "This is a description",
    extra: (
      <Space>
        <Button type="secondary">Cancel</Button>
        <Button type="primary">Save</Button>
      </Space>
    ),
  },
  render: (args) => (
    <div className="page-header-default">
      <PageHeader {...args} />
    </div>
  ),
};

export const All: Story = {
  args: {
    ...Transparent.args,
    backIcon: true,
    breadcrumb: {
      routes: [
        { breadcrumbName: "Home", path: "/" },
        { breadcrumbName: "Components", path: "/components" },
        { breadcrumbName: "Navigation", path: "/components/navigation" },
        { breadcrumbName: "PageHeader", path: "/components/navigation/page-header" },
      ],
    },
    footer: (
      <>
        <Divider />
        <Typography.Paragraph type="secondary">This is a footer</Typography.Paragraph>
      </>
    ),
  },
  render: (args) => (
    <div className="page-header-all">
      <PageHeader {...args}>{defaultArticle()}</PageHeader>
    </div>
  ),
};
