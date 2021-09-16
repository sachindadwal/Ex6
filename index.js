var readlineSync= require('readline-sync');

var userName = readlineSync.question('Are you older than 25 ?');

var score=0;

if(userName.toUpperCase() === 'YES')
{
  score++;
  console.log('You are right !! and your score is '+ score );
}
else{
  score--;
  consolog('You are wrong !! and your score is '+score);
}