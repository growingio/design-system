import type { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Button,
  Checkbox,
  Divider,
  Input,
  Radio,
  Space,
  Tree,
  TreeProps,
  Typography,
} from '../..';
import {
  IconDown,
  IconDragArrow,
  IconDriveFile,
  IconPlus,
  IconStar,
} from '@arco-iconbox/react-growingio';
import { SizeType } from '../../_core/types';

const TreeNode = Tree.Node;
const meta: Meta<typeof Tree> = {
  component: Tree,
  title: 'Base/Tree',
  parameters: {
    layout: null,
  },
};

export default meta;
type Story = StoryObj<TreeProps>;

const treeData = [
  {
    title: 'Trunk 0-0',
    key: '0-0',
    children: [
      {
        title: 'Leaf',
        key: '0-0-1',
      },
      {
        title: 'Branch 0-0-2',
        key: '0-0-2',
        disabled: true,
        children: [
          {
            title: 'Leaf',
            key: '0-0-2-1',
          },
          {
            title: 'Leaf',
            key: '0-0-2-2',
            disableCheckbox: true,
          },
        ],
      },
    ],
  },
  {
    title: 'Trunk 0-1',
    key: '0-1',
    children: [
      {
        title: 'Branch 0-1-1',
        key: '0-1-1',
        children: [
          {
            title: 'Leaf ',
            key: '0-1-1-1',
          },
          {
            title: 'Leaf ',
            key: '0-1-1-2',
          },
        ],
      },
      {
        title: 'Leaf',
        key: '0-1-2',
      },
    ],
  },
];

export const Basic: Story = {
  args: {
    defaultExpandedKeys: ['0-0-0'],
    defaultSelectedKeys: ['0-0-0-1'],
  },
  render: (args) => (
    <Tree {...args}>
      <TreeNode title="Trunk" key="0-0">
        <TreeNode title="Branch 0-0-0" key="0-0-0">
          <TreeNode title="Leaf" key="0-0-0-0" disabled />
          <TreeNode title="Leaf" key="0-0-0-1" />
        </TreeNode>
        <TreeNode title="Branch 0-0-1" key="0-0-1">
          <TreeNode title="Leaf" key="0-0-1-0" />
          <TreeNode title="Leaf" key="0-0-1-1" />
        </TreeNode>
      </TreeNode>
    </Tree>
  ),
};

export const WithTreeData: Story = {
  args: {
    treeData,
  },
  render: (args) => <Tree {...args} />,
};

export const BlockNode: Story = {
  ...WithTreeData,
  args: {
    ...WithTreeData.args,
    blockNode: true,
  },
  parameters: {
    layout: null,
  },
};

export const Multiple: Story = {
  ...WithTreeData,
  args: {
    ...WithTreeData.args,
    multiple: true,
  },
};

export const TreeWithCheckbox: Story = {
  args: {},
  render: () => {
    const [checkedKeys, setCheckedKeys] = useState(['0-0', '0-1']);
    const [checkStrictly, setCheckStrictly] = useState(false);

    return (
      <Space direction="vertical" size={0}>
        <Checkbox
          onChange={(value) => {
            setCheckStrictly(value);
            setCheckedKeys([]);
          }}
        >
          <FormattedMessage defaultMessage="严格模式" />
        </Checkbox>
        <Divider />
        <Tree
          checkStrictly={checkStrictly}
          checkable
          selectable={false}
          checkedKeys={checkedKeys}
          onCheck={(value) => {
            setCheckedKeys(value);
          }}
          treeData={treeData}
        />
      </Space>
    );
  },
};

export const LoadMore: Story = {
  render: () => {
    const defaultTreeData = [
      {
        title: 'Trunk 0-0',
        key: '0-0',
      },
      {
        title: 'Trunk 0-1',
        key: '0-1',
        children: [
          {
            title: 'Branch 0-1-1',
            key: '0-1-1',
          },
        ],
      },
    ];
    const [treeData, setTreeData] = useState(defaultTreeData);

    const loadMore = (treeNode) => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          treeNode.props.dataRef.children = [
            {
              title: `leaf`,
              key: `${treeNode.props._key}-1`,
              isLeaf: true,
            },
          ];
          setTreeData([...treeData]);
          resolve();
        }, 1000);
      });
    };

    return (
      <Tree
        defaultSelectedKeys={['node1']}
        loadMore={loadMore}
        treeData={treeData}
      />
    );
  },
};

export const Draggable: Story = {
  render: () => {
    const [data, setData] = useState(treeData);

    function onDrop({ dragNode, dropNode, dropPosition }) {
      const loop = (data, key, callback) => {
        data.some((item, index, arr) => {
          if (item.key === key) {
            callback(item, index, arr);
            return true;
          }

          if (item.children) {
            return loop(item.children, key, callback);
          }
        });
      };

      const data = [...treeData];
      let dragItem;
      loop(data, dragNode.props._key, (item, index, arr) => {
        arr.splice(index, 1);
        dragItem = item;
        dragItem.className = 'tree-node-dropover';
      });

      if (dropPosition === 0) {
        loop(data, dropNode.props._key, (item) => {
          item.children = item.children || [];
          item.children.push(dragItem);
        });
      } else {
        loop(data, dropNode.props._key, (_, index, arr) => {
          arr.splice(dropPosition < 0 ? index : index + 1, 0, dragItem);
        });
      }

      setData([...data]);
      setTimeout(() => {
        dragItem.className = '';
        setData([...data]);
      }, 1000);
    }

    return <Tree treeData={data} draggable onDrop={onDrop} />;
  },
};

export const CheckStrategy: Story = {
  render: () => {
    const [checkedKeys, setCheckedKeys] = useState(['0-1-1-1']);
    const [checkedStrategy, setCheckedStrategy] = useState(Tree.SHOW_ALL);

    return (
      <Space direction="vertical" size="large">
        <Radio.Group
          type="button"
          value={checkedStrategy}
          onChange={(value) => {
            setCheckedStrategy(value);
            setCheckedKeys([]);
          }}
          options={[
            {
              value: Tree.SHOW_ALL,
              label: 'show all',
            },
            {
              value: Tree.SHOW_PARENT,
              label: 'show parent',
            },
            {
              value: Tree.SHOW_CHILD,
              label: 'show child',
            },
          ]}
        />
        <Typography.Text>Current: {checkedKeys.join(' , ')}</Typography.Text>
        <Tree
          checkedStrategy={checkedStrategy}
          checkable
          selectable={false}
          checkedKeys={checkedKeys}
          onCheck={(value) => {
            setCheckedKeys(value);
          }}
          treeData={treeData}
        />
      </Space>
    );
  },
};

export const ShowLine: Story = {
  ...WithTreeData,
  args: {
    ...WithTreeData.args,
    showLine: true,
  },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<SizeType>('default');

    return (
      <Space direction="vertical" size="large">
        <Radio.Group
          options={['mini', 'small', 'default', 'large']}
          type="button"
          value={size}
          onChange={setSize}
        ></Radio.Group>
        <Tree blockNode style={{ marginRight: 20 }} checkable size={size}>
          <TreeNode title="Trunk 0-0" key="0-0">
            <TreeNode title="Branch 0-0-0" key="0-0-0" disabled>
              <TreeNode title="Leaf" key="0-0-0-0" />
              <TreeNode title="Leaf" key="0-0-0-1" />
            </TreeNode>
            <TreeNode title="Branch 0-0-1" key="0-0-1">
              <TreeNode title="Leaf" key="0-0-1-0" />
            </TreeNode>
          </TreeNode>
        </Tree>
      </Space>
    );
  },
};

export const TreeNodeIcon: Story = {
  render: (args) => (
    <Tree {...args}>
      <TreeNode icon={<IconStar />} key="node1" title="Trunk">
        <TreeNode icon={<IconStar />} key="node2" title="Leaf" />
      </TreeNode>
      <TreeNode icon={<IconStar />} key="node3" title="Trunk">
        <TreeNode icon={<IconStar />} key="node4" title="Leaf" />
        <TreeNode icon={<IconStar />} key="node5" title="Leaf" />
      </TreeNode>
    </Tree>
  ),
};

export const RenderExtra: Story = {
  render: () => {
    const [data, setData] = useState(treeData);

    return (
      <Tree
        treeData={data}
        blockNode
        checkable
        selectable={false}
        renderExtra={(node) => (
          <IconPlus
            style={{
              position: 'absolute',
              right: 8,
              fontSize: 12,
              top: 10,
              color: '#3370ff',
            }}
            onClick={() => {
              const dataChildren = node.dataRef.children || [];
              dataChildren.push({
                title: 'new tree node',
                key: node._key + '-' + (dataChildren.length + 1),
              });
              node.dataRef.children = dataChildren;
              setData([...treeData]);
            }}
          />
        )}
      />
    );
  },
};

export const Icons: Story = {
  render: () => (
    <Tree
      showLine
      draggable
      icons={{
        switcherIcon: <IconDown />,
        dragIcon: <IconDragArrow />,
      }}
    >
      <TreeNode key="node1" title="Trunk">
        <TreeNode key="node2" title="Leaf" />
      </TreeNode>
      <TreeNode key="node3" title="Trunk">
        <TreeNode
          key="node4"
          icons={{
            switcherIcon: <IconDriveFile />,
          }}
          title="Leaf"
        />
        <TreeNode
          key="node5"
          icons={{
            switcherIcon: <IconDriveFile />,
          }}
          title="Leaf"
        />
      </TreeNode>
    </Tree>
  ),
};

export const VirtualList: Story = {
  render: () => {
    const treeRef = useRef<Tree>();

    function loop(path = '0', level = 2) {
      const list = [];

      for (let i = 0; i < 10; i += 1) {
        const key = `${path}-${i}`;
        const treeNode = {
          title: key,
          key,
          children: undefined,
        };

        if (level > 0) {
          treeNode.children = loop(key, level - 1);
        }

        list.push(treeNode);
      }

      return list;
    }

    const treeData = loop();

    return (
      <Space size="large" direction="vertical">
        <Button
          type="primary"
          onClick={() => {
            treeRef.current && treeRef.current.scrollIntoView('0-0-2-2');
          }}
        >
          Scroll to 0-0-2-2, i.e. the 26th.
        </Button>
        <Tree
          ref={treeRef}
          blockNode
          checkable
          treeData={treeData}
          virtualListProps={{ height: 200 }}
        />
      </Space>
    );
  },
};

export const Search: Story = {
  render: () => {
    function searchData(inputValue) {
      const loop = (data) => {
        const result = [];
        data.forEach((item) => {
          if (item.title.toLowerCase().indexOf(inputValue.toLowerCase()) > -1) {
            result.push({ ...item });
          } else if (item.children) {
            const filterData = loop(item.children);

            if (filterData.length) {
              result.push({ ...item, children: filterData });
            }
          }
        });
        return result;
      };

      return loop(treeData);
    }

    const [data, setData] = useState(treeData);
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
      if (!inputValue) {
        setData(treeData);
      } else {
        const result = searchData(inputValue);
        setData(result);
      }
    }, [inputValue]);

    return (
      <Space size="medium" direction="vertical">
        <Input.Search
          style={{
            marginBottom: 8,
            maxWidth: 240,
          }}
          onChange={setInputValue}
        />

        <Tree
          treeData={data}
          renderTitle={({ title }) => {
            const text = title as string;
            if (inputValue) {
              const index = text
                .toLowerCase()
                .indexOf(inputValue.toLowerCase());

              if (index === -1) {
                return text;
              }

              const prefix = text.substring(0, index);
              const suffix = text.substring(index + inputValue.length);
              return (
                <span>
                  {prefix}
                  <span style={{ color: 'var(--color-primary-light-4)' }}>
                    {text.substring(index, inputValue.length)}
                  </span>
                  {suffix}
                </span>
              );
            }

            return text;
          }}
        />
      </Space>
    );
  },
};

export const FieldNames: Story = {
  render: () => {
    const data = [
      {
        label: 'Trunk 0-0',
        value: '0-0',
        items: [
          {
            label: 'Branch 0-0-2',
            value: '0-0-2',
            selectable: false,
            items: [
              {
                label: 'Leaf',
                value: '0-0-2-1',
                items: [
                  {
                    label: 'Leaf 0-0-2',
                    value: '0-0-2-1-0',
                    items: [
                      {
                        label: 'Leaf',
                        value: '0-0-2-1-0-0',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'Trunk 0-1',
        value: '0-1',
        items: [
          {
            label: 'Branch 0-1-1',
            value: '0-1-1',
            items: [
              {
                label: 'Leaf',
                value: '0-1-1-0',
              },
            ],
          },
        ],
      },
    ];

    return (
      <Tree
        fieldNames={{
          key: 'value',
          title: 'label',
          children: 'items',
        }}
        treeData={data}
      />
    );
  },
};
