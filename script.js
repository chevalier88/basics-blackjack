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

var deck = [];

function deckCompiler() {
  suits.forEach((suit) => {
    ranks.forEach((rank) => {
      deck.push({ suit, rank });
    });
  });
}

//deck compiler works, we now have 52 cards
// deckCompiler();

console.log("printing poker card suits, ranks and values");
console.log(suits);
console.log(ranks);
console.log(values);
console.log(deck);

var main = function (input) {
  var myOutputValue = input + " llama";

  if (input == "llama" || input == "1") {
    console.log("the gods are displeased with your sacrilege");
    console.log("a suitable sacrifice must be found to appease them");
    myOutputValue = "the realms have shattered";
  }

  if (input == "check") {
    myOutputValue = deck;
  }

  if (input == "open deck of cards") {
    deckCompiler();
    myOutputValue = deck;
    console.log("printing deck contents");
    console.log(deck);
  }

  return myOutputValue;
};
