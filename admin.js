console.log("CivicFix Admin System Running");

// ------------------------------
// APPLY SAVED THEME (Light/Dark)
// ------------------------------

window.onload = function () {

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
document.body.classList.add("dark");
}

loadReports();

};

// ------------------------------
// SAMPLE DEFAULT ISSUES
// ------------------------------

let issues = [
{
type:"Pothole",
location:"Anna Nagar",
priority:"High"
},
{
type:"Streetlight",
location:"T Nagar",
priority:"Medium"
},
{
type:"Garbage Overflow",
location:"Velachery",
priority:"Low"
}
];


// ------------------------------
// AI PRIORITY DETECTION
// ------------------------------

function detectPriority(issueType){

if(issueType === "Pothole"){
return "High";
}

if(issueType === "Water Leakage"){
return "High";
}

if(issueType === "Streetlight"){
return "Medium";
}

return "Low";

}


// ------------------------------
// ADMIN ALERT SYSTEM
// ------------------------------

function alertAdmin(priority){

if(priority === "High"){

alert("🚨 Emergency Infrastructure Issue Reported!");

}

}


// ------------------------------
// ADD ISSUE MANUALLY
// ------------------------------

function addIssue(type,location){

let priority = detectPriority(type);

let newIssue = {
type:type,
location:location,
priority:priority
};

issues.push(newIssue);

alertAdmin(priority);

console.log("New Issue Added:",newIssue);

}


// ------------------------------
// LOAD USER REPORTS
// ------------------------------

function loadReports(){

let storedReports = JSON.parse(localStorage.getItem("reports") || "[]");

storedReports.forEach(report => {

issues.push({
type: report.category,
location: report.lat + ", " + report.lng,
priority: report.priority
});

});

console.log("All Issues:",issues);

}


// ------------------------------
// BACK BUTTON
// ------------------------------

function goBack(){
window.location.href="admin.html";
}


// ------------------------------
// DARK / LIGHT MODE TOGGLE
// ------------------------------

function toggleTheme(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}

}