import {
  StringManipulationService,
  NumberManipulationService,
} from "./main-service";

class StringManipulations implements StringManipulationService {
  print(word: string): void {
    let str: string = "Kumar";
    console.log("Word is : " + word);
    console.log("Uppercase is : " + word.toUpperCase());
    console.log("Lower case is : " +word.toLowerCase());
    console.log("Char at pos is : " + word.charAt(1));
    console.log("Combining the word is : " + word.concat(" ", str));
    console.log("After slicing word is : " + word.slice(1, -1));
    console.log("Lenghth of word is : " + word.length);
  }

  printWithSpace(sentence: string): void {
    console.log("Sentence is : " + sentence);
    console.log(sentence.split("").join(" "));
    console.log("Length of sentence is : " + sentence.length);
  }

  findVowel(str: string): void {
    console.log(str);
    let count: number = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (
        str.charAt(i) == "a" ||
        str.charAt(i) == "e" ||
        str.charAt(i) == "i" ||
        str.charAt(i) == "o" ||
        str.charAt(i) == "u"
      ) {
        count += 1;
      }
    }

    console.log(count);
  }
}

class NumbersManipulations implements NumberManipulationService {
  findPrime(num: number): void {
    let isPrime: boolean = true;
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
  }

  findMagic(num: number): void {
   if(num % 9 === 1){
     console.log("Magic Number");
   }
   else{
     console.log("Not a Magic Number");
   }
}

let obj = new StringManipulations();
obj.print("Kundan");
obj.printWithSpace("Hippopotamius");
obj.findVowel("mercury");

let obj1 = new NumbersManipulations();
obj1.findPrime(5);
obj1.findMagic(199);
