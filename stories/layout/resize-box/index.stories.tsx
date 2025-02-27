import type { Meta, StoryObj } from "@storybook/react";
import { ResizeBox, Typography, Divider } from "../../../src";
import "./index.css";

const meta: Meta<typeof ResizeBox> = {
  component: ResizeBox,
  title: "Components/Layout/ResizeBox",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ResizeBox>;

const { Text, Paragraph } = Typography;

export const Directions: Story = {
  args: {
    directions: ["right", "bottom"],
  },
  render: (args) => (
    <ResizeBox
      {...args}
      style={{
        width: 500,
        minWidth: 100,
        maxWidth: "100%",
        height: 200,
        textAlign: "center",
      }}
    >
      <Paragraph>
        A design is a plan or specification for the construction of an object or system or for the
        implementation of an activity or process, or the result of that plan or specification in the
        form of a prototype, product or process. The verb to design expresses the process of
        developing a design.
      </Paragraph>
      <Divider />
      <Paragraph>
        In some cases, the direct construction of an object without an explicit prior plan (such as
        in craftwork, some engineering, coding, and graphic design) may also be considered
        <Text bold>to be a design activity.</Text>
      </Paragraph>
      <Divider>GrowingIO Design</Divider>
      <Paragraph>
        The GrowingIO Design component library defines a set of default particle variables, and a
        custom theme is to <Text mark>customize</Text> and <Text underline>overwrite</Text> this
        variable list.
      </Paragraph>
    </ResizeBox>
  ),
};

const TriggerContent = function ({ className }: { className?: string }) {
  return (
    <div className={`resizebox-demo-custom-trigger ${className}`}>
      <div className="resizebox-demo-custom-trigger-line" />
    </div>
  );
};
export const Triggers: Story = {
  ...Directions,
  args: {
    ...Directions.args,
    resizeTriggers: {
      right: <TriggerContent className="resizebox-demo-custom-trigger-vertical" />,
      bottom: <TriggerContent className="resizebox-demo-custom-trigger-horizontal" />,
    },
  },
};

export const Split: Story = {
  render: () => (
    <ResizeBox.Split
      style={{
        height: 200,
        width: 500,
        border: "1px solid var(--color-border)",
      }}
      panes={[
        <Paragraph>Right</Paragraph>,
        <ResizeBox.Split
          direction="vertical"
          style={{ height: 200 }}
          panes={[<Paragraph>Top</Paragraph>, <Paragraph>Bottom</Paragraph>]}
        />,
      ]}
    />
  ),
};
