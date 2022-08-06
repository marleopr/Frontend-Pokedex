import { useState} from 'react';
import axios from "axios";

function usePokemonsIndividuais(name){

  const [date, setData] = useState();

  axios
  .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  .then(res => {
    console.log(`As informações do ${name} foram coletadas`);
    setData(res.data.sprites.back_default);
  })
  .catch(error => {
    console.log("Deu errado a requisição de pegar pokemons!");
    console.log(error);
  })

  return date
}

export default usePokemonsIndividuais;