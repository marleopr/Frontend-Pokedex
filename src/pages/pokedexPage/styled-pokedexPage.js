import styled from 'styled-components';

export const MensagemVazio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`

export const TextoVazio = styled.h1`
  text-align: center;
`

export const Geral = styled.div`
  display: grid;
  grid-template-rows: 160px 1fr;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  box-sizing: border-box;
`

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

export const BotaoHome = styled.div`
  width: 287px;
  height: 74px;
  margin: 0 0 0 30px;
  display:flex;  
  justify-content: center;
  color:#fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  align-items: center;
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

export const BotaoCriarBatalha = styled.div`
  width: 287px;
  height: 74px;
  display:flex;
  margin: 0 30px 0 ;
  justify-content: center;
  color:#fff;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  align-items: center;
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

export const Main = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #5E5E5E;
  justify-content: center; 
  @media screen and (max-device-width : 480px){
    width: 100vw;
    }
  `

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  margin: 0 20px;
  box-sizing: border-box;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0;
    margin: 0;
    width: 98vw;
  }
`