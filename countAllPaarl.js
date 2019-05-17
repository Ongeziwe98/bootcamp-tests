function countAllPaarl(list){
    //console.log(list)
    var paarlRegistrations = [];
  var listOne = list.split(", ");
    //console.log(listone);
    for (var i=0; i<listOne.length;i++){
      var reg = listOne[i];
   if (reg.startsWith("CJ")){
     paarlRegistrations.push(reg);
   }
    }
    return (paarlRegistrations.length);
  }
  var list = "CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123";
  
  