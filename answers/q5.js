(function() {

    var array = [
        function(callback) {
            setTimeout(function(){
                console.log("first function called in " + (new Date().getTime() - timestamp) + "ms");
                callback();
            }, 300);
        },
        function(callback) {
            setTimeout(function(){
                console.log("second function called in " + (new Date().getTime() - timestamp) + "ms");
                callback();
            },100); 
        },
        function(callback) {
            setTimeout(function() {
                console.log("third function called in " + (new Date().getTime() - timestamp) + "ms");
                callback();
            }, 200);
        }
    ],
        timestamp = new Date().getTime();

    function flow(array, callback) {
        var count = 0;
        function done() {
            count++;
            if (count == array.length) {
                callback();
            }
        }
        array.forEach(function(item){
            item(done);
        });

    }

    flow(array, function() {
        console.log("all functions finished in " + (new Date().getTime() - timestamp) + "ms");
    });

})();

/*
A callback function done() is used to calulate how many functions have finished,
and if the counter equals to the length of the function array, that means
all tasks are done. For testing purpose in this demo, I added setTimeout 
to the code to make all the functions asynchronous.

*/