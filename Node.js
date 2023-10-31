// node factory here
function createNode(value, nextNode) {
  const node = {};

  node.value = value || null;
  node.nextNode = nextNode || null;

  return node;
}

export default createNode;
