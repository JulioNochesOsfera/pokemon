import axios from 'axios';
const API_URL="https://pokeapi.co/api/v2/pokemon/?limit=15&offset=";

export const listPokemon = async (num_page) =>{
    console.log(API_URL+num_page)
    return await fetch(API_URL+num_page);
}

export const detailPokemon = (url) =>{
    return new Promise((resolve, reject)=>{
        axios.get(url)
            .then(res=>{
               resolve(res.data)
            }).catch(error=>reject(error))
    });
}