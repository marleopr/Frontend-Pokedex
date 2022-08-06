import styled from 'styled-components';

export const Geral = styled.div`
  display: grid;
  grid-template-rows: 160px 1fr;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: #5e5e5e;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    background-color: white;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
`

export const BotaoHome = styled.div`
  width: 287px;
  height: 74px;
  margin: 0 30px 0 0;
  color: #FFFFFF;
`

export const ImagemTitulo = styled.img`
  width: 307px;
  height: 113px;
`

export const BotaoVoltar = styled.div`
  display:flex;  
  justify-content: center;
  align-items: center;
  margin: 0 0 0 30px;
  width: 287px;
  height: 74px;
  color:#fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size:1.4em;
  text-align: center;
  text-decoration:none;
  border-radius:6px;
  background-color:#33A4F5;
  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), background-position 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 500ms linear;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 150px;
    height: 30px;
    margin: 5px 0 0 0;
  }
`

export const Main = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Coluna1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
  border-radius: 20px;
  width: 30%;
  background-color: #FFE53B;
  background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 95vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vw;
  }
`

export const Coluna2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: 20px;
  width: 30%;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 50vh;
    display: flex;
    flex-direction: column;
  }
`

export const ParteDeCima = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-basis: 50%;
`

export const VS = styled.img`
  width: 400px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 30vh;
    padding: 10px;
  }
`

export const ParteDeBaixo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-basis: 50%;
`

export const BotaoLutar = styled.button`
  font-size: 22px;
  background-color: red;
  border: none;
  border-radius: 10px;
  color: white;
  width: 200px;
  height: 50px;
  text-align: center;
  &:hover {
    cursor: pointer;
    background-color: #790000;
    transition: .4s;
    color: #ddd9ce;
  }
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 30vw;
  }
`

export const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  height: 100px;
  width: 100%;
  border-radius: 10px;
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  background-color: #fac705;
  background-image: linear-gradient(90deg, #FF2525 0%, #21D4FD 80%);
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 80vw;
    height: 15vh;
    margin: 5px;
    text-align: center;
  }
`

export const Coluna3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px;
  border-radius: 20px;
  width: 30%;
  background-color: #21D4FD;
  background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 95vw;
    display: flex;
    flex-direction: column;
    height: 100vw;
  }
`

// ESTILIZAÇÃO DAS COLUNAS 1 E 3
export const Select = styled.select`
  margin: 20px 0 20px 0;
  height: 40px;
  width: 90%;
  border: none;
  font-size: 18px;
  border-radius: 5px;
  background: #e7e4f3;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 50vh;
    margin: 5px 0 0 0;
  }
`

export const MensagemVazio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`

export const TextoVazio = styled.h1`
  text-align: center;
`

export const ContentImg = styled.div`
  margin: 20px 0 0 0;
  width: 275px;
  height: 275px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 15vh;
  }
`

export const Image = styled.img`
  max-width: 100%;
  width: 275px;
  height: 275px;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  /* object-fit: cover; */
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 80px;
    height: 100px;
  }
`

export const AtributosInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  border-radius: 10px;
  height: 30px; 
  margin: 10px 20px 5px 20px;
  border: none;
  color: #3d64b8;
  background: #fac705;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 70vw;
    height: 20px;
    font-size: 12px;
    margin: 5px 0 5px 38px;
  }
`

export const Resumo = styled.div`
  margin: 20px;
  width: 60%;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 50vh;
    margin: 0;
  }
`

export const AtributoNome = styled.div`
  margin: 0 0 0 10px;
`

export const AtributoBase = styled.div`
  margin: 0 10px 0 ;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  border-radius: 10px;
  height: 40px; 
  padding: 0 0 0 10px;
  margin: 10px 20px 5px 20px;
  border: none;
  color: #fac705;
  background: #3d64b8;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 80px;
    height: 20px;
    font-size: 12px;
    margin: 5px 0 5px 125px;
  }
`

export const TotalTexto = styled.div`
`

export const TotalValor = styled.div`
  margin: 0 10px 0 0;
`