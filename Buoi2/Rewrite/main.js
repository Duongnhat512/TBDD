//filter, any, some, map, reduce, find


// filter

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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


