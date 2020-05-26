import  React from 'react';
import RecipeCard from './RecipeCard';



const Recipelist = (prop) => {
    const {recipeJSON} = prop;
    const obj = Object.entries(recipeJSON)
    if ( obj.length > 0) {
        const entry = obj[0][1];
        if (entry !== null) {
        const cardComponent = entry.map(value =>  <RecipeCard key={value.idDrink} id={value.idDrink} recipeName={value.strDrink} instructions={value.strInstructions} photoUrl={value.strDrinkThumb}  glass={value.strGlass} recipeJSON ={recipeJSON}/>)
            return(
        <React.StrictMode>
            {cardComponent}
        </React.StrictMode>
    
        );
        } else {
            return <div className="tc"><p>No results, check your spelling or try another cocktail</p></div>;
        }

    
    } else {
        return <div className="tc"><p>Try searching for a cocktail</p></div>;
    }

    }
    



export default Recipelist;
