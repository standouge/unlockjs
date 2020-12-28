function verifyInput() {

  let fname = document.getElementById("fnameInput").value;
  let lname = document.getElementById("lnameInput").value;
  let add1 = document.getElementById("add1Input").value;
  let city = document.getElementById("cityInput").value;
  let state = document.getElementById("stateInput").value;
  let zip = document.getElementById("zipInput").value;
  let age = document.getElementById("ageInput").value;

if (fname.length < 5) {
  alert("First name requests at least 5 characters");
  document.getElementById("fnameInput").scrollIntoView(true);
  document.getElementById("fnInputError").innerHTML ="Please enter 5 characters.";
  return;
} else {
  document.getElementById("fnInputError").innerHTML = "";
}

if (lname.length < 5) {
  alert("Last name requests at least 5 characters");
  document.getElementById("lnameInput").scrollIntoView(true);
  document.getElementById("lnInputError").innerHTML = "Please enter 5 characters.";
  return;
} else {
  document.getElementById("lnInputError").innerHTML = "";
}

if (add1.length < 10) {
  alert("Address requests at least 10 characters");
  document.getElementById("add1Input").scrollIntoView(true);
  document.getElementById("add1InputError").innerHTML = "Please enter 10 characters";
  return;
} else {
  document.getElementById("add1InputError").innerHTML = "";
}

if (city.length < 5) {
  alert("City requests at least 5 characters");
  document.getElementById("cityInput").scrollIntoView(true);
  document.getElementById("cityInputError").innerHTML = "Please input 5 characters.";
  return;
} else {
  document.getElementById("cityInputError").innerHTML = "";
}

if (state.length < 2) {
  alert("State requests at least 2 characters");
  document.getElementById("stateInput").scrollIntoView(true);
  document.getElementById("stateInputError").innerHTML = "Please input 2 characters.";
  return;
} else {
  document.getElementById("stateInputError").innerHTML = "";
}
if (zip.length <5) {
  alert("Zip requests at least 5 digits");
  document.getElementById("zipInput").scrollIntoView(true);
  document.getElementById("zipInputError").innerHTML =  "Please input 5 numbers.";
  return;
} else {
  document.getElementById("zipInputError").innerHTML = "";
}
if (age.length !=2) {
  alert("Age requires 2 digits");
  document.getElementById("ageInput").scrollIntoView(true);
  document.getElementById("ageInputError").innerHTML = "Please input 2 digits.";
  return;
} else {
  document.getElementById("ageInputError").innerHTML = "";
  alert("Success");
}

console.log(fname);
console.log(fname.length);
console.log(lname);
console.log(lname.length);
console.log(add1);
console.log(add1.length);
console.log(city);
console.log(city.length);
console.log(state);
console.log(state.length);
console.log(zip);
console.log(Number.isInteger(zip));
console.log(age);
console.log(Number.isInterger(age));
}