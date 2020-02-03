function recFibonacci(n){  
    if(n===0) return 0;
    if(n===1) return 1;
    return recFibonacci(n-1)+recFibonacci(n-2)
}

function cycleFibonacci(n){
    if(n===0) return 0;

    let res=1, restemp=0;
    while(n>1){
        res+=restemp;
        restemp=res-restemp;
        n--;
    }
    return res
}

function callbackFunc(n,nthElement){
    console.log(`The ${n} element of Fibonacci sequence is ${nthElement}`)
}

function getFibElement(n,outputFunc){
    let res= n>42?cycleFibonacci(n):recFibonacci(n);
    // Я знаю, что в условии было 100, а не 42, но лично у меня где-то тут 
    // ПК перестаёт тянуть эту рекурсивную функцию с её экспоненциальной 
    // сложностью, или что у неё там.
    outputFunc(n,res)
}

let i=0;
while(i<20){
    let index=Math.round(Math.random()*198+2);
    getFibElement(index,callbackFunc);
    i++;
}