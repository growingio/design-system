import { Form, InputNumber, Slider, Space, Switch, Typography } from "@/src";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: "Components/Data Entry/Slider",
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    style: { width: 200 },
    defaultValue: 30,
    onChange: action("onChange"),
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Step: Story = {
  render: () => {
    const [step, setStep] = useState(1);
    const [showTicks, setShowTicks] = useState(true);
    return (
      <Space direction="vertical">
        <Space align="center">
          <Typography.Text>step</Typography.Text>
          <InputNumber value={step} min={1} max={10} onChange={setStep} style={{ width: 68 }} />
          <Typography.Text>showTicks</Typography.Text>
          <Switch checked={showTicks} onChange={setShowTicks} />
        </Space>
        <Space>
          <Typography.Text>0</Typography.Text>
          <Slider
            defaultValue={5}
            max={10}
            step={step}
            showTicks={showTicks}
            style={{
              width: 258,
              verticalAlign: "middle",
            }}
          />
          <Typography.Text>10</Typography.Text>
        </Space>
      </Space>
    );
  },
};

export const Range: Story = {
  args: {
    ...Default.args,
    range: true,
    defaultValue: [0, 50],
  },
};

export const MultipleDots: Story = {
  args: {
    ...Default.args,
    range: true,
    defaultValue: [0, 25, 50],
  },
};

export const ShowInput: Story = {
  render: () => (
    <Space direction="vertical" size={"medium"}>
      <Space size={60}>
        <Slider defaultValue={80} showInput style={{ width: 280 }} />
        <Slider defaultValue={[10, 80]} range showInput style={{ width: 360 }} />
      </Space>
      <Space size={60}>
        <Slider
          defaultValue={80}
          showInput={{
            hideControl: false,
            style: {
              width: 80,
            },
          }}
          style={{ width: 280 }}
        />
        <Slider
          defaultValue={[10, 80]}
          showInput={{
            hideControl: false,
            style: {
              width: 80,
            },
          }}
          range
          style={{ width: 360 }}
        />
      </Space>
    </Space>
  ),
};

export const Marks: Story = {
  args: {
    ...Default.args,
    max: 15,
    defaultValue: 10,
    marks: {
      0: "0km",
      5: "5km",
      10: "10km",
      15: "15km",
    },
  },
  render: (args) => (
    <Space direction="vertical">
      <Slider {...args} />
      <Slider {...args} onlyMarkValue />
    </Space>
  ),
};

export const Vertical: Story = {
  args: {
    ...Default.args,
    vertical: true,
    defaultValue: 30,
  },
  render: (args) => (
    <Space size={"large"}>
      <Slider {...args} />
      <Slider
        {...args}
        onlyMarkValue
        marks={{
          0: "0km",
          5: "5km",
          10: "10km",
          15: "15km",
        }}
        max={15}
        range
        defaultValue={[0, 5]}
      />
    </Space>
  ),
};

export const Tooltip: Story = {
  args: {
    ...Default.args,
    defaultValue: 30,
    tooltipVisible: true,
  },
  render: (args) => (
    <Space direction="vertical" size={70}>
      <Slider {...args} />
      <Slider {...args} range defaultValue={[10, 50]} />
      <Slider {...args} formatTooltip={(value) => `${value}%`} />
    </Space>
  ),
};

export const Draggable: Story = {
  args: {
    ...Default.args,
    defaultValue: [20, 50],
    range: {
      draggableBar: true,
    },
  },
};

export const MinMax: Story = {
  args: {
    ...Default.args,
    min: 10,
    max: 80,
  },
};

export const Reverse: Story = {
  args: {
    ...Default.args,
    reverse: true,
  },
};

export const Interval: Story = {
  render: () => {
    const defaultConfig = {
      showTicks: false,
      showInput: false,
      onlyMarkValue: false,
      reverse: false,
    };
    const marks = {
      0: "0km",
      10: "10km",
      20: "20km",
      30: "30km",
      50: "50km",
    };
    const [config, setConfig] = useState<any>(defaultConfig);
    return (
      <Space direction="vertical" size={"large"}>
        <Form
          style={{ margin: "20px" }}
          layout="inline"
          onValuesChange={(_, values) => {
            setConfig(values);
          }}
        >
          {Object.keys(defaultConfig).map((key) => (
            <Form.Item
              label={key}
              field={key}
              triggerPropName="checked"
              key={key}
              initialValue={config[key]}
            >
              <Switch />
            </Form.Item>
          ))}
        </Form>

        <Space direction="vertical">
          <Typography.Text bold>分段区间-滑动输入条</Typography.Text>
          <Slider
            {...config}
            style={{ width: 600 }}
            max={50}
            defaultValue={10}
            marks={marks}
            getIntervalConfig={([begin, end]) => {
              const interval = `${begin}~${end}`;

              switch (interval) {
                case `0~10`: {
                  return {
                    width: "50%",
                  };
                }

                default:
                  return {
                    step: (end - begin) / 5,
                  };
              }
            }}
          />
        </Space>
        <Space direction="vertical">
          <Typography.Text bold>未分段-滑动输入条</Typography.Text>
          <Slider {...config} style={{ width: 600 }} max={50} defaultValue={10} marks={marks} />
        </Space>
      </Space>
    );
  },
};
