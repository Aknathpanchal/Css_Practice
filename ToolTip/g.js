// function fun (a,...b){
//     console.log(arguments.length);

// }
// fun(3,"mi","tu")

// const number =[7,6,2,3,8];
// const max=Math.min.apply(null,number);
// console.log(max)

// function person(){
//     console.log(this);
// }

// person()

// var arr=new Array(5).fill(0).map(function(a,b){
//     return b+1
// })

// console.log(arr)

var arr=[10,5,11,9,8]
// var set= new Set(arr)
var N=5;
for(var i=0;i<N;i++){
    var c=0
    for(j=0;j<N-i-1;j++){
        if(arr[j]>arr[j+1]){
            var temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp;
            c++
        }
    }
    if(c==0){
        break;
    }
}console.log(arr)
//     if(i%3==0 && i%7==0){
//         console.log("mock")
//     }else if(i%3==0){
//         console.log("dsa")
//     }else if(i%7==0){
//         console.log("coding")
//     }else{
//         console.log(i)
//     }
// }
// console.log(set)