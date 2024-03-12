import type { ReactNode } from "react";
import { Markdown } from "@storybook/blocks";
import { IntlShape, injectIntl } from "react-intl";
import { Table, type TableColumnProps, Typography } from "@giod/react/src";

const { Text } = Typography;

export interface PropsTableData {
  /**
   * 参数名称
   */
  name: string;
  /**
   * 参数描述
   */
  description: ReactNode;
  /**
   * 参数类型
   */
  type: string;
  /**
   * 参数的默认值
   */
  defaultValue?: string;
  /**
   * 从哪个版本才有的参数
   */
  version?: string;
  /**
   * 是否必传
   */
  required?: boolean;
}

export interface PropsTableProps {
  intl: IntlShape;
  /**
   * 是否包含通用 Props，比如：className、style 等
   *
   * @default true
   */
  includeCommonProps?: boolean;
  /**
   * 表格数据
   */
  data?: PropsTableData[];
}

export function PropsTable({
  intl,
  includeCommonProps = true,
  data = [],
}: PropsTableProps) {
  const { formatMessage } = intl;
  const columns: TableColumnProps[] = [
    {
      title: formatMessage({ defaultMessage: "参数名" }),
      dataIndex: "name",
      render: (col: string, item: PropsTableData) => (
        <>
          {item.required && <Text type="error">*</Text>}
          {col}
        </>
      ),
    },
    {
      title: formatMessage({ defaultMessage: "描述" }),
      dataIndex: "description",
      render: (col) => <Markdown>{col}</Markdown>,
    },
    {
      title: formatMessage({ defaultMessage: "类型" }),
      dataIndex: "type",
      render: (col) => <Text code>{col}</Text>,
    },
    {
      title: formatMessage({ defaultMessage: "默认值" }),
      dataIndex: "defaultValue",
      render: (col) => <Text code>{col ?? "-"}</Text>,
    },
    {
      title: formatMessage({ defaultMessage: "版本" }),
      dataIndex: "version",
      render: (col) => col ?? "-",
    },
  ];
  const commonData = [
    {
      name: "className",
      description: formatMessage({ defaultMessage: "节点类名。" }),
      type: "string | string[]",
    },
    {
      name: "style",
      description: formatMessage({ defaultMessage: "节点样式。" }),
      type: "CSSProperties",
    },
  ];

  return (
    <Table
      borderCell
      columns={columns}
      data={includeCommonProps ? [...data, ...commonData] : data}
      pagination={false}
      rowKey="name"
    />
  );
}

export default injectIntl(PropsTable);
