window.addEventListener('scroll' , () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
 })

 // show/hide nav menu 
 const menu = document.querySelector(".nav-menu");
 const menuBtn = document.querySelector("#open-menu-btn");
 const closeBtn = document.querySelector("#close-menu-btn");


 menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
 })

 // close nav menu 
 const closeNav = () => {
    menu.style.display="none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
 }

 closeBtn.addEventListener('click', closeNav)




 document
  .getElementById("showMessageButton")
  .addEventListener("click", function () {
    var messageContainer = document.getElementById("messageContainer");
    messageContainer.style.display = "block";
  });

function closeMessage() {
  var messageContainer = document.getElementById("messageContainer");
  messageContainer.style.display = "none";
}


document
.getElementById("showMessageButton1")
.addEventListener("click", function () {
  var messageContainer = document.getElementById("messageContainer1");
  messageContainer.style.display = "block";
});

function closeMessage1() {
var messageContainer = document.getElementById("messageContainer1");
messageContainer.style.display = "none";
}


document
.getElementById("showMessageButton2")
.addEventListener("click", function () {
  var messageContainer = document.getElementById("messageContainer2");
  messageContainer.style.display = "block";
});

function closeMessage2() {
var messageContainer = document.getElementById("messageContainer2");
messageContainer.style.display = "none";
}

document
.getElementById("showMessageButton3")
.addEventListener("click", function () {
  var messageContainer = document.getElementById("messageContainer3");
  messageContainer.style.display = "block";
});

function closeMessage3() {
var messageContainer = document.getElementById("messageContainer3");
messageContainer.style.display = "none";
}

document
.getElementById("showMessageButton4")
.addEventListener("click", function () {
  var messageContainer = document.getElementById("messageContainer4");
  messageContainer.style.display = "block";
});

function closeMessage4() {
var messageContainer = document.getElementById("messageContainer4");
messageContainer.style.display = "none";
}

document
.getElementById("showMessageButton6")
.addEventListener("click", function () {
  var messageContainer = document.getElementById("messageContainer6");
  messageContainer.style.display = "block";
});

function closeMessage6() {
var messageContainer = document.getElementById("messageContainer6");
messageContainer.style.display = "none";
}
