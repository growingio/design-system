import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import {
  IconCheckCircleFill,
  IconPlus,
  IconStar,
  IconSettings,
  IconAlipay,
  IconWechat,
  IconAndroidFill,
  IconAppleFill,
} from "@arco-iconbox/react-growingio";
import {
  Tag,
  BadgeTag,
  AvatarTag,
  Divider,
  Input,
  Message,
  Switch,
  Typography,
  Grid,
  Space,
} from "../../../src";
import COLORS from "../../../src/_core/colors";

const { Row, Col } = Grid;

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "Components/Data Display/Tag",
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Basic: Story = {
  args: {
    children: "Default",
  },
  render: (args) => (
    <Space size="large">
      <Tag {...args} />
      <Tag {...args} icon={<IconCheckCircleFill />} />
    </Space>
  ),
};

export const Close: Story = {
  args: {
    children: "Tag",
    closable: true,
  },
  render: (args) => {
    const [visible, setVisible] = React.useState(true);

    function onClose() {
      setVisible(!visible);
    }

    return (
      <Space size="large" direction="vertical">
        <Space>
          <Tag {...args} visible={visible} onClose={onClose} />
          <Tag {...args} icon={<IconStar />} visible={visible} onClose={onClose} />
        </Space>
        <Space size="small">
          <Switch size="small" checked={visible} onChange={onClose} />
          <Typography.Text>Toggle</Typography.Text>
        </Space>
      </Space>
    );
  },
};

export const Check: Story = {
  args: {
    ...Basic.args,
    checkable: true,
  },
  render: (args) => (
    <Space size="large">
      <Tag {...args} />
      <Tag {...args} defaultChecked color="red" />
      <Tag {...args} defaultChecked color="blue" />
    </Space>
  ),
};

export const Type: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => (
    <div style={{ width: 800 }}>
      <Row gutter={[18, 36]} justify="center">
        <Col span={3}>Normal</Col>
        <Col span={3}>
          <Tag {...args} type="normal" status="not-started" />
        </Col>
        <Col span={4}>
          <Tag {...args} type="normal" status="success" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="normal" status="warning" />
        </Col>
        <Col span={4}>
          <Tag {...args} type="normal" status="danger" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="normal" status="doing" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="normal" status="done" />
        </Col>
      </Row>
      <Row gutter={[18, 36]} justify="center">
        <Col span={3}>Highlighted</Col>
        <Col span={3}>
          <Tag {...args} type="highlighted" status="not-started" />
        </Col>
        <Col span={4}>
          <Tag {...args} type="highlighted" status="success" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="highlighted" status="warning" />
        </Col>
        <Col span={4}>
          <Tag {...args} type="highlighted" status="danger" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="highlighted" status="doing" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="highlighted" status="done" />
        </Col>
      </Row>
      <Row gutter={[18, 36]} justify="center">
        <Col span={3}>Outline</Col>
        <Col span={3}>
          <Tag {...args} type="outline" status="not-started" />
        </Col>
        <Col span={4}>
          <Tag {...args} type="outline" status="success" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="outline" status="warning" />
        </Col>
        <Col span={4}>
          <Tag {...args} type="outline" status="danger" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="outline" status="doing" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="outline" status="done" />
        </Col>
      </Row>
      <Row gutter={[18, 36]} justify="center">
        <Col span={3}>Light outline</Col>
        <Col span={3}>
          <Tag {...args} type="light-outline" status="not-started" />
        </Col>
        <Col span={4}>
          <Tag {...args} type="light-outline" status="success" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="light-outline" status="warning" />
        </Col>
        <Col span={4}>
          <Tag {...args} type="light-outline" status="danger" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="light-outline" status="doing" />
        </Col>
        <Col span={3}>
          <Tag {...args} type="light-outline" status="done" />
        </Col>
      </Row>
      <Row gutter={[18, 36]} justify="center">
        <Col span={3} offset={3}>
          <Typography.Text bold>{formatMessage({ defaultMessage: "未开始/草稿" })}</Typography.Text>
        </Col>
        <Col span={4}>
          <Typography.Text bold>
            {formatMessage({ defaultMessage: "成功/已完成/启用中" })}
          </Typography.Text>
        </Col>
        <Col span={3}>
          <Typography.Text bold>{formatMessage({ defaultMessage: "等待/提醒" })}</Typography.Text>
        </Col>
        <Col span={4}>
          <Typography.Text bold>
            {formatMessage({ defaultMessage: "失败/锁定/警告" })}
          </Typography.Text>
        </Col>
        <Col span={3}>
          <Typography.Text bold>{formatMessage({ defaultMessage: "进行中" })}</Typography.Text>
        </Col>
        <Col span={3}>
          <Typography.Text bold>
            {formatMessage({ defaultMessage: "已结束/已关闭" })}
          </Typography.Text>
        </Col>
      </Row>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    ...Type.args,
    disabled: true,
  },
  render: Type.render,
};

export const Color: Story = {
  args: {
    closable: true,
  },
  render: (args, { intl: { formatMessage } }) => {
    const CUSTOM_COLORS = [
      "#f53f3f",
      "#7816ff",
      "#00b42a",
      "#165dff",
      "#ff7d00",
      "#eb0aa4",
      "#7bc616",
      "#86909c",
      "#b71de8",
      "#0fc6c2",
      "#ffb400",
      "#168cff",
      "#ff5722",
    ];

    return (
      <Space size="large" direction="vertical" style={{ maxWidth: 958 }}>
        <Space wrap>
          {COLORS.map((color) => (
            <Tag {...args} key={color} color={color}>
              {color}
            </Tag>
          ))}
        </Space>
        <Divider>{formatMessage({ defaultMessage: "自定义颜色" })}</Divider>
        <Space wrap>
          {CUSTOM_COLORS.map((color) => (
            <Tag {...args} key={color} color={color}>
              {color}
            </Tag>
          ))}
        </Space>
      </Space>
    );
  },
};

export const Active: Story = {
  args: {},
  render: (args, { intl: { formatMessage } }) => {
    const [tags, setTags] = React.useState(["Tag 1", "Tag 2", "Tag 3"]);
    const [showInput, setShowInput] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");

    function addTag() {
      if (inputValue) {
        tags.push(inputValue);
        setTags(tags);
        setInputValue("");
      }

      setShowInput(false);
    }

    function removeTag(removeTag) {
      const newTags = tags.filter((tag) => tag !== removeTag);
      setTags(newTags);
    }

    return (
      <Space size="large">
        {tags.map((tag, index) => (
          <Tag {...args} key={tag} closable={index !== 0} onClose={() => removeTag(tag)}>
            {tag}
          </Tag>
        ))}
        {showInput ? (
          <Input
            autoFocus
            size="mini"
            value={inputValue}
            style={{ width: 84 }}
            onPressEnter={addTag}
            onBlur={addTag}
            onChange={setInputValue}
          />
        ) : (
          <Tag
            icon={<IconPlus />}
            style={{
              width: 84,
              backgroundColor: "var(--color-fill-2)",
              border: "1px dashed var(--color-fill-3)",
              cursor: "pointer",
            }}
            className="add-tag"
            tabIndex={0}
            onClick={() => setShowInput(true)}
            onKeyDown={(e) => {
              const keyCode = e.keyCode || e.which;
              if (keyCode === 13) {
                setShowInput(true);
              }
            }}
          >
            {formatMessage({ defaultMessage: "添加标签" })}
          </Tag>
        )}
      </Space>
    );
  },
};

export const Size: Story = {
  args: {
    closable: true,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space size="large" align="start">
      <Tag {...args} size="large">
        {formatMessage({ defaultMessage: "大" })}
      </Tag>
      <Tag {...args} size="default">
        {formatMessage({ defaultMessage: "中" })}
      </Tag>
      <Tag {...args} size="small">
        {formatMessage({ defaultMessage: "小" })}
      </Tag>
      <Tag {...args} size="mini">
        {formatMessage({ defaultMessage: "迷你" })}
      </Tag>
    </Space>
  ),
};

export const CloseAsync: Story = {
  args: {},
  render: (args, { intl: { formatMessage } }) => (
    <Tag
      {...args}
      closable
      onClose={() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() >= 0.5) {
              resolve(0);
            } else {
              Message.error({
                content: formatMessage({ defaultMessage: "关闭失败" }),
              });
              reject();
            }
          }, 3000);
        });
      }}
    >
      Tag
    </Tag>
  ),
};

export const Icon: Story = {
  args: {},
  render: (args) => (
    <Space size="large">
      <Tag {...args} icon={<IconAndroidFill />}>
        Android
      </Tag>
      <Tag {...args} color="gray" icon={<IconAppleFill />}>
        iOS
      </Tag>
      <Tag {...args} color="blue" icon={<IconAlipay />}>
        Alipay
      </Tag>
      <Tag {...args} color="green" icon={<IconWechat />}>
        Wechat
      </Tag>
    </Space>
  ),
};

export const Bordered: Story = {
  args: {
    ...Basic.args,
    bordered: true,
  },
  render: (args) => (
    <Space wrap>
      <Tag {...args} />
      {COLORS.map((color) => (
        <Tag {...args} key={color} color={color}>
          {color}
        </Tag>
      ))}
    </Space>
  ),
};

type BadgeTagStory = StoryObj<typeof BadgeTag>;

export const BadgeTagBasic: BadgeTagStory = {
  name: "Badge Tag",
  args: {
    title: "Title",
    content: "Content",
  },
  render: (args) => (
    <Grid.Row gutter={[0, 24]}>
      <Grid.Col span={6}>
        <BadgeTag {...args} size="large" />
      </Grid.Col>
      <Grid.Col span={6}>
        <BadgeTag {...args} size="default" />
      </Grid.Col>
      <Grid.Col span={6}>
        <BadgeTag {...args} />
      </Grid.Col>
      <Grid.Col span={6}>
        <BadgeTag {...args} size="mini" />
      </Grid.Col>

      <Grid.Col span={6}>
        <BadgeTag {...args} icon={<IconSettings />} size="large" />
      </Grid.Col>
      <Grid.Col span={6}>
        <BadgeTag {...args} icon={<IconSettings />} size="default" />
      </Grid.Col>
      <Grid.Col span={6}>
        <BadgeTag {...args} icon={<IconSettings />} size="small" />
      </Grid.Col>
      <Grid.Col span={6}>
        <BadgeTag {...args} icon={<IconSettings />} size="mini" />
      </Grid.Col>
    </Grid.Row>
  ),
};

export const BadgeTagColor: BadgeTagStory = {
  args: {
    title: "Title",
  },
  render: (args) => (
    <Space wrap>
      {COLORS.map((color) => (
        <BadgeTag {...args} content={color} contentColor={color} />
      ))}
    </Space>
  ),
};

type AvatarTagStory = StoryObj<typeof AvatarTag>;

export const AvatarTagBasic: AvatarTagStory = {
  args: {
    imageSrc: "/demos/avatar.png",
    label: "Tag",
  },
  name: "Avatar Tag",
  render: (args) => (
    <Grid.Row gutter={[0, 24]}>
      <Grid.Col span={6}>
        <AvatarTag {...args} size="large" />
      </Grid.Col>
      <Grid.Col span={6}>
        <AvatarTag {...args} size="default" />
      </Grid.Col>
      <Grid.Col span={6}>
        <AvatarTag {...args} />
      </Grid.Col>
      <Grid.Col span={6}>
        <AvatarTag {...args} size="mini" />
      </Grid.Col>

      <Grid.Col span={6}>
        <AvatarTag {...args} mode="dark" size="large" />
      </Grid.Col>
      <Grid.Col span={6}>
        <AvatarTag {...args} mode="dark" size="default" />
      </Grid.Col>
      <Grid.Col span={6}>
        <AvatarTag {...args} mode="dark" size="small" />
      </Grid.Col>
      <Grid.Col span={6}>
        <AvatarTag {...args} mode="dark" size="mini" />
      </Grid.Col>
    </Grid.Row>
  ),
};
