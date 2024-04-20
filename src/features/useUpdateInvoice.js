import { useMutation, useQueryClient } from "react-query";
import { updateInvoice } from "../services/apiInvoice";

function useUpdateInvoice() {
    const queryClient = useQueryClient();

    const { isLoading, mutate: update, error } = useMutation({
        mutationFn: (requestBody) => updateInvoice(requestBody.id, requestBody), 

        onSuccess: () => {
            queryClient.invalidateQueries(["invoicesList"]);
        },

        onError: (err) => {
            throw new Error(`Faild to update this invoice: ${err.message}`);
        },
    })

    return {isLoading, update, error}
}

export default useUpdateInvoice