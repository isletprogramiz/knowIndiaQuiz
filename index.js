var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;
console.log(chalk.bold.yellowBright('       Welcome To  Quiz Game'));
console.log(chalk.bold.yellowBright("------------------------------------"));
console.log("give your answer in a , b ,c ");

var db = [
{
  question:'What is the national game of India? \na. Hockey \nb. Cricket \nc. Football \n',
  answer:'a'
},
{
  question: "Where does India lies in terms of population world wise? \na. 1st \nb. 2nd \nc. 5th \n",
  answer: "b",
},
{
  question:'Which animal is considerd as sacred in India? \na. Cow \nb. Deer \nc. Lion \n',
  answer:'A',
},
{
  question:'  WHICH CITY IS BELIEVED TO BE ONE OF THE OLDEST LIVING CITIES IN THE WORLD?  \na.  PARIS \nb. VARANASI \nc. SAN FRANCISO\n',
  answer:'B',
},
];

function play(question,answer){
  var userAnswer=readlineSync.question(chalk.bold(question));
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    score++;
    console.log(chalk.green("Correct Answer !"));
    console.log(chalk.bold("Score is " + score));
  }
  else{
    console.log(chalk.red("WRONG ANSWER"));
    console.log(chalk.bold("Score is " + score));
  }
  console.log("-------------")


}

for(i=0;i<db.length;i++){
  currentQues = db[i].question;
  currentAns = db[i].answer;
  play(currentQues,currentAns);
}

console.log(chalk.blueBright(' you scored ' + score + ' in  Quiz Game' ));