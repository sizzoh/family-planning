function info() {
    window.alert("you are running into trouble");
}
function head() {
    document.getElementsById("h1").innerHTML = "THIS HAS BEEN CHANGED";
    document.write(Date());
}
function show() {
    var x = document.getElementsById("side");
    // var y = document.getElementsByTagName('button');
    x.style.visibility = "hidden";
    var z = document.getElementsById("container");
    z.style.width = "100%";
}

function resize() {}
function validate() { // var name = document.querySelector("#name");
    var email = document.querySelector("#mail");
    var password = document.querySelector("#pass");
    // var cfm = document.querySelector("#cfw");
    // let location = window.location.href= "prototype.html";
    // let form= document.querySelector("#form");

    if (email.value != "" && password.value != "") {
        if (password.value.length >= 8 && password.value.length <= 12) {
            window.location = "/Home.html";
            alert("you successful logged in");
        } else {
            alert("your password must be 8 character long\n and  less or equal to 12 character long");
            window.location = "/Login.html";
        }
    } else {
        window.location = "/Login.html";
        alert("inputs can not be blank");
    }
}
// button  resize
function resizeButton() {
    var r = document.querySelector("button");
    r.style.maxWidth = "100%";
}
function resizeButton1() {
    document.querySelector("button").style.width = "700px";
}
function showPassword() {
    var x = document.getElementById("pass");
    // var y = document.getElementById("cfm");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// login time

function time() {
    var clock = new Date();
    var hour = clock.getHours();
    var min = clock.getMinutes();
    var second = clock.getSeconds();
    var session = document.getElementById("");

    var sessionAM = "AM";
    var sessionPM = "PM";

    var fullTime = hour + ":" + min + ":" + second;
    if (hour < 12) {
        fullTime = hour + ":" + min + ":" + second + " " + sessionAM;
    } else {
        fullTime = hour + ":" + min + ":" + second + " " + sessionPM;
    }
    document.getElementById("time").innerHTML = fullTime;
}
setInterval(time, 1000);

// validation with jQUERY
$(document).ready(function () {
    $("button").click(function () {
        if ($("#mail").value != "" && $("#pass").value != "") {
            if ($("#pass").value.length >= 8 && $("#pass").value.length<= 12) {
        window.location = "/Home.html";
        alert("you successful logged in");
      } else {
        alert("your password must be 8 character long ");
        window.location = "/Login.html";
      }
    } else {
      window.location = "/Login.html";
      alert("inputs can not be blank");
    }
  });
});
//session management active user
function sessionSend() {
  var email = document.getElementById("mail");
  localStorage.setItem("user", email.value);
}
function sessionReceive() {
  var ActiveUser = localStorage.getItem("user");
  if (ActiveUser) {
    document.getElementById("ActiveUser").textContent = ActiveUser;
  }
}
//localStorage form submission active user
function submit() {
  var email = document.querySelector("#mail").value;
  localStorage.setItem("email", JSON.stringify(email));
}

function Retrieve() {
  var data = localStorage.getItem("email");
  var stringified = JSON.parse(data);
  document.getElementById("ActiveUser").textContent = stringified;
}

//search engine
$(document).ready((e)=> {
                e.preventDefault();
                search();
            }) 
                function search() {
                    var card = document.querySelectorAll(".card");
                    var label = document.getElementsByTagName("label").textContent;
                    var form = document.querySelector("#form");
                    form.addEventListener("submit", function () { // var input =  $(":search").value();
                        var input2 = document.getElementById("search").value;
                        if (input2 === label) {
                            card.parent().hide();
                            label.parent().show();
                        } else {
                            alert("no item matched your search");
                        }

                    })
                }
            

            // search engine 2
            function search2() {
                var input2 = document.getElementById("search").value;
                var label2 = document.getElementsByTagName("label");
                var label = document.getElementsByTagName("label").innerHTML;
                if (input2 === label) {
                    for (var i; i <= label2.length; i++) {
                        card.parent().hide();
                        label.parent().show();
                        alert("your search is " + input2);
                    }

                } else {
                    alert("no item matched your search");
                }

            }

            // pop up
            var form = document.querySelector("#form");
            var popup = document.getElementById('pop');
            function open() {
                popup.classList.add("popup-view");

            }
            function close() {
                popup.classList.remove("popup-view");

            }
            function show(form) {
                document.getElementById('pop').style.visibility = "visible";
                popup.classList.add("popup-view");
                form.preventDefault();
            }
            function hide(form) {
                document.getElementById('pop').style.visibility = "hidden";
                popup.classList.remove("popup-view");
                form.preventDefault();
            }
//response function

function setItems(){
    $(".form").submit(function(e){
    e.preventDefault();
    localStorage.setItem("name", $("#name").val());
    localStorage.setItem("email", $("#mail").val());
    localStorage.setItem("date", $("#date").val());
    localStorage.setItem("subject", $("#subject").val());
    localStorage.setItem("message", $("#message").val());
    })
}

//slider slider image
document.addEventListener('DOMContentLoaded', function () {
    const autoplay = 300;
    const carousel = document.querySelector('#imageCarousel');
    const carouselItem = new bootstrap.Carousel(carousel, {
        interval: autoplay,
    });

})



//posting code from accessory
function post(elem) {
    var m = document.getElementById("message");
    if (!elem.value.includes("@")) { 
        var message = "Please include '@' in your email address "+elem.value+" is missing '@' ";
        m.innerHTML = message;
        m.style.color = "red";
        (elem).style.border = "1px solid red";

        var p = elem.createElement("p");
        window.addEventListener("keyup", event => {
            var on = event.getModifierState("CapsLock");
            if (on) {
           p.innerHTML= "WARNING! CapsLock is on";
            }
        })
    }
    else if(elem.value.includes("@")) {
        m.innerHTML = "";
        elem.style.border = "";
    }
    }

/*
XMLHttpRequest object properties
onload
onprogress
onreadystatechange
readyState
onerror

  */   