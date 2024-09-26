// Dynamically set the current year in the footer
const year = new Date().getFullYear();
// Set dynamically the Copyright symbol in the footer
document.getElementById("currentyear").innerHTML = `&copy; ${year}`;

//Set the date of last modification in the footer
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;