//Part 1
//Fizz Buzz problem
console.log("Fizz Buzz problem : ")
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        if (i % 5 == 0)
            console.log("Fizz Buzz")
        else
            console.log("Fizz");
    }
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);

}

//part 2
//prime time
let n = 4;
let isPrime = true;
let i = 2;
while (isPrime) {
    n++;
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime == true) {
        console.log(n);
        break;
    }

    isPrime = true;

}

//Part3 feeling loopy
console.log("The seperated cells from a CSV file: ");
const str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const newstr = str.split("\n");
for(const c of newstr)
{
    const words = c.split(",");
    console.log(words[0],words[1],words[2],words[3]);
}
