import Row from 'react-bootstrap/Row';
import {listPokemon} from "../Api/requestPokemon";
import {createContext, useEffect, useState} from "react";
import CardPokemon from "./CardPokemon";
import AdvancedExample from "./Pagination";
import {useParams} from "react-router-dom";

import '../css/ListaPokemon.css';

export const PageContext = createContext();

const ListPokemon = () =>{
  const [pokemons, setPokemons] = useState([]);
  const [statePage, setPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const params = useParams();
  console.log(params)
  const Pokemones=async(page=1)=>{
    const res=await listPokemon((page*15)-15 );
    const data = await res.json();
    setPokemons(data.results);
    setPagination({'count':data.count,'next':data.next, 'previous':data.previus})
  };
  useEffect(()=>{
    Pokemones();
  },[]);

  return(
      <PageContext.Provider value={statePage}>
        <div>
          <div className="my-4 pagination">
            <h1 >Lista de Pokemones</h1>
          </div>
          <Row xs={2} md={5} className="g-4">
              {pokemons.map((pokemon,i)=><CardPokemon key={i} {...pokemon} className="col"/>)}
          </Row>
            <AdvancedExample  Pokemones = {Pokemones} count={pagination.count} />
        </div>
      </PageContext.Provider>
  );
};

export default ListPokemon;