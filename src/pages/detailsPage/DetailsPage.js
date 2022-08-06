import { useNavigate, useParams } from "react-router-dom";
import * as s from './styled-detailsPage'
import { goBack, goToPokedexPage } from "./../../routes/coordinator.js";
import img_titulo from './../../assets/img/titulo.png';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Chart } from "react-google-charts";
import { CorCardTipo } from './../../components/corCardTipo/CorCardTipo';

export default function DetailsPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [listaDetalhes, setListaDetalhes] = useState()

  const getDetalhesPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then(res => {
        setListaDetalhes(res.data)
      }
      )
      .catch(error => {
        alert("Deu errado a requisição de pegar pokemons!");
      })
  }
  useEffect(() => {
    getDetalhesPokemon();
  }, [])

  let data = [];
  let soma = 0;
  if (listaDetalhes) {
    for (let i = 0; i <= listaDetalhes.stats.length; i++) {
      if (i === 0) {
        data[0] = ["Element", "Base State", { role: "style" }];
      } else {
        let linha = [listaDetalhes.stats[i - 1].stat.name, listaDetalhes.stats[i - 1].base_stat, "cyan"];
        data[i] = linha;
        soma = soma + listaDetalhes.stats[i - 1].base_stat
      }
    }
  }

  let listaLS = JSON.parse(localStorage.getItem('listaCapturados'));
  const excluirPokemon = (id) => {
    const novaLista = listaLS.filter((pokemon) => {
      return pokemon.id !== id
    })
    if(novaLista.length === listaLS.length) {
      alert(`O Pokémon selecionado não está na Pokédex, logo, não pode ser excluído`);
    } else {
      alert(`O Pokémon selecionado foi excluído da Pokédex`);
      goToPokedexPage(navigate);
    }
    localStorage.setItem('listaCapturados', JSON.stringify(novaLista))
  }

  return (
    <s.Geral>
      <s.Header>
        <s.BotaoBack onClick={() => goBack(navigate)}>Voltar</s.BotaoBack>
        <s.ImagemTitulo src={img_titulo} alt={'Imagem de título'}></s.ImagemTitulo>
        <s.BotaoExcluir onClick={() => excluirPokemon(listaDetalhes.id)}> Excluir da Pokedex</s.BotaoExcluir>
      </s.Header>

      <s.Main>
        {listaDetalhes ?
          <s.Card>
            <s.Coluna1>
              <s.QuadradoCima>
                <s.ImagemFrente src={listaDetalhes.sprites.front_default} alt={'Imagem de título'}></s.ImagemFrente>
              </s.QuadradoCima>
              <s.QuadradoBaixo>
                <s.ImagemCosta src={listaDetalhes.sprites.back_default} alt={'Imagem de título'}></s.ImagemCosta>
              </s.QuadradoBaixo>
            </s.Coluna1>

            <s.Coluna2>
              <s.Titulo>Base Stats</s.Titulo>
              <Chart chartType="ColumnChart" width="95%" height="400px" data={data} />
              <s.Titulo2>{`Total =  ${soma}`}</s.Titulo2>
            </s.Coluna2>

            <s.Coluna3>
              <s.Superior>
                <s.LadoEsquerdo>
                  <s.ID>{listaDetalhes.id < 10 ? `#0${listaDetalhes.id}` : `#${listaDetalhes.id}`}</s.ID>
                  <s.Nome>{listaDetalhes.name}</s.Nome>
                  <CorCardTipo
                    tipos={listaDetalhes.types}
                  />
                </s.LadoEsquerdo>

                <s.LadoDireito>
                  <s.Imagem src={listaDetalhes.sprites.other.dream_world.front_default} alt={listaDetalhes.nome} />
                </s.LadoDireito>
              </s.Superior>

              <s.Inferior>
                <s.Movimentos>
                  <s.Titulo>Moves</s.Titulo>
                  {
                    listaDetalhes.moves.map((pokemon, index) => {
                      const tipoPokemon = pokemon.move.name;
                      return (
                        <s.Tipom key={index}>
                          {tipoPokemon}
                        </s.Tipom >
                      )
                    })
                  }
                </s.Movimentos>
              </s.Inferior>
            </s.Coluna3>
          </s.Card>
          :
          <p></p>}
      </s.Main>
    </s.Geral>
  )
}