    function changeMenu(name) {
        closePChat();
        endVid();
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
            var headSelector = "div.heads#" + name + " span";
            document.querySelector("#PersonMenu p").innerHTML = document.querySelector(headSelector).innerHTML + " is online.";
        }
        /* grey-out the doc button if user has not submitted */
        if (!document.querySelector(imgSelector).classList.contains("submitted")) {
            greyOut("docButton");
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
    function greyOut(buttonId) {
        document.getElementById(buttonId).classList.add("greyed-out");
    }

