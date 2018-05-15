    function changeMenu(name) {
        var menuElm = document.getElementById("PersonMenu");
        var menuString = menuElm.innerHTML;
        menuString = menuString.replace(new RegExp("Person.", "g"), name);
        menuElm.innerHTML = menuString;
        menuElm.className = "left-pane action-pane bg-dark slides";
        var newone = menuElm.cloneNode(true);
        menuElm.parentNode.replaceChild(newone, menuElm);
    }
    function closePMenu() {
        document.getElementById("PersonMenu").className = "left-pane action-pane bg-dark invisible";
    }
    function startVid() {
        var vidElm = document.getElementById("vidChat");
        vidElm.className = "left-pane action-pane bg-dark";
    }
    function endVid() {
        document.getElementById("vidChat").className = "left-pane action-pane bg-dark invisible";
    }
