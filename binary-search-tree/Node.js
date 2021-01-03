class Node{

    constructor(item){
        if(item){
            this.item = item;
        }else{
            this.item = null;
        }
        this.leftNode = null;
        this.rightNode = null;
    }


}

module.exports = Node;