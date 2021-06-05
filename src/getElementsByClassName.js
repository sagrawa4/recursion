// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here

  //console.log(document.body);

  //console.log(document.body.classList);
  //DOMTokenList ["targetClassName", value: "targetClassName"]

  //console.log(document.body.children);
  //HTMLCollection(2) [div#mocha, div.targetClassName, mocha: div#mocha]

  //console.log(document.body.childNodes);
   //NodeList(4) [text, div#mocha, text, div.targetClassName]

   //console.log(document.body.classList);
  //console.log(document.body.childNodes[1]);
  // //NodeList(4) [text, div#mocha, text, div.targetClassName]
  //console.log(document.body.childNodes[3]);

  //console.log(document.body.children[1].className);

  var resultArr = [];
  resultArr.push(document.body);

for(var i=0; i<document.body.children.length;i++) {
      if(document.body.children[i].className) {
        resultArr.push(document.body.children[i]);
      } else {
      for(var j=0; j< document.body.children[i].children.length; j++) {
          if(document.body.children[i].children[j].className) {
            resultArr.push(document.body.children[i].children[j]);
        }
      }
  }
}

return resultArr;

};
