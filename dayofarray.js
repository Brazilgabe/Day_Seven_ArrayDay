var highestNumber = function(anArray){
  var max = anArray[0];
  anArray.forEach(function(element){
    if (element > max){
      max = element;
    }
  })
  return max;
}

var lowestNumber = function(anArray){
  var min = anArray[0];
  anArray.forEach(function(element){
    if (element < min){
      min = element;
    }
  })
  return min;
}

var smallestNumber = function(anArray){
  var distance = Math.abs(anArray[0]);
  anArray.forEach(function(element){
    if (Math.abs(element) < distance){
      distance = Math.abs(element);
    }
  })
  return distance;
}

var sum = function(anArray){
  var sum = 0;
  anArray.forEach(function(element){
    sum = sum + element;
    console.log(sum);
    })
}

var a = [1,2,3,4,5,6,7,8,9,0,-15]
var sum = ;


var whileSum = function(anArray){
  var sum = 0;
  var index = 0;
  var length = anArray.length;
  // console.log("sum is " + sum);
  // console.log("index is " + index);
  // console.log(" ");
  while (index < length){
    sum = sum + anArray[index];
    index = index + 1;
    // console.log("sum is " + sum);
    // console.log("index is " + index);
    // console.log(" ");
  }
  return sum;
}
var sum = 0
for (var index = 0; index < anArray.length; index++){
  sum = sum +
}

var array = [1, 2, 3, 4];
for (var index = 0; index < 4; index++){
  sum = sum + array[index];
}

x = 1;
y = 2;

var add = function(a, b){
  return a + b;
}

add(x,y);


var highestNumber = function(array){
  var high = 0;
  array.forEach(function(values){
    if (values>high)
      high = values
  })
  return(values)
}

var mean = function(array){
  var sum = 0;
  array.forEach(function(item){
    sum = sum + item;
    console.log(sum)
  })
  return(sum / array.length);
}

var hiIndex = function(array){
  var index = 0;
  var highestIndex = 0;
  array.forEach(function(element){
    if (array[index] > array[highestIndex]){
      highestIndex = index;
    }
    index++;
  });
  return(highestIndex);
}

var hiIndex = function(array){
  var highestIndex = 0;
  for (var i = 0; i < array.length; i++)
    if (array[i] > array[highestIndex]){
      highestIndex = i;
    }
  });
  return(highestIndex);
}


var sibling = ["Bob","Mike","John","Tim"]
var parents = ["Beth","Eduardo","Roy","Valerie"]


var isInArray = function(array, string){
  return array.lastIndexOf(string) >= 0;
}


var evenElements = function(array){
  var newArray = [];
  array.forEach(function(element){
    if (element % 2 != 0){
      newArray.push(element);
    }
  })
  return(newArray);
}

var double = function(x){
  console.log("double called");
  return 2 * x;
}

var mapArray = function(array, funct) {
  var returnArray = [];
  array.forEach(function(element){
    returnArray.push(funct(element));
    console.log(returnArray);
  });
  return returnArray;
}

var filter = function(x){
  return x > 10;
}

var filterArray = function(array, funct){
  var newArray = [];
  array.forEach(function(element){
    if (funct(element)){
      newArray.push(element);
    }
  });
  return newArray;
}

var i = 0
while (i<10)
