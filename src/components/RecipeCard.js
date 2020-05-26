import React from 'react';
import Ingredients from './Ingredients'


const RecipeCard = (props) => {
   const {  recipeName, instructions, photoUrl, glass, recipeJSON, id } = props;
   return(
        <div className="tc bg-light-blue ma3 dib br3 pa3 ma2 grow bw2 shadow-5 recipeCard">
            <img src={`${photoUrl}/preview`} alt={recipeName}/>
            <div>
                <h1>{recipeName}</h1>
                <p>Glass: {glass}</p>
                    <Ingredients key={id} recipeJSON={recipeJSON} />
                <p>{instructions}</p>
                
            </div>


        </div>

    )

}


export default RecipeCard;