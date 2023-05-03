
import React from 'react';
import './App.css';
import Korisnik from './components/korisnik';



export default class App extends React.Component {
  state = {
    korisnici: [
      {id: 1, name: "Goran",lastName: "Karan", years: 30},
      {id: 2, name: "Nataša",lastName: "Bekvalac", years: 20},
      {id: 3, name: "Josipa",lastName: "Lisac", years: 22},
      {id: 4, name: "Katarina",lastName: "Velika", years: 23},
      {id: 5, name: "Mirko",lastName: "Norac", years: 69},

      
    ]
  };

  handleNameChanged = (event, index) => {
    const{korisnici} = this.state;
    const noviKorisnici = [...korisnici];
    noviKorisnici[index].name = event.target.value;
    this.setState({korisnici: noviKorisnici});
  }

render () {
  const {korisnici} = this.state;
  return (
    <div className="App">
      { korisnici.map((korisnik, index) => (
      <Korisnik 
      key={korisnik.id}
      name={korisnik.name}
      lastName={korisnik.lastName}
      years={korisnik.years}
      onNameChanged={event => this.handleNameChanged(event, index)}
      />
    ))
      }
    </div> 
  );
}
}


