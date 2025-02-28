import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../../../src";

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: "Components/General/Typography",
};

export default meta;
type Story = StoryObj<typeof Typography>;

const { Text, Title, Paragraph, Ellipsis } = Typography;

export const defaultArticle = () => (
  <Typography>
    <Title>Design System</Title>
    <Paragraph>
      A design is a plan or specification for the construction of an object or system or for the
      implementation of an activity or process, or the result of that plan or specification in the
      form of a prototype, product or process. The verb to design expresses the process of
      developing a design.
    </Paragraph>
    <Paragraph>
      In some cases, the direct construction of an object without an explicit prior plan (such as in
      craftwork, some engineering, coding, and graphic design) may also be considered
      <Text bold>to be a design activity.</Text>
    </Paragraph>
    <Title heading={2}>GrowingIO Design</Title>
    <Paragraph>
      The GrowingIO Design component library defines a set of default particle variables, and a
      custom theme is to <Text mark>customize</Text> and <Text underline>overwrite</Text> this
      variable list.
    </Paragraph>
    <Paragraph blockquote>
      A design is a plan or specification for the construction of an object or system or for the
      implementation of an activity or process, or the result of that plan or specification in the
      form of a <Text code>prototype</Text>, <Text code>product</Text> or
      <Text code>process</Text>. The verb to design expresses the process of developing a design.
    </Paragraph>
    <Paragraph mark underline delete>
      A design is a plan or specification for the construction of an object or system or for the
      implementation of an activity or process.
    </Paragraph>
    <Paragraph>
      <ul>
        <li>
          Architectural blueprints
          <ul>
            <li>Architectural blueprints</li>
          </ul>
        </li>
        <li>Engineering drawings</li>
        <li>Business processes</li>
      </ul>
    </Paragraph>
    <Paragraph>
      <ol>
        <li>Architectural blueprints</li>
        <li>Engineering drawings</li>
        <li>Business processes</li>
      </ol>
    </Paragraph>
  </Typography>
);

export const Basic: Story = {
  render: defaultArticle,
};

export const TypographyTitle: Story = {
  render: () => (
    <Typography>
      <Title>H1. The Pragmatic Romanticism</Title>
      <Title heading={2}>H2. The Pragmatic Romanticism</Title>
      <Title heading={3}>H3. The Pragmatic Romanticism</Title>
      <Title heading={4}>H4. The Pragmatic Romanticism</Title>
      <Title heading={5}>H5. The Pragmatic Romanticism</Title>
      <Title heading={6}>H6. The Pragmatic Romanticism</Title>
    </Typography>
  ),
};

export const TypographyText: Story = {
  render: () => (
    <Typography>
      {[
        <Text>GrowingIO Design</Text>,
        <Text type="primary">Primary</Text>,
        <Text type="secondary">Secondary</Text>,
        <Text type="success">Success</Text>,
        <Text type="warning">Warning</Text>,
        <Text type="error">Error</Text>,
        <Text bold>Bold</Text>,
        <Text disabled>Disabled</Text>,
        <Text mark>Mark</Text>,
        <Text underline>Underline</Text>,
        <Text delete>Line through</Text>,
        <Text code>Code snippet</Text>,
      ].map((element) => (
        <Paragraph>{element}</Paragraph>
      ))}
    </Typography>
  ),
};

export const TypographyParagraph: Story = {
  render: () => (
    <Typography>
      <Title heading={5}>Default</Title>
      <Paragraph>
        A design is a plan or specification for the construction of an object or system or for the
        implementation of an activity or process, or the result of that plan or specification in the
        form of a prototype, product or process. The verb to design expresses the process of
        developing a design. In some cases, the direct construction of an object without an explicit
        prior plan (such as in craftwork, some engineering, coding, and graphic design) may also be
        considered to be a design activity.
      </Paragraph>
      <Title heading={5}>Secondary</Title>
      <Paragraph type="secondary">
        A design is a plan or specification for the construction of an object or system or for the
        implementation of an activity or process, or the result of that plan or specification in the
        form of a prototype, product or process. The verb to design expresses the process of
        developing a design. In some cases, the direct construction of an object without an explicit
        prior plan (such as in craftwork, some engineering, coding, and graphic design) may also be
        considered to be a design activity.
      </Paragraph>
      <Title heading={5}>Spacing default</Title>
      <Paragraph>
        A design is a plan or specification for the construction of an object or system or for the
        implementation of an activity or process, or the result of that plan or specification in the
        form of a prototype, product or process. The verb to design expresses the process of
        developing a design. In some cases, the direct construction of an object without an explicit
        prior plan (such as in craftwork, some engineering, coding, and graphic design) may also be
        considered to be a design activity.
      </Paragraph>
      <Title heading={5}>Spacing close</Title>
      <Paragraph type="secondary" spacing="close">
        A design is a plan or specification for the construction of an object or system or for the
        implementation of an activity or process, or the result of that plan or specification in the
        form of a prototype, product or process. The verb to design expresses the process of
        developing a design.
      </Paragraph>
    </Typography>
  ),
};

export const TypographyEllipsis: Story = {
  render: () => (
    <Typography style={{ width: 400 }}>
      <Ellipsis rows={3}>
        A design is a plan or specification for the construction of an object or system or for the
        implementation of an activity or process, or the result of that plan or specification in the
        form of a prototype, product or process. The verb to design expresses the process of
        developing a design.
      </Ellipsis>
    </Typography>
  ),
};
