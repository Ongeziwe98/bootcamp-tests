var salesData = [
  {department: 'hardware', sales: 4500, day: 'Monday'},
  {department: 'outdoor', sales: 1500, day: 'Monday'},
  {department: 'carpentry', sales: 5500, day: 'Monday'},
  {department: 'hardware', sales: 7500, day: 'Tuesday'},
  {department: 'outdoor', sales: 2505, day: 'Tuesday'},
  {department: 'carpentry', sales: 1540, day: 'Tuesday'},
  {department: 'hardware', sales: 1500, day: 'Wednesday'},
  {department: 'outdoor', sales: 8507, day: 'Wednesday'},
  {department: 'carpentry', sales: 8009, day: 'Wednesday'},
  {department: 'hardware', sales: 12000, day: 'Thursday'},
  {department: 'outdoor', sales: 18007, day: 'Thursday'},
  {department: 'carpentry', sales: 6109, day: 'Thursday'},
  {department: 'hardware', sales: 7005, day: 'Friday'},
  {department: 'outdoor', sales: 12006, day: 'Friday'},
  {department: 'carpentry', sales: 16109, day: 'Friday'}
];


function  mostProfitableDepartment(list){
    var theProf = 0;
      var theDay = [];
      for(var i=0; i<list.length; i++){
      var theSales = list[i].sales;
      var theDepartments = list[i].department;
      if(theDay < theSales){
        theDay = theSales
        theProf = theDepartments
      }
      } 
     // console.log(theProf);
    return theProf
    } 

    var mostProfitable = mostProfitableDepartment(salesData)

    var departmentResults = mostProfitable;

   
   
    function  mostProfitableDay(list){
    var theProf = 0;
      var theDay = [];
      for(var i=0; i<list.length; i++){
      var theSales = list[i].sales;
      var theDay = list[i].day;
      if(theDay < theSales){
        theDay = theSales
        theProf = theDay
      }
      }  
    return theDay
    } 
    