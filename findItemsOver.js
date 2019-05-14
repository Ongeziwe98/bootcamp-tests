function findItemsOver(list1, list2){
    var items = []
      for(var i=0; i<list1.length; i++){
        var param2 = list1[i].qty;
        if(param2 > list2){
          items.push(list1[i]);
          
          
       }
        }
    return items;
    }
        