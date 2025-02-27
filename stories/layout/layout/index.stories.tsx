import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Layout, Breadcrumb, Menu, Button } from "../../../src";
import "./index.css";
import {
  IconCaretLeft,
  IconCaretRight,
  IconHome,
  IconCalendar,
  IconMenuUnfold,
  IconMenuFold,
} from "@arco-iconbox/react-growingio/src";

const meta: Meta<typeof Layout> = {
  component: Layout,
  title: "Components/Layout/Layout",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

const { Header, Footer, Content, Sider } = Layout;
const { Item: MenuItem, SubMenu } = Menu;

export const Classic: Story = {
  render: () => (
    <div className="layout-basic-demo">
      <Layout style={{ height: "400px" }}>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
      <br />
      <Layout style={{ height: "400px" }}>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
      <br />
      <Layout style={{ height: "400px" }}>
        <Header>Header</Header>
        <Layout>
          <Content>Content</Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
      <br />
      <Layout style={{ height: "400px" }}>
        <Header>Header</Header>
        <Layout>
          <Sider style={{ width: "64px" }}>Sider</Sider>
          <Sider style={{ width: "206px", marginLeft: "1px" }}>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  ),
};

export const SiderTrigger: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout className="layout-collapse-demo">
        <Sider
          collapsed={collapsed}
          onCollapse={setCollapsed}
          collapsible
          trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />}
          breakpoint="xl"
        >
          <div className="logo" />
          <Menu defaultOpenKeys={["1"]} defaultSelectedKeys={["0_3"]} style={{ width: "100%" }}>
            <MenuItem key="0_1" disabled>
              <IconHome />
              Menu 1
            </MenuItem>
            <MenuItem key="0_2">
              <IconCalendar />
              Menu 2
            </MenuItem>
            <MenuItem key="0_3">
              <IconCalendar />
              Menu 3
            </MenuItem>
            <SubMenu
              key="1"
              title={
                <span>
                  <IconCalendar />
                  Navigation 1
                </span>
              }
            >
              <MenuItem key="1_1">Menu 1</MenuItem>
              <MenuItem key="1_2">Menu 2</MenuItem>
              <SubMenu key="2" title="Navigation 2">
                <MenuItem key="2_1">Menu 1</MenuItem>
                <MenuItem key="2_2">Menu 2</MenuItem>
              </SubMenu>
              <SubMenu key="3" title="Navigation 3">
                <MenuItem key="3_1">Menu 1</MenuItem>
                <MenuItem key="3_2">Menu 2</MenuItem>
                <MenuItem key="3_3">Menu 3</MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="4"
              title={
                <span>
                  <IconCalendar />
                  Navigation 4
                </span>
              }
            >
              <MenuItem key="4_1">Menu 1</MenuItem>
              <MenuItem key="4_2">Menu 2</MenuItem>
              <MenuItem key="4_3">Menu 3</MenuItem>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ paddingLeft: 20 }}>Header</Header>
          <Layout style={{ padding: "0 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  },
};

export const CustomTrigger: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
      <Layout className="layout-collapse-demo">
        <Sider collapsed={collapsed} collapsible trigger={null} breakpoint="xl">
          <div className="logo" />
          <Menu defaultOpenKeys={["1"]} defaultSelectedKeys={["0_3"]} style={{ width: "100%" }}>
            <MenuItem key="0_1" disabled>
              <IconHome />
              Menu 1
            </MenuItem>
            <MenuItem key="0_2">
              <IconCalendar />
              Menu 2
            </MenuItem>
            <MenuItem key="0_3">
              <IconCalendar />
              Menu 3
            </MenuItem>
            <SubMenu
              key="1"
              title={
                <span>
                  <IconCalendar />
                  Navigation 1
                </span>
              }
            >
              <MenuItem key="1_1">Menu 1</MenuItem>
              <MenuItem key="1_2">Menu 2</MenuItem>
              <SubMenu key="2" title="Navigation 2">
                <MenuItem key="2_1">Menu 1</MenuItem>
                <MenuItem key="2_2">Menu 2</MenuItem>
              </SubMenu>
              <SubMenu key="3" title="Navigation 3">
                <MenuItem key="3_1">Menu 1</MenuItem>
                <MenuItem key="3_2">Menu 2</MenuItem>
                <MenuItem key="3_3">Menu 3</MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="4"
              title={
                <span>
                  <IconCalendar />
                  Navigation 4
                </span>
              }
            >
              <MenuItem key="4_1">Menu 1</MenuItem>
              <MenuItem key="4_2">Menu 2</MenuItem>
              <MenuItem key="4_3">Menu 3</MenuItem>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ paddingLeft: 20 }}>
            <Button shape="round" onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? <IconMenuUnfold /> : <IconMenuFold />}
            </Button>
          </Header>
          <Layout style={{ padding: "0 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  },
};

export const ResizeBox: Story = {
  render: () => {
    const collapsedWidth = 60;
    const [collapsed, setCollapsed] = useState(false);
    const [siderWidth, setSiderWidth] = useState(200);
    return (
      <Layout className="layout-collapse-demo">
        <Sider
          collapsed={collapsed}
          onCollapse={setCollapsed}
          collapsible
          width={siderWidth}
          resizeBoxProps={{
            directions: ["right"],
            onMoving: (_, { width }) => {
              if (width > collapsedWidth) {
                setSiderWidth(width);
                setCollapsed(!(width > collapsedWidth + 20));
              } else {
                setSiderWidth(collapsedWidth);
                setCollapsed(true);
              }
            },
          }}
        >
          <div className="logo" />
          <Menu defaultOpenKeys={["1"]} defaultSelectedKeys={["0_3"]} style={{ width: "100%" }}>
            <MenuItem key="0_1" disabled>
              <IconHome />
              Menu 1
            </MenuItem>
            <MenuItem key="0_2">
              <IconCalendar />
              Menu 2
            </MenuItem>
            <MenuItem key="0_3">
              <IconCalendar />
              Menu 3
            </MenuItem>
            <SubMenu
              key="1"
              title={
                <span>
                  <IconCalendar />
                  Navigation 1
                </span>
              }
            >
              <MenuItem key="1_1">Menu 1</MenuItem>
              <MenuItem key="1_2">Menu 2</MenuItem>
              <SubMenu key="2" title="Navigation 2">
                <MenuItem key="2_1">Menu 1</MenuItem>
                <MenuItem key="2_2">Menu 2</MenuItem>
              </SubMenu>
              <SubMenu key="3" title="Navigation 3">
                <MenuItem key="3_1">Menu 1</MenuItem>
                <MenuItem key="3_2">Menu 2</MenuItem>
                <MenuItem key="3_3">Menu 3</MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="4"
              title={
                <span>
                  <IconCalendar />
                  Navigation 4
                </span>
              }
            >
              <MenuItem key="4_1">Menu 1</MenuItem>
              <MenuItem key="4_2">Menu 2</MenuItem>
              <MenuItem key="4_3">Menu 3</MenuItem>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  },
};
