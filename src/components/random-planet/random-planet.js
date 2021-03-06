import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import Spinner from '../spinner';
import './random-planet.css';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };



    componentDidMount() {
      this.updatePlanet();
      this.interval = setInterval(this.updatePlanet, 10000);
    }

    componentDidUnmountMount() {
      console.log('componentWillUnmount');
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet,
        loading:false });
    };

    onError = (err) => {
        this.setState({
          error: true,
          loading:false
        });
    };
    updatePlanet = () => {
      console.log('update');
        const id = Math.floor(Math.random()*25)+2;
        // const id = 120000;
        this.swapiService
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);

    };

  render() {
    console.log('render');
    const { planet, loading, error } =  this.state;

    const hasData = !(loading || error);

    const spinner = loading ? <Spinner /> : null;
    const content = hasData ?         <PlanetView planet={ planet } />  : null;
    const errorMessage = error ? <ErrorIndicator /> : null;

    return (
      <div className="random-planet jumbotron rounded">
      {spinner}
      {content}
      {errorMessage}
      </div>

    );
  }
}

const PlanetView = ({ planet }) => {

    const { id, name, populatiom, 
        rotationPeriod, diameter } =  planet;

    return (
        <React.Fragment>
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={planet.name} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{populatiom}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>

        </React.Fragment>
   
    );
};
