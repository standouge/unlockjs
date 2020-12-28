
function showDay() {
   var currentDate = new Date();
   var currentDay = currentDate.getDay();
   var dayAsText = getDayAsText(currentDay);  
   document.getElementById('currentDay').innerHTML = dayAsText;

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
  
  function showSeason() {
    var currentDate = new Date;
    var currentMonth = month.getMonth();
   //  var seasonMonth = getMonthAsText(currentMonth);
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
      document.getElementById('currentSeason').innerHTML = 'Fall';

     } 
  }      
