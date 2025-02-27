import type { Meta, StoryObj } from "@storybook/react";
import React, { ReactElement, ReactNode, useState, useRef } from "react";
import { Breadcrumb, Button, Divider, Menu, Space, Tooltip } from "../../../src";
import { IconDown, IconHome, IconRight } from "@arco-iconbox/react-growingio/src";

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  title: "Components/Navigation/Breadcrumb",
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

const { Item: BreadcrumbItem } = Breadcrumb;
const { Item: MenuItem } = Menu;

export const Basic: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Channel</BreadcrumbItem>
      <BreadcrumbItem>News</BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const Separator: Story = {
  render: () => (
    <Space direction="vertical">
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb separator={<IconRight />}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem href="#">Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb separator={<span>・</span>}>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Channel</BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
    </Space>
  ),
};

export const Icon: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem>
        <IconHome />
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Channel</BreadcrumbItem>
      <BreadcrumbItem>News</BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const Dropdown: Story = {
  render: () => (
    <Space direction="vertical" size={"large"}>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem
          droplist={
            <Menu>
              <MenuItem key="1">Users</MenuItem>
              <MenuItem key="2">Permission</MenuItem>
            </Menu>
          }
        >
          Channel
        </BreadcrumbItem>
        <BreadcrumbItem>News</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb
        routes={[
          {
            path: "/",
            breadcrumbName: "Home",
          },
          {
            path: "/Channel",
            breadcrumbName: "Channel",
            children: [
              {
                path: "/users",
                breadcrumbName: "Users",
              },
              {
                path: "/permission",
                breadcrumbName: "Permission",
              },
            ],
          },
          {
            path: "/news",
            breadcrumbName: "News",
          },
        ]}
      />
    </Space>
  ),
};

export const MaxCount: Story = {
  render: () => (
    <Breadcrumb maxCount={3}>
      <BreadcrumbItem>Home</BreadcrumbItem>
      <BreadcrumbItem>Sub Home</BreadcrumbItem>
      <BreadcrumbItem>All Channel</BreadcrumbItem>
      <BreadcrumbItem>Channel</BreadcrumbItem>
      <BreadcrumbItem>News</BreadcrumbItem>
    </Breadcrumb>
  ),
};
