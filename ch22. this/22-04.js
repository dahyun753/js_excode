function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.getDiameter = function () {
    return 2 * this.radius;
}

const myCircle = new Circle(5);
console.log(myCircle.getDiameter()); // 10
