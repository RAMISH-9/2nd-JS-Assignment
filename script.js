// Ch # 8 - Concatenating text strings
document.getElementById("ConcatenationSomeString").onclick = function(){
    var message = "Good day ";
    var name = "Ramish";
    var banger = "!";
    console.log(message + name + banger);
    document.write(message + name + banger)
}

// Ch # 9 - 10 Prompts and if statements
document.getElementById("askNameFromUser").onclick = function(){
    let message = "Good Day "
    let firstName = prompt("Please enter your First Name?")
    let lastName = prompt("Please enter your Last Name?")
    let banger = "!"
    let fullname =  firstName + " " + lastName
    document.getElementById("userName").innerHTML = message + fullname +  banger
}

// Ch # 11 - CompaisonOperators
document.getElementById("comparisonOperators").onclick = function(){
    var num3 = 15;
    var num4 = 15;

    if (num3 == num4) {
        alert("Yes, your condition is true. The 15 = 15")
    } else {
        alert("No, your condition is not true. The 14 >= 15")
    }

}

// Ch # 12 - if...else and else if statements
document.getElementById("ifElseIf").onclick = function(){
    var num1 = 14;
    var num2 = 15;

    console.log(num1 + num2)

    if (num1 >= num2) {
        alert("Yes, your conditioin is true")
    } else if (num1 === num2){
        alert("Yes, your second condition is true")
    } else if (num1 <= num2) {
        alert("Yes, your third condition is true")
    } else {
        alert("No, your condition is fasle")
    }

}

// Ch # 12-13 - Testing sets of conditions
document.getElementById("testingSetsOfConditions").onclick = function (){
    var age = +prompt("Your age?");
    var weight = +prompt("Your Weight?");

    if (age >= 18 && weight <= 70) {
        alert("You're a smart man.");
    } else if (age >= 18 && weight > 70) {
        alert("You're a fat guy.");
    }else {
        alert("You're a baby")
    }
}

// Ch # 14 - if statements nested 
document.getElementById("ifStatementsNested").onclick = function () {
    var age = +prompt("Your age?");

    if (age >= 18) {
        var weight = prompt("Your Weight?");
        // weight = Number (weight)
        if (weight <=70) {
            alert("You're a smart man.")
        }else {
            ("You're a fat gut.")
        }
}else {
    alert("You're a baby");
}

}

// Login Button
document.getElementById("login").onclick = function () {
    var userName = prompt ("Your user name");
    var pass = prompt ("Your password");

    if (userName === "ramish" && pass === "123"){
        alert("User logged in")
    } else {
        alert("Username  or password is incorrect.")
    }
}

// Clearing Butoon

document.getElementById("clearop").onclick = function () {
    document.getElementById("output").innerHTML= '';
}

document.getElementById("clearset").onclick = function () {
    document.getElementById("statement").innerHTML= '';
}