(function () {

  "use strict"; 
  var objX = {}, 
  objY = {get x() {return 0} };

  Object.defineProperty(objX, "x", {
    value:0, writable:false
  });

  objX.x = 3.14; // This will cause an error

  objY.x = 3.14; // This will cause an error

})();