import { api } from "@/api/api";
import { countryColumns } from "@/components/table/Columns";
import { TableContent } from "@/components/table/Table";
import { useQuery } from "@tanstack/react-query";
import TableSkeleton from "./../components/table/TableSkeleton";

const Countries = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["countries"],
    queryFn: async () => {
      const res = await api.get("countries");
      return res.data.data;
    },
  });


  if (error) return <p>Error</p>;

  return (
    <>
      <section>
        <div>
          <TableContent isLoading={isLoading} columns={countryColumns} data={data} />
        </div>
      </section>
    </>
  );
};

export default Countries;
