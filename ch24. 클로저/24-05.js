const x=1;

//1
function outer(){
    const x=10
    const inner=function(){console.log(x)} //2
    return inner
}

//outer함수를 호출하면 중첩함수 inner를 반환
//outer함수의 실행 컨텍스트는 스택에서 팝 되어 제거
const innerFunc=outer() //3
innerFunc() //출력: 10

//3하면 outer은 inner을 반호나하고 생명주기 마감 => 스택에서 제거=> 지역변수 x도 생명 죽; 마감
//outer의 지역변수는 더 이상 유효X 그러나 4에서 10출력