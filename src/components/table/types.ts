import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";

export interface TableState {
  sorting: SortingState;
  columnFilters: ColumnFiltersState;
  columnVisibility?: VisibilityState;
  pageIndex: number;
  pageSize: number;
}

export interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  state: TableState;

  pageCount: number;

  onSortingChange: (value: SortingState) => void;
  onFilterChange: (value: ColumnFiltersState) => void;
  onPaginationChange: (pageIndex: number, pageSize: number) => void;

  toolbar?: React.ReactNode;
}
