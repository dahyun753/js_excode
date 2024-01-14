const circle={
    radius: 5,
    getDiameter(){
        return 2 * this.radius;
        //this는 메서드를 호출한 객체를 가리킨다
    }
}

console.log(circle.getDiameter()); //10