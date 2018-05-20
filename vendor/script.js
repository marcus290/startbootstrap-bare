    function changeMenu(name) {
        closePChat();
        endVid();
        closeDocPane();
		var headSelector = "div.heads#" + name + " span";
		var theirName = document.querySelector(headSelector).innerHTML;
        if (name === "Person0") {closePMenu(); return;}

        var allButtons = document.querySelectorAll(".menuButton");
        for (var i = 0; i < allButtons.length; i++) {
            allButtons[i].classList.remove("greyed-out");
        }
        
        /* grey-out the vid button if user is not online or else write online text. */
        var imgSelector = "div.heads#" + name + " img";
        if (!document.querySelector(imgSelector).classList.contains("online")) {
            greyOut("vidButton");
            document.querySelector("#PersonMenu p").innerHTML = "";
        } else {
            document.querySelector("#PersonMenu p").innerHTML = theirName + " is online."; // add message if online
        }
        /* grey-out the doc button if user has not submitted */
        if (!document.querySelector(imgSelector).classList.contains("submitted")) {
            greyOut("docButton");
        }
		
		/* change document pane to their name */
		document.querySelector("#PersonMenu h5.post-message").innerHTML = theirName + "'s posts";
		
        /* change the menu to the selected user */
        var menuElm = document.getElementById("PersonMenu");
        var menuString = menuElm.innerHTML;
        menuString = menuString.replace(new RegExp("Person.", "g"), name);
        menuElm.innerHTML = menuString;
                
        menuElm.className = "left-pane action-pane slides";
        var newone = menuElm.cloneNode(true);
        menuElm.parentNode.replaceChild(newone, menuElm);
    }
    function closePMenu() {
        document.getElementById("PersonMenu").classList.add("invisible");
    }
    function startPChat(name) {
        var headSelector = "div.heads#" + name + " span";
        document.querySelector("#privChat h5").innerHTML = document.querySelector(headSelector).innerHTML;
        document.getElementById("privChat").classList.remove("invisible");
        var alertSelector = "div#" + name + " span.chatAlert";
        document.querySelector(alertSelector).style.opacity = "0";
    }
    function closePChat() {
        document.getElementById("privChat").classList.add("invisible");
    }
    function startVid() {
        document.getElementById("vidChat").classList.remove("invisible");
    }
    function endVid() {
        document.getElementById("vidChat").classList.add("invisible");
    }
    function openDocPane(name) {
        document.getElementById("docPane").classList.remove("invisible");
        var alertSelector = "div#" + name + " span.docAlert";
        document.querySelector(alertSelector).style.animation = "none";
        document.querySelector(alertSelector).style.opacity = "0";
    }
    function closeDocPane() {
        document.getElementById("docPane").classList.add("invisible");
    }
    function greyOut(buttonId) {
        document.getElementById(buttonId).classList.add("greyed-out");
    }

    /* SOURCE https://www.w3schools.com/w3css/w3css_slideshow.asp */
    var slideIndex = 3;
    
    function plusDivs(n) {
        showDivs(slideIndex += n);
    }
    
    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) {slideIndex = 1} 
        if (n < 1) {slideIndex = x.length} ;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
        document.querySelector("p.img-title").innerHTML = x[slideIndex-1].title;
        console.log("showDivs is applying index: " + n);
    }
    /* END SOURCE */

    /* image handling in problem space */
    function enlargeImage(num) {
        document.querySelector("div.problem-set-img-enlarged").style.display = "table-cell";
        document.querySelector("div.problem-tiled-container").style.display = "none";
        showDivs(num);
        console.log(num);
    }
    function closeImgEnlarge() {
        document.querySelector("div.problem-set-img-enlarged").style.display = "none";
        document.querySelector("div.problem-tiled-container").style.display = "table-cell";
    }

    function displayModal() {
        document.getElementById('myModal').style.display = "block";
    }
    function closeEdit() {
        document.getElementById('myModal').style.display = "none";
    }
    function displayConnie() {
        document.getElementById('connie-modal').style.display = "block";
    }
    function closeConnie() {
        document.getElementById('connie-modal').style.display = "none";
    }
    function displaySam() {
        document.getElementById('sam-modal').style.display = "block";
    }
    function closeSam() {
        document.getElementById('sam-modal').style.display = "none";
    }

