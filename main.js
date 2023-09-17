document.addEventListener("DOMContentLoaded", ()=>{
    const inputContainer = document.getElementsByClassName("players")[0]
    ,     createRowButton = document.getElementById("addRow");

    createRowButton.addEventListener("click", createInputRow);
    
    inputContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete")) {
            removeInputRow(event.target.parentElement);
        }
    });
    function removeInputRow(row) {
        inputContainer.removeChild(row);
    }

    function createInputRow() {
        const inputRow = document.createElement("section");
        inputRow.className = "player";
        inputRow.innerHTML = `
        <input type="text" id="name" placeholder="Name">
                    <input type="text" id="current" placeholder="Current">
                    <input type="text" id="maximum" placeholder="Max">
                    <input type="text" id="temp" placeholder="Temp">
                    <button class="delete">X</button>
                    `;
        inputContainer.appendChild(inputRow);
    }
});