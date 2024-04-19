import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import Invoice from "./routes/Invoice";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import InvoiceCart from "./ui/InvoiceCart";
import { QueryClientProvider, QueryClient } from "react-query";
import Spinner from "./ui/Spinner";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stopLoading = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    window.addEventListener("load", stopLoading);

    return () => window.removeEventListener("load", stopLoading);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        {isLoading && <Spinner />}
        <GlobalStyles />
        <Router>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="invoice" element={<Invoice />}>
                <Route path=":id" element={<InvoiceCart />} />
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </AppLayout>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
