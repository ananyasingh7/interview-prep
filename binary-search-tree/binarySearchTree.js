const TreeNode = require('./treeNode');

class BinarySearchTree{

    constructor(){
        this.root = null;
        this.size = 0;
    }

    insert(item){
        let node = new TreeNode(item);

        if(this.root == null){
            this.root = node;
            this.size++;
            return;
        }

        let prev = null;
        let curr = this.root;

        while(curr){
            prev = curr;
            if(node.item > curr.item){
                curr = curr.rightNode;
            }else{
                curr = curr.leftNode;
            }
        }

        if(node.item > prev.item){
            prev.rightNode = node;
            this.size++;
        }else{
            prev.leftNode = node;
            this.size++;
        }
    }

    search(item){
        let curr = this.root;
        while(curr){
            if(curr.item == item){
                return true;
            }
            if(item > curr.item){
                curr = curr.rightNode;
            }else{
                curr = curr.leftNode;
            }
        }
        return false;
    }



}

module.exports = BinarySearchTree;