(function () {

  'use strict';

  var x = 17;
  with (obj) { // !!! syntax error
    // If this were not strict mode, would this be var x, or
    // would it instead be obj.x?  It is impossible in general
    // to say without running the code, so the name can not be
    // optimized.
    x;
  }

})();