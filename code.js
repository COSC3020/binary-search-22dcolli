list = [11, 12, 13, 14, 15, 16, 17, 18,22,24,55,251,777];
element = 22;
function binarySearch(list, element) 
{
  //console.log(list);

  let first = 0;
  let last = list.length - 1;
  

  while (first <= last) 
  {
    let middle = Math.floor((first + last) / 2);//this is the key line that fixed my initial code, for future me, multiple sources say this is the simplest fix.
    //console.log(middle);
    if (list[middle] == element)
    {
      //console.log("found element at index:", middle);
      return middle;
    } 
    else 
    {
      if (element < list[middle]) 
      {
        //console.log("its to the left");
        last = middle - 1;
      } 
      else 
      {
        //console.log("its to the right");
        first = middle + 1;
      }
    }
  }
  return -1; // element not found
}
result = binarySearch(list, element);
console.log(result);
