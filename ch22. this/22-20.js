function getthisbinding(){
    console.log(arguments);
    return this
}

//this로 사용할 객체
const thisArg={a:1}

//getthisbinding 함수를 호출하면서 인수로 전달할 객체를 getthisbinding함수 this에 바인딩
//apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달
console.log(getthisbinding.apply(thisArg,[1,2,3]))
//[Arguments] { '0': 1, '1': 2, '2': 3 } { a: 1 }

//call 메서드는 호출한 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달
console.log(getthisbinding.call(thisArg,1,2,3))
//[Arguments] { '0': 1, '1': 2, '2': 3 } { a: 1 }

