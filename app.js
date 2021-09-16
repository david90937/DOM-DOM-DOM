let colors = ["indigo", "blue", "red", "green", "pink", "yellow", "orange", "gray"];
document = document.addEventListener("DOMContentLoaded", function(){
    let button = document.createElement('button');
    let btnText = document.createTextNode("Add square");
    let container = document.createElement("div");
    let div = document.createElement('div');
    let squareNum = 0;
    let divIds = [];
    let numClicks = 0;

    container.className = "container";
    div.className = "row";

    button.addEventListener("click", function() {
        squareNum += 1;
        let col = document.createElement('div');
        col.className = "col-4";
        col.style.background = "black";
        col.style.height = "3em";
        col.id = squareNum;
        divIds.push(parseInt(col.id, 10));
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
            let cellArray = document.getElementsByClassName("col-4");
            let idArray = [];
            for (let i = 0; i < cellArray.length; i++) {
                idArray.push(parseInt(cellArray[i].id, 10));
                console.log(idArray)
            }
            if ((event.target.id % 2) == 0) {
                let beingRemoved = document.getElementById(idArray[event.target.id]);
                if (beingRemoved == null) {
                    alert("There is no valid square to remove");
                }
                else {
                    beingRemoved.remove();
                }
            }
            if ((event.target.id % 2) != 0) {
                let beingRemoved = document.getElementById(idArray[(event.target.id - 0)]);
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



//  col.addEventListener("dblclick", function(){
//     let beingRemoved = [];
//     if ((event.target.id % 2) == 0) {
//         for (let i = 0; i < divIds.length; i++) {
//             if (divIds[i] > col.id){
//                 beingRemoved.push(divIds[i]);
//             }
//         }
//         for (let x = 0; x < beingRemoved.length; x++) {
//             let removedElement = document.getElementById(beingRemoved[x]);
//             if (removedElement != null){
//                 removedElement.remove();
//             }
//             else if (removedElement == null) {
//                 alert("There is no valid square to remove");
//                 return;
//             }
//         }
//         if (beingRemoved != "") {
//             beingRemoved.shift();
//         }
//     }
// })

// if ((event.target.id % 2) == 0) {
//     let beingRemoved = document.getElementById((divIds[event.target.id] + numClicks));
//     numClicks += 1;
//     if (beingRemoved == null) {
//         alert("There is no valid square to remove");
//         numClicks = 0;
//     }
//     else {
//         beingRemoved.remove();
//     }
// }

// else if ((event.target.id % 2) != 0) {
//     numClicks = 1;
//     let beingRemoved = document.getElementById((divIds[event.target.id -1] - numClicks));
//     numClicks += 1;
//     if (beingRemoved == null) {
//         alert("There is no valid square to remove");
//         numClicks = 0;
//     }
//     else {
//         beingRemoved.remove();
//     }
// }