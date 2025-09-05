function operationperform(num1, num2, operation) {  //operation perform function: for (+,-,*,/)operations.
    if (operation === "add") {
        return num1 + num2;
    } else if (operation === "subtract"){
        return num1 - num2;
    } else if (operation === "multiply"){
        return num1 * num2;
    } else if(operation === "divide"){
        if (num2 === 0) {
            alert("Please enter a valid number.")
        } else {
            return num1 / num2;
        }
    }
}


function calculate() {  //this is onClick of button
    const number1 = parseFloat(document.getElementById("num1").value);  //get the value of First number
    const number2 = parseFloat(document.getElementById("num2").value);  //get the value of second number
    const operations = document.getElementById("operation").value;   //get selected operation value

    const result = operationperform(number1, number2, operations);
    document.getElementById("result").textContent = `Result: ${result}`;  //result optput
    document.getElementById("result").style.color = "green";
}