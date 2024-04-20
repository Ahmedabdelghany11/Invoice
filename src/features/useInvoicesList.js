import { useQuery } from "react-query"
import { fetchInvoices } from "../services/apiInvoice"
import { useSearchParams } from "react-router-dom";


function useInvoicesList() {
  const [searchParams] = useSearchParams();
  const filterParam = !searchParams.get("filter")
    ? ""
    : searchParams.get("filter");

  const {isLoading, data: invoices, error} = useQuery({
      queryKey: ['invoicesList', filterParam],
      queryFn: () => fetchInvoices(filterParam),
  })

  return {isLoading, invoices, error}
}

export default useInvoicesList
