const toDo = document.getElementById("inputfield");

// add event when 'Enter' is pressed
toDo.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addItem();// add input value on array
    }
});

let itemListToDo = []; //array that store 해야 할 일
let itemListComplete = []; //array that store 해낸 일

//function that add input value on array 'itemListToDo'
function addItem() {
    console.log("addItem");
    var item = toDo.value;
    if (item != "") {  //check input is empty
        itemListToDo.push(item);
        toDo.value = "";
        showItemToDo()
    }

}

//function that show list on 해야 할 일
function showItemToDo() {
    console.log("showItemToDo");
    let list = "<ul>";
    for (var i = 0; i < itemListToDo.length; i++) {
        list += "<li>" + itemListToDo[i] + "<button class='complete' id=" + i + ">완료</button>" + "</li>";
    }
    list += "</ul>";
    document.querySelector("#ToDo").innerHTML = list;

    //asign event on '완료'button
    var complete = document.querySelectorAll(".complete");
    for (var j = 0; j < complete.length; j++) {
        complete[j].addEventListener("click", moveItem);
    }
}

//function that move item todo to complete
function moveItem() {
    console.log("moveItem");
    let completeListID = this.getAttribute("id");
    itemListComplete.push(itemListToDo[completeListID]);
    itemListToDo.splice(completeListID, 1);//delete '완료'
    showItemToDo()//arrange 해야 할 일 list
    showItemComplete()
}

//funtion that show list on 해낸 일
function showItemComplete() {
    console.log("showItemComplete");
    let list = "<ul>";
    for (var i = 0; i < itemListComplete.length; i++) {
        list += "<li>" + itemListComplete[i] + "<button class='remove' id=" + i + ">삭제</button>" + "</li>";
    }
    list += "</ul>";
    document.querySelector("#finished").innerHTML = list;

    var remove = document.querySelectorAll(".remove");
    //add new event on '삭제'button
    for (var j = 0; j < remove.length; j++) {
        remove[j].addEventListener("click", removeItem);
    }
}

//function that remove items on 해낸 일 list
function removeItem() {
    console.log("removeItem");
    let removeID = this.getAttribute("id");
    itemListComplete.splice(removeID, 1);
    showItemComplete()
}

