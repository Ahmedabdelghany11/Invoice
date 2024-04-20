import { useMutation, useQueryClient } from "react-query";
import { addInvoice } from "../services/apiInvoice";

function useAddInvoice() {
    const queryClient = useQueryClient();

    const { isLoading, mutate: add, error } = useMutation({
        mutationFn: (requestBody) => addInvoice(requestBody), 

        onSuccess: () => {
            queryClient.invalidateQueries(["invoicesList"]);
        },

        onError: (err) => {
            throw new Error(`Faild to add this invoice: ${err.message}`);
        },
    })

    return {isLoading, add, error}
}

export default useAddInvoice