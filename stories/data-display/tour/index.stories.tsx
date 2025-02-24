import type { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import { IconMore } from "@arco-iconbox/react-growingio";
import { Button, Divider, Space, Tour, type TourProps } from "../../../src";

const meta: Meta<typeof Tour> = {
  component: Tour,
  title: "Components/Data Display/Tour",
};

export default meta;
type Story = StoryObj<typeof Tour>;

export const Basic: Story = {
  args: {
    closeIcon: true,
  },
  render: (args) => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const [open, setOpen] = useState<boolean>(false);

    const steps: TourProps["steps"] = [
      {
        title: "The title of step 1",
        description: "The description of step 1.",
        target: () => ref1.current,
      },
      {
        title: "The title of step 2",
        description: "The description of step 2.",
        target: () => ref2.current,
      },
      {
        title: "The title of step 3",
        description: "The description of step 3.",
        target: () => ref3.current,
      },
    ];

    return (
      <Space direction="vertical">
        <Button type="primary" onClick={() => setOpen(true)}>
          Begin Tour
        </Button>

        <Divider />

        <Space>
          <Button ref={ref1}> Upload</Button>
          <Button ref={ref2} type="primary">
            Save
          </Button>
          <Button ref={ref3} icon={<IconMore />} />
        </Space>

        <Tour {...args} open={open} onClose={() => setOpen(false)} steps={steps} />
      </Space>
    );
  },
};

export const NoMask: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    mask: false,
    type: "primary",
  },
};

export const Postion: Story = {
  render: () => {
    const ref = useRef(null);
    const [open, setOpen] = useState<boolean>(false);

    const placements = [
      "topLeft",
      "top",
      "topRight",
      "rightTop",
      "right",
      "rightBottom",
      "bottomRight",
      "bottom",
      "bottomLeft",
      "leftBottom",
      "left",
      "leftTop",
    ];

    const steps: TourProps["steps"] = placements.map((p: TourProps["placement"]) => ({
      title: `The title of ${p}`,
      description: `The description of ${p}.`,
      target: ref.current,
      placement: p,
      closeIcon: true,
    }));

    return (
      <>
        <Button ref={ref} type="primary" onClick={() => setOpen(true)}>
          Begin Tour
        </Button>

        <Tour closeIcon={false} open={open} onClose={() => setOpen(false)} steps={steps} />
      </>
    );
  },
};

export const StepWithImage: Story = {
  render: () => {
    const imageUpload = useRef(null);
    const imageSave = useRef(null);
    const imageMore = useRef(null);

    const [open, setOpen] = useState<boolean>(false);

    const steps: TourProps["steps"] = [
      {
        title: "The title of step 1",
        description: (
          <>
            <img height={136} style={{ marginTop: 12, marginBottom: 16 }} src="/demos/tour-1.png" />
            <div>The description of step 1.</div>
          </>
        ),
        target: () => imageUpload.current,
      },
      {
        title: "The title of step 2",
        description: "The description of step 2.",
        target: () => imageSave.current,
      },
      {
        title: "The title of step 3",
        description: "The description of step 3.",
        target: () => imageMore.current,
      },
    ];

    return (
      <Space direction="vertical">
        <Button type="primary" onClick={() => setOpen(true)}>
          Begin Tour
        </Button>

        <Divider />

        <Space>
          <Button ref={imageUpload}> Upload</Button>
          <Button ref={imageSave} type="primary">
            Save
          </Button>
          <Button ref={imageMore} icon={<IconMore />} />
        </Space>

        <Tour closeIcon={true} open={open} onClose={() => setOpen(false)} steps={steps} />
      </Space>
    );
  },
};

export const IndicatorType: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    indicatorType: "dot",
  },
};

export const Modal: Story = {
  render: () => {
    const ref = useRef(null);
    const [open, setOpen] = useState<boolean>(false);

    return (
      <>
        <Button ref={ref} type="primary" onClick={() => setOpen(true)}>
          Begin Tour
        </Button>

        <Tour
          closeIcon={true}
          open={open}
          onClose={() => setOpen(false)}
          steps={[
            {
              title: "The title of step 1",
              description: (
                <>
                  <img
                    height={228}
                    style={{ marginTop: 12, marginBottom: 16 }}
                    src="/demos/tour-1.png"
                  />
                  <div>The description of step 1.</div>
                </>
              ),
              target: null,
              closeIcon: true,
            },
          ]}
        />
      </>
    );
  },
};
