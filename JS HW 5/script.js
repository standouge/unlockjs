// function showDay() {
//     var currentDate = new Date();
//     var currentDay = currentDate.getDay();
//     var dayAsText = getDayAsText(currentDay);  
//     document.getElementById('currentDay').innerHTML = dayAsText;
//    }
    
//   function getDayAsText(currentDay){
//       if(currentDay == 0){ //asking the question
//           return "Sunday";
//       }else if(currentDay == 1){
//            return "Monday";
//       }else if(currentDay == 2){
//           return "Tuesday";
//       }else if(currentDay == 3){
//           return "Wednesday";
//       }else if(currentDay == 4){
//            return "Thursday";
//       }else if(currentDay == 5){
//             return "Friday";
//       }else if(currentDay == 6){ 
//           return "Saturday";
//       }else{
//           return "Invalid Day"
//       }
//   }
  
//   function showMonth() {
//       var currentMonth = new Date();
//       var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//       var monthName = months[currentMonth.getMonth()];
//       document.getElementById('currentMonth').innerHTML = monthName;
//   }
  
  function showSeason() {
<<<<<<< HEAD
    var month = new Date;
    var currentMonth = month.getMonth();
    var seasonMonth = getMonthAsText(currentMonth);
    document.getElementById('currentSeason').innerHTML = seasonMonth;
  }
  function getMonthAsText(seasonMonth){
     if(currentMonth =>0 || <=3){
         return 'Winter';
     }else if(currentMonth =>4 || <=6){
        return 'Spring';
     }else if(currentMonth =>7 || <=9){
        return 'Summer';
     }else if(currentMonth =>10 || <=12){
        return 'Fall';
     }
=======
    var currentDate = new Date;
    var currentMonth = month.getMonth();
   //  var seasonMonth = getMonthAsText(currentMonth);
  }
  function getMonthAsText(seasonMonth){
     if(currentMonth ==0 || currentMonth==1 || currentMonth==11){
        document.getElementById('currentSeason').innerHTML = 'Winter';
        return;
      }else if(currentMonth ==2 || currentMonth==3 || currentMonth==4){
        document.getElementById('currentSeason').innerHTML = 'Spring';
        return;
      }else if(currentMonth ==5 || currentMonth==6 || currentMonth==7){
         document.getElementById('currentSeason').innerHTML = 'Summer';
         return;
      }else if(currentMonth ==8 || currentMonth==9 || currentMonth==10){
         document.getElementById('currentSeason').innerHTML = 'Fall';
     }else{
      document.getElementById('currentSeason').innerHTML = 'Fall';

     } 
>>>>>>> 5d9c05e75e1172b2ce618246d8e885d0d9392255
  }      
  


<<<<<<< HEAD
  //   var currentSeason = new Date();
    //   var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //   var monthName = months[currentSeason.getMonth()];
    //   var season = getSeason(monthName);
    //   document.getElementById('currentSeason').innerHTML = season;


    // if(monthName == 'December' || 'January' || 'February'){ 
    //     return "Winter";
    // }else if(monthName == 'March' || 'April' || 'May'){
    //      return "Spring";
    // }else if(monthName == 'June' || 'July' || 'August'){
    //     return "Summer";
    // }else if(monthName == 'September' || 'October' || 'February'){
    //     return "Fall";
    // }else{
    //     return "Invalid Season"
    // }
=======
  

>>>>>>> 5d9c05e75e1172b2ce618246d8e885d0d9392255
