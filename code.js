
function binarySearch(list, element) {
  //console.log(list);

  let first = 0;
  let last = list.length - 1;
  
  

  while (first <= last) 
  {
    let middle = Math.floor((first + last) / 2);//this is the key line that fixed my initial code, for future me, multiple sources say this is the simplest fix.
    //console.log(middle);
    if (list[middle] == element)
    {
      let index;
      //console.log("found element at index:", middle);
      index = middle;
      return index;
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

