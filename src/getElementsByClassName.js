// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  let result = [];

  const searchNodes = (node) => {
    if (node.classList.contains(className)) {
      result.push(node)
    }
    Array.from(node.children).forEach(noder => searchNodes(noder))
  }
  searchNodes(document.body);

  return result;
};
