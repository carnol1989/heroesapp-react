import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import MarvelScreen from '../components/marvel/MarvelScreen';
import DCScreen from '../components/dc/DCScreen';
import { Navbar } from '../components/ui/Navbar';
import HeroScreen from '../components/heroes/HeroScreen';
import SearchScreen from '../components/search/SearchScreen';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/dc" component={DCScreen} />
                    <Route exact path="/hero/:heroId" component={HeroScreen} />
                    <Route exact path="/search" component={SearchScreen} />
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}

export default DashboardRoutes