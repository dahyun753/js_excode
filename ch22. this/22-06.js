const foo=function(){
	console.dir(this)
}

//1
foo(); //window

//2 프로퍼티 값으로 할당->호출
const obj{foo};
obj.foo(); //obj

//3
new foo(); //foo{}

//4 내부의 this는 인수에 의해 결정
const bar={name:'bar'};

foo.call(bar)
foo.apply(bar)
foo.bind(bar)()