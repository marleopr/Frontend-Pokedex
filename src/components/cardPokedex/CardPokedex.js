import React from 'react'
import * as s from "./styled-CardPokedex"
import { useNavigate } from "react-router-dom";
import { goDetailsPage } from "./../../routes/coordinator.js";
import { CorCardTipo } from '../corCardTipo/CorCardTipo';

export default function CardPokemon(props) {
  const navigate = useNavigate();

  return (
    <s.Card>
      <s.LadoEsquerdo>
        <s.ID>{props.id < 10 ? `#0${props.id}` : `#${props.id}`}</s.ID>
        <s.Nome>{props.nome[0].toUpperCase() + props.nome.substr(1)}</s.Nome>
        <s.Tipos>
          <CorCardTipo
            tipos={props.tipos}
          />
        </s.Tipos>
        <s.BotaoDetalhes onClick={() => goDetailsPage(navigate, props.id)} >Detalhes</s.BotaoDetalhes>
      </s.LadoEsquerdo>

      <s.LadoDireito>
        <s.Imagem src={props.foto} alt={props.nome} />
        <s.BotaoExcluir onClick={() => props.excluirPokemon(props.id)}>Excluir</s.BotaoExcluir>
      </s.LadoDireito>
    </s.Card>
  )
}