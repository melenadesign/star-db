import React, {Component} from 'react';
import './planet-details.css';

export default class PlanetDetails extends Component {

    render() {
      return (
        <div className="planet-details card">
          <img className="planet-image"
            src="https://starwars-visualguide.com/assets/img/planets/3.jpg" alt="planet" />
  
          <div className="card-body">
            <h4>R2-D2</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="term">Gender</span>
                <span>male</span>
              </li>
              <li className="list-group-item">
                <span className="term">Birth Year</span>
                <span>43</span>
              </li>
              <li className="list-group-item">
                <span className="term">Eye Color</span>
                <span>red</span>
              </li>
            </ul>
          </div>
        </div>
      )
    }
  }
  