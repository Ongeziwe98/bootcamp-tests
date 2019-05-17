function totalPhoneBill(list){
    console.log(list);
   var bill = list.split(", ");
   var calls = [];
   var sms = [];
   for (var i=0; i<bill.length;i++){
     if (bill[i].startsWith("c")){
         calls.push(bill[i]);
         }
   else{
     sms.push(bill[i]);
 }
 }
 var callAmount = calls.length *2.75;
   //console.log(callAmount)
 var smsAmount = sms.length *0.65;
   var totalAmount = callAmount + smsAmount;
 var totalAmounts = totalAmount.toFixed(2);
 var total = "R" + totalAmounts;
   console.log(total)
 return (total);
 }
  