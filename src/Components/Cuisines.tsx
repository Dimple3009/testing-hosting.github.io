import React, { useState, useEffect } from 'react';

function Cuisines(){

    const [cuisine, setCuisine] = useState('');
    
    useEffect(() => {
        getCuisine()
    }, []);

    function handleClick() {
        return getCuisine();
    }
    function handleCuisine() {
        return 
        
    }


    function getCuisine() {
        let Cuisines = ['Mexican', 'Italian', 'Indian', 'South Indian', 'Pizza', 'Burger'];
        let randomNum = Math.floor(Math.random() * Cuisines.length);
        console.log(randomNum)
        const RandomCuisine = Cuisines[randomNum];
        setCuisine(RandomCuisine);
    }
    
    return (
        <div>
            <h1>Cuisines</h1>
            <div id="box">
            <div id="name"><a href="https://www.google.com/search?q=google+pizza+near+me&rlz=1C1CHBF_enIN943IN943&oq=google+pizza+near+me&aqs=chrome..69i57j0i22i30l9.7169j0j7&sourceid=chrome&ie=UTF-8">
            <button  onClick={handleCuisine} ><h3>
                    {cuisine}
                </h3></button></a></div>
            <div><button id="new" onClick={handleClick}>
                    Something Else!
                </button></div>
            </div>
        </div>
    );
}

export default Cuisines;