import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import APIdata from './components/APIdata.json'

function App() {

  const [quoteArray,setQuoteArray] = useState (''); 
  const [authorArray,setAuthorArray] = useState (''); 
  const [randomNumber, setRandomNumber] =useState ('');
//**************************************************************************************************************** */*/

//   let quoteDB =`https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
//   fetch(quoteDB)
//   .then(response => response.json())
//   .then((data)=>{
//     var quoteObjectArray = data.quotes
//     //console.log(quoteObjectArray);
   
  

//   // console.log(quoteobejectloopedthru);
  
//   })
// //**************************************************************************************************************** */*/

 
  // console.log(quoteArray); 
  // const [quote, setQuote] =useState ("Blood makes you related, Loyalty makes you family");
  // const [author, setAuthor] =useState ("Riosinle");


//   let ourquoteArray= [

//  {quote:"Chase her even when she's yours",author:"Romeo"},
//     {quote:"communicating using a language the other person understands is the most important thing",author:"Alpha"},
//     {quote:"other's opinions should not matter to you, what you think of your self should",author:"Uzumaki"},
//     {quote:"if it costs you your peace of mind, get rid of it",author:"Budda"},
//     {quote:"reputation is the most important thing in life, guard it with you life",author:"48-LOP"},
//     {quote:"a mistake done more than once is a choice",author:"isanagi"},
//     {quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",author:"Nelson Mandela"}
                    
// ] 
// console.log(ourquoteArray);

  /*
  function handle0(){
    //we call a function
    
  } 
  function handle1(){
    //we call a function
    setQuote(quoteArray[1].quote);
    setAuthor(quoteArray[1].author)
  } 
  function handle2(){
    //we call a function
    setQuote(quoteArray[2].quote);
    setAuthor(quoteArray[2].author)
  } 
  function handle3(){
    //we call a function
    setQuote(quoteArray[3].quote);
    setAuthor(quoteArray[3].author)
  } 
  function handle4(){
    //we call a function
    setQuote(quoteArray[4].quote);
    setAuthor(quoteArray[4].author)
  }
  */


  //**************************************************************************************************************** */*/
  let authorobejectloopedthru = APIdata.map(element => {
    return element.author
    });

  let quoteobejectloopedthru = APIdata.map(element => {
    return element.quote
    });
  function randomNumberGenerator(){
    // console.log(quoteArray.length); = 102 quotes
    let NumberGenerator = Math.floor(Math.random()*quoteArray.length)
    console.log("number: " + NumberGenerator);
    setRandomNumber(NumberGenerator);
    // setQuote(quoteArray[randomNumber]);
    // setAuthor(authorArray[randomNumber])
    setQuoteArray(quoteobejectloopedthru);
    setAuthorArray(authorobejectloopedthru);   
  
   
  }
  //**************************************************************************************************************** */*/




  //to have a quote display on our app each time the page is loaded, we useEffect
  useEffect(() => {
    randomNumberGenerator();
  }, [fetch]);

//**************************************************************************************************************** */*/


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


/** STEP ONE 
 * we created several buttons and gave each an onclick functoin that updates the quotes an the author using setQuote and setAuthor, each displays a different quote when pressed, 4 buttons to be exact, handle1,2,3 and handle4.
 * 
 * then we created a 5th button called number(later will be changed to Generate), we gave it an onclick funtion called "randomNumberGenerator", and we created a useState for it.the function is meant to generate a random number to allow us to choose a random quote and then display it
 --in that function, after we generate the random number, we use it to update it's useState ( setRandomNumber(NumberGenerator)),
 then, since we have limited buttons = onclick handles = qutotes, we used conditional statement to call the handle fucntion each time its number is randomly generated, we set the numbers from 0-4, so we have equal numbers and quotes

                

  function handle0(){
    //we call a function
    setQuote("Chase her even when she's yours");
    setAuthor("Romeo")
  } 
  function handle1(){
    //we call a function
    setQuote("communicating using a language the other person understands is the most important thing");
    setAuthor("alpha")
  } 
  function handle2(){
    //we call a function
    setQuote("other's opinions should not matter to you, what you think of your self should");
    setAuthor("Uzumaki")
  } 
  function handle3(){
    //we call a function
    setQuote("if it costs you your peace of mind, get rid of it");
    setAuthor("somali")
  } 
  function handle4(){
    //we call a function
    setQuote("reputation is the most important thing in life, guard it with you life");
    setAuthor("48-LOP")
  }

  fucntion below allows us to link the handle fucntion where our quotes are updated to be linked to the random number, meaning each time a random number is generated the hadle fucntion corresponding to that number is called inside the conditional statement and then in turn that handle fucntion updates our quote and then that quote is displayed in our paragraph in the page, redering the 4 buttons useless----soooo we deleted the buttons

  function randomNumberGenerator(){
    let NumberGenerator = Math.floor(Math.random()*4)
    setRandomNumber(NumberGenerator);
   
    if (NumberGenerator === 0){
      handle0()
    }

    if (NumberGenerator === 1){
      handle1()
    }
    if (NumberGenerator ===2 ){
      handle2()
    }
    if (NumberGenerator === 3){
      handle3()
    }
    if (NumberGenerator === 4){
      handle4()
    }
  }


  ********************************************************************
  STEP TWO

  here we put all the quotes in an array called [quoteArray], and then using the array name and it's index numbers updated our setQuote inside the handle function, which it the same thing as before

  
  let quoteArray= ["Chase her even when she's yours","communicating using a language the other person understands is the most important thing","other's opinions should not matter to you, what you think of your self should","if it costs you your peace of mind, get rid of it","reputation is the most important thing in life, guard it with you life"]

  function handle0(){
    //we call a function
    setQuote(quoteArray[0]);
    setAuthor("Romeo")
  } 

  we can also update our quote and author inside the randomNumberGenerator function instead of calling the handle function that updates our setquote and author
  
  function randomNumberGenerator(){
    let NumberGenerator = Math.floor(Math.random()*4)
    // console.log(NumberGenerator);
    setRandomNumber(NumberGenerator);
   
    if (NumberGenerator === 0){
      setQuote(quoteArray[0].quote);
    setAuthor(quoteArray[0].author)
    }

    if (NumberGenerator === 1){...}
    if (NumberGenerator ===2 ){...}
      if (NumberGenerator === 3){...}
    if (NumberGenerator === 4){...}

    why do we need to use the index of an array, can't we just use the (NumberGenerator) to access the index since it's the same as the conditional number,
                 setQuote(quoteArray[NumberGenerator].quote);
                setAuthor(quoteArray[NumberGenerator].author)

    the above 2 lines allows us not to write 64 billion conditional statement to access the index of arrayed objec  
  
  
  */
