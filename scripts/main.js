(function(exports) {
  "use strict";
 
  function Cow(name) {
    this.name = name || "Anon cow";
  }
  exports.Cow = Cow;
 
  Cow.prototype = {
    greets: function(target) {
      if (!target)
        return console.error("missing target");
      console.log(this.name + " greets " + target);
    }
  };
})(this);