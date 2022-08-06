import React from 'react'
import imgErro from "../../assets/img/imgError.jpg"
import { FotoErro, Main } from './ErrorPageStyled';
export const ErrorPage = () => {
    return (
        <Main>
            Página de erro decolando de novo!
            <FotoErro src={imgErro} alt="Página não encontrada" />
        </Main>

    )
}
