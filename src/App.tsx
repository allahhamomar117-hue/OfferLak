import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes.tsx";
import ScrollToTop from "./ScrollToTop.tsx";


function App() {
  return (
      <BrowserRouter>
      <ScrollToTop /> 
        <MainRoutes />
      </BrowserRouter>
  );
}

export default App;
