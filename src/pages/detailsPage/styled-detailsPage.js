import styled from 'styled-components';

// ----------------------
// Configurações gerais
// ----------------------
export const Geral = styled.div`
  display: grid;
  grid-template-rows: 160px 1fr;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5E5E5E;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    background-color: white;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
  border: none;
  border-radius: 37px;
  max-height: 663px;
  padding: 20px;
  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.2), 0 10px 20px 0 rgba(0,0,0,0.19);
  background-color: #729F92;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 800px;
    box-shadow: none;
    background-color: white;
  }
`

// ----------------------
// Configurações header
// ----------------------
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`

export const ImagemTitulo = styled.img`
  width: 307px;
  height: 113px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 207px;
    height: 76x;
  }
`

export const BotaoBack = styled.div`
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
    margin: 10px 0 10px 0;
  }
`

export const BotaoExcluir = styled.div`
  width: 287px;
  height: 74px;
  display:flex;  
  justify-content: center;
  margin: 0 30px 0 0;
  color:#fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  align-items: center;
  font-size:1.4em;
  text-align: center;
  text-decoration:none;
  border-radius:6px;
  background-color:#FF6262;
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
    margin: 10px 0 10px 0;
  }
`

// ----------------------
// Configurações coluna 1
// ----------------------
export const Coluna1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 20px 0 0;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 0;
  }
`

export const QuadradoCima = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  width: 282px;
  height: 282px;
  border: none;
  border-radius: 8px;
  background: white;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin: 0 0 20px 0;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);
  }
`

export const QuadradoBaixo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 282px;
  height: 282px;
  border: none;
  border-radius: 8px;
  background: white;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);
  }
`

export const ImagemFrente = styled.img`
  width: 282px;
  height: 282px;
`

export const ImagemCosta = styled.img`
  width: 282px;
  height: 282px;
`

// ----------------------
// Configurações coluna 2
// ----------------------
export const Coluna2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px 0 0;
  width: 400px;
  border: none;
  border-radius: 8px;
  background-color: white;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 370px;
    margin: 50px 0 0 0;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);
  }
`

export const Titulo = styled.h1`
  width: 100%;
  margin: 10px 0 0 20px;
  text-align: left;
`

export const Titulo2 = styled.h2`
  width: 100%;
  margin: 10px 0 0 20px;
  text-align: left;
`

// ----------------------
// Configurações coluna 3
// ----------------------
export const Coluna3 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 0;
  width: 400px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 350px;
    margin: 50px 0 0 0;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);
  }
`

export const Superior = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px 0 ;
  height: 100px;
`

export const Inferior = styled.div`
  overflow: auto;
  min-width: 100%;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    overflow: auto;
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
  justify-content: end;
`

export const ID = styled.div`
  line-height: 16px;
  font-family: sans-serif;
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  margin: 0 0 10px 0;
  font-style: normal;
  font-weight: 700;
  margin-top: 10px;
`

export const Nome = styled.div`
  line-height: 16px;
  font-family: sans-serif;
  color: rgba(255, 255, 255, 0.9);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
`

export const Movimentos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: none;
  overflow: hidden;
  background-color: white;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    overflow: auto;
    overflow: hidden;
  }
`

export const Tipom = styled.div`
  display: flex;
  flex-direction: column;
  width: 114px;
  height: 37px;
  margin: 20px;
  padding: 10px;
  border: 1px dashed rgba(0, 0, 0, 0.14);
  border-radius: 12px;
  background-color: #ECECEC;
`

export const Imagem = styled.img`
  max-width: 180px;
  max-height: 180px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    max-width: 120px;
    max-height: 120px;
  }
`