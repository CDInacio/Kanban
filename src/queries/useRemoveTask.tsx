import api from "@/app/services/api";
import { useMutation, useQueryClient } from "react-query";

const removeTask = async (id: string | undefined) => {
  await api.delete(`/task/removeTask/${id}`);
};

const useRemoveTask = () => {
  const queryClient = useQueryClient();
  return useMutation(removeTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });
};

export default useRemoveTask;
