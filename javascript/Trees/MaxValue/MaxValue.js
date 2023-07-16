class BinaryTree
{
    constructor()
    {
        this.root=null;
    }

    MaxValue()
    {
        if(!this.root)
        {
            return null;
        }

        function FindMaxValue(node,maxValue)   
        {
            if(!node)
            {
                return maxValue;
            }
            maxValue=Math.max(node.value,maxValue);

            maxValue=FindMaxValue(node.left,maxValue);
            maxValue=FindMaxValue(node.right,maxValue);
            return maxValue;
        }
        return FindMaxValue(this.root,this.root.value);
        
     }
     
}

module.exports = BinaryTree;