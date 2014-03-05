(function() {
    window.onload = function() {
        document.getElementById("test").innerHTML = "Hello World";
    };
})();


/*
The JavaScript code should be wrapped into a function and the function should 
be assigned to the window.onload event handler. The event handler will fire the code,
after all of the objects in the document are in the DOM, and all the images
and subframes have been loaded.

The second way is to use jQuery $(document).ready() if jQuery can be used
in the page. The jQuery ready event will occurs after DOM is loaded 
instead of complete page is loaded, so jQuery ready event will occur earlier
than window.onload event.

*/