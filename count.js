function count_elements(array) 
{
    let count = 1;
    let max_count = 1;
    let element;
    for (let i = 0; i < array.length; i++) {
        count = 1; 
        for (let j = i + 1; j < array.length; j++) 
        { 
            if (array[i] == array[j]) 
            {
                count++;
            }
        }
        if (count > max_count) 
        {
            max_count = count;
            element = array[i];
        }
    }
    console.log("Most frequent element is: " + element);
}

let arr = [2,4,1,2,1,1];
count_elements(arr);
