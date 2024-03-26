function evenOdd(array)
{
    for(let i=0;i<=array.length;i++)
    {
        if(array[i]%2==0)
        {
            console.log(array[i]+" is even");
        }
        else
        {
            console.log(array[i]+" is odd");
        }
    }
}
let arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
evenOdd(arr);