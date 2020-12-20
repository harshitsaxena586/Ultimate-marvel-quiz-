
var readlineSync = require('readline-sync');
const chalk = require('chalk');
// installing rerequired packages
// _______________________________________________________________________



questionOne = {
  question: "what is my birthdate ----------------- ",
  answer: "28 july",
}
questionTwo = {
  question: "What is the real name of the Scarlet Witch? (full name )",
  answer: "wanda maximoff",
}
questionThree= {
  question:"What is Captain America's shield made of ? ",
  answer:"vibranium",
}

questionFour= {
  question:"What is Real name of Hawkeye (full name) ",
  answer:"clint barton",
}

questionFive= {
  question:"What is the name of the axe created for and then used by Thor in Avengers: Infinity War? ",
  answer:"stormbreaker",
}

questionSix= {
  question:`In the comic book series, who were the original Avengers?


  a:Batman, Spider-Man, Superman and Wonder Woman

  b:Ant-Man, the Hulk, Iron Man, Thor, and the Wasp

  C:The Hulk, Howard The Duck, Thor and Black Widow

  D:The Incredibles`,
  answer:"c",
}

questionSeven= {
  question:`The whole 10 years of marvel cinematic universe is based on.....
  A:the infinity saga
  B:the stanlee and his experiments 
  C:finding the soul stone
  D:How Tony Stark Dies`,
  answer:"a",
}


// all questions till here______________________________________________________________

var questionList=[ questionOne,questionTwo,questionThree

]
var life=1
var score=0

function quiz(question,answer){
  var userAnswer = readlineSync.question(question)
  var conversion =userAnswer.toLowerCase()
  if(conversion==answer){
    console.log(chalk.green('Right answer! '))
    score++
   console.log(chalk.yellow('your score is : '+score))
  }
  else(life--,console.log(chalk.red('Game over ')),console.log(chalk.yellow('your score is : '+score)),console.log("made by harshit saxena"))
}

// function to use to verify answers___________________________________________________
var userName = readlineSync.question("Please enter your Name  ")

console.log(chalk.green('Welcome '+userName));
console.log(chalk.hex("#ED1D24")('Lets play the Ultimate Marvel Quiz '+userName));

// the game starts here 
var iterations=questionList.length
for (i=0;i<iterations&& life>0;i++){
  quiz(questionList[i].question,questionList[i].answer)
}