import React from "react";
import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "@repo/ui/src/props-table";
import { Typography } from "../..";
import * as ImageStories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "preview",
      description: formatMessage({ defaultMessage: "是否开启预览。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "simple",
      description: formatMessage({ defaultMessage: "是否开启简洁模式。" }),
      type: "boolean",
    },
    {
      name: "index",
      description: formatMessage({
        defaultMessage:
          "使用 `Image.PreviewGroup`包裹时的预览索引，一般不用指定，当多图预览顺序出现问题时，可手动指定当前 `image` 的预览顺序。",
      }),
      type: "number",
    },
    {
      name: "description",
      description: formatMessage({ defaultMessage: "描述。" }),
      type: "string",
    },
    {
      name: "src",
      description: formatMessage({ defaultMessage: "图片获取地址。" }),
      type: "string",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "标题。" }),
      type: "string",
    },
    {
      name: "footerPosition",
      description: formatMessage({ defaultMessage: "底部显示的位置。" }),
      type: "'inner' | 'outer'",
      defaultValue: "inner",
    },
    {
      name: "error",
      description: formatMessage({
        defaultMessage: "error 状态下显示的内容。",
      }),
      type: "ReactNode",
    },
    {
      name: "loader",
      description: formatMessage({
        defaultMessage: "加载过渡效果，为 true 显示默认加载效果。",
      }),
      type: "boolean | ReactNode",
    },
    {
      name: "actions",
      description: formatMessage({ defaultMessage: "额外操作。" }),
      type: "ReactNode[]",
    },
    {
      name: "height",
      description: formatMessage({ defaultMessage: "图片显示高度。" }),
      type: "string | number",
    },
    {
      name: "lazyload",
      description: formatMessage({
        defaultMessage:
          "开启懒加载 [Intersection_Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)。",
      }),
      type: "boolean | IntersectionObserverInit",
    },
    {
      name: "loaderClassName",
      description: formatMessage({
        defaultMessage: "loader 的样式，将覆盖默认过渡效果。",
      }),
      type: "string | string[]",
    },
    {
      name: "previewProps",
      description: formatMessage({
        defaultMessage:
          "预览的配置项 （所有选项都是可选的）[ImagePreviewProps](#image-preview-props)。",
      }),
      type: "PartialImagePreviewProps",
    },
    {
      name: "width",
      description: formatMessage({ defaultMessage: "图片显示宽度。" }),
      type: "string | number",
    },
  ];
  const imagePreviewData: PropsTableData[] = [
    {
      name: "closable",
      description: formatMessage({ defaultMessage: "是否显示关闭按钮。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "defaultVisible",
      description: formatMessage({ defaultMessage: "默认是否可见，非受控。" }),
      type: "boolean",
    },
    {
      name: "escToExit",
      description: formatMessage({ defaultMessage: "按 `ESC` 键关闭预览。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "maskClosable",
      description: formatMessage({
        defaultMessage: "点击 mask 是否触发关闭。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "visible",
      description: formatMessage({ defaultMessage: "是否可见，受控属性。" }),
      type: "boolean",
    },
    {
      name: "breakPoint",
      description: formatMessage({
        defaultMessage: "触发 toolbar 切换为 simple 模式的宽度。",
      }),
      type: "number",
      defaultValue: "316",
    },
    {
      name: "src",
      description: formatMessage({
        defaultMessage: "图片获取地址, 在 Image 中默认是 Image 的 src。",
      }),
      type: "string",
      required: true,
    },
    {
      name: "imgAttributes",
      description: formatMessage({
        defaultMessage: "图片属性，透传至预览弹窗中的 `img` 标签上。",
      }),
      type: "Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>",
    },
    {
      name: "extra",
      description: formatMessage({
        defaultMessage: "自定义图片预览区域的额外节点。",
      }),
      type: "ReactNode",
    },
    {
      name: "actions",
      description: formatMessage({
        defaultMessage:
          "额外操作，[ImagePreviewActionProps](#image-preview-action-props)。",
      }),
      type: "ImagePreviewActionProps[]",
    },
    {
      name: "actionsLayout",
      description: formatMessage({ defaultMessage: "控制条的布局。" }),
      type: "string[]",
      defaultValue:
        "['fullScreen', 'rotateRight', 'rotateLeft', 'zoomIn', 'zoomOut', 'originalSize', 'extra']",
    },
    {
      name: "scales",
      description: formatMessage({
        defaultMessage:
          "在预览缩放时会使用当前数组中的缩放百分比。若不包含 `100%`，则会自动添加在最相邻的位置。",
      }),
      type: "number[]",
      defaultValue:
        "[25, 33, 50, 67, 75, 80, 90, 100, 110, 125, 150, 175, 200, 250, 300, 400, 500];",
    },
    {
      name: "getPopupContainer",
      description: formatMessage({ defaultMessage: "弹出层挂载的节点。" }),
      type: "() => HTMLElement",
      defaultValue: "() => document.body",
    },
    {
      name: "imageRender",
      description: formatMessage({ defaultMessage: "自定义 IMG 元素的渲染。" }),
      type: "(originalNode: ReactElement) => ReactNode",
    },
    {
      name: "onVisibleChange",
      description: formatMessage({
        defaultMessage: "切换可见状态触发的事件。",
      }),
      type: "(visible: boolean, preVisible: boolean) => void",
    },
  ];
  const imagePreviewGroupData: PropsTableData[] = [
    {
      name: "closable",
      description: formatMessage({ defaultMessage: "是否显示关闭按钮。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "defaultVisible",
      description: formatMessage({ defaultMessage: "默认是否可见，非受控。" }),
      type: "boolean",
    },
    {
      name: "escToExit",
      description: formatMessage({ defaultMessage: "按 `ESC` 键关闭预览。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "infinite",
      description: formatMessage({ defaultMessage: "是否无限循环。" }),
      type: "boolean",
    },
    {
      name: "maskClosable",
      description: formatMessage({
        defaultMessage: "点击 mask 是否触发关闭。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "renderImages",
      description: formatMessage({
        defaultMessage: "是否渲染图片列表，用于提前加载图片。",
      }),
      type: "boolean",
    },
    {
      name: "visible",
      description: formatMessage({ defaultMessage: "是否可见，受控属性。" }),
      type: "boolean",
    },
    {
      name: "breakPoint",
      description: formatMessage({
        defaultMessage: "触发 toolbar 切换为 simple 模式的宽度。",
      }),
      type: "number",
      defaultValue: "316",
    },
    {
      name: "current",
      description: formatMessage({
        defaultMessage: "当前展示的图片的下标 (受控属性)。",
      }),
      type: "number",
    },
    {
      name: "defaultCurrent",
      description: formatMessage({
        defaultMessage: "第一张展示的图片的下标。",
      }),
      type: "number",
    },
    {
      name: "imgAttributes",
      description: formatMessage({
        defaultMessage: "图片属性，透传至预览弹窗中的 `img` 标签上。",
      }),
      type: "Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>",
    },
    {
      name: "extra",
      description: formatMessage({
        defaultMessage: "自定义图片预览区域的额外节点。",
      }),
      type: "ReactNode",
    },
    {
      name: "actions",
      description: formatMessage({
        defaultMessage:
          "额外操作，[ImagePreviewActionProps](#image-preview-action-props)。",
      }),
      type: "ImagePreviewActionProps[]",
    },
    {
      name: "actionsLayout",
      description: formatMessage({ defaultMessage: "控制条的布局。" }),
      type: "string[]",
      defaultValue:
        "['fullScreen', 'rotateRight', 'rotateLeft', 'zoomIn', 'zoomOut', 'originalSize', 'extra']",
    },
    {
      name: "scales",
      description: formatMessage({
        defaultMessage:
          "在预览缩放时会使用当前数组中的缩放百分比。若不包含 `100%`，则会自动添加在最相邻的位置。",
      }),
      type: "number[]",
      defaultValue:
        "[25, 33, 50, 67, 75, 80, 90, 100, 110, 125, 150, 175, 200, 250, 300, 400, 500];",
    },
    {
      name: "srcList",
      description: formatMessage({
        defaultMessage:
          "图片列表 （设置了本属性之后，将不再收集 Image 子组件的图片信息）。",
      }),
      type: "string[]",
    },
    {
      name: "getPopupContainer",
      description: formatMessage({ defaultMessage: "弹出层挂载的节点。" }),
      type: "() => HTMLElement",
      defaultValue: "() => document.body",
    },
    {
      name: "imageRender",
      description: formatMessage({ defaultMessage: "自定义 IMG 元素的渲染。" }),
      type: "(originalNode: ReactElement) => ReactNode",
    },
    {
      name: "onChange",
      description: formatMessage({ defaultMessage: "切换图片触发的事件。" }),
      type: "(index: number) => void",
    },
    {
      name: "onVisibleChange",
      description: formatMessage({
        defaultMessage: "切换可见状态触发的事件。",
      }),
      type: "(visible: boolean, preVisible: boolean) => void",
    },
  ];
  const imagePreviewActionsData: PropsTableData[] = [
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "是否禁用。" }),
      type: "boolean",
    },
    {
      name: "key",
      description: formatMessage({ defaultMessage: "唯一标识。" }),
      type: "string",
      required: true,
    },
    {
      name: "name",
      description: formatMessage({ defaultMessage: "名称。" }),
      type: "string",
    },
    {
      name: "content",
      description: formatMessage({ defaultMessage: "内容。" }),
      type: "ReactNode",
      required: true,
    },
    {
      name: "getContainer",
      description: formatMessage({
        defaultMessage:
          "因为 content 只能定义内容，所以提供这个函数用于支持自定义外围元素，需要注意的是设置了 `getContainer`, 显示 `name` 的 `Tooltip` 将失效。",
      }),
      type: "(actionElement: ReactNode) => ReactNode",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "图片 Image" })}</Title>
      <Paragraph>
        {formatMessage({ defaultMessage: "展示和预览图片。" })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "需要查看图片的时候，简单的设置 src 属性，就能获得一个有预览图片功能的组件。",
        })}
      </Paragraph>
      <Canvas of={ImageStories.Basic} />

      <Title heading={3} id="caption">
        {formatMessage({ defaultMessage: "图片的说明文字" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过设置 title 和 description 可以将图片的标题和描述显示在图片内部或者底部，显示的位置通过 footerPosition 控制。",
        })}
      </Paragraph>
      <Canvas of={ImageStories.Caption} />

      <Title heading={3} id="actions">
        {formatMessage({ defaultMessage: "额外操作" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "额外操作通过 actions 设置，默认情况下水平排列，如果您的操作按钮比较多，我们也提供了 simple 模式将按钮收入一个下拉框中，但是需要注意的是在 simple 模式下，描述将不显示。",
        })}
      </Paragraph>
      <Canvas of={ImageStories.Actions} />

      <Title heading={3} id="error">
        {formatMessage({ defaultMessage: "错误状态" })}
      </Title>
      <Paragraph>
        {formatMessage({ defaultMessage: "当加载图片失败的时候显示的内容。" })}
      </Paragraph>
      <Canvas of={ImageStories.Error} />

      <Title heading={3} id="loading">
        {formatMessage({ defaultMessage: "加载状态" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "默认情况下，加载效果是不显示的，可通过设置 loader=true 显示默认加载效果。如果默认加载效果不符合需求。还可以通过 loaderClassName 自行设置加载样式。",
        })}
      </Paragraph>
      <Canvas of={ImageStories.Loading} />

      <Title heading={3} id="progressive-loading">
        {formatMessage({ defaultMessage: "加载状态" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "大图可通过给 loader 传递一个小一些的图片，让其在原图未被加载成功时显示，以此来模拟渐进加载。",
        })}
      </Paragraph>
      <Canvas of={ImageStories.ProgressiveLoading} />

      <Title heading={3} id="custom-preview">
        {formatMessage({ defaultMessage: "自定义预览控制条" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过设置 actionsLayout 可以调整预览控制条中功能按钮的顺序，同时可以过滤功能按钮，只有在 actionsLayout 中的按钮才会出现。其中 extra 代表 actions 中的按钮，而且 actions 中的 key 也支持单独拿出来排序。",
        })}
      </Paragraph>
      <Canvas of={ImageStories.CustomPreview} />

      <Title heading={3} id="preview-group">
        {formatMessage({ defaultMessage: "多图预览" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "用 Image.PreviewGroup 包裹 Image 组件即可进行多图预览。",
        })}
      </Paragraph>
      <Canvas of={ImageStories.PreviewGroup} />

      <Title heading={3} id="preview">
        {formatMessage({ defaultMessage: "单独使用预览组件" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "Image.Preview 可单独使用，需要配置 src，并控制 visible。",
        })}
      </Paragraph>
      <Canvas of={ImageStories.Preview} />

      <Title heading={3} id="preview-group-standalone">
        {formatMessage({ defaultMessage: "单独使用多图预览组件" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "Image.PreviewGroup 可单独使用，需通过 visible 和 onVisibleChange 控制显隐。在图片的展示上分为两种场景，一是通过 defaultCurrent 指定第一张展示的图片；二是通过 current 和 onChange 以受控的方式控制当前显示的是第几张图片。",
        })}
      </Paragraph>
      <Canvas of={ImageStories.PreviewGroupStandalone} />

      <Title heading={3} id="popup-container">
        {formatMessage({ defaultMessage: "挂载节点" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "可以通过 getPopupContainer 指定预览挂载的父级节点。",
        })}
      </Paragraph>
      <Canvas of={ImageStories.PopupContainer} />

      <Title heading={3} id="lazyload">
        {formatMessage({ defaultMessage: "懒加载" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "设置 lazyload 可以开启懒加载，当图片出现在视口才会进行加载。lazyload 属性基于 IntersectionObserver API 实现。",
        })}
      </Paragraph>
      <Canvas of={ImageStories.Lazyload} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Image, type ImageProps } from "growingio-design";`}
        language="tsx"
      />

      <Title id="props" heading={3}>
        ImageProps
      </Title>
      <PropsTable data={data} />

      <Title id="image-preview-props" heading={3}>
        Image.Preview Props
      </Title>
      <PropsTable data={imagePreviewData} />

      <Title id="image-preview-group-props" heading={3}>
        Image.PreviewGroup Props
      </Title>
      <PropsTable data={imagePreviewGroupData} />

      <Title id="image-preview-action-props" heading={3}>
        ImagePreviewActionProps
      </Title>
      <PropsTable data={imagePreviewActionsData} />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
