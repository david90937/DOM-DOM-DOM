let colors = ["indigo", "blue", "red", "green", "pink", "yellow", "orange", "gray"];
document = document.addEventListener("DOMContentLoaded", function(){
    let button = document.createElement('button');
    let btnText = document.createTextNode("Add square");
    let container = document.createElement("div");
    let div = document.createElement('div');
    let squareNum = 0;

    container.className = "container";
    div.className = "row";

    button.addEventListener("click", function() {
        squareNum += 1;
        let col = document.createElement('div');
        col.className = "col-4";
        col.style.background = "black";
        col.style.height = "3em";
        col.id = squareNum;
        let colText = document.createTextNode(col.id);

        col.addEventListener("mouseover", function(){
            col.appendChild(colText);
            col.style.color = "white";
            col.className = "col-4 text-center";
        })
        col.addEventListener("mouseout", function() {
            colText.remove();
        })
        col.addEventListener("dblclick", function(){
            if ((event.target.id % 2) == 0) {
                let beingRemoved = document.getElementById(event.target.id).nextSibling;
                if (beingRemoved == null) {
                    alert("There is no valid square to remove");
                }
                else {
                    beingRemoved.remove();
                }
            }
            if ((event.target.id % 2) != 0) {
                    let beingRemoved = document.getElementById(event.target.id).previousSibling;
                    if (beingRemoved == null) {
                        alert("There is no valid square to remove");
                    }
                    else {
                        beingRemoved.remove();
                    }
                }
        })
        col.addEventListener("click", getRandom)
        div.appendChild(col);
    })
    
    button.appendChild(btnText);
    container.appendChild(button);
    container.appendChild(div);
    document.body.appendChild(container);
})

function getRandom(event){
    let min = Math.ceil(0);
    let max = Math.floor(colors.length);
    let randomColor = Math.floor(Math.random() * (max - min) + min);
    event.target.style.color = colors[randomColor];
 }