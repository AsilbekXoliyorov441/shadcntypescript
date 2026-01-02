import { useMutation, useQueryClient } from "@tanstack/react-query";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
// Next.js bo‘lsa: process.env.NEXT_PUBLIC_API_BASE_URL

type DeleteResourceOptions = {
  resourceName: string; // masalan "countries" yoki "users"
  onSuccess?: (deletedId: string) => void;
};

export const useDeleteResource = ({
  resourceName,
  onSuccess,
}: DeleteResourceOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(`${baseUrl}/${resourceName}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error(`Failed to delete ${resourceName}`);
      return id;
    },
    onSuccess: (deletedId) => {
      // Table ma’lumotlarni refresh qiladi
      queryClient.invalidateQueries({ queryKey: [resourceName] });
      if (onSuccess) onSuccess(deletedId);
      console.log(`Deleted ${resourceName}:`, deletedId);
    },
  });
};
