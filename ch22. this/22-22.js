function getthisbinding(){
    return this
}

//this로 사용할 객체
const thisArg={a:1}

//getthisbinding 함수를 새롭게 생성해 반환
console.log(getthisbinding.bind(thisArg)) //[Function: bound getthisbinding]

//명시적으로 함수 호춯
console.log(getthisbinding.bind(thisArg)())
//{ a: 1 }

