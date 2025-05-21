function showmax() {
    if (document.getElementById("num1").value == ""|| document.getElementById("num1").value == "NaN" ){
        alert("请在第一个数输入值");
    }
    var x = parseFloat(document.getElementById("num1").value);
    var y = parseFloat( document.getElementById("num2").value);
    var z = parseFloat( document.getElementById("num3").value);
    var t = (x > y) ? x:y;
    if( Object.is(parseFloat( document.getElementById("num3").value), NaN))
        document.getElementById("max").value = t;
    else{
    var m = (t > z) ? t:z;
    document.getElementById("max").value = m;}

}


