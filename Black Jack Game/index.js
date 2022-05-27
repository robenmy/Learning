

let sum = 0;
let cards = [];
let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");   # for id ´.´ point for class
//let sumEl = document.querySelector("#sum-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el");


function getRandomCard()
{
    let randomNumber = Math.floor(Math.random()*13) +1;

    if (randomNumber == 1)
    {
        return  11;
    }
    else if(randomNumber >= 11 && randomNumber <=13)
    {
        return  10;
    }
    else
    {
        return randomNumber;
    }
    

}

function startGame()
{
    let firstCart = getRandomCard();
    let secondCart = getRandomCard();
    cards = [firstCart, secondCart];
    sum = firstCart + secondCart;
    isAlive = true;
    renderGame();
}

function renderGame()
{
    cardsEl.textContent = "Cards: "+cards.join(" ");
    
   
    if ( sum <= 20)
{
    message = "Do you want to draw a new card?";
    isAlive = true;
    hasBlackJack==false;
}

else if ( sum == 21)
{
    message = "Wohoo! You've got a Blackjack!";
    hasBlackJack = true;
}

else
{
    message = "You're out of the game!";
    hasBlackJack = false;
    isAlive = false;
}

messageEl.textContent = message;
sumEl.textContent = "Sum: "+sum;

}


function newCard()
{
    if(isAlive==true && hasBlackJack==false)
    {
        let card = getRandomCard();

        cards.push(card);
    
        sum += card;
    
        renderGame();
    }


}




