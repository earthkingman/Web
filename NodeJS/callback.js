function atask(a,n){
    setTimeout(function () {
    console.log("대기")
    test(n)
    }, 1000);
    
}

function test(num) {
    console.log(num);
}

atask(test,1);