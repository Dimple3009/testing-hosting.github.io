import React, { useState, useEffect } from 'react';

const CUISINES_DATA = ['Mexican', 'Italian', 'Indian', 'South Indian', 'Pizza', 'Burger', 'Chinese', 'Mediterranean', 'English Breakfast', 'Vegan'];

const cuisineToSearchTermMappingFood = [
    'Indian',
    'Mexican',
    'Italian',
    'South Indian',
    'Chinese',
    'Mediterranean',
    'Vegan'
]

// mapping the array data to search term 
// const cuisineToSearchTermMappingExact = {
//     'English Breakfast': 'breakfast places',
// }

function Cuisines(){

    const [cuisine, setCuisine] = useState('');
    
    useEffect(() => {
        getCuisine()
    }, []);

    function handleClick() {
        return getCuisine();
    }
    


    function getCuisine() {
        let randomNum = Math.floor(Math.random() * CUISINES_DATA.length);
        console.log(randomNum)
        const RandomCuisine = CUISINES_DATA[randomNum];
        setCuisine(RandomCuisine);
    }
    
    function handleCuisine() {
        // window.location.href = searchLink();
        window.open(searchLink(), "_blank"); 
       return ; 
        
    }
    function searchLink() {
        let searchTerm = '';

        if(cuisineToSearchTermMappingFood.includes(cuisine)) {
            searchTerm = cuisine.toLowerCase() + " food";
        } 
        // else {
        //     searchTerm = cuisineToSearchTermMappingExact[cuisine];
        // }
        if(searchTerm === undefined) {
            searchTerm = cuisine.toLowerCase();
        }
        let searchLink1 = "https://www.google.com/search?q="+ searchTerm +"+near+me&rlz=1C1CHBF_enIN943IN943&oq=google+pizza+near+me&aqs=chrome..69i57j0i22i30l9.7169j0j7&sourceid=chrome&ie=UTF-8";
        return searchLink1;
    }
 
        
    return (
        
        <div>
            <div id="box">
            <div id="name">
            <button  onClick={handleCuisine} ><h3>
                    {cuisine}
                </h3></button></div>
            <div><button id="new" onClick={handleClick}>
                    Something Else!
                </button></div>
            </div>
        </div>
    );
}

export default Cuisines;