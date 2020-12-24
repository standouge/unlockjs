function showDay() {
  var currentDate = new Date();
  var currentDay = currentDate.getDay(); 
  var dayAsTest = getDayAsText(currentDay);  
  document.getElementById('currentDay').innerHTML = currentDay;
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

            // function showMonth() {
            //     var currentDate = new Date();
            //     var currentMonth = currentDate.getMonth();   
            //     document.getElementById('currentMonth').innerHTML = currentMonth;
            // }

            // function showSeason() {
                    
            // }         
