import React from 'react';
import './App.css';
import RecipeList from '../components/RecipeList';
import Searchbox from '../components/Searchbox'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      drink: {},
      query: '',
    


    }
  }



  onKeyDown = (event) => {
    if (event.keyCode === 13){ 
      this.setState({query:`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${event.target.value}`})
    }

  }

  onKeyUp = (event) => {
    if (event.keyCode === 13 ) {
      fetch(this.state.query)
      .then(resp => resp.json())
      .then(resp => this.setState({drink:resp}))
    }
  }



  render() {

      return (
    
            <React.StrictMode>
              <div className="tc">

              <div><h1 className="App">Cocktail Search App</h1></div>
              <Searchbox keyDown={this.onKeyDown} keyUp ={this.onKeyUp}/>
              <RecipeList recipeJSON={this.state.drink} />

              </div>

            </React.StrictMode>


        );
  }
    
 
}
 

export default App;
