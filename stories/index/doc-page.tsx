import { Unstyled } from "@storybook/blocks";
import { injectIntl, type IntlShape } from "react-intl";
import { Typography, Grid, Tag } from "../../src";
import ListItem, { ListItemProps } from "./list-item";

import ButtonSvg from "./svgs/button-svg";
import IconSvg from "./svgs/icon-svg";
import LinkSvg from "./svgs/link-svg";
import TypographySvg from "./svgs/typography-svg";

import DividerSvg from "./svgs/divider-svg";
import GridSvg from "./svgs/grid-svg";
import LayoutSvg from "./svgs/layout-svg";
import SpaceSvg from "./svgs/space-svg";
import ResizeBoxSvg from "./svgs/resize-box-svg";

import AnchorSvg from "./svgs/anchor-svg";
import BackTopSvg from "./svgs/back-top-svg";
import BreadcrumbSvg from "./svgs/breadcrumb-svg";
import DropdownSvg from "./svgs/dropdown-svg";
import MenuSvg from "./svgs/menu-svg";
import PageHeaderSvg from "./svgs/page-header-svg";
import PaginationSvg from "./svgs/pagination-svg";
import StepsSvg from "./svgs/steps-svg";

import AvatarSvg from "./svgs/avatar-svg";
import BadgeSvg from "./svgs/badge-svg";
import CalendarSvg from "./svgs/calendar-svg";
import CardSvg from "./svgs/card-svg";
import CarouselSvg from "./svgs/carousel-svg";
import CollapseSvg from "./svgs/collapse-svg";
import CommentSvg from "./svgs/comment-svg";
import DescriptionsSvg from "./svgs/descriptions-svg";
import EmptySvg from "./svgs/empty-svg";
import ImageSvg from "./svgs/image-svg";
import TableSvg from "./svgs/table-svg";
import TabsSvg from "./svgs/tabs-svg";
import TagSvg from "./svgs/tag-svg";
import TooltipSvg from "./svgs/tooltip-svg";
import TourSvg from "./svgs/tour-svg";
import TreeSvg from "./svgs/tree-svg";

import CascaderSvg from "./svgs/cascader-svg";
import DatePickerSvg from "./svgs/date-picker-svg";
import InputSvg from "./svgs/input-svg";
import InputTagSvg from "./svgs/input-tag-svg";
import InputNumberSvg from "./svgs/input-number-svg";
import RadioSvg from "./svgs/radio-svg";
import SelectSvg from "./svgs/select-svg";
import TimePickerSvg from "./svgs/time-picker-svg";
import UploadSvg from "./svgs/upload-svg";
import VerificationCodeSvg from "./svgs/verification-code-svg";

import AlertSvg from "./svgs/alert-svg";
import MessageSvg from "./svgs/message-svg";
import ModalSvg from "./svgs/modal-svg";
import ResultSvg from "./svgs/result-svg";

import ConfigProviderSvg from "./svgs/config-provider-svg";

import styles from "./doc-page.module.css";

const { Title } = Typography;

function DocPage({ intl }: { intl: IntlShape }) {
  const { formatMessage } = intl;
  const groups: {
    [key: string]: { title: string; components: ListItemProps[] };
  } = {
    general: {
      title: formatMessage({ defaultMessage: "通用" }),
      components: [
        {
          name: "button",
          svg: <ButtonSvg />,
          title: formatMessage({ defaultMessage: "按钮 Button" }),
        },
        {
          name: "icon",
          svg: <IconSvg />,
          title: formatMessage({ defaultMessage: "图标 Icon" }),
        },
        {
          name: "link",
          svg: <LinkSvg />,
          title: formatMessage({ defaultMessage: "链接 Link" }),
        },
        {
          name: "typography",
          svg: <TypographySvg />,
          title: formatMessage({ defaultMessage: "排版 Typography" }),
        },
      ],
    },
    layout: {
      title: formatMessage({ defaultMessage: "布局" }),
      components: [
        {
          name: "divider",
          svg: <DividerSvg />,
          title: formatMessage({ defaultMessage: "分割线 Divider" }),
        },
        {
          name: "grid",
          svg: <GridSvg />,
          title: formatMessage({ defaultMessage: "栅格 Grid" }),
        },
        {
          name: "layout",
          svg: <LayoutSvg />,
          title: formatMessage({ defaultMessage: "布局 Layout" }),
        },
        {
          name: "resizebox",
          svg: <ResizeBoxSvg />,
          title: formatMessage({ defaultMessage: "伸缩框 ResizeBox" }),
        },
        {
          name: "space",
          svg: <SpaceSvg />,
          title: formatMessage({ defaultMessage: "间距 Space" }),
        },
      ],
    },
    navigation: {
      title: formatMessage({ defaultMessage: "导航" }),
      components: [
        {
          name: "anchor",
          svg: <AnchorSvg />,
          title: formatMessage({ defaultMessage: "锚点 Anchor" }),
        },
        {
          name: "backtop",
          svg: <BackTopSvg />,
          title: formatMessage({ defaultMessage: "返回顶部 BackTop" }),
        },
        {
          name: "breadcrumb",
          svg: <BreadcrumbSvg />,
          title: formatMessage({ defaultMessage: "面包屑 Breadcrumb" }),
        },
        {
          name: "dropdown",
          svg: <DropdownSvg />,
          title: formatMessage({ defaultMessage: "下拉菜单 Dropdown" }),
        },
        {
          name: "menu",
          svg: <MenuSvg />,
          title: formatMessage({ defaultMessage: "菜单 Menu" }),
        },
        {
          name: "pageheader",
          svg: <PageHeaderSvg />,
          title: formatMessage({ defaultMessage: "页头 PageHeader" }),
        },
        {
          name: "pagination",
          svg: <PaginationSvg />,
          title: formatMessage({ defaultMessage: "分页 Pagination" }),
        },
        {
          name: "steps",
          svg: <StepsSvg />,
          title: formatMessage({ defaultMessage: "步骤条 Steps" }),
        },
      ],
    },
    ["data-display"]: {
      title: formatMessage({ defaultMessage: "数据展示" }),
      components: [
        {
          name: "avatar",
          svg: <AvatarSvg />,
          title: formatMessage({ defaultMessage: "头像 Avatar" }),
        },
        {
          name: "badge",
          svg: <BadgeSvg />,
          title: formatMessage({ defaultMessage: "徽标 Badge" }),
        },
        {
          name: "calendar",
          svg: <CalendarSvg />,
          title: formatMessage({ defaultMessage: "日历 Calendar" }),
        },
        {
          name: "card",
          svg: <CardSvg />,
          title: formatMessage({ defaultMessage: "卡片 Card" }),
        },
        {
          name: "carousel",
          svg: <CarouselSvg />,
          title: formatMessage({ defaultMessage: "轮播 Carousel" }),
        },
        {
          name: "collapse",
          svg: <CollapseSvg />,
          title: formatMessage({ defaultMessage: "折叠面板 Collapse" }),
        },
        {
          name: "comment",
          svg: <CommentSvg />,
          title: formatMessage({ defaultMessage: "评论 Comment" }),
        },
        {
          name: "descriptions",
          svg: <DescriptionsSvg />,
          title: formatMessage({ defaultMessage: "描述列表 Descriptions" }),
        },
        {
          name: "empty",
          svg: <EmptySvg />,
          title: formatMessage({ defaultMessage: "空状态 Empty" }),
        },
        {
          name: "image",
          svg: <ImageSvg />,
          title: formatMessage({ defaultMessage: "图片 Image" }),
        },
        {
          name: "table",
          svg: <TableSvg />,
          title: formatMessage({ defaultMessage: "表格 Table" }),
        },
        {
          name: "tabs",
          svg: <TabsSvg />,
          title: formatMessage({ defaultMessage: "标签页 Tabs" }),
        },
        {
          name: "tag",
          svg: <TagSvg />,
          title: formatMessage({ defaultMessage: "标签 Tag" }),
        },
        {
          name: "tooltip",
          svg: <TooltipSvg />,
          title: formatMessage({ defaultMessage: "文字气泡 Tooltip" }),
        },
        {
          name: "tour",
          svg: <TourSvg />,
          title: formatMessage({ defaultMessage: "漫游式引导 Tour" }),
        },
        {
          name: "tree",
          svg: <TreeSvg />,
          title: formatMessage({ defaultMessage: "树 Tree" }),
        },
      ],
    },
    ["data-entry"]: {
      title: formatMessage({ defaultMessage: "数据输入" }),
      components: [
        {
          name: "cascader",
          svg: <CascaderSvg />,
          title: formatMessage({ defaultMessage: "级联选择 Cascader" }),
        },
        {
          name: "date-picker",
          svg: <DatePickerSvg />,
          title: formatMessage({ defaultMessage: "日期选择器 DatePicker" }),
        },
        {
          name: "input",
          svg: <InputSvg />,
          title: formatMessage({ defaultMessage: "输入框 Input" }),
        },
        {
          name: "input-number",
          svg: <InputNumberSvg />,
          title: formatMessage({ defaultMessage: "数字输入框 InputNumber" }),
        },
        {
          name: "input-tag",
          svg: <InputTagSvg />,
          title: formatMessage({ defaultMessage: "标签输入框 InputTag" }),
        },
        {
          name: "radio",
          svg: <RadioSvg />,
          title: formatMessage({ defaultMessage: "单选框 Radio" }),
        },
        {
          name: "select",
          svg: <SelectSvg />,
          title: formatMessage({ defaultMessage: "选择器 Select" }),
        },
        {
          name: "time-picker",
          svg: <TimePickerSvg />,
          title: formatMessage({ defaultMessage: "时间选择器 TimePicker" }),
        },
        {
          name: "upload",
          svg: <UploadSvg />,
          title: formatMessage({ defaultMessage: "上传 Upload" }),
        },
        {
          name: "verification-code",
          svg: <VerificationCodeSvg />,
          title: formatMessage({
            defaultMessage: "验证码 VerificationCode",
          }),
        },
      ],
    },
    feedback: {
      title: formatMessage({ defaultMessage: "反馈" }),
      components: [
        {
          name: "alert",
          svg: <AlertSvg />,
          title: formatMessage({ defaultMessage: "警告提示 Alert" }),
        },
        {
          name: "message",
          svg: <MessageSvg />,
          title: formatMessage({ defaultMessage: "全局提示 Message" }),
        },
        {
          name: "modal",
          svg: <ModalSvg />,
          title: formatMessage({ defaultMessage: "对话框 Modal" }),
        },
        {
          name: "result",
          svg: <ResultSvg />,
          title: formatMessage({ defaultMessage: "结果页 Result" }),
        },
      ],
    },
    others: {
      title: formatMessage({ defaultMessage: "其他" }),
      components: [
        {
          name: "configprovider",
          svg: <ConfigProviderSvg />,
          title: formatMessage({ defaultMessage: "全局配置 ConfigProvider" }),
        },
      ],
    },
  };

  return (
    <Unstyled>
      <Title>{formatMessage({ defaultMessage: "组件索引" })}</Title>
      <Title heading={2}>{formatMessage({ defaultMessage: "基础组件" })}</Title>
      {Object.keys(groups).map((g) => (
        <>
          <Title key={`${g}-title`} id={g} heading={3} className={styles.title}>
            {groups[g].title}
            <Tag>{groups[g].components.length}</Tag>
          </Title>
          <Grid.Row key={`${g}-row`} gutter={[18, 18]}>
            {groups[g].components.map((c) => (
              <Grid.Col key={c.name} span={6}>
                <ListItem group={g} {...c} />
              </Grid.Col>
            ))}
          </Grid.Row>
        </>
      ))}
    </Unstyled>
  );
}

const IntlDocPage = injectIntl(DocPage);
export default IntlDocPage;
