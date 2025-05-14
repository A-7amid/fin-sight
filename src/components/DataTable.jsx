import React, { useRef, useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MoreHorizontal, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "../utils/clsx";
import { IoMdAdd } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useAddTransaction } from "../contexts/AddTransaction.context";
// import { dummyTransactions as data } from "../transactions";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <span
        // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          {/* <ArrowUpDown /> */}
        </span>
      );
    },
    cell: ({ row }) => <div>{row.getValue("category")}</div>,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <div className="capitalize">{row.getValue("date")}</div>,
  },
  {
    accessorKey: "paymentMode",
    header: "Payment Mode",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("paymentMode")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      return <div>{row.getValue("description")}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return (
        <div
          className={cn(
            "text-[15px] float-right font-semibold text-red-500 font-mono",
            {
              "text-green-500": row.original.transactionType === "income",
            }
          )}
        >
          {formatted}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger className="float-right">
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 cursor-pointer right-0 relative text-white/50 hover:text-white hover:bg-[#3a3a43a9]"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-[#1a1a1f] border-neutral-800"
            align="end"
          >
            <DropdownMenuItem className="text-white focus:text-white focus:bg-[#3a3a43a9]">
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500 focus:text-red-500 focus:bg-[#3a3a43a9]">
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTable() {
  const { setShowForm, transactions } = useAddTransaction();
  const data = transactions;

  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [isDeleteShown, setIsDeleteShown] = useState(false);

  const searchRef = useRef(null);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const handleSearch = (e) => {
    table.getColumn("category")?.setFilterValue(e.target.value);
    e.target.value.length !== 0
      ? setIsDeleteShown(true)
      : setIsDeleteShown(false);
  };

  return (
    <div className="px-5 min:h-full">
      <div className="flex items-center mb-3 gap-x-4 w-full">
        <div className="w-[80%] bg-[#121216] p-1.5 flex items-center border-neutral-800 border rounded-sm focus-within:border-blue-500 transition duration-75 justify-between">
          <div className="flex items-center pl-1 gap-x-2.5 w-full">
            <CiSearch />
            <input
              type="text"
              ref={searchRef}
              placeholder="Search..."
              value={table.getColumn("category")?.getFilterValue() ?? ""}
              onChange={(e) => {
                handleSearch(e);
              }}
              className="outline-none flex grow focus-within:border-blue-500 w-full"
            />
          </div>
          {isDeleteShown && (
            <X
              className="size-5 cursor-pointer stroke-zinc-400 hover:stroke-zinc-100 transition duration-100"
              onClick={() => {
                searchRef.current.value = "";
                handleSearch({ target: { value: "" } });
              }}
            />
          )}
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="px-2 py-1.5 gap-x-3 grow flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition duration-200 cursor-pointer uppercase font-medium text-sm rounded-sm"
        >
          <IoMdAdd className="size-5 stroke-3" />
          <span>add transaction</span>
        </button>
      </div>

      <div className="rounded-md border border-neutral-800">
        <Table className="capitalize">
          <TableHeader className="border-b border-neutral-800 bg-[#1a1a1f]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      className={cn("py-0.5 md:visible invisible", {
                        "visible py-0.5":
                          header.id === "category" ||
                          header.id === "select" ||
                          header.id === "amount",
                      })}
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="bg-[#121216] ">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={cn(
                    "data-[state=selected]:bg-white/10 hover:bg-[#28282fa9]"
                  )}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      <div
                        className={cn(
                          "rounded-2xl md:visible invisible",
                          {
                            "text-right bg-yellow-500 w-full":
                              cell.column.id == "amount",
                          },
                          {
                            "visible text-white":
                              cell.column.id === "category" ||
                              cell.column.id === "select" ||
                              cell.column.id === "amount",
                          }
                        )}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex items-center w-full justify-between space-x-2 py-3 bg-[#1a1a1f] border-t border-neutral-800 px-3.5">
          <div className="text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2.5 flex items-center">
            <Button
              size="xs"
              variant="outline"
              className="cursor-pointer border border-neutral-700 bg-[#121216] rounded-sm px-3 py-1 text-sm flex gap-x-3 items-center"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <MdArrowBackIos className="size-3" />
              <span>Previous</span>
            </Button>
            <Button
              size="xs"
              variant="outline"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="cursor-pointer border border-neutral-700 bg-[#121216] hover:bg-[#2c2c33] rounded-sm px-3 py-1 text-sm flex gap-x-3 items-center"
            >
              <span>Next</span>
              <MdArrowForwardIos className="size-3" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
