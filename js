const professions = [
"Full Stack Developer",
"Web Designer",
"Frontend Developer",
"Java Programmer",
"Software Engineer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){

current = professions[i];

if(!isDeleting){
document.getElementById("typing").textContent =
current.substring(0,j++);
}
else{
document.getElementById("typing").textContent =
current.substring(0,j--);
}

if(j == current.length+1){
isDeleting = true;
}

if(j == 0){
isDeleting = false;
i++;

if(i == professions.length){
i = 0;
}
}

setTimeout(type,120);
}

type();
