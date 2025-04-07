import React, { Ref } from "react";
import { default as ArcoTable } from "@arco-design/web-react/es/Table";
import type { TableInstance } from "@arco-design/web-react/es/Table/table";
import type { TableProps as ArcoTableProps } from "@arco-design/web-react/es/Table";
import { Empty } from "..";
import RowActions from "./row-actions";

export type {
  RowSelectionProps as TableRowSelectionProps,
  ColumnProps as TableColumnProps,
  ExpandProps as TableExpandProps,
} from "@arco-design/web-react/es/Table/interface";
export type { TableInstance } from "@arco-design/web-react/es/Table/table";

export type TableProps = Omit<ArcoTableProps, "noDataElement">;

const TableFunction = (props: TableProps, ref: Ref<TableInstance>) => {
  return (
    <ArcoTable
      ref={ref}
      {...props}
      noDataElement={<Empty icon={<Empty.NoContent />} size="small" />}
    />
  );
};

const ForwardRefTable = React.forwardRef<TableInstance, TableProps>(TableFunction);

const Table = ForwardRefTable as typeof ForwardRefTable & {
  Summary: typeof ArcoTable.Summary;
  RowActions: typeof RowActions;
};

Table.displayName = "Table";

Object.assign(Table, {
  Summary: ArcoTable.Summary,
  RowActions,
});

export default Table;
