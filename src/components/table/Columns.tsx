import { Check, Ghost, Icon, MoreHorizontal } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { api } from '@/api/api';

export type Country = {
  id: string;
  image_src: string;
  title_en: string;
  title_uz: string;
  title_ru: string;
  title_tr: string;
};

async function deleteRow(id:string){
  try{
     await api.delete(id)
     console.log("ishladi");
     
  }catch(err){
    console.log(err);
  }
}


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
    id: "actions",
    header:"Boshqaruv",
    cell: ({row}) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} size={"icon"}>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white p-4">
          <Button >Edit</Button>
          <DropdownMenuSeparator />
          <Button onClick={() => deleteRow(row.original.id)}>Delete</Button>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];
