import styled from "styled-components";
import img_fundo from "./../../assets/imagens-card/fundo.png";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => 
    props.tipo === 'grass' ?
    "#729F92" 
    :
    props.tipo === 'fire' ?
    "#EAAB7D"
    :
    props.tipo === 'water' ?
    "#71C3FF"
    :
    props.tipo === 'bug' ?
    "#76A866"
    :
    props.tipo === 'normal' ?
    "#BF9762"
    :
    "#729F92"};
  background-image: url(${img_fundo});
  background-size: 290px;
  background-position: right;
  background-repeat: no-repeat;
  margin: 30px;
  width: 440px;
  height: 210px;
  left: 0px;
  top: 0px;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  @media screen and (max-device-width : 480px){
    max-width: 100vw;
    display: flex;
    width: 100%;
  }
`

export const Imagem = styled.img`
  margin: 0 10px 10px 0; 
  max-width: 100%;
  width: 200px;
  height: 220px;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  @media screen and (max-device-width : 480px){
    width: 200px;
    height: 200px
  }
`

export const ID = styled.div`
  line-height: 16px;
  font-family: sans-serif;
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  margin-left: 10px;
  font-style: normal;
  font-weight: 700;
  margin-top: 10px;
  @media screen and (max-device-width : 480px){
    font-size: 12px;
  }
`

export const Nome = styled.div`
  line-height: 16px;
  font-family: sans-serif;
  color: rgba(255, 255, 255, 0.9);
  font-size: 32px;
  margin-left: 10px;
  font-style: normal;
  font-weight: 700;
  @media screen and (max-device-width : 480px){
    font-size: 16px;
  }
`

export const Tipos = styled.div`
  display: flex;
`

export const Tipoi = styled.div`
  display: flex;
  margin: 20px;
`

export const BotaoCapturar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  background: #FF6262;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    background-position: -60px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  :active {
    transform: scale(1);
    background-position: 500px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  @media screen and (max-device-width : 480px){
    width: 100px;
  }
`

export const BotaoDetalhes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  background: #62c3ff;
  border-radius: 8px;
  margin: 10px;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    background-position: -60px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  :active {
    transform: scale(1);
    background-position: 500px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  @media screen and (max-device-width : 480px){
    width: 100px;
  }
`

export const LadoEsquerdo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const LadoDireito = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 10px;
  align-items: center;
  @media screen and (max-device-width : 480px){
    width: 100px;
    margin-right: 10px;
  }
`