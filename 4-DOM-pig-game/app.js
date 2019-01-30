/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer,gamePlaying;

//scores = [0, 0];
//roundScore = 0;
//activePlayer = 0; 



function init() {
    
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0; 
    //State Variable - State Variable is a variable that simply tells that condition of the system. We use them when we need to remember something or state of something. In this case whether the game is playing or game is not playing.
    gamePlaying = true;
    
    document.getElementById('score-0').textContent = '0'; 
    document.getElementById('score-1').textContent = '0'; 
    document.getElementById('current-0').textContent = '0'; 
    document.getElementById('current-0').textContent = '0'; 
    
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

init();
    
    //DOM Manipulation - The object that gives access to DOM is document object. There are various methods to get elements from webpage. Popular one is querySelector(). It lets us select stuff exactly the way we do it in CSS. Only difference it will select only the first element it finds. But, we can overcome that as well. 

    //Use id attribute in querySelector to change the value. textContent is the property to change the value of the field with respect to the id.
//document.querySelector('#current-' + activePlayer).textContent = dice;

    /*textContent method will only deal with the text. But, if you want to change the HTML content, we can use a method called innerHTML().*/
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
    
    /* We can also get the value to a variable and then modify it or process it. In this below illustration it is called getter, since we get the value from document. The above example is called setter since we set the value to a field. */
//var x = document.querySelector('#score-0').textContent;
//console.log(x);

    /* This is how we hide the dice image for the very first time when it loads. */
//document.querySelector('.dice').style.display = 'none';


//There is another method like querySelector called getElementById which retrieves the element by its ID. This is faster than querySelector. Here we just write the id and will not add hash symbol or dot symbol.
//document.getElementById('score-0').textContent = '0'; 
//document.getElementById('score-1').textContent = '0'; 
//document.getElementById('current-0').textContent = '0'; 
//document.getElementById('current-0').textContent = '0'; 

/*
function btn(){
    //Do something here 
}

    This is called callback function. A function which is passed as an argument and this function event, in this case, eventlistner method will then call that function for us. 
document.querySelector('.btn-roll').addEventListener('click',btn);
*/  


// An anonymous function is simply a function that doesnt have a name which cannot be reused. We cannot use outside of this context, so we cannot call this function anywhere. 
document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePlaying) {
        //1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;
    
        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
    
        //3. Update the round score IF the rolled number was NOT a 1 
        if(dice !== 1) { //!= does type coersion and !== doesnt do type coersion
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }   else {
            //Next player
            nextPlayer();
        }
    }
 
});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        //1. Add current score to add it global score.
            scores[activePlayer] += roundScore;
     
        //2. Update UI 
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
        //3. Check if player won the game.
            if(scores[activePlayer] >= 20) {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                document.querySelector('.dice').style.display = 'none';
                document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
                document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
                gamePlaying = false;

            }   else {
                //next player
                nextPlayer();
            }
        }
});

function nextPlayer(){
    
        roundScore = 0;
    //Ternary operator
        //condition       //if condition is true // if condition is false
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        /* This is to make the class active for changing players. remove and add method
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active'); */

        //There is another method called toggle, which automatically checks and changes.
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active'); 

        //Hide dice image when player is changed.
        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',init);