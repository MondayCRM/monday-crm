goTo = function(url){
  Router.go(url);
};



// http://stackoverflow.com/questions/2631001/javascript-test-for-existence-of-nested-object-key
checkNested = function(obj /*, level1, level2, ... levelN*/) {
  var args = Array.prototype.slice.call(arguments),
      obj = args.shift();

  for (var i = 0; i < args.length; i++) {
    if (!obj.hasOwnProperty(args[i])) {
      return false;
    }
    obj = obj[args[i]];
  }
  return true;
};