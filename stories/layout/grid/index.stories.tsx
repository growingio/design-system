import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Divider, Grid, Typography, Switch } from "../../../src";
import "./index.css";

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: "Components/Layout/Grid",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const { Row, Col, GridItem } = Grid;

export const Basic: Story = {
  render: () => (
    <div className="grid-demo-background">
      <Row className="grid-demo">
        <Col span={24}>
          <div>24 - 100%</div>
        </Col>
      </Row>
      <Row className="grid-demo">
        <Col span={12}>
          <div>12 - 50%</div>
        </Col>
        <Col span={12}>
          <div>12 - 50%</div>
        </Col>
      </Row>
      <Row className="grid-demo">
        <Col span={8}>
          <div>8 - 33.33%</div>
        </Col>
        <Col span={8}>
          <div>8 - 33.33%</div>
        </Col>
        <Col span={8}>
          <div>8 - 33.33%</div>
        </Col>
      </Row>
      <Row className="grid-demo">
        <Col span={6}>
          <div>6 - 25%</div>
        </Col>
        <Col span={6}>
          <div>6 - 25%</div>
        </Col>
        <Col span={6}>
          <div>6 - 25%</div>
        </Col>
        <Col span={6}>
          <div>6 - 25%</div>
        </Col>
      </Row>
      <Row className="grid-demo">
        <Col span={4}>
          <div>4 - 16.66%</div>
        </Col>
        <Col span={4}>
          <div>4 - 16.66%</div>
        </Col>
        <Col span={4}>
          <div>4 - 16.66%</div>
        </Col>
        <Col span={4}>
          <div>4 - 16.66%</div>
        </Col>
        <Col span={4}>
          <div>4 - 16.66%</div>
        </Col>
        <Col span={4}>
          <div>4 - 16.66%</div>
        </Col>
      </Row>
    </div>
  ),
};

export const Offset: Story = {
  render: () => (
    <div className="grid-demo-background">
      <Row className="grid-demo">
        <Col span={8}>col-8</Col>
        <Col span={8} offset={8}>
          col-8 | offset-8
        </Col>
      </Row>
      <Row className="grid-demo">
        <Col span={6} offset={8}>
          col-6 | offset-8
        </Col>
        <Col span={6} offset={4}>
          col-6 | offset-4
        </Col>
      </Row>
      <Row className="grid-demo" style={{}}>
        <Col span={12} offset={8}>
          col-12 | offset-8
        </Col>
      </Row>
    </div>
  ),
};

export const PullPush: Story = {
  render: () => (
    <Row className="grid-demo">
      <Col span={8} push={16}>
        col-8 push-16
      </Col>
      <Col span={16} pull={8}>
        col-16 pull-8
      </Col>
    </Row>
  ),
};

export const Gutter: Story = {
  render: () => (
    <div>
      <Divider>Horizontal</Divider>
      <Row className="row-demo" gutter={16}>
        <Col span={12}>
          <div>col-12</div>
        </Col>
        <Col span={12}>
          <div>col-12</div>
        </Col>
      </Row>
      <Divider>Responsive</Divider>
      <Row className="row-demo" gutter={{ xs: 8, sm: 12, md: 16, lg: 20, xl: 24 }}>
        <Col span={12}>
          <div>col-12</div>
        </Col>
        <Col span={12}>
          <div>col-12</div>
        </Col>
      </Row>
      <Divider>Horizontal & Vertical</Divider>
      <Row className="row-demo" gutter={[16, 16]}>
        <Col span={12}>
          <div>col-12</div>
        </Col>
        <Col span={12}>
          <div>col-12</div>
        </Col>
        <Col span={12}>
          <div>col-12</div>
        </Col>
        <Col span={12}>
          <div>col-12</div>
        </Col>
      </Row>
    </div>
  ),
};

export const Justify: Story = {
  render: () => (
    <div>
      <Divider>Start</Divider>
      <Row className="row-demo" justify="start">
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
      </Row>
      <Divider>Center</Divider>
      <Row className="row-demo" justify="center">
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
      </Row>
      <Divider>End</Divider>
      <Row className="row-demo" justify="end">
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
      </Row>
      <Divider>Space Between</Divider>
      <Row className="row-demo" justify="space-between">
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
      </Row>
      <Divider>Space Around</Divider>
      <Row className="row-demo" justify="space-around">
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
        <Col span={4}>
          <div>col-4</div>
        </Col>
      </Row>
    </div>
  ),
};

export const Align: Story = {
  render: () => (
    <div>
      <Divider>Start</Divider>
      <Row className="grid-demo" align="start">
        <Col span={6} style={{ height: 90, lineHeight: "90px" }}>
          col-6
        </Col>
        <Col span={6} style={{ height: 48, lineHeight: "48px" }}>
          col-6
        </Col>
        <Col span={6} style={{ height: 120, lineHeight: "120px" }}>
          col-6
        </Col>
        <Col span={6} style={{ height: 60, lineHeight: "60px" }}>
          col-6
        </Col>
      </Row>
      <Divider>Center</Divider>
      <Row className="grid-demo" align="center">
        <Col span={6} style={{ height: 90, lineHeight: "90px" }}>
          col-6
        </Col>
        <Col span={6} style={{ height: 48, lineHeight: "48px" }}>
          col-6
        </Col>
        <Col span={6} style={{ height: 120, lineHeight: "120px" }}>
          col-6
        </Col>
        <Col span={6} style={{ height: 60, lineHeight: "60px" }}>
          col-6
        </Col>
      </Row>
      <Divider>End</Divider>
      <Row className="grid-demo" align="end">
        <Col span={6} style={{ height: 90, lineHeight: "90px" }}>
          col-6
        </Col>
        <Col span={6} style={{ height: 48, lineHeight: "48px" }}>
          col-6
        </Col>
        <Col span={6} style={{ height: 120, lineHeight: "120px" }}>
          col-6
        </Col>
        <Col span={6} style={{ height: 60, lineHeight: "60px" }}>
          col-6
        </Col>
      </Row>
    </div>
  ),
};

export const Order: Story = {
  render: () => (
    <Row className="grid-demo">
      <Col span={6} order={4}>
        1 col-order-4
      </Col>
      <Col span={6} order={3}>
        2 col-order-3
      </Col>
      <Col span={6} order={2}>
        3 col-order-2
      </Col>
      <Col span={6} order={1}>
        4 col-order-1
      </Col>
    </Row>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Row className="grid-demo">
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        col
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        col
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        col
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        col
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        col
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        col
      </Col>
    </Row>
  ),
};

export const Flex: Story = {
  render: () => (
    <>
      <Row className="grid-demo">
        <Col flex="100px">
          <div>100px</div>
        </Col>
        <Col flex="auto">
          <div>auto</div>
        </Col>
      </Row>
      <Row className="grid-demo">
        <Col flex="100px">
          <div>100px</div>
        </Col>
        <Col flex="auto">
          <div>auto</div>
        </Col>
        <Col flex="100px">
          <div>100px</div>
        </Col>
      </Row>
      <Row className="grid-demo">
        <Col flex={3}>
          <div>3 / 12</div>
        </Col>
        <Col flex={4}>
          <div>4 / 12</div>
        </Col>
        <Col flex={5}>
          <div>5 / 12</div>
        </Col>
      </Row>
    </>
  ),
};

export const CollapsedGrid: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <div style={{ width: "100%" }}>
        <div style={{ marginBottom: "20px" }}>
          <Typography.Text>Collapsed: </Typography.Text>
          <Switch checked={collapsed} onChange={setCollapsed} />
        </div>
        <Grid collapsed={collapsed} cols={3} colGap={12} rowGap={16} className="grid-demo-grid">
          <GridItem className="demo-item">item</GridItem>
          <GridItem className="demo-item">item</GridItem>
          <GridItem className="demo-item">item</GridItem>
          <GridItem className="demo-item" offset={1}>
            item | offset - 1
          </GridItem>
          <GridItem className="demo-item">item</GridItem>
          <GridItem className="demo-item" span={3}>
            item | span - 3
          </GridItem>
          <GridItem className="demo-item">item</GridItem>
          <GridItem className="demo-item">item</GridItem>
          <GridItem className="demo-item" suffix>
            {({ overflow }) => `suffix | overflow: ${!!overflow}`}
          </GridItem>
        </Grid>
      </div>
    );
  },
};
