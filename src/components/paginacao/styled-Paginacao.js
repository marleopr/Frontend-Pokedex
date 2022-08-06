import styled from 'styled-components';

export const Paginacao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #5E5E5E;
  @media screen and (max-device-width : 480px){
  align-items: center; 
  };
`

export const BotaoPagina = styled.button`
  font-size: 16px;
  width: 40px;
  height: 40px;
  margin: 0 5px 10px 5px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.value === props.paginaAtual ? "orange" : null};
  &:hover {
		cursor: pointer;
		background-color: #ffc964;
	}
  @media screen and (max-device-width : 480px){
    width: 20px;
    height: 20px;
    margin: 0 4px 0 4px;
  }
`

export const BotaoAnterior = styled.button`
  font-size: 16px;
  width: 70px;
  height: 40px;
  margin: 0 30px 10px 0;
  border: none;
  border-radius: 5px;
  :disabled {
    opacity: 0.8
  };
  &:hover {
		cursor: pointer;
		background-color: #ffc964;
	};
  @media screen and (max-device-width : 480px){
    width: 60px;
    height: 20px;
    margin: 0 20px 0 0;
  };
`

export const BotaoUltimo = styled.button`
  font-size: 16px;
  width: 70px;
  height: 40px;
  margin: 0 0 10px 30px;
  border: none;
  border-radius: 5px;
  :disabled {
    opacity: 0.8
  };
  &:hover {
		cursor: pointer;
		background-color: #ffc964;
	};
  @media screen and (max-device-width : 480px){
    width: 60px;
    height: 20px;
    margin: 0 10px 0 20px;
  }
`