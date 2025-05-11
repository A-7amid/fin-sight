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
import {
  ArrowUpDown,
  Camera,
  ChevronDown,
  MoreHorizontal,
  Soup,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
import { useShowForm } from "../contexts/AddTransaction.context";

const data = [
  {
    id: "1",
    amount: 316,
    category: "Food",
    date: "2023-10-01",
    paymentMode: "Credit Card",
    description: "Weekly grocery shopping",
    transactionType: "income",
  },
  {
    id: "2",
    category: "Utilities",
    date: "2023-10-02",
    paymentMode: "Bank Transfer",
    description: "Electricity bill payment",
    amount: 242,
    categoryColor: "#3498DB", // Blue for Utilities
    transactionType: "expense",
  },
  {
    id: "3",
    category: "Entertainment",
    date: "2023-10-03",
    paymentMode: "Debit Card",
    description: "Movie tickets",
    amount: 837,
    categoryColor: "#9B59B6", // Purple for Entertainment
    transactionType: "expense",
  },
  {
    id: "4",
    category: "Dining",
    date: "2023-10-04",
    paymentMode: "Cash",
    description: "Dinner at a restaurant",
    amount: 874,
    categoryColor: "#E67E22", // Orange for Dining
    transactionType: "expense",
  },
  {
    id: "5",
    category: "Transportation",
    date: "2023-10-05",
    paymentMode: "Mobile Payment",
    description: "Taxi fare",
    amount: 721,
    categoryColor: "#1ABC9C", // Teal for Transportation
    transactionType: "income",
  },
  {
    id: "6",
    category: "Shopping",
    date: "2023-10-06",
    paymentMode: "Credit Card",
    description: "Clothing purchase",
    amount: 450,
    categoryColor: "#F39C12", // Yellow-Orange for Shopping
    transactionType: "expense",
  },
  {
    id: "7",
    category: "Housing",
    date: "2023-10-07",
    paymentMode: "Bank Transfer",
    description: "Monthly rent payment",
    amount: 1200,
    categoryColor: "#2ECC71", // Green for Housing
    transactionType: "income",
  },
  {
    id: "8",
    category: "Bills",
    date: "2023-10-08",
    paymentMode: "Debit Card",
    description: "Internet bill",
    amount: 100,
    categoryColor: "#E74C3C", // Red for Bills
    transactionType: "expense",
  },
  {
    id: "9",
    category: "Extra income",
    date: "2023-10-09",
    paymentMode: "Bank Transfer",
    description: "Freelance project payment",
    amount: 500,
    categoryColor: "#8E44AD", // Purple for Extra income
    transactionType: "income",
  },
  {
    id: "10",
    category: "Personal Care",
    date: "2023-10-10",
    paymentMode: "Cash",
    description: "Haircut",
    amount: 50,
    categoryColor: "#FFC300", // Bright Yellow for Personal Care
    transactionType: "expense",
  },
  {
    id: "11",
    category: "Interests",
    date: "2023-10-11",
    paymentMode: "Credit Card",
    description: "Hobby supplies",
    amount: 200,
    categoryColor: "#2980B9", // Deep Blue for Interests
    transactionType: "income",
  },
  {
    id: "12",
    category: "Miscellaneous",
    date: "2023-10-12",
    paymentMode: "Cash",
    description: "Random expenses",
    amount: 75,
    categoryColor: "#95A5A6", // Gray for Miscellaneous
    transactionType: "expense",
  },
  {
    id: "13",
    category: "Health Care",
    date: "2023-10-13",
    paymentMode: "Bank Transfer",
    description: "Doctor's appointment",
    amount: 150,
    categoryColor: "#C0392B", // Dark Red for Health Care
    transactionType: "income",
  },
  {
    id: "14",
    category: "Insurance",
    date: "2023-10-14",
    paymentMode: "Bank Transfer",
    description: "Car insurance premium",
    amount: 300,
    categoryColor: "#34495E", // Dark Blue-Gray for Insurance
    transactionType: "expense",
  },
  {
    id: "15",
    category: "Salary",
    date: "2023-10-15",
    paymentMode: "Bank Transfer",
    description: "Monthly salary",
    amount: 3000,
    categoryColor: "#27AE60", // Green for Salary
    transactionType: "income",
  },
  {
    id: "16",
    category: "Tax",
    date: "2023-10-16",
    paymentMode: "Bank Transfer",
    description: "Quarterly tax payment",
    amount: 500,
    categoryColor: "#D35400", // Burnt Orange for Tax
    transactionType: "expense",
  },
  {
    id: "17",
    category: "Education",
    date: "2023-10-17",
    paymentMode: "Credit Card",
    description: "Online course fee",
    amount: 200,
    categoryColor: "#5DADE2", // Light Blue for Education
    transactionType: "income",
  },
  {
    id: "18",
    category: "Mortgage / Rent",
    date: "2023-10-18",
    paymentMode: "Bank Transfer",
    description: "Monthly mortgage payment",
    amount: 1500,
    categoryColor: "#1F618D", // Navy Blue for Mortgage / Rent
    transactionType: "expense",
  },
];

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
          className={cn("text-right font-medium text-red-500", {
            "text-green-500": row.original.transactionType === "income",
          })}
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
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 cursor-pointer text-white/50 hover:text-white hover:bg-[#3a3a43a9]"
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
  const { setShowForm } = useShowForm();

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
        <Table>
          <TableHeader className="border-b border-neutral-800 bg-[#1a1a1f]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className="py-0.5" key={header.id}>
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
          <TableBody className="bg-[#121216]">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="data-[state=selected]:bg-white/10 py-10 hover:bg-[#28282fa9]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      <div
                        className={cn(
                          `rounded-2xl bg-[${cell.row.original.categoryColor}] text-white`
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
