import { Button, Switch, Statistic, Space, Typography } from "@/src";
import { IconArrowFall, IconArrowRise } from "@arco-iconbox/react-growingio/src";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useRef, useState } from "react";

const meta: Meta<typeof Statistic> = {
  component: Statistic,
  title: "Components/Data Display/Statistic",
};

export default meta;
type Story = StoryObj<typeof Statistic>;

export const Default: Story = {
  args: {
    groupSeparator: true,
  },
  render: (args) => (
    <Space size={60}>
      <Statistic {...args} title="Downloads" value={125670} />
      <Statistic {...args} extra="Comments" value={40509} precision={2} />
    </Space>
  ),
};

export const PrefixSuffix: Story = {
  render: () => (
    <Space size={60}>
      <Statistic
        title="New Users"
        value={192393}
        suffix={<IconArrowRise style={{ color: "#ee4d38" }} />}
      />
      <Statistic
        title="Active Users"
        value={934230}
        suffix={<IconArrowFall style={{ color: "#0fbf60" }} />}
      />
      <Statistic
        title="User Growth Rate"
        value={50.32}
        precision={2}
        prefix={<IconArrowRise style={{ color: "#ee4d38" }} />}
        suffix="%"
        styleValue={{ color: "#ee4d38" }}
      />
    </Space>
  ),
};

export const CountUp: Story = {
  args: {
    countUp: true,
  },
  render: (args) => {
    const userGrowthRef = useRef<any>(null);
    const populationGrowthRef = useRef<any>(null);

    return (
      <Space size={60}>
        <Space direction="vertical">
          <Statistic
            {...args}
            title="User Growth Rate"
            value={50.32}
            precision={2}
            prefix={<IconArrowRise />}
            suffix="%"
            styleValue={{ color: "#0fbf60" }}
            ref={userGrowthRef}
          />
          <Button
            type="primary"
            onClick={() => {
              userGrowthRef.current?.countUp();
            }}
          >
            Start
          </Button>
        </Space>
        <Space direction="vertical">
          <Statistic
            {...args}
            title="Population Growth Rate"
            value={2.59}
            precision={2}
            prefix={<IconArrowFall />}
            suffix="%"
            styleValue={{ color: "#ee4d38" }}
            ref={populationGrowthRef}
          />
          <Button
            type="primary"
            onClick={() => {
              populationGrowthRef.current?.countUp();
            }}
          >
            Start
          </Button>
        </Space>
      </Space>
    );
  },
};

export const Format: Story = {
  args: {
    title: "CreatedTime",
    value: 1554869813383,
    format: "YYYY/MM/DD HH:mm:ss",
  },
  render: (args) => <Statistic {...args} />,
};

export const Loading: Story = {
  render: () => {
    const [loading, setLoading] = useState(true);
    return (
      <Space direction="vertical" size={"large"}>
        <Space>
          <Switch checked={loading} onChange={setLoading} />
          <Typography.Text>Loading</Typography.Text>
        </Space>
        <Statistic title="Downloads" value={125670} groupSeparator loading={loading} />
      </Space>
    );
  },
};

const { Countdown } = Statistic;
const now = Date.now();
export const Countdowns: Story = {
  render: () => {
    const [start, setStart] = useState(false);

    const _now = Date.now();

    return (
      <Space direction="vertical" size={40}>
        <Space size={60}>
          <Countdown
            style={{ width: 90 }}
            title="Countdown"
            value={now + 1000 * 60 * 60 * 2}
            now={now}
          />
          <Countdown
            style={{ width: 170 }}
            value={now + 1000 * 60 * 60 * 2}
            now={now}
            renderFormat={(_diff, _value) => {
              const minutes = Math.floor(_diff / (1000 * 60));
              const seconds = Math.floor(_diff / 1000);
              let diffTimes = "";
              if (minutes) {
                diffTimes = `${minutes}min 后`;
              } else {
                diffTimes = `${seconds}s 后`;
              }
              return <Statistic title="Countdown renderFormat" value={_value} suffix={diffTimes} />;
            }}
          />
          <Countdown
            style={{ width: 150 }}
            title="Milliseconds"
            value={now + 1000 * 60 * 60 * 2}
            format="HH:mm:ss.SSS"
            now={now}
          />
        </Space>
        <Space align="start" size={40}>
          <Countdown
            style={{ width: 220 }}
            title="Days"
            value={now + 1000 * 60 * 60 * 24 * 4}
            format="D 天 H 时 m 分 s 秒"
            now={now}
          />
          <div>
            <Countdown
              title="Trigger on finish"
              value={_now + 1000 * 5}
              format="HH:mm:ss.SSS"
              start={start}
              now={_now}
              onFinish={() => {
                setStart(false);
              }}
            />
            <Button
              onClick={() => {
                setStart(true);
              }}
              style={{ display: "block", marginTop: 10 }}
              type="primary"
            >
              Start
            </Button>
          </div>
        </Space>
      </Space>
    );
  },
};
