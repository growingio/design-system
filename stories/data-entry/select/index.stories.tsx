import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import debounce from "lodash-es/debounce";
import {
  Avatar,
  Button,
  Divider,
  Input,
  Radio,
  Select,
  Space,
  Tag,
  Typography,
} from "../../../src";
import {
  IconDelete,
  IconLocation,
  IconPlus,
  IconStar,
  IconUser,
} from "@arco-iconbox/react-growingio";
import { SizeType } from "../../../src/_core/types";
import colors from "../../../src/_core/colors";

const meta: Meta<typeof Select> = {
  component: Select,
  title: "Components/Data Entry/Select",
};

export default meta;
type Story = StoryObj<typeof Select>;

export const options = [
  "Beijing",
  "Shanghai",
  "Guangzhou",
  "Disabled",
  "Shenzhen",
  "Chengdu",
  "Wuhan",
];

export const Basic: Story = {
  args: {
    allowClear: true,
    children: options.map((option) => (
      <Select.Option key={option} value={option} disabled={option === "Disabled"}>
        {option}
      </Select.Option>
    )),
    style: { width: 350 },
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space direction="vertical" size="large">
      <Space>
        <Select {...args} placeholder={formatMessage({ defaultMessage: "请选择" })} />
        <Select {...args} placeholder={formatMessage({ defaultMessage: "禁用状态" })} disabled />
      </Space>
      <Space>
        <Select {...args} placeholder={formatMessage({ defaultMessage: "错误状态" })} error />
      </Space>
    </Space>
  ),
};

export const Multiple: Story = {
  args: {
    ...Basic.args,
    mode: "multiple",
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space size="large" direction="vertical">
      <Select
        {...args}
        placeholder={formatMessage({ defaultMessage: "请选择" })}
        defaultValue={["Beijing", "Shanghai"]}
      />
      <Select
        {...args}
        placeholder={formatMessage({ defaultMessage: "请选择" })}
        defaultValue={["Beijing", "Shanghai", "Guangzhou"]}
        maxTagCount={2}
      />
      <Select
        {...args}
        placeholder={formatMessage({ defaultMessage: "请选择" })}
        defaultValue={["Beijing", "Shanghai", "Guangzhou"]}
        maxTagCount={{
          count: 2,
          render: (invisibleNumber) => `+${invisibleNumber} more`,
        }}
      />
      <Select
        {...args}
        placeholder={formatMessage({ defaultMessage: "请选择" })}
        defaultValue={["Beijing", "Shanghai", "Guangzhou"]}
        renderTag={({ label, closable, onClose }, index, valueList) => {
          const tagCount = valueList.length;

          if (tagCount > 2) {
            return index === 0 ? (
              <span style={{ marginLeft: 8 }}>{`${tagCount} cities selected`}</span>
            ) : null;
          }

          return (
            <Tag
              color="arcoblue"
              closable={closable}
              onClose={onClose}
              style={{ margin: "2px 6px 2px 0" }}
            >
              {label}
            </Tag>
          );
        }}
      />
    </Space>
  ),
};

export const AddBefore: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space>
      <Select
        {...args}
        addBefore={formatMessage({ defaultMessage: "选择城市" })}
        placeholder={formatMessage({ defaultMessage: "请选择" })}
      />
      <Select
        {...args}
        addBefore={formatMessage({ defaultMessage: "选择城市" })}
        placeholder={formatMessage({ defaultMessage: "请选择" })}
        mode="multiple"
      />
    </Space>
  ),
};

export const Prefix: Story = {
  args: {
    ...Basic.args,
    prefix: <IconUser />,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Select {...args} placeholder={formatMessage({ defaultMessage: "请选择" })} />
  ),
};

export const AllowCreate: Story = {
  args: {
    allowCreate: true,
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space>
      <Select {...args} placeholder={formatMessage({ defaultMessage: "选项可自定义" })} />
      <Select
        {...args}
        placeholder={formatMessage({ defaultMessage: "选项可自定义" })}
        mode="multiple"
        allowCreate={{
          formatter: (inputValue, creating) => {
            return {
              value: inputValue,
              label: `${
                creating
                  ? formatMessage({ defaultMessage: "按回车创建：" })
                  : formatMessage({ defaultMessage: "已创建：" })
              }${inputValue}`,
            };
          },
        }}
      />
    </Space>
  ),
};

export const Search: Story = {
  args: {
    ...Basic.args,
    style: { width: 150 },
    showSearch: true,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space size="large">
      <Select {...args} placeholder={formatMessage({ defaultMessage: "请选择或搜索" })} />
      <Select
        {...args}
        placeholder={formatMessage({ defaultMessage: "过滤选项" })}
        filterOption={(inputValue, option) =>
          option.props.value.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0 ||
          option.props.children.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
        }
      >
        {[
          {
            label: formatMessage({ defaultMessage: "北京" }),
            value: "beijing",
          },
          {
            label: formatMessage({ defaultMessage: "上海" }),
            value: "shanghai",
          },
          {
            label: formatMessage({ defaultMessage: "广州" }),
            value: "guangzhou",
          },
        ].map(({ label, value }) => (
          <Select.Option key={value} value={value}>
            {label}
          </Select.Option>
        ))}
      </Select>
      <Select
        {...args}
        placeholder={formatMessage({ defaultMessage: "保留输入的内容" })}
        showSearch={{ retainInputValue: true }}
      />
    </Space>
  ),
};

export const RemoteSearch: Story = {
  args: {
    ...Basic.args,
    children: undefined,
    showSearch: true,
    mode: "multiple",
    filterOption: false,
  },
  render: (args, { intl: { formatMessage } }) => {
    const [options, setOptions] = useState([]);
    const [fetching, setFetching] = useState(false);

    const fetchUser = debounce(() => {
      if (!fetching) {
        setFetching(true);
        fetch("https://randomuser.me/api/?results=5")
          .then((res) => res.json())
          .then((data) => {
            const newOptions = data.results.map((user) => ({
              label: (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar size={16} style={{ marginLeft: 4, marginRight: 4 }}>
                    <img alt="avatar" src={user.picture.thumbnail} />
                  </Avatar>
                  {`${user.name.first} ${user.name.last}`}
                </div>
              ),
              value: user.email,
            }));
            setOptions(newOptions);
            setFetching(false);
          });
      }
    }, 500);

    useEffect(() => {
      fetchUser();
    }, []);

    return (
      <Select
        {...args}
        placeholder={formatMessage({ defaultMessage: "按名字搜索" })}
        options={options}
        onSearch={fetchUser}
      />
    );
  },
};

export const PopupWidth: Story = {
  args: {
    ...Basic.args,
    style: { width: 150 },
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space>
      <Select
        {...args}
        placeholder={formatMessage({ defaultMessage: "请选择" })}
        triggerProps={{
          autoAlignPopupWidth: false,
          position: "bl",
        }}
      />
      <Select
        {...args}
        placeholder={formatMessage({ defaultMessage: "请选择" })}
        triggerProps={{
          autoAlignPopupWidth: false,
          autoAlignPopupMinWidth: true,
          position: "bl",
        }}
      >
        <Select.Option value="shenzhen">Shenzhen Shenzhen Shenzhen Shenzhen</Select.Option>
        {args.children}
      </Select>
    </Space>
  ),
};

export const Size: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => {
    const [size, setSize] = useState<SizeType>("default");
    const sizeOptions = [
      {
        name: formatMessage({ defaultMessage: "迷你" }),
        value: "mini",
      },
      {
        name: formatMessage({ defaultMessage: "小" }),
        value: "small",
      },
      {
        name: formatMessage({ defaultMessage: "中" }),
        value: "default",
      },
      {
        name: formatMessage({ defaultMessage: "大" }),
        value: "large",
      },
    ];
    return (
      <Space direction="vertical" size="large">
        <Radio.Group type="button" mode="fill" name="size" value={size} onChange={setSize}>
          {sizeOptions.map(({ name, value }) => {
            return (
              <Radio key={value} value={value}>
                {name}
              </Radio>
            );
          })}
        </Radio.Group>
        <Space direction="vertical" size="large">
          <Select {...args} size={size} placeholder={formatMessage({ defaultMessage: "请选择" })} />
          <Select
            {...args}
            size={size}
            placeholder={formatMessage({ defaultMessage: "请选择" })}
            mode="multiple"
          />
          <Select
            {...args}
            size={size}
            placeholder={formatMessage({ defaultMessage: "请选择" })}
            addBefore={formatMessage({ defaultMessage: "选择城市" })}
          />
          <Select
            {...args}
            size={size}
            placeholder={formatMessage({ defaultMessage: "请选择" })}
            prefix={<IconLocation />}
          />
        </Space>
      </Space>
    );
  },
};

export const RenderFormat: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space>
      <Select
        {...args}
        placeholder={formatMessage({ defaultMessage: "请选择" })}
        renderFormat={(option) => (
          <Space>
            <IconStar />
            <span>{option?.value}</span>
          </Space>
        )}
      />
      <Select
        {...args}
        placeholder={formatMessage({ defaultMessage: "请选择" })}
        mode="multiple"
        defaultValue={["Beijing"]}
        removeIcon={<IconDelete />}
        renderFormat={(option) => (
          <Space>
            <IconStar />
            <span>{option?.value}</span>
          </Space>
        )}
      />
    </Space>
  ),
};

const provinces = {
  Beijing: ["Beijing"],
  Shanghai: ["Shanghai"],
  Guangdong: ["Guangzhou", "Shenzhen"],
};

export const Group: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Select {...args} placeholder={formatMessage({ defaultMessage: "请选择" })}>
      {Object.keys(provinces).map((province) => (
        <Select.OptGroup label={province} key={province}>
          {provinces[province].map((city) => (
            <Select.Option key={city} value={city}>
              {city}
            </Select.Option>
          ))}
        </Select.OptGroup>
      ))}
    </Select>
  ),
};

export const Options: Story = {
  args: {
    ...Basic.args,
    children: undefined,
    options,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space size="large">
      <Select {...args} placeholder={formatMessage({ defaultMessage: "请选择" })} />
      <Select
        {...args}
        placeholder={formatMessage({ defaultMessage: "请选择" })}
        mode="multiple"
        defaultValue={["Beijing", "Shanghai"]}
      />
    </Space>
  ),
};

export const OnPopupScroll: Story = {
  args: {
    ...RemoteSearch.args,
  },
  render: (args, { intl: { formatMessage } }) => {
    const [options, setOptions] = useState<any[]>([]);
    const [fetching, setFetching] = useState(false);

    const fetchUser = debounce(() => {
      if (!fetching) {
        setFetching(true);
        fetch("https://randomuser.me/api/?results=10")
          .then((res) => res.json())
          .then((data) => {
            const newOptions = data.results.map((user) => ({
              label: (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar size={24} style={{ marginLeft: 6, marginRight: 12 }}>
                    <img alt="avatar" src={user.picture.thumbnail} />
                  </Avatar>
                  {`${user.name.first} ${user.name.last}`}
                </div>
              ),
              value: user.email,
            }));
            setOptions([...options, ...newOptions]);
            setFetching(false);
          });
      }
    }, 500);

    const onPopupScroll = (element) => {
      const { scrollTop, scrollHeight, clientHeight } = element;
      const scrollBottom = scrollHeight - (scrollTop + clientHeight);

      if (scrollBottom < 10) {
        fetchUser();
      }
    };

    useEffect(() => {
      fetchUser();
    }, []);

    return (
      <Select
        {...args}
        placeholder={formatMessage({ defaultMessage: "滚动加载" })}
        options={options}
        onSearch={fetchUser}
        onPopupScroll={onPopupScroll}
      />
    );
  },
};

export const TokenSeparator: Story = {
  args: {
    ...Basic.args,
    mode: "multiple",
    allowCreate: true,
    tokenSeparators: [",", "|", "/"],
  },
  render: (args, { intl: { formatMessage } }) => (
    <Space direction="vertical">
      <Typography.Paragraph copyable>Beijing,Shenzhen|Nanjing/Xi'an</Typography.Paragraph>
      <Select {...args} placeholder={formatMessage({ defaultMessage: "粘贴文本到此处" })} />
    </Space>
  ),
};

export const DropdownRener: Story = {
  args: {
    ...Basic.args,
  },
  render: (args, { intl: { formatMessage } }) => {
    const [cities, setCities] = useState(options);
    const [inputValue, setInputValue] = useState("");

    const addItem = () => {
      if (inputValue && cities.indexOf(inputValue) === -1) {
        setCities(cities.concat([inputValue]));
        setInputValue("");
      }
    };
    return (
      <Select
        {...args}
        placeholder={formatMessage({ defaultMessage: "请选择" })}
        dropdownRender={(menu) => (
          <>
            {menu}
            <Divider style={{ margin: 0 }} />
            <Space style={{ padding: 10 }} size={4}>
              <Input
                style={{ width: 246 }}
                size="small"
                value={inputValue}
                onChange={(value) => setInputValue(value)}
              />
              <Button
                type="text"
                status="primary"
                size="small"
                onClick={addItem}
                icon={<IconPlus />}
              >
                {formatMessage({ defaultMessage: "添加" })}
              </Button>
            </Space>
          </>
        )}
        dropdownMenuStyle={{ maxHeight: 100 }}
      >
        {cities.map((city) => (
          <Select.Option key={city} value={city}>
            {city}
          </Select.Option>
        ))}
      </Select>
    );
  },
};

export const Borderless: Story = {
  ...Basic,
  args: {
    ...Basic.args,
    bordered: false,
  },
};

export const RenderTag: Story = {
  args: {
    ...Basic.args,
    mode: "multiple",
    defaultValue: colors.slice(0, 3),
    options: colors,
    children: undefined,
    renderTag: ({ label, value, closable, onClose }) => (
      <Tag
        color={colors.includes(value) ? value : "gray"}
        closable={closable}
        onClose={onClose}
        style={{ margin: "2px 6px 2px 0" }}
      >
        {label}
      </Tag>
    ),
  },
  render: (args, { intl: { formatMessage } }) => (
    <Select {...args} placeholder={formatMessage({ defaultMessage: "请选择" })} />
  ),
};

export const Cascader: Story = {
  args: {
    ...Basic.args,
    children: undefined,
    style: { width: 150 },
  },
  render: (args, { intl: { formatMessage } }) => {
    const [province, setProvince] = useState("");
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState();

    useEffect(() => {
      setCities(provinces[province] || []);
      setCity(undefined);
    }, [province]);
    return (
      <Space size="large">
        <Select
          {...args}
          placeholder={formatMessage({ defaultMessage: "选择省份" })}
          options={Object.keys(provinces)}
          onChange={setProvince}
        />
        <Select
          {...args}
          placeholder={formatMessage({ defaultMessage: "选择城市" })}
          options={cities}
          value={city}
          onChange={setCity}
        />
      </Space>
    );
  },
};

export const LargeData: Story = {
  args: {
    ...Basic.args,
    children: undefined,
    options: new Array(10000).fill(null).map((_, index) => `Item ${index}`),
    allowCreate: true,
  },
  render: (args, { intl: { formatMessage } }) => (
    <Select {...args} placeholder={formatMessage({ defaultMessage: "请选择" })} mode="multiple" />
  ),
};

export const Sort: Story = {
  args: {
    ...Basic.args,
    dragToSort: true,
    mode: "multiple",
    defaultValue: options.slice(0, 3),
  },
  render: RenderTag.render,
};

const autoWidth = { minWidth: 300, maxWidth: 500 };
export const AutoWidth: Story = {
  args: {
    ...Basic.args,
    autoWidth,
  },
  render: (args, { intl: { formatMessage } }) => {
    return (
      <Space direction="vertical" style={{ width: "100%" }}>
        <Divider>
          <Typography.Text code>{JSON.stringify(autoWidth)}</Typography.Text>
        </Divider>
        <Select {...args} placeholder={formatMessage({ defaultMessage: "请选择" })} />
        <Select
          {...args}
          prefix={<IconLocation />}
          placeholder={formatMessage({ defaultMessage: "请选择" })}
        />
        <Select
          {...args}
          prefix={<IconLocation />}
          addBefore={formatMessage({ defaultMessage: "选择城市" })}
          placeholder={formatMessage({ defaultMessage: "请选择" })}
        />
      </Space>
    );
  },
};
