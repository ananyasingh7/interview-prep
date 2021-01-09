const Node = require('./Node');

class BinarySearchTree{

    constructor(){
        this.root = null;
        this.size = 0;
    }

    insert(item){
        let node = new Node(item);

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

    delete(item){
        let prev = null;
        let curr = this.root;
        while(curr.item !== item){
            if(curr == null){
                return;
            }
            prev = curr;
            if(item > curr.item){
                curr = curr.rightNode;
            }else{
                curr = curr.leftNode;
            }
        }
        //console.log(prev.item);
        //console.log(curr.item);
        //node deleted is a leaf
        if(!curr.rightNode && !curr.leftNode){
            if(this.root == curr){
                this.root = null;
                return;
            }

            if(prev.leftNode == curr){
                prev.leftNode = null;
                return;
            }else{
                prev.rightNode = null;
                return;
            }
        }
        //node deleted has one child
        if((!curr.rightNode && curr.leftNode) || (curr.rightNode && !curr.leftNode)){
            if(curr == this.root){
                if(curr.rightNode){
                    this.root = this.root.rightNode;
                }
                if(curr.leftNode){
                    this.root = this.root.leftNode;
                }
                return;
            }
            if(curr.leftNode){
                if(prev.rightNode == curr){
                    prev.rightNode = curr.leftNode;
                }else if(prev.leftNode == curr){
                    prev.leftNode = curr.leftNode;
                }
            }
            if(curr.rightNode){
                if(prev.leftNode == curr){
                    prev.leftNode = curr.rightNode;
                }else if(prev.rightNode == curr){
                    prev.rightNode = curr.rightNode;
                }
            }
        }
        //node has two children
        if(curr.rightNode && curr.leftNode){
            if(curr == this.root && this.root.leftNode.rightNode){
                prev = curr;
                curr = this.root.leftNode;
                while(curr.rightNode){
                    prev = curr;
                    curr = curr.rightNode;
                }
                if(curr.leftNode){
                    prev.rightNode = curr.leftNode;
                }else{
                    prev.rightNode = null;
                }
                curr.rightNode = this.root.rightNode;
                curr.leftNode = this.root.leftNode;
                this.root = curr;
            }else if(curr == this.root && !this.root.leftNode.rightNode){
                curr = this.root.leftNode;
                curr.rightNode = this.root.rightNode;
                this.root = curr;
            }else{
                if(!curr.leftNode.leftNode && !curr.leftNode.rightNode && !curr.rightNode.leftNode && !curr.rightNode.rightNode){
                    if(prev.leftNode == curr){
                        curr.leftNode.rightNode = curr.rightNode;
                        prev.leftNode =  curr.leftNode;
                    }else if(prev.rightNode == curr){
                        curr.leftNode.rightNode = curr.rightNode;
                        prev.rightNode = curr.leftNode;
                    }
                }else{
                    if(prev.leftNode == curr && !curr.leftNode.rightNode){
                        prev.leftNode = curr.leftNode;
                        curr.leftNode.rightNode = curr.rightNode;
                    }else if(prev.rightNode == curr && !curr.leftNode.rightNode){
                        prev.rightNode = curr.leftNode;
                        curr.leftNode.rightNode = curr.rightNode;
                    }else{
                        let deepPrev;
                        let deep = curr.leftNode;
                        while(deep.rightNode){
                            deepPrev = deep;
                            deep = deep.rightNode;
                        }
                        deep.rightNode = curr.rightNode;
                        deep.leftNode = curr.leftNode;
                        deepPrev.rightNode = null;
                        if(prev.leftNode == curr){
                            prev.leftNode = deep;
                        }else{
                            prev.rightNode = deep;
                        }
                    }
                }
            }
        }
        
    }

    checkTree(){
        if(this.root){
            console.log(this.root);
        }
        if(this.root.leftNode){
            console.log(this.root.leftNode);
        }
        if(this.root.rightNode){
            console.log(this.root.rightNode);
        }
        /*
        if(this.root.leftNode.leftNode){
            console.log(this.root.leftNode.leftNode);
        }
        if(this.root.leftNode.rightNode){
            console.log(this.root.leftNode.rightNode);
        }
        */
    }



}

module.exports = BinarySearchTree;