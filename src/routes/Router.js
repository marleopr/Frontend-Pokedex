import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/homePage/HomePage";
import Pokedex from "../pages/pokedexPage/PokedexPage";
import Details from "../pages/detailsPage/DetailsPage";
import Batalha from "../pages/batalha/Batalha";
import { ErrorPage } from "../pages/errorPage/ErrorPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="pokedex" element={<Pokedex/>}/>
        <Route path="details/:id" element={<Details/>}/>
        <Route path="batalha" element={<Batalha/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}