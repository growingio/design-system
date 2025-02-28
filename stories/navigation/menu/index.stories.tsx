import { Button, Menu, Trigger } from "@/src";
import {
  IconApps,
  IconBook,
  IconBug,
  IconBulb,
  IconFire,
  IconMenuFold,
  IconMenuUnfold,
  IconMessage,
  IconRobot,
  IconSafe,
} from "@arco-iconbox/react-growingio/src";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import "./index.css";

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: "Components/Navigation/Menu",
  parameters: {
    layout: null,
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

const { Item: MenuItem, SubMenu } = Menu;

export const NavMenu: Story = {
  args: {
    mode: "horizontal",
    defaultSelectedKeys: ["1"],
  },
  render: (args) => (
    <div className="menu-demo">
      <Menu {...args}>
        <MenuItem key="0" disabled>
          <div className="logo-item" />
        </MenuItem>
        <MenuItem key="1">Home</MenuItem>
        <MenuItem key="2">Solution</MenuItem>
        <MenuItem key="3">Cloud Service</MenuItem>
        <MenuItem key="4">Cooperation</MenuItem>
      </Menu>
    </div>
  ),
};

export const Dark: Story = {
  ...NavMenu,
  args: {
    ...NavMenu.args,
    theme: "dark",
  },
};

export const Collapse: Story = {
  render: () => {
    const [collapse, setCollapse] = useState(false);
    return (
      <div className="menu-demo">
        <Button
          style={{
            padding: "0 12px",
            height: 30,
            lineHeight: "30px",
            marginBottom: 4,
          }}
          type="primary"
          onClick={() => setCollapse(!collapse)}
        >
          {collapse ? <IconMenuUnfold /> : <IconMenuFold />}
        </Button>
        <Menu
          style={{ width: 200, borderRadius: 4 }}
          collapse={collapse}
          defaultOpenKeys={["0"]}
          defaultSelectedKeys={["0_2"]}
        >
          <SubMenu
            key="0"
            title={
              <>
                <IconApps /> Navigation 1
              </>
            }
          >
            <MenuItem key="0_0">Menu 1</MenuItem>
            <MenuItem key="0_1">Menu 2</MenuItem>
            <MenuItem key="0_2">Menu 3</MenuItem>
            <MenuItem key="0_3">Menu 4</MenuItem>
          </SubMenu>
          <SubMenu
            key="1"
            title={
              <>
                <IconBug /> Navigation 2
              </>
            }
          >
            <MenuItem key="1_0">Menu 1</MenuItem>
            <MenuItem key="1_1">Menu 2</MenuItem>
            <MenuItem key="1_2">Menu 3</MenuItem>
          </SubMenu>
          <SubMenu
            key="2"
            title={
              <>
                <IconBulb /> Navigation 3
              </>
            }
          >
            <MenuItem key="2_0">Menu 1</MenuItem>
            <MenuItem key="2_1">Menu 2</MenuItem>
          </SubMenu>
          <MenuItem renderItemInTooltip={() => "NAVIGATION-4"}>
            <IconBook /> Navigation 4
          </MenuItem>
        </Menu>
      </div>
    );
  },
};

export const Pop: Story = {
  render: () => (
    <div className="menu-demo">
      <Menu style={{ width: 200 }} mode="pop" hasCollapseButton>
        <MenuItem key="0">
          <IconApps />
          Navigation 1
        </MenuItem>
        <SubMenu
          key="1"
          title={
            <>
              <IconRobot />
              Navigation 2
            </>
          }
        >
          <MenuItem key="1_0">Beijing</MenuItem>
          <MenuItem key="1_1">Shanghai</MenuItem>
          <MenuItem key="1_2">Guangzhou</MenuItem>
        </SubMenu>
        <SubMenu
          key="2"
          title={
            <>
              <IconBulb />
              Navigation 3
            </>
          }
        >
          <MenuItem key="2_0">Wuhan</MenuItem>
          <MenuItem key="2_1">Chengdu</MenuItem>
        </SubMenu>
        <MenuItem key="3">
          <IconSafe />
          Navigation 4
        </MenuItem>
        <MenuItem key="4">
          <IconFire />
          Navigation 5
        </MenuItem>
      </Menu>
    </div>
  ),
};

export const PopButton: Story = {
  render: () => (
    <div className="menu-demo menu-demo-button">
      <Trigger
        trigger={["click", "hover"]}
        clickToClose
        position="top"
        popup={() => (
          <Menu mode="popButton" tooltipProps={{ position: "left" }} hasCollapseButton>
            <MenuItem key="1">
              <IconBug />
              Bugs
            </MenuItem>
            <MenuItem key="2">
              <IconBulb />
              Ideas
            </MenuItem>
          </Menu>
        )}
      >
        <Button type="primary" shape="circle" size="large">
          <IconMessage />
        </Button>
      </Trigger>
    </div>
  ),
};
