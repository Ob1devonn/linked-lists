// node factory here
export default function createNode(value, nextNode) {
  const node = {};

  node.value = value || null;
  node.nextNode = nextNode || null;

  return node;
}

console.log(createNode(200, "node2"));
