import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "@/components/ui/toaster.jsx"
import { Analytics } from "@vercel/analytics";

function App() {
  return (
    <>
    <Toaster />
    <Anayltics />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>  
    </>
  );
}

export default App;
