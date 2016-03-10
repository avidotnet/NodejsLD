
////// MAIN THRAED /////////////////////////////////////////////////////////////////

//console.log('Hello world');

//for (var i = 0; i < 10; i++) {
//    console.log("Order Number : " + i);
//};

//for (var i = 0; i < 10; i++) {
//    IOoperation(i);
//};

console.log("\nEnter Word");

//console.log("\nEnter value of n: ");
var stdin = process.openStdin();

//stdin.on("data", function (d) {
//    // note:  d is an object, and when converted to a string it will
//    // end with a linefeed.  so we (rather crudely) account for that  
//    // with toString() and then trim() 
    
//    //Palindrome(d);
//    //Fibonacci(d);
//    //Factorial(d);
//    FindLetterOccurance(d);

//    //stdin.destroy();
//});

stdin.once("data", FindLetterOccurance);


////////////////////////////////////////////////////////////////////////////////////


////// METHODS /////////////////////////////////////////////////////////////////////
function IOoperation(index){
    console.log("IO Operation Started! " + index);
    setTimeout(function () {
        console.log("IO Operation Complete! " + index);
    }, 500);
}

function Palindrome(data) {
    var word = data.toString().trim();
    console.log("you entered: " + word);
    console.log("Word Length: " + word.length);
    var isPalindrome = CheckPalindrome(word);
    console.log("Palindrome: " + isPalindrome);
    
    console.log("\nEnter Word");
}

function CheckPalindrome(word){    
    var len = word.length;
    var mid = Math.floor(len / 2);
    for (var i = 0; i < mid -1; i++) {
        if (word[i] != word[len-1-i]) {
            return false;
        }
    }
    return true;
}

function Fibonacci(data) {
    var n = parseInt(data.toString().trim());
    
    var a = 0, b = 1, c = 0;
    console.log("\n" + b);
    for (var i = 0; i < n - 1; i++) {
        console.log(a + b);
        c = a;
        a = b;
        b = c + b;
    };
    
    console.log("\nEnter value of n: ");
}

function Factorial(data) {
    var n = parseInt(data.toString().trim());
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result = result * i;
    }
    console.log("Factorial of n is: " + result);
    
    console.log("\nEnter value of n: ");
    
}

function FindLetterOccurance(d){
    var word = d.toString().trim().toLowerCase();
    var letters = word.split('');
    console.log("Enter letter to find: ");

    stdin.once("data", function (data) {
        var letterToFind = data.toString().trim();
        var counter = 0;
        var pos = [];
        letters.forEach(function (letter, index) {
            if (letter == letterToFind) {
                counter++;
                pos.push(index + 1);
            }
        });
        
        console.log("Number of occurance of " + letterToFind + " in " + word + ": " + counter);
        console.log("At position " + pos);
        console.log("\nEnter Word");
        stdin.once("data", FindLetterOccurance);
    });
}
////////////////////////////////////////////////////////////////////////////////////
