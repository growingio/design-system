import { Upload, UploadProps } from "@/src";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Upload> = {
  component: Upload,
  title: "Components/Data Entry/Upload",
};

export default meta;
type Story = StoryObj<typeof Upload>;

// Mock file list for stories
const defaultFileList: UploadProps["defaultFileList"] = [
  {
    uid: "1",
    name: "file1.pdf",
    status: "done",
  },
  {
    uid: "2",
    name: "file2.png",
    status: "done",
  },
  {
    uid: "3",
    name: "file3.mp3",
    status: "error",
  },
  {
    uid: "4",
    name: "file4.mp4",
    status: "uploading",
    percent: 50,
  },
];

export const Default: Story = {
  args: {
    action: "/",
    onChange: action("onChange"),
    onProgress: action("onProgress"),
    onRemove: action("onRemove"),
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const FileList: Story = {
  args: {
    ...Default.args,
    defaultFileList,
  },
};

const defaultpictureList: UploadProps["defaultFileList"] = [
  {
    uid: "1",
    name: "avatar1.png",
    url: "/demos/avatar.png",
  },
  {
    uid: "2",
    name: "avatar2.png",
    url: "/demos/avatar-02.png",
  },
  {
    uid: "3",
    name: "avatar3.png",
    url: "/demos/avatar-03.png",
  },
  {
    uid: "4",
    name: "avatar4.png",
    url: "/demos/avatar-04.png",
  },
];
export const PictureCard: Story = {
  args: {
    ...Default.args,
    defaultFileList: defaultpictureList,
    listType: "picture-card",
    imagePreview: true,
    onPreview: action("onPreview"),
  },
};

export const PictureList: Story = {
  args: {
    ...Default.args,
    defaultFileList: defaultpictureList,
    listType: "picture-list",
  },
};

export const DragAndDrop: Story = {
  args: {
    ...Default.args,
    drag: true,
    multiple: true,
    onDrop: action("onDrop"),
    onDragOver: action("onDragOver"),
    onDragLeave: action("onDragLeave"),
  },
};

export const ManualUpload: Story = {
  args: {
    ...Default.args,
    autoUpload: false,
    tip: "Select files and click the upload button to start uploading",
  },
};

export const BeforeUpload: Story = {
  args: {
    ...Default.args,
    beforeUpload: (file) => {
      const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
      const isLessThan5M = file.size / 1024 / 1024 < 5;

      if (!isJpgOrPng) {
        console.log("You can only upload JPG/PNG files!");
        action("beforeUpload:rejected")("Not a JPG/PNG file");
        return false;
      }

      if (!isLessThan5M) {
        console.log("Image must be smaller than 5MB!");
        action("beforeUpload:rejected")("File too large");
        return false;
      }

      action("beforeUpload:accepted")(file.name);
      return true;
    },
    tip: "Only JPG/PNG files less than 5MB are allowed",
  },
};

export const UploadLimit: Story = {
  args: {
    ...Default.args,
    limit: 5,
    onExceedLimit: action("onExceedLimit"),
    tip: "Maximum 5 files allowed",
  },
};

export const HideOnExceedLimit: Story = {
  args: {
    ...Default.args,
    limit: { maxCount: 3, hideOnExceedLimit: true },
    defaultFileList: defaultFileList.slice(0, 2),
    onExceedLimit: action("onExceedLimit"),
    tip: "Maximum 3 files allowed. Upload button will be hidden when limit is reached",
  },
};

export const ProgressProps: Story = {
  args: {
    ...Default.args,
    defaultFileList: [defaultFileList[3]],
    progressProps: {
      showText: true,
      size: "mini",
      type: "line",
    },
  },
};

export const DirectoryUpload: Story = {
  args: {
    ...Default.args,
    directory: true,
    multiple: true,
  },
};
