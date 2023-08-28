function RepeatedWord (string)
{
    let arr= string.split(" ");
    let RepeatedWord = {};
    
    for(let i=0;i<arr.length;i++)
    {
        if(! RepeatedWord[arr[i]])
        {
            RepeatedWord[arr[i]] =1;
           // console.log(RepeatedWord);
        }
        else
        //console.log(RepeatedWord);
        return arr[i];
    }
    return null;
}

module.exports = RepeatedWord;

