(function() {
    var boxes = [
        document.getElementById("box1"),
        document.getElementById("box2"),
        document.getElementById("box3")
    ];
    var counter = 0;

    boxes[0].addEventListener("mousemove", function(event) {
        counter++;
        console.log("Box 1: counter: " + counter);
        event.stopPropagation();
    });

    boxes[1].addEventListener("mousemove", function(event) {
        console.log("Box 2");
        event.stopPropagation();
    });
    boxes[2].addEventListener("mousemove", function(event) {
        console.log("Box 3");
        event.stopPropagation();
    });
})();

/*
Stop event bubbling up by using event.stopPropagation();

*/