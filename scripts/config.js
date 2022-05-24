function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // +"1" => 1
    playerConfigOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
}

function closeplayerConfig() {
    playerConfigOverlayElement.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent = "";
    formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get("playername").trim(); // trim will get rid of white space, unless it is between characters

    if (!enteredPlayerName) { // enteredPlayerName === ""
        event.target.firstElementChild.classList.add("error");
        errorsOutputElement.textContent = "Please enter a valid name!";
        return;
    }

    const updatedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data");
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;

    closeplayerConfig();
}