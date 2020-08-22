import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = ({history}) => {
    const { heroId } = useParams()
    const hero = useMemo(() => getHeroById(heroId), [heroId])

    if (!hero) {
        return <Redirect to='/' />
    }

    const handleReturn = () => {
        history.goBack()
    }    

    const {
        alter_ego,
        characters,
        first_appearance,
        superhero,
        publisher
    } = hero

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/heroes/${heroId}.jpg`} className="img-thumbnail" alt={superhero} />
            </div>
            <div className="col-8 animate__animated animate__fadeInLeft">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter Ego:</b> {alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b> {publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance:</b> {first_appearance}
                    </li>
                    <li className="list-group-item">
                        <b>Characters:</b> {characters}
                    </li>
                </ul>
                <button className="btn btn-outline-info" onClick={handleReturn}>Return</button>
            </div>
        </div>
    )
}

export default HeroScreen