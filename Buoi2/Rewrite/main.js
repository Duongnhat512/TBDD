//filter, any, some, map, reduce, find

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// filter


var cbfn = function(value){
    return value > 5;
}
// const newArr = arr.filter(cbfn);

// console.log(newArr);

Array.prototype.myFilter = function(cb){
    var newArr = [];
    for(var i = 0; i < this.length; i++){
        if(cb(this[i])){
            newArr.push(this[i]);
        }
    }
    return newArr;
};

console.log(arr.myFilter(cbfn));



// some

// Kiểm tra có phần tử nào lớn hơn 5 không
var cbfn = function(value){
    return value > 5;
};

// console.log(arr.some(cbfn));

Array.prototype.mySome = function(cb){
    for(var i = 0; i < this.length; i++){
        if(cb(this[i])){
            return true;
        }
    }
    return false;
}

console.log(arr.mySome(cbfn));


// map

// Trả về mảng có giá trị gấp đôi
var cbfn = function(value){
    return value * 2;
};
// const newArr = arr.map(cbfn);
// console.log(newArr);

Array.prototype.myMap = function(cb){
    var newArr = [];
    for(var i = 0; i < this.length; i++){
        newArr.push(cb(this[i]));
    }
    return newArr;
};

console.log(arr.myMap(cbfn));

// reduce

// Tính tổng các phần tử trong mảng
var cbfn = function(accumulator, currentValue){
    return accumulator + currentValue;
};

// console.log(arr.reduce(cbfn, 0));

Array.prototype.myReduce = function(){
    var acc = 0;
    for(var i = 0; i < this.length; i++){
        acc = cbfn(acc, this[i]);
    }
    return acc;
}

console.log(arr.myReduce(cbfn, 0));

// find

// Tìm phần tử đầu tiên lớn hơn 5
var cbfn = function(value){
    return value > 5;
};

// console.log(arr.find(cbfn));

Array.prototype.myFind = function(cb){
    for(var i = 0; i < this.length; i++){
        if(cb(this[i])){
            return this[i];
        }
    }
    return undefined;
}

console.log(arr.myFind(cbfn));