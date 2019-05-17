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
    var itemList = [
      {name : 'apples', qty : 10},
      {name : 'pears', qty : 37},
      {name : 'bananas', qty : 27},
      {name : 'apples', qty : 3},
  ];
  var threshold = 20;
  var result = findItemsOver(itemList, threshold)