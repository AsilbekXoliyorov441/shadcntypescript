import { Check, Ghost, Icon, MoreHorizontal } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";

export type Country = {
  id: string;
  image_src: string;
  title_en: string;
  title_uz: string;
  title_ru: string;
  title_tr: string;
};

export const countryColumns: ColumnDef<Country>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(v) => row.toggleSelected(!!v)}
      />
    ),
  },
  {
    accessorKey: "image_src",
    header: "Rasm",
    cell: () => (
      <Avatar>
        <AvatarImage
          width={50}
          src={
            "https://tse4.mm.bing.net/th/id/OIP.ATjPVYjPGB0WJ_FcqWl_CwHaHa?pid=Api&P=0&h=220"
          }
          alt="rasm"
        />
      </Avatar>
    ),
  },
  {
    accessorKey: "title_en",
    header: "Inglizcha Nom",
    cell: ({ row }) => (
      <p className="text-red-700 font-bold">{row.getValue("title_en")}</p>
    ),
  },
  {
    accessorKey: "title_ru",
    header: "Ruscha",
    cell: ({ row }) => <p>{row.getValue("title_ru")}</p>,
  },
  {
    accessorKey: "title_uz",
    header: "Uzbekcha",
    cell: ({ row }) => <p>{row.getValue("title_ru")}</p>,
  },
  {
    accessorKey: "title_tr",
    header: "Turkcha",
    cell: ({ row }) => <p>{row.getValue("title_ru")}</p>,
  },
  {
    accessorKey: "Boshqaruv",
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white p-4">
          <Button>Edit</Button>
          <DropdownMenuSeparator />
          <Button>Delete</Button>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
