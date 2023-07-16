var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (let i of names){
  if (i[0].toLowerCase()==='j'){
    goodbye.speak(i);
  }
  else{
    hello.speak(i);
  }
}