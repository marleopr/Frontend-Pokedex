import * as s from './styled-Paginacao';

export default function Paginacao(props) {

  const MAX_ITEMS = 7;
  const MAX_LEFT = (MAX_ITEMS - 1) / 2;
  const PRIMEIRO = Math.max(props.paginaAtual - MAX_LEFT, 1)

  return (
    <s.Paginacao>
      <s.BotaoAnterior disabled={props.paginaAtual === 1 ? true : false} onClick={() => props.mudaPaginaAtual(props.paginaAtual - 1)}>Anterior</s.BotaoAnterior>
      {
        Array.from({ length: MAX_ITEMS }, (_, i) => {
          return (
            <s.BotaoPagina paginaAtual={props.paginaAtual} value={i + PRIMEIRO} onClick={() => props.mudaPaginaAtual(i + PRIMEIRO)} key={i}>{i + PRIMEIRO}</s.BotaoPagina>
          )
        })
      }
      <s.BotaoUltimo disabled={props.paginaAtual === props.pages ? true : false} onClick={() => props.mudaPaginaAtual(props.paginaAtual + 1)}>Próximo</s.BotaoUltimo>
    </s.Paginacao>
  );
};