import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import Invoice from "./routes/Invoice";
import GlobalStyles from "./styles/GlobalStyles";
import AppLayout from "./ui/AppLayout";
import InvoiceCart from "./ui/InvoiceCart";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="invoice" element={<Invoice />} >
              <Route 
                path=":id"
                element={<InvoiceCart />}
              />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AppLayout>
      </Router>
    </ThemeProvider>
  )
}

export default App
