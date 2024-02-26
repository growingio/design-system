import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button, Image, Skeleton, Space, Tooltip } from '../..';
import {
  IconEye,
  IconDownload,
  IconInfoCircle,
} from '@arco-iconbox/react-growingio';
import classes from './index.module.css';

const meta: Meta<typeof Image> = {
  component: Image,
  title: 'Base/Image',
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Basic: Story = {
  args: {
    width: 200,
    src: '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
    alt: 'Rustic black pendant light with a warm glowing bulb, hanging from a ceiling indoors.',
  },
  render: (args) => <Image {...args} />,
};

export const Caption: Story = {
  args: {
    ...Basic.args,
    title: 'Rustic Glow',
    description: 'A rustic-style pendant light with a black shade.',
  },
  render: (args) => (
    <Space size={60} align="start">
      <Image {...args} />
      <Image {...args} footerPosition="outer" />
    </Space>
  ),
};

export const Actions: Story = {
  args: {
    ...Caption.args,
  },
  render: (args) => {
    function DemoImage(props) {
      const [visible, setVisible] = useState(false);
      return (
        <Image
          actions={[
            <button
              key="1"
              className={classes.imageDemoActionItem}
              onClick={() => {
                setVisible(true);
              }}
            >
              <IconEye />
            </button>,
            <button
              key="2"
              className={classes.imageDemoActionItem}
              onClick={() => {
                console.log('download');
              }}
            >
              <IconDownload />
            </button>,
            <Tooltip key="3" content={args.alt}>
              <button className={classes.imageDemoActionItem}>
                <IconInfoCircle />
              </button>
            </Tooltip>,
          ]}
          previewProps={{
            visible,
            onVisibleChange: () => {
              setVisible(false);
            },
          }}
          {...props}
        />
      );
    }

    return (
      <Space direction="vertical" size="large">
        <Space size={20} align="start">
          <DemoImage {...args} width={300} />
          <DemoImage {...args} width={200} simple={true} />
        </Space>
        <Space size={20} align="start">
          <DemoImage {...args} width={300} footerPosition="outer" />
          <DemoImage
            {...args}
            width={200}
            simple={true}
            footerPosition="outer"
          />
        </Space>
      </Space>
    );
  },
};

export const Error: Story = {
  render: (args) => (
    <Space size={20}>
      <Image
        {...args}
        width={400}
        height={300}
        src="some-error.png"
        alt="some-error"
      />
      <Image
        {...args}
        width={400}
        height={300}
        src="some-error.png"
        alt="This is a picture of humans eating ice cream. The humans on the screen are very happy just now. The ice cream is green, it seems to be flavored with matcha. The gender of the human is unknown. It has very long hair and the human hair is brown."
      />
    </Space>
  ),
};

export const Loading: Story = {
  args: {
    ...Caption.args,
  },
  render: (args) => {
    const [timestamp, setTimestamp] = React.useState<number>();
    return (
      <Space direction="vertical">
        <Button
          type="primary"
          onClick={() => {
            setTimestamp(Date.now());
          }}
        >
          Reload
        </Button>
        <Space size={20}>
          <Image
            {...args}
            src={`//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp?timestamp=${timestamp}`}
            loader={true}
          />
          <Image
            {...args}
            src={`//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp?timestamp=${timestamp}`}
            loaderClassName={classes.imageDemoLoaderAnimate}
          />
        </Space>
      </Space>
    );
  },
};

export const ProgressiveLoading: Story = {
  args: {
    ...Caption.args,
  },
  render: (args) => {
    const [timestamp, setTimestamp] = React.useState<number>();
    return (
      <Space direction="vertical">
        <Button
          type="primary"
          onClick={() => {
            setTimestamp(Date.now());
          }}
        >
          Reload
        </Button>
        <Space size={20}>
          <Image
            {...args}
            src={`//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp?timestamp=${timestamp}`}
            loader={
              <img
                width={200}
                src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
                style={{
                  filter: 'blur(5px)',
                }}
              />
            }
          />
        </Space>
      </Space>
    );
  },
};

export const CustomPreview: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    previewProps: {
      actions: [
        {
          key: 'download',
          content: <IconDownload />,
          name: 'Download',
        },
        {
          key: 'info',
          content: <IconInfoCircle />,
          name: 'Info',
          getContainer: (action) => {
            return <Tooltip content={Basic.args.alt}>{action}</Tooltip>;
          },
        },
      ],
      actionsLayout: ['info', 'rotateRight', 'zoomIn', 'zoomOut', 'extra'],
    },
  },
};

const srcList = [
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp',
];
export const PreviewGroup: Story = {
  args: {
    width: 200,
  },
  render: (args) => {
    return (
      <Image.PreviewGroup infinite>
        <Space>
          {srcList.map((src, index) => (
            <Image {...args} key={index} src={src} alt={`lamp${index + 1}`} />
          ))}
        </Space>
      </Image.PreviewGroup>
    );
  },
};

type PreviewStory = StoryObj<typeof Image.Preview>;
export const Preview: PreviewStory = {
  args: {
    src: Basic.args.src,
  },
  render: (args) => {
    const [visible, setVisible] = React.useState(false);
    return (
      <>
        <Button type="primary" onClick={() => setVisible(true)}>
          Click to preview image
        </Button>
        <Image.Preview
          {...args}
          visible={visible}
          onVisibleChange={setVisible}
        />
      </>
    );
  },
};

type PreviewGroupStory = StoryObj<typeof Image.PreviewGroup>;
export const PreviewGroupStandalone: PreviewGroupStory = {
  args: {
    srcList,
  },
  render: (args) => {
    const [visible, setVisible] = React.useState(false);

    return (
      <>
        <Button type="primary" onClick={() => setVisible(true)}>
          Click to preview all images
        </Button>
        <Image.PreviewGroup
          {...args}
          visible={visible}
          onVisibleChange={setVisible}
        />
      </>
    );
  },
};

export const PopupContainer: Story = {
  args: {
    ...Basic.args,
  },
  render: (args) => {
    const ref = React.useRef();
    return (
      <div className={classes.imageDemoPopupContainer} ref={ref}>
        <Image
          {...args}
          previewProps={{
            getPopupContainer: () => ref.current,
            closable: false,
          }}
        />
      </div>
    );
  },
};

const imageSize = {
  width: 380,
  height: 150,
};
export const Lazyload: Story = {
  args: {
    ...imageSize,
    alt: 'lamp',
    lazyload: { threshold: 0.5 },
    loader: <Skeleton image={{ style: imageSize }} text={false} animation />,
  },
  render: (args) => (
    <Space direction="vertical" size={50} className={classes.imageDemoLazyload}>
      {[
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/volcengine-solutions-medical.png~tplv-uwbnlip3yd-png.png',
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/volcengine-solutions-automotive.png~tplv-uwbnlip3yd-png.png',
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/volcengine-solutions-tourism.png~tplv-uwbnlip3yd-png.png',
        '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/volcengine-solutions-finance.png~tplv-uwbnlip3yd-png.png',
      ].map((src, key) => (
        <Image {...args} key={key} src={src} />
      ))}
    </Space>
  ),
};
