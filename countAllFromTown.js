function countAllFromTown(list, registration){
    console.log(list, registration);
   var townRegistrations = [];
   //console.log(townRegistrations );
   var listTwo = list.split(",");
   console.log(listTwo);
   for (var i=0; i<listTwo.length;i++){
      var Registrations = listTwo[i];
     if (listTwo[i].trim().startsWith(registration)){
      townRegistrations.push(Registrations);
       
      }
   }
  return townRegistrations.length;
 }