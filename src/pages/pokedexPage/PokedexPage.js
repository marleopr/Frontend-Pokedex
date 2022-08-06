import * as s from './styled-pokedexPage';
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToCriarBatalha } from "./../../routes/coordinator.js";
import img_titulo from './../../assets/img/titulo.png';
import { GlobalContext } from "../../components/global/GlobalContext";
import { useContext } from 'react';
import Card from './../../components/cardPokedex/CardPokedex';

export default function PokedexPage() {
  const { setListaCapturados } = useContext(GlobalContext);
  const navigate = useNavigate();
  let listaLS = [];
  listaLS = JSON.parse(localStorage.getItem('listaCapturados'));

  const excluirPokemon = (id) => {
    const novaLista = listaLS.filter((pokemon) => {
      return pokemon.id !== id
    })
    setListaCapturados(novaLista)
    localStorage.setItem('listaCapturados', JSON.stringify(novaLista))
    listaLS = novaLista;
  }

  return (
    <s.Geral>
      <s.Header>
        <s.BotaoHome onClick={() => goToHomePage(navigate)}> Todos Pokémons</s.BotaoHome>
        <s.ImagemTitulo src={img_titulo} alt={'Imagem de título'} />
        <s.BotaoCriarBatalha onClick={() => goToCriarBatalha(navigate)}>Criar Batalha</s.BotaoCriarBatalha>
      </s.Header>

      <s.Main>
        {
          listaLS === null ?
            <s.MensagemVazio>
              <s.TextoVazio>
                Sua lista Pokédex está vazia!
              </s.TextoVazio>
            </s.MensagemVazio>
            :
            listaLS.map(pokemon => {
              return (
                <Card key={pokemon.id}
                  id={pokemon.id}
                  nome={pokemon.nome}
                  foto={pokemon.foto}
                  tipos={pokemon.tipos}
                  excluirPokemon={excluirPokemon}
                />
              )
            })
        }
      </s.Main>
    </s.Geral>
  );
}; 