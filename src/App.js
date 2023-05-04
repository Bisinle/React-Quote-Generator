import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import APIdata from './components/APIdata.json'





function App() {


//MY STATES
  const [quoteArray,setQuoteArray] = useState (''); 
  const [authorArray,setAuthorArray] = useState (''); 
  const [randomNumber, setRandomNumber] =useState ('');



//mapping thru my data to access the quotes and the autho, 
//no the most efficient way, but it works
  let Author =APIdata.map(element =>{return element.author});
  let Quote = APIdata.map(element => {return element.quote});


  function randomNumberGenerator(){
    let NumberGenerator = Math.floor(Math.random()*quoteArray.length)
    console.log("number: " + NumberGenerator);
    setRandomNumber(NumberGenerator); 
    setQuoteArray(Quote);
    setAuthorArray(Author);     
  }


  //to have a quote display on our app each time the page is loaded, we useEffect
  useEffect(() => {
    randomNumberGenerator();
  }, [fetch]);

//tweet functions
function Tweet(){
  window.open("https://twitter.com/intent/tweet?text="+quoteArray[randomNumber]).text();
}


  return (
    <div className="App">
      <header className="App-header">     
        <div class="quote-div">       
        <p >  "{quoteArray[randomNumber]}"</p>     
        <p class="author"> -{authorArray[randomNumber]}</p>
      <div class="btns">      
        <button  class="btn" onClick={randomNumberGenerator}>↻</button>
         <a class="btn twt" href="https://twitter.com/intent/tweet? " target='_blank' onClick={Tweet}>🐦</a>
      </div>
    </div>       
      </header>
    </div>
  );
}

export default App;

