import { api } from "@/api/api";
import TableContent from "../components/Table";
import { useQuery } from "@tanstack/react-query";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { columns } from './Countries';

type DataType = {
  id: string;
  image_src: string;
  title_en: string;
  title_ru: string;
  title_uz: string;
  title_tr: string;
};

export const columns: ColumnDef<DataType>[] = [
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
    accessorKey: "image_src",
    header: ({ column }) => {
      return (
        <Button variant="ghost">
          Rasm
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <Avatar>
        <AvatarImage
          width={50}
          src={
            "https://tse1.mm.bing.net/th/id/OIP.ww_KFchxG8yzdZ5mqj1HxwHaHq?pid=Api&P=0&h=220"
          }
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    ),
  },
  {
    accessorKey: "title_en",
    header: () => <div className="text-center">Inglizcha Nomi</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("title_en")}</div>;
    },
  },
  {
    accessorKey: "title_uz",
    header: () => <div className="text-center">Uzbekcha Nomi</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("title_uz")}</div>;
    },
  },
  {
    accessorKey: "title_ru",
    header: () => <div className="text-center">Ruscha Nomi</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("title_ru")}</div>;
    },
  },
  {
    accessorKey: "title_tr",
    header: () => <div className="text-center">Turkcha Nomi</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("title_tr")}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Button className="w-full">Edit</Button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button className="w-full bg-red-600">Delete</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const Countries = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const res = await api.get("countries");
      return res.data.data;
    },
  });

  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <section>
        <div>
          <TableContent DataType={DataType} columns={columns}  data={data} />
        </div>
      </section>
    </>
  );
};

export default Countries;
