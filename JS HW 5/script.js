function showDay() {
    var currentDate = new Date();
    var currentDay = currentDate.getDay();
    var dayAsText = getDayAsText(currentDay);  
    document.getElementById('currentDay').innerHTML = dayAsText;
   }
    
  function getDayAsText(currentDay){
      if(currentDay == 0){ //asking the question
          return "Sunday";
      }else if(currentDay == 1){
           return "Monday";
      }else if(currentDay == 2){
          return "Tuesday";
      }else if(currentDay == 3){
          return "Wednesday";
      }else if(currentDay == 4){
           return "Thursday";
      }else if(currentDay == 5){
            return "Friday";
      }else if(currentDay == 6){ 
          return "Saturday";
      }else{
          return "Invalid Day"
      }
  }
  
  function showMonth() {
      var currentMonth = new Date();
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var monthName = months[currentMonth.getMonth()];
      document.getElementById('currentMonth').innerHTML = monthName;
  }
  
  // function showSeason() {
  //     var currentSeason = new Date();
  //     var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  //     var monthName = months[currentSeason.getMonth()];
  //     currentSeason = getSeason(monthName);
  //     document.getElementById('currentSeason').innerHTML = currentSeason;
  // }
  // function getSeason(monthName){
  //     if(months >= 0 || <= 3){ //asking the question
  //         return "Winter";
  //     }else if(months >= 4 || <= 6){
  //          return "Spring";
  //     }else if(months >= 7 || <= 9){
  //         return "Summer";
  //     }else if(months >= 10 || <= 12){
  //         return "Fall";
  //     }else{
  //         return "Invalid Season"
  //     }
  // }      
  