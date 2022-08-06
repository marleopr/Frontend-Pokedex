import *as s from './styled.CorCardTipo'
import IconePoison from '../../assets/imagens-card/poison.png'
import IconeGrass from '../../assets/imagens-card/grass.png'
import IconeFire from '../../assets/imagens-card/fire.png'
import IconeWater from '../../assets/imagens-card/water.png'
import IconeNormal from '../../assets/imagens-card/normal.png'
import IconeFlaying from '../../assets/imagens-card/flying.png'
import IconeDark from '../../assets/imagens-card/dark.png'
import IconeDragon from '../../assets/imagens-card/dragon.png'
import IconeEletric from '../../assets/imagens-card/eletric.png'
import IconeFairy from '../../assets/imagens-card/fairy.png'
import IconeFighting from '../../assets/imagens-card/fighting.png'
import IconeGhost from '../../assets/imagens-card/ghost.png'
import IconeGround from '../../assets/imagens-card/ground.png'
import IconeIce from '../../assets/imagens-card/ice.png'
import IconePsychic from '../../assets/imagens-card/psychic.png'
import IconeRock from '../../assets/imagens-card/rock.png'
import IconeSteel from '../../assets/imagens-card/steel.png'

export const CorCardTipo = (props) => {

  const tipoPokemon = props.tipos.map((pokemon, index) => {
    switch (pokemon.type.name) {
      case "poison": {
        return (
          <s.Poison key={index}>
            <s.Icone src={IconePoison} alt='ícone poison' />
            <s.NomeTipo>{pokemon.type.name}</s.NomeTipo>
          </s.Poison>
        )
      }
      case "grass": {
        return (
          <s.Grass key={index}>
            <s.Icone src={IconeGrass} alt='ícone grass' />
            <s.NomeTipo>{pokemon.type.name}</s.NomeTipo>
          </s.Grass>
        )
      }
      case "fire": {
        return (
          <s.Fire key={index}>
            <s.Icone src={IconeFire} alt='ícone fire' />
            <s.NomeTipo>{pokemon.type.name}</s.NomeTipo>
          </s.Fire>
        )
      }
      case "water": {
        return (
          <s.Water key={index}>
            <s.Icone src={IconeWater} alt='ícone water' />
            <s.NomeTipo>{pokemon.type.name}</s.NomeTipo>
          </s.Water>
        )
      }
      case "normal": {
        return (
          <s.Normal key={index}>
            <s.Icone src={IconeNormal} alt='ícone normal' />
            <s.NomeTipo>{pokemon.type.name}</s.NomeTipo>
          </s.Normal>
        )
      }
      case "flaying": {
        return (
          <s.Flaying key={index}>
            <s.Icone src={IconeFlaying} alt='ícone flaying' />
            <s.NomeTipo>{pokemon.type.name}</s.NomeTipo>
          </s.Flaying>
        )
      }
      case "dark": {
        return (
          <s.Dark key={index}>
            <s.Icone src={IconeDark} alt='ícone dark' />
            <s.NomeTipo>{pokemon.type.name}</s.NomeTipo>
          </s.Dark>
        )
      }
      case "dragon": {
        return (
          <s.Dragon key={index}>
            <s.Icone src={IconeDragon} alt='ícone dragon' />
            <s.NomeTipo>{pokemon.type.name}</s.NomeTipo>
          </s.Dragon>
        )
      }
      case "eletric": {
        return (
          <s.Eletric key={index}>
            <s.Icone src={IconeEletric} alt='ícone eletric' />
            <s.NomeTipo>{pokemon.type.name}</s.NomeTipo>
          </s.Eletric>
        )
      }
      case "fairy": {
        return (
          <s.Fairy key={index}>
            <s.Icone src={IconeFairy} alt='ícone fairy' />
            <s.NomeTipo>{pokemon.type.name}</s.NomeTipo>
          </s.Fairy>
        )
      }
      case "fighting": {
        return (
          <s.Fighting key={index}>
            <s.Icone src={IconeFighting} alt='ícone fighting' />
            <s.NomeTipo>{pokemon.type.name}</s.NomeTipo>
          </s.Fighting>
        )
      }
      case "ghost": {
        return (
          <s.Ghost key={index}>
            <s.Icone src={IconeGhost} alt='ícone ghost' />
            <s.NomeTipo>{pokemon.type.name}</s.NomeTipo>
          </s.Ghost>
        )
      }
      case "ground": {
        return (
          <s.Ground key={index}>
            <s.Icone src={IconeGround} alt='ícone ground' />
            <s.NomeTipo>{pokemon.type.name}</s.NomeTipo>
          </s.Ground>
        )
      }
      case "ice": {
        return (
          <s.Ice key={index}>
            <s.Icone src={IconeIce} alt='ícone ice' />
            <s.NomeTipo>{pokemon.type.name}</s.NomeTipo>
          </s.Ice>
        )
      }
      case "psychic": {
        return (
          <s.Psychic key={index}>
            <s.Icone src={IconePsychic} alt='ícone psychic' />
            <s.NomeTipo>{pokemon.type.name}</s.NomeTipo>
          </s.Psychic>
        )
      }
      case "rock": {
        return (
          <s.Rock key={index}>
            <s.Icone src={IconeRock} alt='ícone rock' />
            <s.NomeTipo>{pokemon.type.name}</s.NomeTipo>
          </s.Rock>
        )
      }
      case "steel": {
        return (
          <s.Steel key={index}>
            <s.Icone src={IconeSteel} alt='ícone steel' />
            <s.NomeTipo>{pokemon.type.name}</s.NomeTipo>
          </s.Steel>
        )
      }
    }
  })

  return (
    <s.AlinhaCard>
      {tipoPokemon}
    </s.AlinhaCard>
  )
}