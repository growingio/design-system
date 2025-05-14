import { injectIntl, IntlShape } from "react-intl";
import { Canvas, Unstyled, Source } from "@storybook/blocks";
import PropsTable, { type PropsTableData } from "@/components/props-table";
import { Typography } from "@/src";
import * as ModalStories from "./index.stories";

const { Title, Paragraph, Text } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;

  const data: PropsTableData[] = [
    {
      name: "alignCenter",
      description: formatMessage({ defaultMessage: "弹出框垂直水平居中。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "autoFocus",
      description: formatMessage({
        defaultMessage: "是否默认聚焦第一个可聚焦元素，只在 `focusLock` 开启时生效。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "closable",
      description: formatMessage({
        defaultMessage: "是否显示右上角的关闭按钮。",
      }),
      type: "boolean",
    },
    {
      name: "confirmLoading",
      description: formatMessage({ defaultMessage: "确认按钮加载中。" }),
      type: "boolean",
    },
    {
      name: "escToExit",
      description: formatMessage({ defaultMessage: "按 `ESC` 键关闭。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "focusLock",
      description: formatMessage({
        defaultMessage: "是否将焦点锁定在弹出框内。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "mask",
      description: formatMessage({ defaultMessage: "是否显示遮罩。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "maskClosable",
      description: formatMessage({ defaultMessage: "点击蒙层是否可以关闭。" }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "mountOnEnter",
      description: formatMessage({
        defaultMessage: "是否在初次打开对话框时才渲染 dom。",
      }),
      type: "boolean",
      defaultValue: "true",
    },
    {
      name: "simple",
      description: formatMessage({
        defaultMessage:
          "简洁模式的样式，没有分割线，底部按钮居中显示。默认通过方法调用的提示类型的弹窗会展示`simple`样式。设置为true时，默认不显示右上角关闭图标。",
      }),
      type: "boolean",
    },
    {
      name: "unmountOnExit",
      description: formatMessage({
        defaultMessage: "是否在隐藏之后销毁DOM结构。",
      }),
      type: "boolean",
    },
    {
      name: "visible",
      description: formatMessage({ defaultMessage: "弹出框是否可见。" }),
      type: "boolean",
    },
    {
      name: "cancelText",
      description: formatMessage({ defaultMessage: "取消按钮文案。" }),
      type: "ReactNode",
    },
    {
      name: "closeIcon",
      description: formatMessage({
        defaultMessage: "自定义右上角的关闭按钮节点。",
      }),
      type: "ReactNode",
    },
    {
      name: "okText",
      description: formatMessage({ defaultMessage: "确认按钮文案。" }),
      type: "ReactNode",
    },
    {
      name: "title",
      description: formatMessage({ defaultMessage: "弹出框的标题。" }),
      type: "string | ReactNode",
    },
    {
      name: "cancelButtonProps",
      description: formatMessage({
        defaultMessage: "取消按钮的 [props](/docs/base-button--docs#button-props)。",
      }),
      type: "ButtonProps",
    },
    {
      name: "maskStyle",
      description: formatMessage({ defaultMessage: "蒙层的样式。" }),
      type: "CSSProperties",
    },
    {
      name: "okButtonProps",
      description: formatMessage({
        defaultMessage: "确认按钮的 [props](/docs/base-button--docs#button-props)。",
      }),
      type: "ButtonProps",
    },
    {
      name: "onOk",
      description: formatMessage({ defaultMessage: "点击确认按钮的回调。" }),
      type: "(e?: MouseEvent) => Promise<any> | void",
    },
    {
      name: "wrapClassName",
      description: formatMessage({ defaultMessage: "弹出框外层 DOM 类名。" }),
      type: "string | string[]",
    },
    {
      name: "wrapStyle",
      description: formatMessage({ defaultMessage: "弹出框外层样式。" }),
      type: "CSSProperties",
    },
    {
      name: "afterClose",
      description: formatMessage({ defaultMessage: "弹框关闭之后的回调。" }),
      type: "() => void",
    },
    {
      name: "afterOpen",
      description: formatMessage({ defaultMessage: "弹框打开之后的回调。" }),
      type: "() => void",
    },
    {
      name: "footer",
      description: formatMessage({
        defaultMessage: "自定义页脚，传入 null 则不显示。",
      }),
      type: "ReactNode | ((cancelButtonNode: ReactNode, okButtonNode: ReactNode) => ReactNode)",
    },
    {
      name: "getChildrenPopupContainer",
      description: formatMessage({
        defaultMessage: "对话框里的弹出框 `Select` `Tooltip` 等挂载的容器，默认挂载在对话框内。",
      }),
      type: "(node: HTMLElement) => Element",
    },
    {
      name: "getPopupContainer",
      description: formatMessage({
        defaultMessage: "指定弹出框挂载的父节点。",
      }),
      type: "() => Element",
      defaultValue: "() => document.body",
    },
    {
      name: "modalRender",
      description: formatMessage({ defaultMessage: "自定义渲染对话框。" }),
      type: "(modalNode: ReactNode) => ReactNode",
    },
    {
      name: "onCancel",
      description: formatMessage({ defaultMessage: "关闭弹出框的回调。" }),
      type: "() => void",
    },
    {
      name: "fullscreen",
      description: formatMessage({
        defaultMessage: "全屏模式。当此项打开后，`alignCenter` 选项会失效。",
      }),
      type: "boolean",
    },
  ];

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "对话框 Modal" })}</Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "在当前页面打开一个浮层，承载相关操作。",
        })}
      </Paragraph>

      <Title heading={2}>{formatMessage({ defaultMessage: "示例" })}</Title>

      <Title heading={3} id="basic">
        {formatMessage({ defaultMessage: "基础用法" })}
      </Title>
      <Canvas of={ModalStories.Basic} />

      <Title heading={3} id="footer">
        {formatMessage({ defaultMessage: "自定义页脚" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "传入 okButtonProps 和 cancelButtonProps 可分别自定义确定按钮和取消按钮的 props。如果 okButtonProps、cancelButtonProps 仍然不能满足需要的话，可以直接传入 footer 来自定义页脚内容。",
        })}
      </Paragraph>
      <Canvas of={ModalStories.Footer} />

      <Title heading={3} id="title">
        {formatMessage({ defaultMessage: "自定义标题" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "title 支持传入文字或者 react 节点，支持各种场景的标题栏展示。",
        })}
      </Paragraph>
      <Canvas of={ModalStories.Title} />

      <Title heading={3} id="confirm">
        {formatMessage({ defaultMessage: "确认对话框" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "使用 Modal.confirm()，可以快速弹出对话框。",
        })}
      </Paragraph>
      <Canvas of={ModalStories.Confirm} />

      <Title heading={3} id="messages">
        {formatMessage({ defaultMessage: "消息提示" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "有 info, success, warning, error 四种类型的消息提示，仅提供一个确认按钮用于关闭消息提示对话框。",
        })}
      </Paragraph>
      <Canvas of={ModalStories.Messages} />

      <Title heading={3} id="button-text">
        {formatMessage({ defaultMessage: "定制按钮文字" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "设置 okText 与 cancelText 以自定义按钮文字。",
        })}
      </Paragraph>
      <Canvas of={ModalStories.ButtonText} />

      <Title heading={3} id="instance">
        {formatMessage({ defaultMessage: "手动更新和移除" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "手动更新和关闭通过 Modal 的方法创建的对话框。",
        })}
      </Paragraph>
      <Canvas of={ModalStories.Instance} />

      <Title heading={3} id="position">
        {formatMessage({ defaultMessage: "自定义位置" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "使用 alignCenter 结合 style 来设置对话框位置。",
        })}
      </Paragraph>
      <Canvas of={ModalStories.Position} />

      <Title heading={3} id="scroll-content">
        {formatMessage({ defaultMessage: "常规文本不溢出" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "当出现过长的弹窗（页面内容无法在浏览器窗口展示），则弹窗保持与页面顶部、底部48px间距，弹窗中的内容区域滚动。",
        })}
      </Paragraph>
      <Canvas of={ModalStories.ScrollContent} />

      <Title heading={3} id="long-content">
        {formatMessage({ defaultMessage: "文本溢出" })}
      </Title>
      <Canvas of={ModalStories.LongContent} />

      <Title heading={3} id="fullscreen">
        {formatMessage({ defaultMessage: "全屏模式" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "全屏模式默认居中对齐。上下左右间距固定 48px，随浏览器改变改变。",
        })}
      </Paragraph>
      <Canvas of={ModalStories.Fullscreen} />

      <Title heading={3} id="loading">
        {formatMessage({ defaultMessage: "数据请求加载" })}
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage: "对话框中显示 loading 效果。",
        })}
      </Paragraph>
      <Canvas of={ModalStories.Loading} />

      <Title heading={3} id="modal-with-alert">
        {formatMessage({ defaultMessage: "带有通知对话框" })}
      </Title>
      <Canvas of={ModalStories.ModalWithAlert} />

      <Title heading={3} id="modal-with-steps">
        {formatMessage({ defaultMessage: "带有步骤条对话框" })}
      </Title>
      <Canvas of={ModalStories.ModalWithSteps} />

      <Title heading={3} id="hooks">
        {formatMessage({ defaultMessage: "Hooks" })}
      </Title>
      <Canvas of={ModalStories.Hooks} />

      <Title heading={2}>{formatMessage({ defaultMessage: "用法" })}</Title>
      <Source code={`import { Modal, type ModalProps } from "growingio-design";`} language="tsx" />

      <Title id="props" heading={3}>
        ModalProps
      </Title>
      <PropsTable data={data} />

      <Title id="modal-method" heading={3}>
        Modal.method(config)
      </Title>
      <Paragraph>{formatMessage({ defaultMessage: "包括以下几种：" })}</Paragraph>
      <ul>
        <li>
          <Text code>Modal.confirm(config)</Text>
        </li>
        <li>
          <Text code>Modal.info(config)</Text>
        </li>
        <li>
          <Text code>Modal.success(config)</Text>
        </li>
        <li>
          <Text code>Modal.warning(config)</Text>
        </li>
        <li>
          <Text code>Modal.error(config)</Text>
        </li>
      </ul>
      <Paragraph>
        {formatMessage({
          defaultMessage: "以上函数都会返回一个对象，可用来更新或者关闭对话框。",
        })}
      </Paragraph>
      <Source
        code={`const info = Modal.info({ title: 'Info' });
info.update({ title: 'Updated Title' });
info.close();`}
        language="typescript"
      />
      <Paragraph>
        {formatMessage({
          defaultMessage: "config 的具体参数如下所示（继承所有 Modal 的参数）：",
        })}
      </Paragraph>
      <PropsTable
        data={[
          {
            name: "content",
            description: formatMessage({ defaultMessage: "对话框的内容" }),
            type: "ReactNode",
          },
          {
            name: "icon",
            description: formatMessage({ defaultMessage: "自定义图标" }),
            type: "ReactNode",
          },
        ]}
        includeCommonProps={false}
      />

      <Title id="modal-config" heading={3}>
        Modal.config
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "全局设置 Modal.confirm|success|info|error|warning 的属性，类似 Message.config 方法，<Modal /> 的使用方式会从 ConfigProvider 获取上下文配置。",
        })}
      </Paragraph>
      <Source
        code={`Modal.config({
  // 自定义前缀
  prefixCls: 'arco',
  // 是否静态方法以简洁样式展示信息
  simple: true
});`}
        language="typescript"
      />

      <Title id="modal-destroy-all" heading={3}>
        Modal.destroyAll
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "调用 Modal.destroyAll，会关闭所有弹出的确认框（包括 Modal.confirm Modal.info Modal.success Modal.error Modal.warning），一般用于路由改动时，关闭所有弹出。",
        })}
      </Paragraph>

      <Title id="modal-use-modal" heading={3}>
        Modal.useModal
      </Title>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "通过方法去使用对话框，像是 Modal.confirm Modal.warning，因为是通过 ReactDOM.render 直接渲染，所以不在上下文中，因此拿不到 context。",
        })}
      </Paragraph>
      <Paragraph>
        {formatMessage({
          defaultMessage:
            "如果希望获取上下文 context，那么可以通过 useModal 去通过 hook 的方法调用，将 contextHolder 放到上下文中。",
        })}
      </Paragraph>
      <Source
        code={`const [modal, contextHolder] = Modal.useModal();

<Context.Provider>
  {contextHolder}
  <Button onClick={() => modal.warning({ title: 'Title', content: 'content' })}>Open</Button>
</Context.Provider>`}
        language="tsx"
      />
    </Unstyled>
  );
}

export default injectIntl(DocPage);
