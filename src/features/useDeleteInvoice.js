import { useMutation, useQueryClient } from "react-query";
import { deleteInvoice as deleteInvoiceAPI } from "../services/apiInvoice";


function useDeleteInvoice() {
    const queryClient = useQueryClient();

    const { isLoading, mutate: deleteInvoice, error } = useMutation({
        mutationFn: (id) => deleteInvoiceAPI(id),

        onSuccess: () => {
            queryClient.invalidateQueries(["invoicesList"]);
        },

        onError: (err) => {
            throw new Error(`Faild to delete this invoice: ${err.message}`);
        },
    })

    return {isLoading, deleteInvoice, error}
}

export default useDeleteInvoice