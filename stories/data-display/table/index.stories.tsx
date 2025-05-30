import type { Meta, StoryObj } from "@storybook/react-vite";
import { forwardRef, useRef, useState } from "react";
import {
  Button,
  Form,
  Input,
  Radio,
  Space,
  Switch,
  Table,
  TableColumnProps,
  TableInstance,
  Typography,
} from "../../../src";
import { IconFilter, IconSearch } from "@arco-iconbox/react-growingio/src";
import { Resizable } from "react-resizable";
import { StickyContainer, Sticky } from "react-sticky";
import { action } from "storybook/actions";

import "./index.css";

const meta: Meta<typeof Table> = {
  component: Table,
  title: "Components/Data Display/Table",
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const columns: TableColumnProps[] = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Salary",
    dataIndex: "salary",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];
const data = [
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    key: "4",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, London",
    email: "ed.hellen@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
];

export const Basic: Story = {
  args: {
    columns,
    data,
  },
  render: (args) => <Table {...args} />,
};

export const RowSelection: Story = {
  render: () => {
    const [type, setType] = useState<"checkbox" | "radio">("checkbox");
    const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>(["4"]);
    return (
      <Space direction="vertical" size="large">
        <Radio.Group
          type="button"
          options={["checkbox", "radio"]}
          value={type}
          onChange={(v) => setType(v)}
        />
        <Table
          columns={columns}
          data={data}
          rowSelection={{
            type,
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
              console.log("onChange:", selectedRowKeys, selectedRows);
              setSelectedRowKeys(selectedRowKeys);
            },
            onSelect: (selected, record, selectedRows) => {
              console.log("onSelect:", selected, record, selectedRows);
            },
            checkboxProps: (record) => {
              return {
                disabled: record.key === "4",
              };
            },
          }}
        />
      </Space>
    );
  },
};

export const ExpandedRow: Story = {
  ...Basic,
  args: {
    columns,
    data,
    expandedRowRender: (record: { key: string }) => {
      return `This is No.${record.key} description.`;
    },
    expandProps: {
      expandRowByClick: true,
      rowExpandable: (record: { key: string }) => record.key !== "4",
    },
  },
};

export const ExpandProps: Story = {
  ...Basic,
  args: {
    columns,
    data,
    expandedRowRender: (record) => record.email,
    expandProps: {
      width: 60,
      columnTitle: "Expand",
      rowExpandable: (record: { key: string }) => record.key !== "4",
    },
  },
};

export const ExpandedRowRender: Story = {
  ...Basic,
  args: {
    columns,
    data,
    expandedRowRender: () => <Table columns={columns} data={data} pagination={false} />,
    indentSize: 60,
  },
};

export const TreeTable: Story = {
  render: () => {
    const data = [
      {
        key: "1",
        name: "Jane Doe",
        salary: 23000,
        address: "32 Park Road, London",
        email: "jane.doe@example.com",
        children: [
          {
            key: "1-1",
            name: "Christina",
            address: "332 Park Road, London",
            email: "christina@example.com",
          },
        ],
      },
      {
        key: "2",
        name: "Alisa Ross",
        salary: 25000,
        address: "35 Park Road, London",
        email: "alisa.ross@example.com",
        children: [
          {
            key: "2-1",
            name: "Ed Hellen",
            salary: 17000,
            address: "42 Park Road, London",
            email: "ed.hellen@example.com",
            children: [
              {
                key: "2-1-1",
                name: "Eric Miller",
                salary: 23000,
                address: "67 Park Road, London",
                email: "eric.miller@example.com",
              },
              {
                key: "2-1-2",
                name: "Tom Jerry",
                salary: 666,
                address: "67 Park Road, London",
                email: "tom.jerry@example.com",
              },
            ],
          },
          {
            key: "2-2",
            name: "William Smith",
            salary: 27000,
            address: "62 Park Road, London",
            email: "william.smith@example.com",
          },
          {
            key: "2-3",
            name: "George Bush",
            salary: 24000,
            address: "62 Park Road, London",
            email: "george.bush@example.com",
          },
        ],
      },
      {
        key: "7",
        name: "Kevin Sandra",
        salary: 22000,
        address: "31 Park Road, London",
        email: "kevin.sandra@example.com",
      },
    ];

    const [checkStrictly, setCheckStrictly] = useState(true);
    return (
      <Space direction="vertical" size={16}>
        <Space>
          checkStrictly:
          <Switch onChange={(checked) => setCheckStrictly(checked)} checked={checkStrictly} />
        </Space>
        <Table
          rowSelection={{
            type: "checkbox",
            checkStrictly,
          }}
          columns={columns}
          data={data}
        />
      </Space>
    );
  },
};

const FormItem = Form.Item;
export const Props: Story = {
  render: () => {
    const [border, setBorder] = useState<boolean>(true);
    const [borderCell, setBorderCell] = useState<boolean>(false);
    const [hover, setHover] = useState<boolean>(true);
    const [stripe, setStripe] = useState<boolean>(false);
    const [checkbox, setCheckbox] = useState<boolean>(true);
    const [checkAll, setCheckAll] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [showHeader, setShowHeader] = useState<boolean>(true);
    const [fixedHeader, setFixedHeader] = useState<boolean>(false);
    const [noData, setNoData] = useState<boolean>(false);
    const [size, setSize] = useState<"default" | "middle" | "small" | "mini">("default");
    const [pagePosition, setPagePosition] = useState<
      "br" | "bl" | "tr" | "tl" | "topCenter" | "bottomCenter"
    >("br");

    return (
      <Space direction="vertical">
        <Form layout="inline">
          <FormItem label="Border" colon={false}>
            <Switch size="small" onChange={setBorder} checked={border} />
          </FormItem>
          <FormItem label="Border Cell" colon={false}>
            <Switch size="small" onChange={setBorderCell} checked={borderCell} />
          </FormItem>
          <FormItem label="Hover" colon={false}>
            <Switch size="small" onChange={setHover} checked={hover} />
          </FormItem>
          <FormItem label="Stripe" colon={false}>
            <Switch size="small" onChange={setStripe} checked={stripe} />
          </FormItem>
          <FormItem label="Checkbox" colon={false}>
            <Switch size="small" onChange={setCheckbox} checked={checkbox} />
          </FormItem>
          <FormItem label="Check All" colon={false}>
            <Switch size="small" onChange={setCheckAll} checked={checkAll} />
          </FormItem>
          <FormItem label="Loading" colon={false}>
            <Switch size="small" onChange={setLoading} checked={loading} />
          </FormItem>
          <FormItem label="Table Header" colon={false}>
            <Switch size="small" onChange={setShowHeader} checked={showHeader} />
          </FormItem>
          <FormItem label="Header fixed" colon={false}>
            <Switch size="small" onChange={setFixedHeader} checked={fixedHeader} />
          </FormItem>
          <FormItem label="No data" colon={false}>
            <Switch size="small" onChange={setNoData} checked={noData} />
          </FormItem>
          <FormItem label="Size" colon={false}>
            <Radio.Group
              type="button"
              options={["default", "middle", "small", "mini"]}
              value={size}
              onChange={setSize}
            />
          </FormItem>
          <FormItem label="Pagination position" colon={false}>
            <Radio.Group
              type="button"
              options={[
                {
                  label: "BottomRight",
                  value: "br",
                },
                {
                  label: "BottomLeft",
                  value: "bl",
                },
                {
                  label: "TopRight",
                  value: "tr",
                },
                {
                  label: "TopLeft",
                  value: "tl",
                },
                {
                  label: "TopCenter",
                  value: "topCenter",
                },
                {
                  label: "BottomCenter",
                  value: "bottomCenter",
                },
              ]}
              value={pagePosition}
              onChange={setPagePosition}
            />
          </FormItem>
        </Form>
        <Table
          {...{
            checkbox,
            checkAll,
            border,
            borderCell,
            hover,
            stripe,
            loading,
            showHeader,
            fixedHeader,
            size,
            pagePosition,
          }}
          columns={columns}
          data={noData ? [] : data}
          rowSelection={
            checkbox
              ? {
                  type: "checkbox",
                  checkAll: checkAll,
                }
              : undefined
          }
          scroll={fixedHeader ? { y: 120 } : {}}
          style={{ marginTop: 10 }}
          pagination={{ pageSize: 5 }}
        />
      </Space>
    );
  },
};

export const SorterFilter: Story = {
  ...Basic,
  name: "Sorter & Filter",
  args: {
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        sorter: (a, b) => a.name.length - b.name.length,
      },
      {
        title: "Salary",
        dataIndex: "salary",
        sorter: (a, b) => a.salary - b.salary,
        filterIcon: <IconFilter />,
        filters: [
          {
            text: "> 20000",
            value: "20000",
          },
          {
            text: "> 30000",
            value: "30000",
          },
        ],
        defaultFilters: ["20000"],
        onFilter: (value, row) => row.salary > value,
        sortDirections: ["ascend"],
        defaultSortOrder: "ascend",
      },
      {
        title: "Address",
        dataIndex: "address",
        filterIcon: <IconFilter />,
        filters: [
          {
            text: "London",
            value: "London",
          },
          {
            text: "Paris",
            value: "Paris",
          },
        ],
        onFilter: (value, row) => row.address.indexOf(value) > -1,
        filterMultiple: false,
      },
      {
        title: "Email",
        dataIndex: "email",
        sorter: (a, b) => a.email.length - b.email.length,
      },
    ],
    data,
  },
};

export const CustomFilter: Story = {
  render: () => {
    const inputRef = useRef(null);
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        filterIcon: <IconSearch />,
        filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
          return (
            <div className="table-demo-custom-filter">
              <Input.Search
                ref={inputRef}
                searchButton
                placeholder="Please enter name"
                value={filterKeys[0] || ""}
                onChange={(value) => {
                  setFilterKeys(value ? [value] : []);
                }}
                onSearch={() => {
                  confirm();
                }}
              />
            </div>
          );
        },
        onFilter: (value, row) => (value ? row.name.indexOf(value) !== -1 : true),
        onFilterDropdownVisibleChange: (visible) => {
          if (visible) {
            setTimeout(() => inputRef.current.focus(), 150);
          }
        },
      },
      {
        title: "Salary",
        dataIndex: "salary",
      },
      {
        title: "Address",
        dataIndex: "address",
      },
      {
        title: "Email",
        dataIndex: "email",
      },
    ];
    return <Table columns={columns} data={data} />;
  },
};

export const MultipleSorters: Story = {
  ...Basic,
  args: {
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        sorter: (a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        },
      },
      {
        title: "Age",
        dataIndex: "age",
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: "Score A",
        dataIndex: "scoreA",
        defaultSortOrder: "descend",
        sorter: {
          compare: (a, b) => a.scoreA - b.scoreA,
          multiple: 3,
        },
      },
      {
        title: "Score B",
        dataIndex: "scoreB",
        defaultSortOrder: "ascend",
        sorter: {
          compare: (a, b) => a.scoreB - b.scoreB,
          multiple: 2,
        },
      },
      {
        title: "Score C",
        dataIndex: "scoreC",
        sorter: {
          compare: (a, b) => a.scoreC - b.scoreC,
          multiple: 1,
        },
      },
    ],
    data: [
      {
        key: "1",
        name: "A",
        age: 18,
        scoreA: 100,
        scoreB: 60,
        scoreC: 70,
      },
      {
        key: "2",
        name: "B",
        age: 17,
        scoreA: 100,
        scoreB: 90,
        scoreC: 80,
      },
      {
        key: "3",
        name: "C",
        age: 19,
        scoreA: 100,
        scoreB: 70,
        scoreC: 60,
      },
      {
        key: "4",
        name: "D",
        age: 15,
        scoreA: 80,
        scoreB: 70,
        scoreC: 100,
      },
      {
        key: "5",
        name: "E",
        age: 20,
        scoreA: 80,
        scoreB: 70,
        scoreC: 90,
      },
    ],
  },
};

export const RenderPagination: Story = {
  render: () => {
    const allData = Array(200)
      .fill("")
      .map((_, index) => ({
        key: `${index}`,
        name: `Kevin Sandra ${index}`,
        salary: 22000,
        address: `${index} Park Road, London`,
        email: `kevin.sandra_${index}@example.com`,
      }));
    const [data, setData] = useState(allData);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [pagination, setPagination] = useState({
      sizeCanChange: true,
      showTotal: true,
      total: 96,
      pageSize: 10,
      current: 1,
      pageSizeChangeResetCurrent: true,
    });
    const [loading, setLoading] = useState(false);

    function onChangeTable(pagination) {
      const { current, pageSize } = pagination;
      setLoading(true);
      setTimeout(() => {
        setData(allData.slice((current - 1) * pageSize, current * pageSize));
        setPagination((pagination) => ({ ...pagination, current, pageSize }));
        setLoading(false);
      }, 1000);
    }

    return (
      <Table
        loading={loading}
        columns={columns}
        data={data}
        pagination={pagination}
        onChange={onChangeTable}
        rowSelection={{
          selectedRowKeys,
          onChange: (selectedRowKeys, selectedRows) => {
            console.log("selectedRowKeys", selectedRowKeys);
            console.log("selectedRows", selectedRows);
            setSelectedRowKeys(selectedRowKeys);
          },
        }}
        renderPagination={(paginationNode) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Space>
              <span>Selected {selectedRowKeys.length}</span>
              <Button size="mini">Save</Button>
              <Button size="mini">Delete</Button>
            </Space>
            {paginationNode}
          </div>
        )}
      />
    );
  },
};

export const RenderCell: Story = {
  ...Basic,
  args: {
    columns: [
      {
        title: "Name",
        dataIndex: "name",
      },
      {
        title: "Salary",
        dataIndex: "salary",
        render: (_, record) => (
          <span>
            <span
              style={{
                color: "#FF7D00",
                fontWeight: 600,
              }}
            >
              $
            </span>
            {record.salary}
          </span>
        ),
      },
      {
        title: "Address",
        dataIndex: "address",
      },
      {
        title: "Email",
        dataIndex: "email",
      },
    ],
    data,
  },
};

export const FixedColumn: Story = {
  ...Basic,
  args: {
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        fixed: "left",
        width: 140,
      },
      {
        title: "Address",
        dataIndex: "address",
      },
      {
        title: "Email",
        dataIndex: "email",
      },
      {
        title: "Other",
        dataIndex: "other",
        render: () => "Other",
      },
      {
        title: "Other 1",
        dataIndex: "other1",
        render: () => "Other 1",
      },
      {
        title: "Other 2",
        dataIndex: "other2",
        render: () => "Other 2",
      },
      {
        title: "Salary",
        dataIndex: "salary",
        fixed: "right",
        width: 120,
      },
    ],
    data,
    expandedRowRender: (record) => `${record.name}'s address is ${record.address}`,
    rowSelection: {},
    scroll: {
      x: 1600,
      y: 400,
    },
  },
};

export const CustomStyle: Story = {
  ...Basic,
  args: {
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        headerCellStyle: {
          backgroundColor: "var(--color-bg-2)",
        },
      },
      {
        title: "Salary",
        dataIndex: "salary",
        headerCellStyle: {
          backgroundColor: "var(--color-bg-2)",
        },
      },
      {
        title: "Address",
        dataIndex: "address",
        headerCellStyle: {
          backgroundColor: "var(--color-bg-2)",
        },
      },
      {
        title: "Email",
        dataIndex: "email",
        headerCellStyle: {
          backgroundColor: "var(--color-bg-2)",
        },
      },
    ],
    data,
    border: {
      wrapper: true,
      headerCell: true,
    },
  },
};

export const ColumnGroup: Story = {
  ...Basic,
  args: {
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        fixed: "left",
        width: 140,
      },
      {
        title: "User Info",
        children: [
          {
            title: "Birthday",
            dataIndex: "birthday",
          },
          {
            title: "Address",
            children: [
              {
                title: "City",
                dataIndex: "city",
              },
              {
                title: "Road",
                dataIndex: "road",
              },
              {
                title: "No.",
                dataIndex: "no",
              },
            ],
          },
        ],
      },
      {
        title: "Information",
        children: [
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },
        ],
      },
      {
        title: "Salary",
        dataIndex: "salary",
        fixed: "right",
        width: 120,
      },
      {
        title: "Gender",
        dataIndex: "gender",
        fixed: "right",
        width: 110,
      },
    ],
    data: [
      {
        key: "1",
        name: "Jane Doe",
        salary: 23000,
        birthday: "1994-04-21",
        city: "London",
        road: "Park",
        no: "34",
        phone: "12345678",
        email: "jane.doe@example.com",
        gender: "female",
      },
      {
        key: "2",
        name: "Alisa Ross",
        salary: 25000,
        birthday: "1994-05-21",
        city: "London",
        road: "Park",
        no: "37",
        phone: "12345678",
        email: "alisa.ross@example.com",
        gender: "female",
      },
      {
        key: "3",
        name: "Kevin Sandra",
        salary: 22000,
        birthday: "1992-02-11",
        city: "Paris",
        road: "Arco",
        no: "67",
        phone: "12345678",
        email: "kevin.sandra@example.com",
        gender: "male",
      },
      {
        key: "4",
        name: "Ed Hellen",
        salary: 17000,
        birthday: "1991-06-21",
        city: "London",
        road: "Park",
        no: "317",
        phone: "12345678",
        email: "ed.hellen@example.com",
        gender: "female",
      },
      {
        key: "5",
        name: "William Smith",
        salary: 27000,
        birthday: "1996-08-21",
        city: "Paris",
        road: "Park",
        no: "114",
        phone: "12345678",
        email: "william.smith@example.com",
        gender: "male",
      },
    ],
    scroll: { x: 1200 },
    border: { wrapper: true, cell: true },
  },
};

export const MergeCell: Story = {
  ...Basic,
  args: {
    columns: [
      {
        title: "Name",
        dataIndex: "name",
        render: (col, _, index) => {
          const obj = {
            children: col,
            props: {
              colSpan: undefined,
            },
          };

          if (index > 3) {
            obj.props.colSpan = 2;
          }

          return obj;
        },
      },
      {
        title: "Salary",
        dataIndex: "salary",
        render: (col, _, index) => {
          const obj = {
            children: col,
            props: {
              colSpan: undefined,
            },
          };

          if (index > 3) {
            obj.props.colSpan = 0;
          }

          return obj;
        },
      },
      {
        title: "Detail",
        dataIndex: "address",
        colSpan: 2,
        render: (col, _, index) => {
          const obj = {
            children: col,
            props: {
              rowSpan: undefined,
            },
          };

          if (index === 0) {
            obj.props.rowSpan = 3;
          }

          if (index === 1 || index === 2) {
            obj.props.rowSpan = 0;
          }

          return obj;
        },
      },
      {
        title: "Email",
        dataIndex: "email",
        colSpan: 0,
      },
    ],
    data,
    border: {
      cell: true,
      wrapper: true,
    },
  },
};

const CustomResizeHandle = forwardRef((props, ref) => {
  // @ts-ignore
  const { handleAxis, ...restProps } = props;
  return (
    <span
      //@ts-ignore
      ref={ref}
      className={`react-resizable-handle react-resizable-handle-${handleAxis}`}
      {...restProps}
      onClick={(e) => {
        e.stopPropagation();
      }}
    />
  );
});
const ResizableTitle = (props) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
      width={width}
      height={0}
      handle={<CustomResizeHandle />}
      onResize={onResize}
      draggableOpts={{
        enableUserSelectHack: false,
      }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

export const ResizableColumn: Story = {
  render: () => {
    const originColumns = [
      {
        title: "Name",
        dataIndex: "name",
        width: 120,
      },
      {
        title: "Salary",
        dataIndex: "salary",
        width: 100,
      },
      {
        title: "Address",
        dataIndex: "address",
        width: 180,
      },
      {
        title: "Email",
        dataIndex: "email",
      },
    ];

    function handleResize(index) {
      return (_, { size }) => {
        setNewColumns((prevColumns) => {
          const nextColumns = [...prevColumns];
          nextColumns[index] = { ...nextColumns[index], width: size.width };
          return nextColumns;
        });
      };
    }

    const [newColumns, setNewColumns] = useState(
      originColumns.map((column, index) => {
        if (column.width) {
          return {
            ...column,
            onHeaderCell: (col) => ({
              width: col.width,
              onResize: handleResize(index),
            }),
          };
        }
        return column;
      }),
    );

    const components = {
      header: {
        th: ResizableTitle,
      },
    };
    return (
      <Table
        className="table-demo-resizable-column"
        components={components}
        border
        borderCell
        columns={newColumns}
        data={data}
      />
    );
  },
};

function Wrapper(props) {
  return (
    <Sticky topOffset={-40}>
      {({ style, isSticky }) => (
        <div
          style={{
            ...style,
            top: isSticky ? 40 : 0,
            left: 10,
            zIndex: 9999,
            overflow: "auto",
          }}
        >
          {props.children}
        </div>
      )}
    </Sticky>
  );
}
const components = {
  header: {
    wrapper: Wrapper,
  },
};
export const HeaderSticky: Story = {
  render: () => (
    <StickyContainer>
      <Table
        components={components}
        scroll={{
          y: true,
        }}
        border={{
          wrapper: true,
          cell: true,
        }}
        columns={columns}
        data={data}
      />
    </StickyContainer>
  ),
};

export const CustomColumn: Story = {
  ...Basic,
  args: {
    columns,
    data,
    components: {
      header: {
        operations: ({ selectionNode, expandNode }) => [
          {
            node: (
              <th>
                <div className="arco-table-th-item">Index</div>
              </th>
            ),
            width: 40,
          },
          {
            name: "selectionNode",
            node: selectionNode,
          },
          {
            name: "expandNode",
            node: expandNode,
          },
        ],
      },
      body: {
        operations: ({ selectionNode, expandNode }) => [
          {
            node: (record) => <td>{record.key}</td>,
            width: 40,
          },
          {
            name: "selectionNode",
            node: selectionNode,
          },
          {
            name: "expandNode",
            node: expandNode,
          },
        ],
      },
    },
  },
};

const largeData = Array(501)
  .fill("")
  .map((_, index) => ({
    key: `${index}`,
    name: `Kevin ${index}`,
    salary: 22000,
    address: `${index} Park Road, London`,
    email: `kevin.sandra_${index}@example.com`,
  }));
export const LargeData: Story = {
  render: () => {
    const table = useRef<TableInstance>(null);
    return (
      <div>
        <Button
          style={{ marginBottom: 10 }}
          type="primary"
          onClick={() => table.current.scrollIntoView("500")}
        >
          滚动到第 500 条
        </Button>
        <Table
          ref={table}
          virtualized
          scroll={{
            y: 500,
            x: 1000,
          }}
          border
          columns={columns}
          data={largeData}
          pagination={false}
          rowSelection={{}}
        />
      </div>
    );
  },
};

export const Summary: Story = {
  parameters: {
    layout: "centered",
  },
  render: () => {
    function summary(currentData) {
      return (
        <Table.Summary.Row>
          <Table.Summary.Cell>Total</Table.Summary.Cell>
          <Table.Summary.Cell
            style={{
              backgroundColor: "rgb(var(--success-1))",
            }}
          >
            <Typography.Text type="success" bold>
              {currentData.reduce((prev, next) => prev + next.salary, 0)}
            </Typography.Text>
          </Table.Summary.Cell>
          <Table.Summary.Cell>
            {currentData.reduce((prev, next) => prev + next.count, 0)}
          </Table.Summary.Cell>
          <Table.Summary.Cell>
            {currentData.reduce((prev, next) => prev + next.stars, 0)}
          </Table.Summary.Cell>
        </Table.Summary.Row>
      );
    }

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        fixed: "left" as "left" | "right",
        width: 200,
        render: undefined,
      },
      {
        title: "Salary",
        dataIndex: "salary",
      },
      {
        title: "Count",
        dataIndex: "count",
      },
      {
        title: "Stars",
        dataIndex: "stars",
      },
    ];
    const data = [
      {
        key: "1",
        name: "Jane Doe",
        salary: 23000,
        count: 66,
        stars: 5,
      },
      {
        key: "2",
        name: "Alisa Ross",
        salary: 25000,
        count: 55,
        stars: 8,
      },
      {
        key: "3",
        name: "Kevin Sandra",
        salary: 22000,
        count: 100,
        stars: 2,
      },
      {
        key: "4",
        name: "Ed Hellen",
        salary: 17000,
        count: 88,
        stars: 10,
      },
      {
        key: "5",
        name: "William Smith",
        salary: 27000,
        count: 120,
        stars: 4,
      },
    ];

    return (
      <Space direction="vertical" size="large" style={{ width: 800 }}>
        <Table
          columns={columns}
          data={data}
          border={{
            wrapper: true,
            cell: true,
          }}
          summary={summary}
        />
        <Table
          columns={columns.concat({
            title: "Operation",
            dataIndex: "operation",
            render: () => (
              <Button type="primary" size="mini">
                Confirm
              </Button>
            ),
            fixed: "right" as "left" | "right",
            width: 100,
          })}
          data={data}
          scroll={{
            x: 1200,
          }}
          border={{
            wrapper: true,
            cell: true,
          }}
          summary={(currentData) => (
            <Table.Summary>
              <Table.Summary.Row>
                <Table.Summary.Cell>Total</Table.Summary.Cell>
                <Table.Summary.Cell>
                  <Typography.Text type="error">
                    {currentData.reduce((prev, next) => prev + next.salary, 0)}
                  </Typography.Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell>
                  {currentData.reduce((prev, next) => prev + next.count, 0)}
                </Table.Summary.Cell>
                <Table.Summary.Cell>
                  {currentData.reduce((prev, next) => prev + next.stars, 0)}
                </Table.Summary.Cell>
                <Table.Summary.Cell />
              </Table.Summary.Row>
              <Table.Summary.Row>
                <Table.Summary.Cell>Avarage</Table.Summary.Cell>
                <Table.Summary.Cell colSpan={3}>
                  <Typography.Text type="success">
                    {currentData.reduce((prev, next) => prev + next.salary, 0) / 5}
                  </Typography.Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell />
              </Table.Summary.Row>
            </Table.Summary>
          )}
        />
        <Table
          columns={columns}
          data={data}
          scroll={{
            x: 1200,
            y: 150,
          }}
          border={{
            wrapper: true,
            cell: true,
          }}
          summary={(currentData) => (
            <Table.Summary fixed="bottom">{summary(currentData)}</Table.Summary>
          )}
        />
      </Space>
    );
  },
};

const { RowActions } = Table;
export const RowActionsColumn: Story = {
  render: () => (
    <Table
      data={data}
      columns={columns.concat({
        title: "Actions",
        render: (_, item, index) => (
          <RowActions
            actions={
              index < 2
                ? [
                    { key: "view", label: "View" },
                    { key: "edit", label: "Edit" },
                  ]
                : [
                    { key: "view", label: "View" },
                    { key: "edit", label: "Edit" },
                    { key: "save-as", label: "Save as" },
                    { key: "delete", label: "Delete" },
                  ]
            }
            onClick={(key: string) => {
              action(key)(`item ${item.key}`);
            }}
          />
        ),
      })}
    />
  ),
};
