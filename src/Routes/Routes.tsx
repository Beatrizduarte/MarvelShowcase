import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from '../Constants/index'
import { Footer } from "../Components/Footer";
import { Home } from "../Pages/Home";

export const Routers = () => {
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}