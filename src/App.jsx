import { QueryClientProvider, QueryClient } from "react-query";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

const AppLayout = lazy(() => import("./ui/AppLayout"));
const Home = lazy(() => import("./routes/Home"));
const ErrorPage = lazy(() => import("./routes/ErrorPage"));
const Invoice = lazy(() => import("./routes/Invoice"));
const InvoiceCart = lazy(() => import("./ui/InvoiceCart"));
const Spinner = lazy(() => import("./ui/Spinner"));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <GlobalStyles />
        <Router>
          <Suspense fallback={<Spinner />}>
            <AppLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="invoice" element={<Invoice />}>
                  <Route path=":id" element={<InvoiceCart />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </AppLayout>
          </Suspense>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
