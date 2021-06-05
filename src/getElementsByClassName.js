// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var resultArr = [];
  var element = document.body;
  var innerfunction = function(element) {
   if (element.classList.contains(className)){
      resultArr.push(element);
    }
    if (element.children){
      for (var i = 0; i < element.children.length; i++){
        innerfunction(element.children[i]);
      }
    }
  };
  innerfunction(element);
  return resultArr;
};
