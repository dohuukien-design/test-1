function findEven(number) {
    number = parseInt(prompt('Nhập một số từ 4 đến 20'))
    if(number<=20){
        for (i=4; i<=number; i++){
            if(i%2==0){
                console.log(i);
            }}
    }
}
findEven()