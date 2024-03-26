// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
   //returns the number of blocks given a value
  if (someValue<42){
    return(42-someValue);
  }
  else {

  return(someValue-42);
}
} 

function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks(someValue)*264
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function,passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks is then  used to calculate feet
}

  function distanceTravelledInFeet(c,d){
    if (c>d){
        return((c-d)*264);
      }
      else
        return((d-c)*264);
    }


  function calculatesFarePrice(start,destination){
    let dist = distanceTravelledInFeet(start,destination);
  if (dist<= 400){
    return 0;
  }
  if (dist>=400 && dist<=2000){
    return (dist - 400)* 0.02;
  }
  else if(dist>=2000&& dist<=2500){
    return 25;
  }
  else if (dist > 2500){
    return "cannot travel that far";
  }
  }