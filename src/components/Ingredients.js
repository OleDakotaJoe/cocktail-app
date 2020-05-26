import React from 'react';


const Ingredients = (props) => {

    const { eachDrink } = props;

    const mapDrink = Object.entries(eachDrink)
    const ingredientList = mapDrink.map((value,i) => {
        if (i > 20 && i < 36 && (value[1] !== null) ){
                let j=i+15;
                let ingredient = (mapDrink[i][1] === null) ? '': mapDrink[i][1];
                let amount = (mapDrink[j][1] === null) ? '': mapDrink[j][1];

                return(
                        
                        <div className="tc" key={`${mapDrink[0][1]}.${i}`}> {`${amount} ${ingredient}`}</div>
                
                
                )
                
            
            
        }
    }
    
    )
    


    return(
        
        <React.StrictMode>
            {ingredientList}
        </React.StrictMode>
    )



  }




export default Ingredients;
