function createRecatangle(len, bre){
    return rectangle = {
        length : len,
        breadth : bre,
        draw(){
            console.log('drawing rectangle');
    }
    
  };
}

let obj = createRecatangle(5,4);
obj.color = 'yellow';
console.log(obj);
delete obj.color;
console.log(obj);
obj.draw();

// let a = {value : 10};
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a.value);
