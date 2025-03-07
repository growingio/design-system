import { Collapse, Divider } from "@/src";
import { IconMoreVertical } from "@arco-iconbox/react-growingio/src";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Collapse> = {
  component: Collapse,
  title: "Components/Data Display/Collapse",
};

export default meta;
type Story = StoryObj<typeof Collapse>;
const { Item: CollapseItem } = Collapse;

export const Default: Story = {
  args: {
    defaultActiveKey: ["1", "2"],
    style: { width: 600, maxWidth: 800 },
  },
  render: (args) => (
    <Collapse {...args}>
      <CollapseItem header="GrowingIO" name="1">
        Beijing Yishu Technology Co., Ltd.
        <Divider style={{ margin: "8px 0" }} />
        Growing Business from Insight to Outcome
        <Divider style={{ margin: "8px 0" }} />
        Help your business become more data-driven to achieve better growth
      </CollapseItem>

      <CollapseItem header="Company Profile" name="2">
        GrowingIO has an excellent technical research and development and professional consulting
        team in the industry, most of the members are from LinkedIn, eBay and other well-known
        Internet companies at home and abroad, with strong professional backgrounds in business
        analysis, data products, machine learning, advanced data analysis technology and rich
        practical experience, guided by customer needs, using leading big data research methods, to
        help customers achieve cost-effective digital growth services.
      </CollapseItem>

      <CollapseItem header="StartDT" name="3">
        StartDT Singularity Cloud Group has two major brands: Singularity Cloud and GrowingIO. In
        2022, Singularity Cloud and GrowingIO merged and reorganized, and GrowingIO (Beijing Yishu
        Technology Co., Ltd.) officially became a holding subsidiary of Singularity Cloud (Hangzhou
        Bizhi Technology Co., Ltd.).
      </CollapseItem>
    </Collapse>
  ),
};

export const Accordion: Story = {
  ...Default,
  args: {
    accordion: true,
    style: { width: 600, maxWidth: 800 },
  },
};

export const Borderless: Story = {
  ...Default,
  args: {
    ...Default.args,
    bordered: false,
  },
};

export const ExpandPosition: Story = {
  ...Default,
  args: {
    ...Default.args,
    expandIconPosition: "right",
  },
};

export const LazyLoad: Story = {
  ...Default,
  args: {
    ...Default.args,
    lazyload: true,
  },
};

export const DestoryOnHide: Story = {
  ...Default,
  args: {
    ...Default.args,
    destroyOnHide: true,
  },
};

export const TriggerRegion: Story = {
  ...Default,
  args: {
    ...Default.args,
    triggerRegion: "icon",
  },
};

export const Extra: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Collapse {...args}>
      <CollapseItem header="GrowingIO" name="1" extra={<IconMoreVertical />}>
        Beijing Yishu Technology Co., Ltd.
        <Divider style={{ margin: "8px 0" }} />
        Growing Business from Insight to Outcome
        <Divider style={{ margin: "8px 0" }} />
        Help your business become more data-driven to achieve better growth
      </CollapseItem>

      <CollapseItem header="Company Profile" name="2" extra={<IconMoreVertical />}>
        GrowingIO has an excellent technical research and development and professional consulting
        team in the industry, most of the members are from LinkedIn, eBay and other well-known
        Internet companies at home and abroad, with strong professional backgrounds in business
        analysis, data products, machine learning, advanced data analysis technology and rich
        practical experience, guided by customer needs, using leading big data research methods, to
        help customers achieve cost-effective digital growth services.
      </CollapseItem>

      <CollapseItem header="StartDT" name="3" extra={<IconMoreVertical />}>
        StartDT Singularity Cloud Group has two major brands: Singularity Cloud and GrowingIO. In
        2022, Singularity Cloud and GrowingIO merged and reorganized, and GrowingIO (Beijing Yishu
        Technology Co., Ltd.) officially became a holding subsidiary of Singularity Cloud (Hangzhou
        Bizhi Technology Co., Ltd.).
      </CollapseItem>
    </Collapse>
  ),
};
