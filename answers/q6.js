(function() {
    function isArray(array, callback) {
        var result = typeof(array) === "object" && (array instanceof Array);
        if (typeof callback !== 'undefined') {
            callback(result);
        }
        return result;
    }

    var result = isArray([
        "item1",
        "item2",
        "item3"
    ]);

    console.log("isArray: " + result);
    function callback(result) {
        console.log("In callback function, isArray: " + result);
    }
    isArray([
        "item1",
        "item2",
        "item3"
    ], callback);

})();

/*
In isArray function, you can add an argument for the callback function to pass in, 
if callback function is passed in, call the callback and pass the result
to the callback function;
if callback function is not passed in, just return the result.

*/