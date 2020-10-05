"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {}
    StringManipulations.prototype.print = function (word) {
        var str = "Kumar";
        console.log("Word is : " + word);
        console.log("Uppercase is : " + word.toUpperCase());
        console.log("Lower case is : " + word.toLowerCase());
        console.log("Char at pos is : " + word.charAt(1));
        console.log("Combining the word is : " + word.concat(" ", str));
        console.log("After slicing word is : " + word.slice(1, -1));
        console.log("Lenghth of word is : " + word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log("Sentence is : " + sentence);
        console.log(sentence.split("").join(" "));
        console.log("Length of sentence is : " + sentence.length);
    };
    StringManipulations.prototype.findVowel = function (str) {
        console.log(str);
        var count = 0;
        str = str.toLowerCase();
        for (var i = 0; i < str.length; i++) {
            if (str.charAt(i) == "a" ||
                str.charAt(i) == "e" ||
                str.charAt(i) == "i" ||
                str.charAt(i) == "o" ||
                str.charAt(i) == "u") {
                count += 1;
            }
        }
        console.log(count);
    };
    return StringManipulations;
}());
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {}
    NumbersManipulations.prototype.findPrime = function (num) {
        var isPrime = true;
        if (num === 1) {
            console.log("Number is neither prime nor composite ");
        } else {
            for (var i = 2; i < num; i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                console.log("Prime Number");
            } else {
                console.log("Not Prime Number");
            }
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        if (num % 9 === 1) {
            console.log("Magic Number");
        } else {
            console.log("Not a Magic Number");
        }
    };
    return NumbersManipulations;
}());
var obj = new StringManipulations();
obj.print("Kundan");
obj.printWithSpace("hippopotamus");
obj.findVowel("mercury");
var obj1 = new NumbersManipulations();
obj1.findPrime(4);
obj1.findMagic(199);