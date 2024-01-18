(function(){
    //즉시 실행함수의 arguments를 가리킨다.
    cosnt foo=()=>console.log(arguments) //[arguments] {'0':1, '1':2}
        foo(3,4)
}(1,2))

//foo의 arguments는 상위 스코프인 전역의 arguments를 가리킨다.
//하지만 전역에는 arguments가 존재하지 않는다. arguments객체는 함수 내부에서만 유효하다
const foo=()=>console.log(arguments)
foo(1,2) //reference error