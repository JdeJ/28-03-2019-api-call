import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    pokemons: [],
    name: {},
    status: "loading"
  };

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(({ data: { results: pokemons } }) => {
        this.setState({
          pokemons,
          status: "loaded"
        });
      })
      .catch(error => {
        console.log("error", error);
        this.setState({
          status: "error"
        });
      });
  }

  render() {
    console.log("render");
    switch (this.state.status) {
      case "loading":
        return "loading...";
      case "loaded":
        return (
          <div className="App">
            <h1>Pokemons</h1>
            {this.state.pokemons.map(pokemon => {
              return <li key={pokemon.name}>{pokemon.name}</li>;
            })}
          </div>
        );
      case "error":
        return "vaya me espiche!!!! ";
      default:
        break;
    }
  }
}

export default App;
