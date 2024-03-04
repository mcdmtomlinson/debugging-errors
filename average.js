function average(list){
    var sum = 0;
    for (var num of list) {
      sum += num/list.length;
    }
    return sum;
  };
  
console.log(average([3, 5, 7]));