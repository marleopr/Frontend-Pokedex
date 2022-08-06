import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from './styled-Batalha';
import img_titulo from './../../assets/img/titulo.png';
import img_vs from './../../assets/img/vs.png';
import { goToPokedexPage } from "./../../routes/coordinator.js";

export default function Batalha() {
  const navigate = useNavigate();
  const [pokemon1, setPokemon1] = useState();
  const [pokemon2, setPokemon2] = useState();
  const [statsP1, setStatsP1] = useState();
  const [statsP2, setStatsP2] = useState();
  const [setarResultado, setSetarResultado] = useState(false);
  const [msgVencedor, setMsgVencedor] = useState('');
  const [resumoP1, setResumoP1] = useState();
  const [resumoP2, setResumoP2] = useState();

  const listaLS = JSON.parse(localStorage.getItem('listaCapturados'));

  // const escolherPokemon1 = (event) => {
  //   setSetarResultado(false);
  //   let soma = 0;
  //   const teste = listaLS.filter(pokemon => {
  //     return pokemon.nome === event.target.value; 
  //   })
  //   teste[0].stats.map( pokemon => {
  //     return soma = soma + pokemon.base_stat;
  //   })
  //   setStatsP1(soma);
  // }

  const escolherPokemon1 = (event) => {
    setSetarResultado(false);
    for (let i = 0; i < listaLS.length; i++) {
      if (listaLS[i].nome === event.target.value) {
        setPokemon1(listaLS[i]);
        let somaStatsP1 = 0;
        for (let j = 0; j < listaLS[i].stats.length; j++) {
          somaStatsP1 = somaStatsP1 + listaLS[i].stats[j].base_stat;
        }
        setStatsP1(somaStatsP1);
      }
    }
  }

  const escolherPokemon2 = (event) => {
    setSetarResultado(false);
    for (let i = 0; i < listaLS.length; i++) {
      if (listaLS[i].nome === event.target.value) {
        setPokemon2(listaLS[i]);
        let somaStatsP2 = 0;
        for (let j = 0; j < listaLS[i].stats.length; j++) {
          somaStatsP2 = somaStatsP2 + listaLS[i].stats[j].base_stat;
        }
        setStatsP2(somaStatsP2);
      }
    }
  }

  const botaoLutar = () => {
    setSetarResultado(!setarResultado);
    somarAtributosP1();
    somarAtributosP2();
    if (statsP1 > statsP2) {
      setMsgVencedor(`O Pokémon ${pokemon1.nome} é o vencedor!`);
    } else if (statsP1 < statsP2) {
      setMsgVencedor(`O Pokémon ${pokemon2.nome} é o vencedor!`);
    } else {
      setMsgVencedor("Houve um empate!");
    }
  }

  const somarAtributosP1 = () => {
    setResumoP1(
      pokemon1.stats.map(pokemon => {
        return(
          <s.AtributosInfo key={pokemon.id}>
            <s.AtributoNome>
              {pokemon.stat.name}
            </s.AtributoNome>
            <s.AtributoBase>
              {pokemon.base_stat}
            </s.AtributoBase>
          </s.AtributosInfo>
        ) 
      })
    )
  }

  const somarAtributosP2 = () => {
    setResumoP2(
      pokemon2.stats.map(pokemon => {
        return(
          <s.AtributosInfo key={pokemon.id}>
            <s.AtributoNome>
              {pokemon.stat.name}
            </s.AtributoNome>
            <s.AtributoBase>
              {pokemon.base_stat}
            </s.AtributoBase>
          </s.AtributosInfo>
        ) 
      })
    )
  }

  return (
    <s.Geral>
      <s.Header>
          <s.BotaoVoltar onClick={() => goToPokedexPage(navigate)}>Voltar</s.BotaoVoltar>
          <s.ImagemTitulo src={img_titulo} alt={'Imagem de título'}></s.ImagemTitulo>
          <s.BotaoHome>Apenas ajudar nos espaços iguais</s.BotaoHome>
      </s.Header>

      <s.Main>
        {
          listaLS.length !== 0 ?
            <>
              <s.Coluna1>
                <s.Select
                  onChange={escolherPokemon1}
                >
                  <option value="" selected disabled>Escolha um Pokémon</option>
                  {listaLS.map(pokemon => {
                    return (
                      <option value={pokemon.nome} key={pokemon.id}>{pokemon.nome}</option>
                    )
                  })}
                </s.Select>

                {
                  pokemon1 ?
                    <>
                      <s.ContentImg>
                        <s.Image src={pokemon1.foto} alt="pokemon 1" />
                      </s.ContentImg>
                    </>
                    :
                    null
                }
                {
                  setarResultado && pokemon1 ?
                    <>
                      <s.Resumo>
                        {resumoP1}
                        <s.Total>
                          <s.TotalTexto>
                            Total 
                          </s.TotalTexto>
                          <s.TotalValor>
                            {statsP1}
                          </s.TotalValor>
                        </s.Total>
                      </s.Resumo>
                    </>
                    :
                    null
                }
              </s.Coluna1>

              <s.Coluna2>
                <s.ParteDeCima>
                  <s.VS src={img_vs} alt="versus"/>
                </s.ParteDeCima>
                <s.ParteDeBaixo>
                  {
                    pokemon1 && pokemon2 ? 
                      <s.BotaoLutar onClick={botaoLutar}>Batalhar!</s.BotaoLutar>
                    :
                    null
                  }
                  {
                    setarResultado && pokemon1 && pokemon2 ?
                      <s.Resultado>
                        {msgVencedor}
                      </s.Resultado>
                      :
                      null
                  }
                </s.ParteDeBaixo>
              </s.Coluna2>
              
              <s.Coluna3>
                <s.Select
                  onChange={escolherPokemon2}
                >
                  <option value="" selected disabled>Escolha um Pokémon</option>
                  {listaLS.map(pokemon => {
                    return (
                      <option value={pokemon.nome} key={pokemon.id}>{pokemon.nome}</option>
                    )
                  })}
                </s.Select>

                {
                  pokemon2 ?
                    <>
                      <s.ContentImg>
                        <s.Image src={pokemon2.foto} alt="pokemon 2" />
                      </s.ContentImg>                    
                    </>
                    :
                    null
                }
                {
                  setarResultado && pokemon2?
                  <>
                  <s.Resumo>
                    {resumoP2}
                    <s.Total>
                      <s.TotalTexto>
                        Total 
                      </s.TotalTexto>
                      <s.TotalValor>
                        {statsP2}
                      </s.TotalValor>
                    </s.Total>
                  </s.Resumo>
                </>
                    :
                    null
                }
              </s.Coluna3>
            </>
            :
            <s.MensagemVazio>
              <s.TextoVazio>
                Você precisa adicionar Pokémons a sua Pokédex!
              </s.TextoVazio>
            </s.MensagemVazio>
        }

      </s.Main>

    </s.Geral>
  );
}; 