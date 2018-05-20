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
        /* if Sam or Alice, add their posts to the doc pane */
        if (name === "Person2") {
            document.getElementById("docPaneContainer").innerHTML = '<button class="btn post-card" onclick="displaySam()">Post 1 - 14 May 2018, 16:02</button>';
        } else if (name === "Person5") {
            document.getElementById("docPaneContainer").innerHTML = '<button class="btn post-card" onclick="displayAlice()">Post 1 - 14 May 2018, 17:38</button>';
        }
        
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
    }
    function closeImgEnlarge() {
        document.querySelector("div.problem-set-img-enlarged").style.display = "none";
        document.querySelector("div.problem-tiled-container").style.display = "table-cell";
    }

    function displayModal() {
        document.getElementById('myModal').style.display = "block";
    }
    function post() {
        closePopup();
        document.getElementById('myModal').style.display = "none";
        var date = new Date();
        var months = ["January", "February", "March", "April", "May", "June", 
                    "July", "August", "September", "October", "November", "December"];
        var newDocLabel = "Post 1 - " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() 
                        + ", " + date.getHours() + ":" + date.getMinutes();
        document.querySelector("button.draft-card").innerHTML = newDocLabel; 
        document.querySelector("button.draft-card").onclick = displayConnie;
        document.querySelector("button.draft-card").classList.remove("draft-card");
        document.querySelector("button.main-edit").innerHTML = "Edit my latest post";
        var newFeedCard = '<button class="btn post-card" onclick="displayConnie()">You posted a solution. Click to view.</button>';
        document.querySelector("div.right-pane").innerHTML = document.querySelector("div.right-pane").innerHTML + newFeedCard;
    }
    function displayConnie() {
        document.getElementById('connie-modal').style.display = "block";
    }
    function displaySam() {
        document.getElementById('sam-modal').style.display = "block";
    }
    function displayAlice() {
        document.getElementById('alice-modal').style.display = "block";
    }
    function displayImg(num) {
        var modalSelector = 'img' + num + '-modal';
        document.getElementById(modalSelector).style.display = "block";
    }
    function closeModal() {
        var x = document.getElementsByClassName("modal");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
    }
    function confirmPost() {
        document.getElementById('confirm-post-modal').style.display = "block";
    }
    function confirmDiscard() {
        document.getElementById('confirm-discard-modal').style.display = "block";
    }
    function closePopup() {
        document.getElementById('confirm-post-modal').style.display = "none";
        document.getElementById('confirm-discard-modal').style.display = "none";
    }

