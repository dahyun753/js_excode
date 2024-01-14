function square(number){
    console.log(this); //window
    return number*number
}

square(2);