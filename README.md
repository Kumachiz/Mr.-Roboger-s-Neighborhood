# _Mr. Roboger's Neighborhood_

##### By _**Michael Munyaneza**_

## Description
_This is a website will take inputted user data and return "Beep!" for numbers containing 1 "Boop!" for numbers containing 2 and "Won't you be my neighbor?" for numbers containing 3 using html, css, jquery and some js.._

## Setup/Installation Requirements

* To access the index.html file, open the About project folder and all the html pages will be inside that folder.
* If you need to clone my project via the command line you will need to use "git clone followed by url https://github.com/Kumachiz/Mr.-Roboger-s-Neighborhood.git"
* To access the website and test it's functionality without downloading the project files [_Got to my gh pages url_](https://kumachiz.github.io/Mr.-Roboger-s-Neighborhood/)
* _Now that you're on Mr. Roboger's Neighborhood's website, lets play with numbers._
*_Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"_
*_Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"_
*_Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"_

_{This page is written using HTML, CSS, jquery and Javascript}_

## tests
// tests.js
// this is a list of the tests for the project functions.

// This where where the tests for all functions will be executed.
function runTests() {
	testBeepBoop();
	testGetDigits();
}

// Testing for beepBoop function
function testBeepBoop() {
	const test1 = {
		input: 0,
		expectedOutput: [0]
	};

//	const test2 = {
		input: 1,
		expectedOutput: [0, "Beep!"]
	};

//	 const test3 = {
		input: 2,
		expectedOutput: [0, "Beep!", "Boop!"]
	};

// const test4 = {
		input: 3,
		expectedOutput: [0, "Beep!", "Boop!", "Won't you be my neighbor?"]
	};

//	const test5 = {
		input: 9, 
		expectedOutput: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9]
	};

//	const test6 = {
		input: 19,
		expectedOutput: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!"]
	};

//	const test7 = {
		input: 99,
		expectedOutput: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", 40, "Beep!", "Boop!", "Won't you be my neighbor?", 44, 45, 46, 47, 48, 49, 50, "Beep!", "Boop!", "Won't you be my neighbor?", 54, 55, 56, 57, 58, 59, 60, "Beep!", "Boop!", "Won't you be my neighbor?", 64, 65, 66, 67, 68, 69, 70, "Beep!", "Boop!", "Won't you be my neighbor?", 74, 75, 76, 77, 78, 79, 80, "Beep!", "Boop!", "Won't you be my neighbor?", 84, 85, 86, 87, 88, 89, 90, "Beep!", "Boop!", "Won't you be my neighbor?", 94, 95, 96, 97, 98, 99]
	};

//	const test8 = {
		input: 140,
		expectedOutput: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", 40, "Beep!", "Boop!", "Won't you be my neighbor?", 44, 45, 46, 47, 48, 49, 50, "Beep!", "Boop!", "Won't you be my neighbor?", 54, 55, 56, 57, 58, 59, 60, "Beep!", "Boop!", "Won't you be my neighbor?", 64, 65, 66, 67, 68, 69, 70, "Beep!", "Boop!", "Won't you be my neighbor?", 74, 75, 76, 77, 78, 79, 80, "Beep!", "Boop!", "Won't you be my neighbor?", 84, 85, 86, 87, 88, 89, 90, "Beep!", "Boop!", "Won't you be my neighbor?", 94, 95, 96, 97, 98, 99, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Beep!"]
	};

//	tests = [test1, test2, test3, test4, test5, test6, test7, test8];
	runTestArray(tests, beepBoop);
}

// Testing for the getDigits function
function testGetDigits() {
//	test1 = {
		input: 6,
		expectedOutput: [6]
	};

//	test2 = {
		input: 76,
		expectedOutput: [6, 7]
	};

//	test3 = {
		input: 358,
		expectedOutput: [8, 5, 3]
	};

//	test4 = {
		input: 4253453,
		expectedOutput: [3, 5, 4, 3, 5, 2, 4]
	}

//	tests = [test1, test2, test3, test4];
	runTestArray(tests, getDigits);
}

// repeat an array of tests for a function and execute them.
function runTestArray(testArray, functionToTest) {
	console.log("Testing " + functionToTest.name);
	for (let i=0; i<testArray.length; i++) {
		const test = testArray[i];
		const testNumber = i + 1;
		runTest(functionToTest, test, testNumber);
	}
}

// execute a specified test for a given function
function runTest(testFunction, test, testNumber) {
	const output = testFunction(test.input);

//	console.log("Test #" + testNumber);
	console.log("Input:");
	console.log(test.input);
	console.log("Output:");
	console.log(output);
	console.log("Expected output:");
	console.log(test.expectedOutput);

//	if (arrayIsEquals(output, test.expectedOutput)) {
		console.log("Success!");
	}
	else {
		console.log("Failure!");
	}

//	console.log("");
}

// Compares the arrays
function arrayIsEquals(array1, array2) {
	if (array1.length != array2.length) {
		return false;
	}

//	for (let i=0; i<array1.length; i++) {
		if (array1[i] !== array2[i]) {
			return false;
		}
	}
	return true;
}_

## Known Bugs

_{Some features might be disabled/Incomplete at the moment.}_
_{The results seem not clear all the way when returning new data}_
_{The background image refuses to fill the screen}_

## Support and contact details

_{For technical support, input, collaboration and questions please email at (kumachiz@gmail.com)}_

## Why use this website?

_{This site is for entertainment reasons only}_
_{One of the best features of this website is it's styling and responsiveness that you can trust from your favorite developer}_
_{This page utilizes simple programming to display user selection or input.}_

### License

*{Anyone is welcome to use and share this website code.}*

Copyright (c) 2021 **_{Michael Munyaneza, Epicodus}_**