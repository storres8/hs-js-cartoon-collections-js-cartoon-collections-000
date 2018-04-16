function dwarfRollCall(dwarves) {
  var order = []; 
  for (var i = dwarves.length/2; i<dwarves.length; i++){
   order += `${(i+1)}. ${dwarves[i]} `; 
  }
  return order;  
}

function summonCaptainPlanet(planeteerCalls){
  for (var i = 0; i<planeteerCalls.length; i++){ 
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!"; 
}
return planeteerCalls;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i<words.length; i++){
    if (words[i].length <= 4)
    return false; 
    else return true; 
  }
} 


function findTheCheese (foods) {
  for (var i = 0; i<foods.length; i++){ 
    if (foods[i] === "cheddar") {
      return foods[i]; 
    } 
    else if (foods[i] === "gouda"){ 
      return foods[i];
    } 
    else if (foods[i] === "camembert"){ 
      return foods[i];
    } 
  } 
  return "no cheese!";
}

function wordsStartsWithB(words){
  var wordWithB = []; 

for (var i= 0; i < words.length ; i++){ 
  if( words[i].startsWith('b') ){
    wordWithB.push(words[i]) }
}
  return wordWithB 
}

// 'bob'.startsWith('b') => true
// 'sally'.startsWith('b') => false

// startsWithB(['bob', 'sally', 'jane']) => ['bob']
// startsWithB(['bob', 'brian', 'sally']) => ['bob', 'brian']
// startsWithB(['sally', 'jane']) => []