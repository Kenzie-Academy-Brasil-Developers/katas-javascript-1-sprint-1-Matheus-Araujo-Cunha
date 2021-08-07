function oneThroughTwenty() {
  let meuRetorno = []
     for (let i = 1; i <= 20; i++){
meuRetorno.push(i)
     }
     return meuRetorno;
}
 console.log(oneThroughTwenty());

//call function oneThroughTwenty

function evensToTwenty() {
  
  let meuRetorno = []
    for (let i = 2; i <= 20; i+= 2 ){
      meuRetorno.push(i)
    }
    return meuRetorno
}
 console.log(evensToTwenty())

//call function evensToTwenty

function oddsToTwenty() {
  let meuRetorno = []
  
    for (let i = 1; i <=20; i+= 2) {
      meuRetorno.push(i)
    }
  return meuRetorno

}
 console.log(oddsToTwenty())
//call function oddsToTwenty

function multiplesOfFive() {
    let meuRetorno = []
    for (let i = 5; i <= 100; i+=5){
      meuRetorno.push(i)
    }
      return meuRetorno

}
console.log(multiplesOfFive())

//call function multiplesOfFive

function squareNumbers() {
  let meuRetorno = []
  for (let i = 1; i<= 10; i++) {
  meuRetorno.push(i*i)  
}
return meuRetorno
}
console.log(squareNumbers())
//call function squareNumbers

function countingBackwards() {
  let meuRetorno = []
  
  for (let i = 20; i >= 1; i-- ){
    meuRetorno.push(i)
  }
         return meuRetorno 
}
console.log(countingBackwards())
//call function countingBackwards

function evenNumbersBackwards() {
 let meuRetorno = []   
 
   for (let i = 20; i>=2; i-=2){
     meuRetorno.push(i)
   }
     return meuRetorno   
}
console.log(evenNumbersBackwards())
//call function evenNumbersBackwards

function oddNumbersBackwards() {
  let meuRetorno = []
  for (i = 19; i>=1 ;   i-=2){
    meuRetorno.push(i)
}   
 return meuRetorno
}
console.log(oddNumbersBackwards())
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
 let meuRetorno = []

 for(let i = 100; i>= 5; i-=5){
        meuRetorno.push(i)    
 }
   return meuRetorno
}
console.log(multiplesOfFiveBackwards())
//call function multiplesOfFiveBackwards
 


function squareNumbersBackwards() {
    let meuRetorno = []
    
    for(let i = 10; i>=1; i--){
      meuRetorno.push(i*i)
    }
   return meuRetorno
}
console.log(squareNumbersBackwards())
//call function squareNumberBackwards
