import { BinaryTree } from "./Tree";
let bt : BinaryTree
bt = new BinaryTree()
bt.add(6)
bt.add(4)
bt.add(8)
bt.add(3)
bt.add(5)
bt.add(7)
bt.add(9)

console.info("Traversal In-Order")
bt.travereInOrder(bt.root)

console.info("Traversal Pre-Order")
bt.traverePreOrder(bt.root)

console.info("Traversal Post-Order")
bt.traverePostOrder(bt.root)
