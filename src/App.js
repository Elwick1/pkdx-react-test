import './App.css';
import React from 'react';
// import PokemonContainer from './'


export default class App extends React.Component {

  state = {
    pokemon : [],
    showPokemon : false
  }

  componentDidMount() {
    for (let i = 1; i < 152; i++) {
      const API = `https://pokeapi.co/api/v2/pokemon/${i}`
      fetch(API)
      .then(res => res.json())
      .then(pkmn => this.setState({
        pokemon : pkmn
      }))
    }
  }

  handleClick = () => {
    this.setState({
      showPokemon : true
    })
  }



  render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the world of pokemon!</h1>
        {/* {console.log(this.state.pokemon)} */}
        <button onClick={this.handleClick}> Let's Start </button>
        {/* {this.state.showPokemon === true ? <PokemonContainer/> : null} */}
      </header>
    </div>
  );
}
};


