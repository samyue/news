(function() {
    var element,
        index,
        length,
        content = document.getElementById("content"),
        data = [{
            id: 1,
            name: "John",
            color: "green"
        }, {
            id: 2,
            name: "Sally",
            color: "pink"
        }, {
            id: 3,
            name: "Andrew",
            color: "blue"
        }, {
            id: 4,
            name: "Katie1",
            color: "purple"
        }];

    var cloned = content.cloneNode(true);

    for (index = 0, length = data.length; index < length; index++) {
        element = document.createElement("li");
        element.setAttribute("id", data[index].id);
        element.innerHTML = " < strong > " + data[index].name + " < /strong>";
        element.style.color = data[index].color;
        cloned.appendChild(element);
    }

    content.parentNode.replaceChild(cloned, content);

})();

/*
    The original code will trigger reflow or repaint multiple times in each loop.
    The code such as appendChild, set innerHTML and set color will
    all trigger repaint and reflow. 

    The solution is to use a cloned node of the cotent node, after modification is
    completed on the cloned node, we can swap the real node with the cloned node.
    Then all the changes are made to the live document's DOM in only one operation. 

*/