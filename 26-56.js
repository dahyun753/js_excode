
function sum(...args){
    //reset파라미터 args에는 배열 [1,2,3,4,5] 할당
    return args.reduce((pre,cur)=>pre+cur,0)
}

console.log(sum(1,2,3,4,5)) //15