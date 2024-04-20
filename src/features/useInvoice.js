import { useQuery } from "react-query";
import { useParams } from "react-router-dom"
import { fetchInvoiceById } from "../services/apiInvoice";


function useInvoice() {
    const {id} = useParams();

    const {isLoading, data: invoice, error} = useQuery({
        queryKey: ['invoice', id],
        queryFn: () => fetchInvoiceById(id),
    })
  
    return {isLoading, invoice, error}
}

export default useInvoice