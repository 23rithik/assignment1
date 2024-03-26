function sumSqr(array)
{
    let sqr=0;
    let sum=0;
    for(let i=0;i<array.length;i++)
    {
        sqr=array[i]*array[i];
        sum=sum+sqr;
        
    }
    console.log("Sum of square is:"+sum);
    
}
let arr=[2,4,5,2];
sumSqr(arr);