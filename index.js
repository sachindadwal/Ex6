var readlineSync= require('readline-sync');

var userCity = readlineSync.question(' if your hometown is Una ?');

var score=0;
console.log('You have entered '+ userCity)
if(userCity.toUpperCase() === 'YES')
{
  score++;
  console.log('You are right !! and your score is '+ score );
}
else{
  score--;
  consolog('You are wrong !! and your score is '+score);
}