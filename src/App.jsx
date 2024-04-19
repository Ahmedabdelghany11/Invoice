import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import Invoice from "./routes/Invoice";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="invoice" element={<Invoice />} >
            <Route 
              path=":id"
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
