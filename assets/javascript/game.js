
    //Create variables 
    var choices = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));  
    //math.random because computer picks at random. 
    //Array of choices that holds all the letters in them.
    let wins = 0; 
    let losses = 0; 
    let letters = []
    let guessCount = 10; 
    let guessesSoFar = []
    let corretGuess = false

    //onkeyup this function will randomize the guesses
    document.onkeyup = function(event) {
        userguess = event.key;
        let computerguess = choices[Math.floor(Math.random() * choices.length)];
        console.log(userguess); 
        console.log(computerguess);
     //if statement logs user guesses vs computer guesses if it matches you get a win   
        if(userguess === computerguess){
            console.log("wins:" + wins++);
            document.getElementById ('wins').innerText='Wins: '+ wins;
        }else{ 
            //if wrong will log how many guesses left before you get a loss
            console.log("guesses left: " + guessCount--);
            guessesSoFar.push(event.key)
            document.getElementById ('letter').innerText='Guesses Left: '+ guessesSoFar.join(" ");
            letters.push (event.key)
            console.log (letters)
            document.getElementById ('guessesLeft').innerText='Guesses Left: '+ guessCount;
        } 
        //logs losses after every 10 wrong guesses then resets after the 10th wrong guess
        if(guessCount <=0){
            console.log (losses = losses + 1)
            document.getElementById ('lose').innerText='Losses: '+ losses;
            guessCount = 10
            letters = []
        }




    // Onkey function that stores user choice. 
    // if / else statement that compares that userchoice to computer choice. 
    }
    
    