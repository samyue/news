(function() {
    NodeList.prototype.show = function() {
        var array = Array.prototype.slice.call(this, 0);

        array.forEach(function(node) {
            setTimeout(function(node){
                node.style.display = "block";
                
            }.bind(null, node), 1000);
        });
        return this;
    };

    NodeList.prototype.hide = function() {
        var array = Array.prototype.slice.call(this, 0);
        array.forEach(function(node) {
            setTimeout(function(node){
                node.style.display = "none";

            }.bind(null, node), 2000);
        });
        return this;
    };

    document.querySelectorAll("#test").show().hide();

})();

/*
    Make these two function to return this object, then these 
    two functions become chainable.
*/