console.log("betting not required, pure gameplay");

//   instantiate suits, ranks and values. JS calls lists arrays. dictionaries also possible.
// JS treats "const" as global variables, much like Python constants.

const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
const ranks = [
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Jack",
  "Queen",
  "King",
  "Ace",
];
const values = {
  Two: 2,
  Three: 3,
  Four: 4,
  Five: 5,
  Six: 6,
  Seven: 7,
  Eight: 8,
  Nine: 9,
  Ten: 10,
  Jack: 10,
  Queen: 10,
  King: 10,
  Ace: 11,
};

console.log("printing poker card suits, ranks and values");
console.log(suits);
console.log(ranks);
console.log(values);

//attempting to create a Card "class" - with 2 attributes, suit and rank. it works, but i can't get my deck compiler to iterate class objects into a deck. So i stick with global functions and variables - and i quote out the Card class here.

// function Card(suit, rank) {
//   this.suit = suit;
//   this.rank = rank;
//   this.cardString = function () {
//     return this.rank + " of " + this.suit;
//   };
// }

//attempting to create a Deck class - to store the 52 cards for shuffling later. have to instantiate all 52 cards, will try this out using the JS equivalent of a for loop

//  what i would do in python
//   def compile_deck(self):
//    deck = []  # start with an empty list
//     for suit in suits:
//      for rank in ranks:
//       deck.append(suit,rank)
//        return deck

//create empty array(list) representing the deck
var deck = [];

//this function attempts to build a new deck of 52 cards - rather than attempting to manually write out each and every card in 52 dictionary keys - using nested for loops

function deckCompiler() {
  suits.forEach((suit) => {
    ranks.forEach((rank) => {
      deck.push({ suit, rank });
    });
  });
}
//deck compiler works, we now have 52 cards

//random integer function taken from this source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  finalRandInt = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  return finalRandInt;
}
//swap 2 cards out with each other in their respective index positions
function cardSwapper() {
  //get 2 exclusive random integers from front and back halves of the deck
  randomIndexFirst = getRandomIntInclusive(0, 25);
  randomIndexSecond = getRandomIntInclusive(26, 51);
  tempCard = deck[randomIndexFirst];
  tempCard2 = deck[randomIndexSecond];
  deck[randomIndexFirst] = tempCard2;
  deck[randomIndexSecond] = tempCard;
}

//repeat this 52 times using Javascript's really ugly "for" loop
function shuffler() {
  for (var i = 0; i < 52; i++) {
    cardSwapper();
    console.log(deck);
  }
}

//there is no pop equivalent 

function deal(){
  single_card = deck.
}

//this main function is what came with the Rocket Academy starter code. it reproduces output after submitting input in a webpage.
var main = function (input) {
  var myOutputValue = input + " llama";

  //messing around with OR keyword
  if (input == "llama" || input == "1") {
    console.log("the gods are displeased with your sacrilege");
    console.log("a suitable sacrifice must be found to appease them");
    myOutputValue = "the realms have shattered";
  }

  //typing in this magic key phrase compiles a deck of 52 cards.
  if (input == "summon deck") {
    deckCompiler();
    myOutputValue = "a new card deck was opened!";
    console.log("deck compiled. printing deck contents");
    console.log(deck);
  }

  if (input == "shuffle") {
    shuffler();
    myOutputValue = "deck has been shuffled! Peeking at first card...";
    firstCardString = deck[0];
    console.log("the first card is: ", deck[0]);
    // console.log(`The first card is ${firstCardString}`); //Javascript's equivalent of Python's f-string
  }

  return myOutputValue;
};
