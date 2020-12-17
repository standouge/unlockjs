function verifyInput() {

            let fname = document.getElementById("fnameInput").value;
            // let lname = document.getElementById("lnameInput").value;
            // let add1 = document.getElementById("add1Input").value;
            // let city = document.getElementById("cityInput").value;
            // let state = document.getElementById("stateInput").value;
            // let zip = document.getElementById("zipInput").value;
            // let age = document.getElementById("ageInput").value;

       if (fname.length < 5) {
            alert("First name requests at least 5 characters");
            document.getElementById("fname").scrollIntoView(true);
            // document.getElementById("fnameError").innerHTML ="Please enter 5 characters.";
            return;
        } else {
        document.getElementById("fnameInput").innerHTML = "";
        }
        
        // if (lname.length < 5) {
        //     alert("Last name requests at least 5 characters");
        //     document.getElementById("lname").scrollIntoView(true);
        //     // document.getElementById()
        //     return;
        // } else {
        //     document.getElementById("lnameInput").innerHTML = "";
        // }
        // if (add1.length < 10) {
        //     alert("Address requests at least 10 characters");
        //     document.getElementById("add1").scrollIntoView(true);
        //     // document.getElementById()
        //     return;
        // } else {
        //     document.getElementById("add1Input").innerHTML = "";
        // }
     
        // if (city.length < 5) {
        //     alert("City requests at least 5 characters");
        //     document.getElementById("city").scrollIntoView(true);
        //     // document.getElementById()
        //     return;
        // } else {
        //     document.getElementById("cityInput").innerHTML = "";
        // }
        // if (state.length < 2) {
        //     alert("State requests at least 2 characters");
        //     document.getElementById("state").scrollIntoView(true);
        //     // document.getElementById()
        //     return;
        // } else {
        //     document.getElementById("stateInput").innerHTML = "";
        // }
        // if (zip.length <5) {
        //     alert("Zip requests at least 5 digits");
        //     document.getElementById("zip").scrollIntoView(true);
        //     // document.getElementById()
        //     return;
        // } else {
        //     document.getElementById("zipInput").innerHTML = "";
        // }
        // if (age.length !=2) {
        //     alert("Age requires 2 digits");
        //     document.getElementById("age").scrollIntoView(true);
        //     // document.getElementById()
        //     return;
        // } else {
        //     document.getElementById("ageInput").innerHTML = "";
        //     alert("Success");
        // }

console.log(fname)
console.log(fname.length)
// console.log(lname)
// console.log(lname.length)
// console.log(add1)
// console.log(add1.length)
// console.log(city)
// console.log(city.length)
// console.log(state)
// console.log(state.length)
// console.log(zip)
// console.log(Number.isInteger(zip))
// console.log(age)
// console.log(Number.isInterger(age))
}