import { QueryClientProvider, QueryClient } from "react-query";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { Toaster } from "react-hot-toast";

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
        <Toaster
          position="top-right"
          gutter={14}
          containerStyle={{ margin: "5px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              padding: "12px",
              backgroundColor: "var(--secondary-color)",
              color: "var(--color-grey-800)",
              boxShadow: "0 0 8px 2px var(--text-color)",
              zIndex: "9999999",
              lineHeight: "1.6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            },
          }}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
