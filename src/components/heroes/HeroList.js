import React from 'react'
import {getHeroesByPublisher} from '../../selectors/getHeroesByPublisher'
import HeroCard from './HeroCard';

const HeroList = ({publisher}) => {
    const heroes = getHeroesByPublisher(publisher)
    console.log(heroes)
    return(
        <div className="card-column">
            {heroes.map(hero => (<HeroCard key={hero.id}{...hero} />))}
        </div>
    )
}

export default HeroList