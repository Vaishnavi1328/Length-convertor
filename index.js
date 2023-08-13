function func()
{
    console.log("hello");
    let val=(Number)(document.getElementById("centi").value);
    let result=document.getElementById("inche");
    console.log(result);
    let ans=(val/2.54).toFixed(2);
    result.innerHTML=(ans)+" inches";
}