import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as s from './styled-homePage';
import Card from './../../components/cardPokemon/CardPokemon';
import Paginacao from './../../components/paginacao/Paginacao';
import { goToPokedexPage } from "./../../routes/coordinator.js";
import { GlobalContext } from "../../components/global/GlobalContext";
import img_titulo from './../../assets/img/titulo.png';

export default function HomePage() {
  const { listaCapturados, setListaCapturados } = useContext(GlobalContext);
  const { listaDetalhes, setListaDetalhes } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);

  let listaLS = JSON.parse(localStorage.getItem('listaCapturados'));

  let pages = Math.ceil(list2.length / 20);
  const mudaPaginaAtual = (pagina) => {
    setPaginaAtual(pagina);
  }

  const getPokemons = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154`)
      .then(res => {
        setList(res.data.results);
      })
      .catch(error => alert("Deu errado a requisição de pegar pokemons!"));
  }
  useEffect(() => {
    getPokemons();
  }, [])

  const atualizarVariavelList = () => {
    listaLS = JSON.parse(localStorage.getItem('listaCapturados'));
    const auxiliar = [];
    if (listaLS !== null) {
      for (let i = 0; i < list.length; i++) {
        let repetido = false;
        for (let j = 0; j < listaLS.length; j++) {
          if (list[i].name === listaLS[j].nome) repetido = true;
        }
        if (!repetido) auxiliar.push(list[i])
      }
      setList2(auxiliar)
    }
  }
  useEffect(() => {
    atualizarVariavelList();
  }, [list, listaCapturados])

  const getDetalhesPokemon = () => {
    if (list.length !== 0) {
      let detalhesPokemon = [];
      const inicio = (paginaAtual - 1) * 20;
      const fim = inicio + 20;
      let listaRes = list2.length !== 0 ? list2 : list
      listaRes = listaRes.slice(inicio, fim)
      listaRes.forEach(pokemon => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          .then(res => {
            detalhesPokemon.push(res.data);
            if (detalhesPokemon.length === 20) {
              setListaDetalhes(detalhesPokemon);
            }
          })
          .catch(error => {
            alert("Deu errado a requisição de pegar pokemons!");
          })
      })
    }
  }
  useEffect(() => {
    getDetalhesPokemon();
  }, [list, list2, paginaAtual])

  const atualizarCapturados = (nome, id, tipos, foto, stats) => {
    listaLS = JSON.parse(localStorage.getItem('listaCapturados'));
    if (listaLS !== null) {
      const novoPokemon = { nome, id, tipos, foto, stats }
      const novaListaCapturados = [...listaLS, novoPokemon]
      setListaCapturados(novaListaCapturados)
      localStorage.setItem('listaCapturados', JSON.stringify(novaListaCapturados))
    }
    else {
      const novoPokemon = { nome, id, tipos, foto, stats }
      const novaListaCapturados = [novoPokemon]
      setListaCapturados(novaListaCapturados)
      localStorage.setItem('listaCapturados', JSON.stringify(novaListaCapturados))
    }
  }

  return (
    <s.Geral>

      <s.Header>
        <s.BotaoHome>Apenas ajudar nos espaços iguais</s.BotaoHome>
        <s.ImagemTitulo src={img_titulo} alt={'Imagem de título'}></s.ImagemTitulo>
        <s.BotaoPokedex onClick={() => goToPokedexPage(navigate)}>Pokédex</s.BotaoPokedex>
      </s.Header>

      <s.Main>
        {
          listaDetalhes && listaDetalhes
            .sort((atual, proximo) => {
              return (atual.id - proximo.id)
            })
            .map( (pokemon,index) => {
              return (
                <Card key={index}
                  id={pokemon.id}
                  nome={pokemon.name}
                  foto={pokemon.sprites.other.dream_world.front_default}
                  tipos={pokemon.types}
                  movimentos={pokemon.moves}
                  stats={pokemon.stats}
                  atualizarCapturados={atualizarCapturados}
                />
              )
            })
        }
      </s.Main>

      <Paginacao
        paginaAtual={paginaAtual}
        mudaPaginaAtual={mudaPaginaAtual}
        pages={pages}
      />

    </s.Geral>
  );
}; 