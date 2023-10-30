// node factory here
function createNode(value = null, nextNode = null) {
  const node = {};

  node.value = value;
  node.nextNode = nextNode;

  return node;
}

console.log(createNode(200, "node2"));
