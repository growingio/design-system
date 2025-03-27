import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import { Canvas, Source, Unstyled } from "@storybook/blocks";
import { injectIntl, IntlShape } from "react-intl";
import * as Stories from "./index.stories";

const { Title, Paragraph } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "autoUpload",
      description: formatMessage({ defaultMessage: "是否选中文件后自动上传。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "directory",
      description: formatMessage({ defaultMessage: "文件夹上传。" }),
      type: "boolean",
    },
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "禁用。" }),
      type: "boolean",
    },
    {
      name: "drag",
      description: formatMessage({ defaultMessage: "是否拖拽上传。" }),
      type: "boolean",
    },
    {
      name: "imagePreview",
      description: formatMessage({
        defaultMessage: "启用内置的图片预览，仅在 listType='picture-card' 时生效。",
      }),
      type: "boolean",
    },
    {
      name: "multiple",
      description: formatMessage({ defaultMessage: "文件多选。" }),
      type: "boolean",
    },
    {
      name: "withCredentials",
      description: formatMessage({ defaultMessage: "上传请求是否携带 cookie。" }),
      type: "boolean",
    },
    {
      name: "action",
      description: formatMessage({ defaultMessage: "上传接口地址。" }),
      type: "string",
    },
    {
      name: "method",
      description: formatMessage({ defaultMessage: "上传请求的 http method。" }),
      type: "string",
      defaultValue: "post",
    },
    {
      name: "listType",
      description: formatMessage({ defaultMessage: "展示类型。" }),
      type: "'text' | 'picture-list' | 'picture-card'",
      defaultValue: "text",
    },
    {
      name: "tip",
      description: formatMessage({ defaultMessage: "提示文字，listType 不同，展示会有区别。" }),
      type: "string | React.ReactNode",
    },
    {
      name: "accept",
      description: formatMessage({
        defaultMessage:
          "接受上传的类型 [详细请参考](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)。（`strict` in `2.53.0`，默认为 true。设置为 false 时，accept 表现和原生一致。设置为 true 时，会严格匹配文件后缀名，过滤掉不符合 accept 规则的文件。)",
      }),
      type: "string | { type: string; strict?: boolean }",
    },
    {
      name: "beforeUpload",
      description: formatMessage({
        defaultMessage: "上传文件之前的回调。返回 false 或者 promise抛出异常的时候会取消上传。",
      }),
      type: "(file: File, filesList: File[]) => boolean | Promise<any>",
      defaultValue: "() => true",
    },
    {
      name: "defaultFileList",
      description: formatMessage({ defaultMessage: "默认已上传的文件列表。" }),
      type: "UploadItem[]",
    },
    {
      name: "fileList",
      description: formatMessage({ defaultMessage: "已上传的文件列表。" }),
      type: "UploadItem[]",
    },
    {
      name: "headers",
      description: formatMessage({ defaultMessage: "上传时使用的 headers。" }),
      type: "object",
    },
    {
      name: "limit",
      description: formatMessage({
        defaultMessage: "限制上传数量。默认超出后会隐藏上传节点。对象类型在 `2.28.0` 支持。",
      }),
      type: "number | { maxCount: number; hideOnExceedLimit?: boolean }",
    },
    {
      name: "onRemove",
      description: formatMessage({
        defaultMessage:
          "点击删除文件时的回调。返回 `false` 或者 `Promise.reject` 的时候不会执行删除。",
      }),
      type: "(file: UploadItem, fileList: UploadItem[]) => void | boolean | Promise<void | boolean>",
    },
    {
      name: "progressProps",
      description: formatMessage({ defaultMessage: "进度条属性，接收所有进度条的 props。" }),
      type: "Partial<ProgressProps>",
    },
    {
      name: "showUploadList",
      description: formatMessage({
        defaultMessage:
          "是否展示上传文件列表。预览图标，删除图标，文件图标，重新上传图标，取消上传图标。",
      }),
      type: "boolean | CustomIconType",
      defaultValue: "true",
    },
    {
      name: "customRequest",
      description: formatMessage({
        defaultMessage: "通过覆盖默认的上传行为，可以自定义自己的上传实现。",
      }),
      type: "(options: RequestOptions) => UploadRequestReturn | void",
    },
    {
      name: "data",
      description: formatMessage({ defaultMessage: "上传时的 Body 参数。" }),
      type: "object | ((any: any) => object)",
    },
    {
      name: "name",
      description: formatMessage({ defaultMessage: "发请求时文件内容的参数名。" }),
      type: "string | ((any: any) => string)",
    },
    {
      name: "onChange",
      description: formatMessage({
        defaultMessage:
          "上传文件改变时的回调。文件开始上传，失败，成功时会触发。注意：如果需要实时获取文件的上传进度，请在 `onProgress` 中处理。",
      }),
      type: "(fileList: UploadItem[], file: UploadItem) => void",
    },
    {
      name: "onDragLeave",
      description: formatMessage({ defaultMessage: "拖拽上传文件离开拖拽区时的回调。" }),
      type: "(e: React.DragEvent) => void",
    },
    {
      name: "onDragOver",
      description: formatMessage({ defaultMessage: "拖拽上传文件进入拖拽区时的回调。" }),
      type: "(e: React.DragEvent) => void",
    },
    {
      name: "onDrop",
      description: formatMessage({ defaultMessage: "拖拽上传文件时执行的回调。" }),
      type: "(e: React.DragEvent) => void",
    },
    {
      name: "onExceedLimit",
      description: formatMessage({ defaultMessage: "超出上传数量限制时触发。" }),
      type: "(files: File[], fileList: UploadItem[]) => void",
    },
    {
      name: "onPreview",
      description: formatMessage({ defaultMessage: "点击预览时候的回调。" }),
      type: "(file: UploadItem) => void",
    },
    {
      name: "onProgress",
      description: formatMessage({ defaultMessage: "文件上传进度的回调。" }),
      type: "(file: UploadItem, e?: ProgressEvent) => void",
    },
    {
      name: "onReupload",
      description: formatMessage({ defaultMessage: "文件重新上传时触发的回调。" }),
      type: "(file: UploadItem) => void",
    },
    {
      name: "renderUploadItem",
      description: formatMessage({ defaultMessage: "自定义上传列表项。" }),
      type: "(originNode: ReactNode, file: UploadItem, fileList: UploadItem[]) => ReactNode",
    },
    {
      name: "renderUploadList",
      description: formatMessage({ defaultMessage: "自定义展示上传文件列表。" }),
      type: "(fileList: UploadItem[], uploadListProps: UploadListProps) => ReactNode",
    },
  ];
  const uploadListPropsData: PropsTableData[] = [
    {
      name: "disabled",
      description: formatMessage({ defaultMessage: "禁用。" }),
      type: "boolean",
    },
    {
      name: "onRemove",
      description: formatMessage({
        defaultMessage: "点击删除文件时的回调。返回 false 或者 Promise.reject 的时候不会执行删除。",
      }),
      type: "(file: UploadItem) => void | boolean | Promise<void | boolean>",
    },
    {
      name: "onAbort",
      description: formatMessage({ defaultMessage: "中止文件上传的回调。" }),
      type: "(file: UploadItem) => void",
    },
    {
      name: "onPreview",
      description: formatMessage({ defaultMessage: "点击预览时候的回调。" }),
      type: "(file: UploadItem) => void",
    },
    {
      name: "onReupload",
      description: formatMessage({ defaultMessage: "重新上传的回调。" }),
      type: "(file: UploadItem) => void",
    },
  ];
  const uploadItemData: PropsTableData[] = [
    {
      name: "percent",
      description: formatMessage({ defaultMessage: "上传进度百分比。" }),
      type: "number",
    },
    {
      name: "name",
      description: formatMessage({ defaultMessage: "文件名。" }),
      type: "string",
    },
    {
      name: "uid",
      description: formatMessage({ defaultMessage: "当前上传文件的唯一标示。" }),
      type: "string",
      required: true,
    },
    {
      name: "url",
      description: formatMessage({ defaultMessage: "文件 url。" }),
      type: "string",
    },
    {
      name: "originFile",
      description: formatMessage({ defaultMessage: "文件对象。" }),
      type: "File",
    },
    {
      name: "response",
      description: formatMessage({ defaultMessage: "当前文件上传请求返回的响应。" }),
      type: "object",
    },
    {
      name: "status",
      description: formatMessage({ defaultMessage: "当前上传文件的状态。" }),
      type: "UploadStatus",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "上传 Upload" })}</Title>
      <Paragraph>{formatMessage({ defaultMessage: "文件选择上传和拖拽上传控件。" })}</Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="default">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={Stories.Default} />

      <Title heading={3} id="disable">
        {formatMessage({ defaultMessage: "禁用状态" })}
      </Title>
      <Canvas of={Stories.Disabled} />

      <Title heading={3} id="file-list">
        {formatMessage({ defaultMessage: "文件列表" })}
      </Title>
      <Canvas of={Stories.FileList} />

      <Title heading={3} id="picture-card">
        {formatMessage({ defaultMessage: "图片卡片样式" })}
      </Title>
      <Canvas of={Stories.PictureCard} />

      <Title heading={3} id="picture-list">
        {formatMessage({ defaultMessage: "图片列表样式" })}
      </Title>
      <Canvas of={Stories.PictureList} />

      <Title heading={3} id="drag-and-drop">
        {formatMessage({ defaultMessage: "拖拽上传" })}
      </Title>
      <Canvas of={Stories.DragAndDrop} />

      <Title heading={3} id="manual-upload">
        {formatMessage({ defaultMessage: "手动上传" })}
      </Title>
      <Paragraph>
        {formatMessage({ defaultMessage: "设置 autoUpload 为 false 时候，需要手动触发文件上传。" })}
      </Paragraph>
      <Canvas of={Stories.ManualUpload} />

      <Title heading={3} id="before-upload">
        {formatMessage({ defaultMessage: "自定义上传前钩子" })}
      </Title>
      <Canvas of={Stories.BeforeUpload} />

      <Title heading={3} id="upload-limit">
        {formatMessage({ defaultMessage: "上传限制" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "多选时，指定 uploadLimit 属性以限制上传文件个数。",
        })}
      </Paragraph>
      <Canvas of={Stories.UploadLimit} />

      <Title heading={3} id="hide-on-exceed-limit">
        {formatMessage({ defaultMessage: "超出限制时隐藏" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "当文件个数超过限制时，隐藏上传按钮。",
        })}
      </Paragraph>
      <Canvas of={Stories.HideOnExceedLimit} />

      <Title heading={3} id="progress">
        {formatMessage({ defaultMessage: "自定义进度条" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "progressProps 字段可以自定义进度条属性。",
        })}
      </Paragraph>
      <Canvas of={Stories.ProgressProps} />

      <Title heading={3} id="directory-upload">
        {formatMessage({ defaultMessage: "目录上传" })}
      </Title>
      <Canvas of={Stories.DirectoryUpload} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source
        code={`import { Upload, type UploadProps } from "@gio-design/react";`}
        language="typescript"
      />

      <Title id="props" heading={3}>
        UploadProps
      </Title>
      <PropsTable data={data} />

      <Title id="upload-list-props" heading={3}>
        UploadListProps
      </Title>
      <PropsTable data={uploadListPropsData} />

      <Title id="upload-item" heading={3}>
        UploadItem
      </Title>
      <PropsTable data={uploadItemData} />

      <Title id="request-options" heading={3}>
        RequestOptions
      </Title>
      <Source
        code={`export type RequestOptions = Pick<
  UploadProps,
  "headers" | "name" | "data" | "withCredentials" | "action" | "method"
> & {
  onProgress: (percent: number, event?: ProgressEvent) => void;
  onSuccess: (response?: object) => void;
  onError: (response?: object) => void;
  file: File;
};`}
        language="typescript"
      />

      <Title id="upload-request-return" heading={3}>
        UploadRequestReturn
      </Title>
      <Source
        code={`export interface UploadRequestReturn {
  abort?: () => void;
  [key: string]: any;
}`}
        language="typescript"
      />

      <Title id="custom-icon-type" heading={3}>
        CustomIconType
      </Title>
      <Source
        code={`export type CustomIconType = {
  previewIcon?: ReactNode;
  removeIcon?: ReactNode;
  fileIcon?: ReactNode;
  reuploadIcon?: ReactNode;
  cancelIcon?: ReactNode;
  startIcon?: ReactNode;
  errorIcon?: ReactNode;
  successIcon?: ReactNode;
  fileName?: (file: UploadItem) => ReactNode;
  progressRender?: (
    file: UploadItem,
    originDom: ReactNode
  ) => React.ReactElement;
  imageRender?: (file: UploadItem) => React.ReactNode;
};`}
        language="typescript"
      />

      <Title id="upload-status" heading={3}>
        UploadStatus
      </Title>
      <Source
        code={`export type UploadStatus = "init" | "uploading" | "done" | "error";`}
        language="typescript"
      />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
