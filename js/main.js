for (let i = 1; i <= 100; i++){
    console.log(i);
}

for(let i = 1; i <= 100; i++){
    if ( i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    } 
    if ( i % 3 === 0){
        console.log("Fizz");
    }else if ( i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

const list = document.querySelector(".list");

for( let i = 1; i <= 100; i++ ) {
    const element = document.createElement("li");
    element.innerText = i;
    if (i % 3 === 0 && i % 5 === 0){
        element.classList.add("item", "fizzBuzz");
        list.append(element);
    }else{
        if (i % 3 == 0 && i % 5 !== 0){
            element.classList.add("item", "fizz");
            list.append(element);
        }else if ( i % 3 !== 0 && i % 5 === 0){
            element.classList.add("item", "buzz");
            list.append(element);
        }else{
            element.classList.add("item", "default");

            list.append(element);
        }
    }
}
