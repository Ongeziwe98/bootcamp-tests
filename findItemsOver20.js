function findItemsOver20(param1){
    console.log(param1)
  var items = [];
    for(var i=0; i<param1.length; i++){
      console.log(param1[i])
      var param2 = param1[i].qty;
      if(param2 >20){
        items.push(param1[i]);
        
        
     }
      }
  return items;
  }
  
var results = [
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
];