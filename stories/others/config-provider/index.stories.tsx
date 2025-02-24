import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, ConfigProvider, DatePicker, Modal, Radio, TimePicker } from "../../../src";
import zhCN from "../../../src/locale/zh-CN";
import enUS from "../../../src/locale/en-US";
import { Pagination, Popconfirm } from "@arco-design/web-react";

const meta: Meta<typeof ConfigProvider> = {
  component: ConfigProvider,
  title: "Components/Others/ConfigProvider",
};

export default meta;
type Story = StoryObj<typeof ConfigProvider>;

export const Basic: Story = {
  render: () => {
    const [locale, setLocale] = useState("zh-CN");

    function getLocale() {
      switch (locale) {
        case "zh-CN":
          return zhCN;

        case "en-US":
          return enUS;
      }
    }

    return (
      <ConfigProvider locale={getLocale()}>
        <Radio.Group
          value={locale}
          options={["zh-CN", "en-US"]}
          name="locale"
          type="button"
          mode="fill"
          onChange={setLocale}
          style={{ marginBottom: 40 }}
        />
        <br />
        <Pagination
          total={200}
          showTotal
          sizeCanChange
          style={{ marginBottom: 20, marginRight: 40, minWidth: 550 }}
        />
        <DatePicker.RangePicker style={{ marginBottom: 20, marginRight: 40, width: 300 }} />
        <TimePicker.RangePicker style={{ marginBottom: 20, marginRight: 40, width: 300 }} />
        <Popconfirm title="Click to confirm!">
          <Button style={{ marginBottom: 20, marginRight: 20 }} type="primary">
            Popconfirm
          </Button>
        </Popconfirm>
        <Button
          onClick={() =>
            Modal.confirm({
              title: "Title",
              content: "Content",
            })
          }
        >
          Modal confirm
        </Button>
      </ConfigProvider>
    );
  },
};
