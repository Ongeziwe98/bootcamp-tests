function isWeekday(week){
    console.log(week)
    if(week.startsWith('S')){
       return false;
    }
       else if (week.endsWith('day')){
                return true;
    }
  };