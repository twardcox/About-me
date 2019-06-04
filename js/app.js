'use strict';

//WHERE WAS I BORN

var bornSeattle = prompt('Was I born in Seattle?');

if (bornSeattle.toLowerCase() === 'yes') {
  alert ('Nope! I was born in Chicago.');
}
else if (bornSeattle.toLowerCase() === 'no') {
  alert ('How\'d you know? I was born in Chicago, not Seattle!');
}
else {
  alert ('I was born in Chicago!');
}
console.log('Born in Seattle. Answered: '+bornSeattle.toUpperCase());


//ENERGETIC BOYS

var myBoys = prompt ('Do you love being a mom of two energetic boys?');

if (myBoys.toLowerCase() === 'yes') {
  alert ('Of course! I wish I had thier energy and enthusiasm');
}
else {
  alert ('Life with two young boys is tiring, but I wouldn\'t have it any other way' ); 
}
console.log('Energtic boys. Answered: '+ myBoys.toUpperCase());



//ENOUGH SLEEP

var enoughSleep = prompt ('Do you get enough sleep?');

if (enoughSleep.toLocaleLowerCase === 'yes') {
  alert ('What is sleep? See previous question');
}
else {
  alert ('Definitely don\'t get enough!');
}
console.log('Sleep. Answered: '+ enoughSleep.toUpperCase());



//MISS FAMILY

var missFamily = prompt ('Do you miss your family while you are at CodeFellows?');

if (missFamily.toLowerCase()==='yes'){
  alert('Yes! I miss my family, but they are the reason why I am here.');
}
else {
  alert('Of course I miss my family. Hope we can take a nice long vacation when I graduate!');
}
console.log('Miss family. Answered: '+ missFamily.toUpperCase());



//SOFTWARE DEVELOPER

var softwareDev = prompt ('Are you a software developer');

if (softwareDev.toLowerCase() === 'yes') {
  alert ('That\'s right! I am a software developer...in training.');
}
else {
  alert ('Not technically, but I will be!');
}
console.log("Software dev. Answered: " + softwareDev.toUpperCase());
