for (let i = 0; i <= 30; i++) {
    if(i % 3 === 0) {
        console.log("Bizz")
    }
    else if(i % 5 === 0) {
        console.log("Fuzz")
    }
    else if(i % 3 === 0 && i % 5 === 0) {
        console.log("BizzFuzz")
    }
    else
    console.log(i)
}

// for (let i = 0; i<30; i++){
//     if(i%3===0){

//     }
// }