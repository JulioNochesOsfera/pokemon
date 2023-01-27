import {Route, Routes} from "react-router-dom";
import ListPokemon from "../components/ListPokemon";
import CardPokemon from "../components/CardPokemon";

export const RouteNavigator = () =>{
    return(
        <Routes>
            <Route path="/" element={<ListPokemon />} />
            <Route path="/page/:page" element={<ListPokemon />} />
            <Route path="/detail-pokemon/:id" element={<CardPokemon/>} />
        </Routes>
    )
}