import { Avatar, Button, Image, List, Spin } from "@/src";
import { IconHeart, IconMessage, IconStar } from "@arco-iconbox/react-growingio/src";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReactNode, useEffect, useState } from "react";

const meta: Meta<typeof List> = {
  component: List,
  title: "Components/Data Display/List",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  args: {
    header: "GrowingIO",
    dataSource: [
      "Customer Data Platform",
      "User Behavior Analysis",
      "Advertising Monitoring",
      "Marketing Automation",
      "A/B Testing",
    ],
    render: (item: string) => <List.Item>{item}</List.Item>,
  },
  render: (args) => <List {...args} />,
};

export const ItemMeta: Story = {
  ...Default,
  args: {
    ...Default.args,
    render: (item: string, index: number) => (
      <List.Item key={index}>
        <List.Item.Meta
          avatar={
            <Avatar>
              <img src={`/demos/avatar${index > 1 ? `-0${index}` : ""}.png`} />
            </Avatar>
          }
          title={item}
          description={`Description for ${item}`}
        />
      </List.Item>
    ),
  },
};

export const ItemActions: Story = {
  ...Default,
  args: {
    ...Default.args,
    render: (item: string, index: number) => (
      <List.Item
        key={index}
        actions={[
          <Button type="text" size="small">
            Edit
          </Button>,
          <Button type="text">Delete</Button>,
        ]}
      >
        <List.Item.Meta
          avatar={
            <Avatar>
              <img src={`/demos/avatar${index > 1 ? `-0${index}` : ""}.png`} />
            </Avatar>
          }
          title={item}
          description={`Description for ${item}`}
        />
      </List.Item>
    ),
  },
};

const imageSrc = [
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/29c1f9d7d17c503c5d7bf4e538cb7c4f.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/04d7bc31dd67dcdf380bc3f6aa07599f.png~tplv-uwbnlip3yd-webp.webp",
  "//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/1f61854a849a076318ed527c8fca1bbf.png~tplv-uwbnlip3yd-webp.webp",
];
export const ItemActionLayout: Story = {
  ...Default,
  args: {
    ...Default.args,
    render: (item: string, index: number) => (
      <List.Item
        key={index}
        actionLayout="vertical"
        actions={[
          <Button type="text" size="small" icon={<IconStar />}>
            13
          </Button>,
          <Button type="text" size="small" icon={<IconHeart />}>
            14
          </Button>,
          <Button type="text" size="small" icon={<IconMessage />}>
            Reply
          </Button>,
        ]}
        extra={<Image src={imageSrc[index % imageSrc.length]} width={140} />}
      >
        <List.Item.Meta
          avatar={
            <Avatar>
              <img src={`/demos/avatar${index > 1 ? `-0${index}` : ""}.png`} />
            </Avatar>
          }
          title={item}
          description={`Description for ${item}`}
        />
      </List.Item>
    ),
  },
};

export const Grid: Story = {
  ...Default,
  args: {
    ...Default.args,
    grid: {
      gutter: 16,
      column: 3,
    },
  },
};

export const ScrollLoading: Story = {
  render: () => {
    const [mockData, setMockData] = useState([]);
    const [scrollLoading, setScrollLoading] = useState<ReactNode>(<Spin loading={true} />);

    const fetchData = (currentPage: number) => {
      if (currentPage > 10) {
        setScrollLoading("No more data");
      } else {
        fetch("https://randomuser.me/api/?results=10")
          .then((res) => res.json())
          .then((data) => {
            setMockData((mockData) => mockData.concat(...data.results));
          })
          .catch((error) => console.error(error));
      }
    };

    useEffect(() => {
      fetchData(1);
    }, []);

    return (
      <List
        style={{ width: 600, maxHeight: 320 }}
        scrollLoading={scrollLoading}
        onReachBottom={(currentPage) => fetchData(currentPage)}
        dataSource={mockData}
        render={(
          item: {
            picture: { thumbnail: string };
            name: { first: string; last: string };
            email: string;
          },
          index,
        ) => (
          <List.Item key={index}>
            <List.Item.Meta
              avatar={
                <Avatar shape="square">
                  <img alt="avatar" src={item.picture.thumbnail} />
                </Avatar>
              }
              title={`${item.name.first} ${item.name.last}`}
              description={item.email}
            />
          </List.Item>
        )}
      />
    );
  },
};

export const VirtualList: Story = {
  render: () => (
    <List
      style={{ width: 600 }}
      header={"10000 items"}
      virtualListProps={{
        height: 560,
      }}
      dataSource={new Array(10000).fill(null).map((_, index) => {
        const prefix = `0000${index}`.slice(-5);
        return {
          title: "GrowingIO",
          description: `(${prefix}) Beijing Yishu Technology Co., Ltd.`,
        };
      })}
      render={(item, index) => (
        <List.Item key={index}>
          <List.Item.Meta
            avatar={<Avatar shape="square">A</Avatar>}
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  ),
};
