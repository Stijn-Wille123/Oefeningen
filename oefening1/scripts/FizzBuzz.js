const input = Number(prompt("Enter a number"));
if (isNaN(input))
    console.log("Is not a number");
else if (input % 3 === 0 && input % 5 === 0)
    console.log("FizzBuzz");
else if (input % 3 === 0)
    console.log("Fizz");
else if (input % 5 === 0)
    console.log("Buzz");

