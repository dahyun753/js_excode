const person=(function(){
    let _age=0 //private

    //생성자 함수
    function person(name, age){
        this.name=name //public
        _age=age
    }

    //프로토타입 메서드
    person.prototype.sayHi=function(){
        console.log(`hi! my name is ${this.name}. i am ${_age}.`)
    }
    return person
}())

const me= new person('lee', 20)
me.sayHi() //hi! my name is lee. i am 20.

const you=new person('kim',30)
you.sayHi() //hi! my name is kim. i am 30.

me.sayHi() //hi! my name is lee. i am 30.
//_age 변경