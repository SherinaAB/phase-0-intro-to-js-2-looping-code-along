// for (let age = 30; age < 40; age++){
//     console.log(`I'm ${age} years old. Happy Birthday to me!`);
//     debugger;
// }

const gifts = ["teddy bear","drone","doll"];

function wrapGifts(gifts){
    for (let i = 0; i <gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);

const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards,event){
    let messages = [];
    for (let i = 0; i <cards.length; i++){
        messages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");




function countDown(positiveNumber){
    while(positiveNumber >= 0){
    console.log(positiveNumber)
    positiveNumber--;
    }
}