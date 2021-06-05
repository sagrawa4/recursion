var getElementsByClassName = function(className) {
  var resultArr = [];
  var element = document.body;
  var innerfunction = function(element) {
    if (element.classList.contains(className)) {
      resultArr.push(element);
    }
    if (element.children) {
      for (var i = 0; i < element.children.length; i++) {
        innerfunction(element.children[i]);
      }
    }
  };
  innerfunction(element);
  return resultArr;
};
