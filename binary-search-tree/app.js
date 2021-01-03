const Node = require('./Node');
const BinarySearchTree = require('./binarySearchTree');


let testFunction = (countArr, nameOfFunction, callback) => {
    countArr[1]++;
    let passBoolean = 'FALSE ';
    let errorMessage = null;
    try{
        if(callback()){
            passBoolean = 'TRUE ';
            countArr[0]++;
        }
    }catch(e){
        errorMessage = e;
    }
    console.log((countArr[1] + ':  ') + passBoolean + ' : ' + nameOfFunction);
    if(errorMessage){
        console.log(' ' + errorMessage + '\n');
    }
};

//------------------------------------------------------------------------------
console.log('Node Class');
let totalCount = [0, 0];

testFunction(totalCount, 'able to create an instance', () => {
  let node = new Node();
  return typeof node === 'object';
});

testFunction(totalCount, 'has item property', () => {
  let node = new Node();
  return node.hasOwnProperty('item');
});

testFunction(totalCount, 'has leftNode property', () => {
  let node = new Node();
  return node.hasOwnProperty('leftNode');
});

testFunction(totalCount, 'has rightNode property', () => {
  let node = new Node();
  return node.hasOwnProperty('rightNode');
});

testFunction(totalCount, 'has default item set to null', () => {
  let node = new Node();
  return node.item === null;
});

testFunction(totalCount, 'able to assign a item upon instantiation', () => {
  let node = new Node(5);
  return node.item === 5;
});

testFunction(totalCount, 'able to reassign a item', () => {
  let node = new Node();
  node.item = 5;
  return node.item === 5;
});

testFunction(totalCount, 'able to point to leftNode child node', () => {
  let node1 = new Node(5);
  let node2 = new Node(10);
  node1.leftNode = node2;
  return node1.leftNode.item === 10;
});

testFunction(totalCount, 'able to point to rightNode child node', () => {
  let node1 = new Node(5);
  let node2 = new Node(10);
  node1.rightNode = node2;
  return node1.rightNode.item === 10;
});

console.log('PASSED: ' + totalCount[0] + ' / ' + totalCount[1], '\n\n');


console.log('Binary Search Tree Class');
totalCount = [0, 0];

testFunction(totalCount, 'able to create an instance', () => {
  let bst = new BinarySearchTree();
  return typeof bst === 'object';
});

testFunction(totalCount, 'has root property', () => {
  let bst = new BinarySearchTree();
  return bst.hasOwnProperty('root');
});

testFunction(totalCount, 'has size property', () => {
  let bst = new BinarySearchTree();
  return bst.hasOwnProperty('size');
});

testFunction(totalCount, 'default root set to null', () => {
  let bst = new BinarySearchTree();
  return bst.root === null;
});

testFunction(totalCount, 'default size set to zero', () => {
  let bst = new BinarySearchTree();
  return bst.size === 0;
});

console.log('PASSED: ' + totalCount[0] + ' / ' + totalCount[1], '\n\n');


console.log('BinarySearchTree Insert Method');
totalCount = [0, 0];

testFunction(totalCount, 'has insert method', () => {
  let bst = new BinarySearchTree();
  return Object.prototype.toString.apply(bst.insert) === '[object Function]';
});

testFunction(totalCount, 'able to insert a node into empty binary search tree', () => {
  let bst = new BinarySearchTree();
  bst.insert(5);
  return bst.size === 1 && bst.root.item === 5;
});

testFunction(totalCount, 'able to insert node to leftNode of root node', () => {
  let bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(3);
  return bst.size === 2 && bst.root.item === 5 && bst.root.leftNode.item === 3;
});

testFunction(totalCount, 'able to insert node to rightNode of node leftNode of root node', () => {
  let bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(3);
  bst.insert(4);
  return bst.size === 3 && bst.root.item === 5 && bst.root.leftNode.item === 3 &&
    bst.root.leftNode.rightNode.item === 4;
});

testFunction(totalCount, 'able to insert node to rightNode of root node', () => {
  let bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(8);
  return bst.size === 2 && bst.root.item === 5 && bst.root.rightNode.item === 8;
});

testFunction(totalCount, 'able to insert node to leftNode of node rightNode of root node', () => {
  let bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(8);
  bst.insert(7);
  return bst.size === 3 && bst.root.item === 5 && bst.root.rightNode.item === 8 &&
    bst.root.rightNode.leftNode.item === 7;
});

console.log('PASSED: ' + totalCount[0] + ' / ' + totalCount[1], '\n\n');


console.log('BinarySearchTree Search Method');
totalCount = [0, 0];

testFunction(totalCount, 'has search method', () => {
  let bst = new BinarySearchTree();
  return Object.prototype.toString.apply(bst.search) === '[object Function]';
});

testFunction(totalCount, 'returns true when element exists in binary search tree', () => {
  let bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(3);
  bst.insert(8);
  bst.insert(4);
  bst.insert(7);
  return bst.search(4) === true;
});

testFunction(totalCount, 'returns false when element does not exist in binary search tree', () => {
  let bst = new BinarySearchTree();
  bst.insert(5);
  bst.insert(3);
  bst.insert(8);
  bst.insert(4);
  bst.insert(7);
  return bst.search(10) === false;
});

console.log('PASSED: ' + totalCount[0] + ' / ' + totalCount[1], '\n\n');


