import { Comment, Avatar, Button, Typography, Input, List } from "@/src";
import { IconHeart, IconMessage, IconStar } from "@arco-iconbox/react-growingio/src";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Comment> = {
  component: Comment,
  title: "Components/Data Display/Comment",
};

export default meta;
type Story = StoryObj<typeof Comment>;
const { Text, Paragraph } = Typography;

export const Default: Story = {
  args: {
    author: "Socrates",
    avatar: (
      <Avatar>
        <img alt="avatar" src="/demos/avatar.png" />
      </Avatar>
    ),
    content: <Text>Comment body content.</Text>,
    datetime: "1 hour",
    actions: [
      <Button type="text" size="small" icon={<IconHeart />}>
        83
      </Button>,
      <Button type="text" size="small" icon={<IconStar />}>
        5
      </Button>,
      <Button type="text" size="small" icon={<IconMessage />}>
        Reply
      </Button>,
    ],
  },
  render: (args) => <Comment {...args} />,
};

export const Align: Story = {
  ...Default,
  args: {
    ...Default.args,
    content: (
      <Paragraph>
        A design is a plan or specification for the construction of an object or system or for the
        implementation of an activity or process, or the result of that plan or specification in the
        form of a prototype, product or process.
      </Paragraph>
    ),
    align: "right",
  },
};

export const Nested: Story = {
  render: () => {
    const actions = (
      <span className="custom-comment-action">
        <IconMessage /> Reply
      </span>
    );
    return (
      <Comment
        actions={actions}
        author={"Socrates"}
        avatar="/demos/avatar.png"
        content={<div>Comment body content.</div>}
        datetime="1 hour"
      >
        <Comment
          actions={actions}
          author="Balzac"
          avatar="/demos/avatar-02.png"
          content={<div>Comment body content.</div>}
          datetime="1 hour"
        >
          <Comment
            actions={actions}
            author="Austen"
            avatar="/demos/avatar-03.png"
            content={<div> Reply content </div>}
            datetime="1 hour"
          />
          <Comment
            actions={actions}
            author="Plato"
            avatar="/demos/avatar-04.png"
            content={<div> Reply content </div>}
            datetime="1 hour"
          />
        </Comment>
      </Comment>
    );
  },
};

export const CommentList: Story = {
  render: () => {
    const data = [
      {
        id: 1,
        author: "Socrates",
        like: 13,
        star: 3,
        avatar: "/demos/avatar.png",
        content: "Comment body content.",
        datetime: "1 hour",
      },
      {
        id: 2,
        author: "Balzac",
        like: 12,
        star: 1,
        avatar: "/demos/avatar-02.png",
        content: "Comment body content.",
        datetime: "2 hour",
      },
    ];

    return (
      <List bordered={false} header={<Text>{`${data.length} comments`}</Text>}>
        {data.map((item) => (
          <List.Item key={item.id}>
            <Comment
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
              actions={[
                <Button type="text" size="small" icon={<IconHeart />}>
                  {item.like}
                </Button>,
                <Button type="text" size="small" icon={<IconStar />}>
                  {item.star}
                </Button>,
                <Button type="text" size="small" icon={<IconMessage />}>
                  Reply
                </Button>,
              ]}
            />
          </List.Item>
        ))}
      </List>
    );
  },
};

export const Reply: Story = {
  render: () => (
    <Comment
      align="right"
      actions={
        <span className="custom-comment-action">
          <IconMessage /> Reply
        </span>
      }
      author="Balzac"
      avatar="/demos/avatar.png"
      content={
        <div>
          A design is a plan or specification for the construction of an object or system or for the
          implementation of an activity or process, or the result of that plan or specification in
          the form of a prototype, product or process.
        </div>
      }
      datetime="1 hour"
    >
      <Comment
        align="right"
        actions={[
          <Button key="0">Cancel</Button>,
          <Button key="1" type="primary">
            Reply
          </Button>,
        ]}
        avatar="/demos/avatar-02.png"
        content={
          <div>
            <Input.TextArea placeholder="Here is you content." />
          </div>
        }
      ></Comment>
    </Comment>
  ),
};
