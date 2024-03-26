function checkPrimeOrNot(array)
{
    let f=0;
    let first=array[0];
    for(let i=2;i<=Math.sqrt(first);i++)
    {
        if(first%i==0)
        {
            f=1;
        }
    }
    if(first<=1)
    {
        console.log("The first element is not prime");
    }
    else if(f==1)
    {
        console.log("The first element is not prime");
    }
    else
    {
        console.log("The first element is prime");
    }
}

let arr = [128, 7, 11, 13, 17];
checkPrimeOrNot(arr);