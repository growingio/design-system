import type { Meta, StoryObj } from '@storybook/react';
import React, { ReactElement, ReactNode, useState, useRef } from 'react';
import { Dropdown, Button, Divider, Menu, Space, Tooltip } from '../..';
import { IconDown } from '@arco-iconbox/react-growingio';
import { DropdownPositionType } from '../../_core/types';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Base/Dropdown',
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const menuItems = [
  <Menu.Item key="beijing">Beijing</Menu.Item>,
  <Menu.Item key="shanghai">Shanghai</Menu.Item>,
  <Menu.Item key="guangzhou">Guangzhou</Menu.Item>,
];

const droplist = <Menu>{...menuItems}</Menu>;

const hoverableChild = (
  <Button type="text">
    Hover <IconDown />
  </Button>
);

const clickableChild = (
  <Button type="text">
    Click <IconDown />
  </Button>
);

export const Basic: Story = {
  args: {
    position: 'bl',
    droplist,
    children: hoverableChild,
  },
  render: (args) => (
    <Space size="large">
      <Dropdown {...args} />
      <Dropdown {...args} disabled />
    </Space>
  ),
};

export const Position: Story = {
  args: {
    droplist,
  },
  render: (args, { intl: { formatMessage } }) => {
    const postions: { name: ReactNode; position: DropdownPositionType }[] = [
      {
        name: formatMessage({ defaultMessage: '左上' }),
        position: 'tl',
      },
      {
        name: formatMessage({ defaultMessage: '正上' }),
        position: 'top',
      },
      {
        name: formatMessage({ defaultMessage: '右上' }),
        position: 'tr',
      },
      {
        name: formatMessage({ defaultMessage: '左下' }),
        position: 'bl',
      },
      {
        name: formatMessage({ defaultMessage: '正下' }),
        position: 'bottom',
      },
      {
        name: formatMessage({ defaultMessage: '右下' }),
        position: 'br',
      },
    ];

    return (
      <Space wrap style={{ padding: '150px 0' }}>
        {postions.map(({ name, position }) => (
          <Dropdown {...args} key={position} position={position}>
            <Button>{name}</Button>
          </Dropdown>
        ))}
      </Space>
    );
  },
};

export const Extra: Story = {
  args: {
    droplist: (
      <Menu>
        {...menuItems}
        <Divider style={{ margin: '4px 0' }} />
        <Menu.Item key="shenzhen" disabled>
          Shenzhen
        </Menu.Item>
      </Menu>
    ),
    children: hoverableChild,
  },
  render: (args) => <Dropdown {...args} />,
};

export const Trigger: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => (
    <Space size="large">
      <Dropdown {...args} trigger="hover">
        {hoverableChild}
      </Dropdown>
      <Dropdown {...args} trigger="click">
        {clickableChild}
      </Dropdown>
    </Space>
  ),
};

type DropdownButtonStory = StoryObj<typeof Dropdown.Button>;
export const DropdownButton: DropdownButtonStory = {
  args: {
    droplist,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space size="large">
      <Dropdown.Button type="secondary" {...args}>
        {formatMessage({ defaultMessage: '发布' })}
      </Dropdown.Button>
      <Dropdown.Button type="secondary" {...args} disabled>
        {formatMessage({ defaultMessage: '禁用' })}
      </Dropdown.Button>
      <Dropdown.Button type="primary" {...args} icon={<IconDown />}>
        {formatMessage({ defaultMessage: '自定义图标' })}
      </Dropdown.Button>
      <Dropdown.Button
        type="primary"
        {...args}
        buttonsRender={([leftButton, rightButton]) => [
          <Tooltip content="Tooltip">{leftButton}</Tooltip>,
          React.cloneElement(rightButton as ReactElement, {
            loading: true,
          }),
        ]}
      >
        {formatMessage({ defaultMessage: '自定义文字气泡' })}
      </Dropdown.Button>
    </Space>
  ),
};

const subMenuData = [
  ['Beijing', ['Haidian', 'Chaoyang', 'Daxing']],
  ['Shanghai', ['Pudong', 'Huangpu', 'Xuhui']],
  ['Guangzhou', ['Baiyun', 'Tianhe', 'Fanyu']],
  ['Shenzhen', ['Futian', 'Luohu', 'Nanshan']],
];
export const SubMenu: Story = {
  ...Extra,
  args: {
    droplist: (
      <Menu>
        {subMenuData.map((city) => (
          <Menu.SubMenu key={city[0] as string} title={city[0]}>
            {(city[1] as string[]).map((area) => (
              <Menu.Item key={`${city[0]}-${area}`}>{area}</Menu.Item>
            ))}
          </Menu.SubMenu>
        ))}
      </Menu>
    ),
    children: hoverableChild,
  },
};

export const GroupMenu: Story = {
  ...SubMenu,
  args: {
    ...SubMenu.args,
    droplist: (
      <Menu>
        {subMenuData.map((city) => (
          <Menu.ItemGroup key={city[0] as string} title={city[0]}>
            {(city[1] as string[]).map((area) => (
              <Menu.Item key={`${city[0]}-${area}`}>{area}</Menu.Item>
            ))}
          </Menu.ItemGroup>
        ))}
      </Menu>
    ),
  },
};

export const RightClickMenu: Story = {
  args: {
    trigger: 'contextMenu',
    droplist,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Dropdown {...args}>
      <div
        style={{
          display: 'flex',
          width: 320,
          height: 160,
          backgroundColor: 'var(--color-fill-2)',
          color: 'var(--color-text-1)',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span>{formatMessage({ defaultMessage: '右击' })}</span>
      </div>
    </Dropdown>
  ),
};

export const ControlledVisible: Story = {
  args: {
    children: clickableChild,
    trigger: 'click',
  },
  render: (args, { intl: { formatMessage } }) => {
    const [visible, setVisible] = useState(false);
    const refMenuItemClicked = useRef(null);

    return (
      <Dropdown
        {...args}
        droplist={
          <Menu
            onClickMenuItem={(key) => {
              refMenuItemClicked.current = key;
            }}
          >
            <Menu.Item key="not-closed">
              {formatMessage({
                defaultMessage: '点击此项不会关闭下拉菜单',
              })}
            </Menu.Item>
            <Menu.Item key="closed">
              {formatMessage({
                defaultMessage: '点击此项关闭下拉菜单',
              })}
            </Menu.Item>
          </Menu>
        }
        popupVisible={visible}
        onVisibleChange={(v) => {
          if (
            refMenuItemClicked.current === null ||
            refMenuItemClicked.current === 'closed'
          ) {
            setVisible(v);
          }

          refMenuItemClicked.current = null;
        }}
      />
    );
  },
};
