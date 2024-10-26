let var1 = 5;
function outerFunction(){
    let var2 = 10;
    function innerFunction(){
        let var3 = 15;
        console.log(var1, var2, var3);
    }
    innerFunction();
}
outerFunction();