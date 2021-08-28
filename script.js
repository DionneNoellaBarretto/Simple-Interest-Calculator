function compute()
{

    var p = Number(document.getElementById("principal").value);
    var i = Number(document.getElementById("rate").value);
    var A = document.getElementById("result").value;
    var y= Number(document.getElementById("years").value);

    console.log(p,i,y,A);
// https://www.calculatorsoup.com/calculators/financial/simple-interest-plus-principal-calculator.php
    A = (p*(1+(i*y))/100);
    R = p+ A;
    console.log(p,i,y,A,R);
    document.getElementById("result").innerHTML = `The total amount accrued from simple interest on a principal amount of $${p} at a rate of ${i}% per year for ${y} years is <u>$${R}</u>!`;
    
}
        