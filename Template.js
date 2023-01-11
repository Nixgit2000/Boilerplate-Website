function function1() {
    var RegexExp = /hello/g
    var input1 = document.getElementById("input1").value;
    if (RegexExp.test(input1)) {
        document.getElementById("output").innerHTML = "True";
    } else {
        document.getElementById("output").innerHTML = "False";
    }
    
}
    
