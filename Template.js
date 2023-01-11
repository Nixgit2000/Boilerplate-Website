function function1() {
    var RegexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var input1 = document.getElementById("input1").value;
    if (RegexExp.test(input1)) {
        document.getElementById("output").innerHTML = "True";
    } else {
        document.getElementById("output").innerHTML = "False";
    }
    
}
    
