import React from 'react';



const Searchbox = ({ keyDown, keyUp, keyPress }) => {
    return(
        <div className="pa2 tc"> 
            <input 
            className=" pa3 ba b--green bg-lightest-blue tc" 
            placeholder="Search for cocktails here" 
            type="text"
            onKeyDown={keyDown}
            onKeyUp={keyUp}
            onKeyPress={keyPress}
            />
        </div>
       
    );

};

export default Searchbox;