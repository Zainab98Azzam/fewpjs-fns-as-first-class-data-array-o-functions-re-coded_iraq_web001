function wakeDog(dogName, dogBreed)
{
  
  console.log(`Wake ${dogName} the ${dogBreed}`);
  let ret=`Wake ${dogName} the ${dogBreed}`
  return ret;
}
function leashDog (dogName, dogBreed)
{
  
  console.log(`Leash ${dogName} the ${dogBreed}`);
  let ret=`Leash ${dogName} the ${dogBreed}`
  return ret;
}
function walkToPark (dogName, dogBreed)
{
  
  console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  let ret=`Walk to the park with ${dogName} the ${dogBreed}`
  return ret;
}
function throwFrisbee(dogName, dogBreed)
{
  
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  let ret=`Throw the frisbee for ${dogName} the ${dogBreed}`
  return ret;
  
}
function walkHome(dogName, dogBreed)
{
  
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
   let ret=`Walk home with ${dogName} the ${dogBreed}`
  return ret;
}
function unleashDog (dogName, dogBreed)
{
  
  console.log(`Unleash ${dogName} the ${dogBreed}`);
   let ret=`Unleash ${dogName} the ${dogBreed}`
  return ret;
}

let routine =[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog (dogName, dogBreed)
{
  let routine =[wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
 let a=routine.wakeDog(dogName, dogBreed)
 let b=routine.leashDog(dogName, dogBreed)
 let c=routine.walkToPark(dogName, dogBreed)
 let d=routine.throwFrisbee(dogName, dogBreed)
 let e=routine.walkHome(dogName, dogBreed)
 let f=routine.unleashDog(dogName, dogBreed)
 let g=[a,b,c,d,e,f]
 return g ;
  
  
}