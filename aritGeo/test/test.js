/*Write a function called **aritGeo** that takes one argument, an array.
 You are required to check if the array passed as an argument is arithmetic,
 geometric, neither arithmetic nor geometric in progression or if the array is empty. 
For arithmetic progressions, return `Arithmetic`. For geometric progressions,
 return `Geometric`. 
For neither of the above, return **`-1`**. For an empty array, return **`0`**. 
Your logic should be as efficient as possible (with minimal iterations).
  Also write tests for your solution using **Mocha** & **Chai** (at least 10 test cases).
  Finally, push the solution and tests to GitHub.8*/

const assert = require('chai').assert;
const myApp = require('../src/main.js');


describe("aritGeo", function() {

	describe("for Arithmetic Progression", function(){
		it("should return Arithmetic for [2,4,6,8]", function(){
			assert.equal(myApp.aritGeo([2,4,6,8]), 'Arithmetic');
		});

		it("should return Arithmetic for [5, 11, 17, 23, 29, 35, 41]", function(){
			assert.equal(myApp.aritGeo([5, 11, 17, 23, 29, 35, 41]), 'Arithmetic');
		});

		it("should return Arithmetic for [15, 10, 5, 0, -5, -10]", function(){
			assert.equal(myApp.aritGeo([15, 10, 5, 0, -5, -10]), 'Arithmetic');
		});
	})



	describe("for Geometric Progression", function(){
		it("should return Geometric for [3,9,27,81]", function(){
			assert.equal(myApp.aritGeo([3,9,27,81]), 'Geometric');
		});

		it("should return Geometric for [0.5, 3.5, 24.5, 171.5]", function(){
			assert.equal(myApp.aritGeo([0.5, 3.5, 24.5, 171.5]), 'Geometric');
		});

		it("should return Geometric for [-128, 64, -32, 16, -8]", function(){
			assert.equal(myApp.aritGeo([256,-128, 64, -32, 16, -8]), 'Geometric');
		});
	})

	describe("for neither Arithmetic nor Geometric Progression", function(){

		it("should return -1 for [1,5,4,7,9]", function(){
			assert.equal(myApp.aritGeo([1,5,4,7,9]), -1);
		});
	})

	describe("for string in Array", function(){

		it("should return -1 for [1, 3, 'pascal', 10, 15]", function(){
			assert.equal(myApp.aritGeo([1, 3, 'pascal', 10, 15]), -1);
		});
	})

	describe("for array less than 3", function(){
		it("should return -1 for [7, 8]", function(){
			assert.equal(myApp.aritGeo([7, 8]), -1);
		});
	})


	describe("For empty array", function(){
		it("should return 0 for []", function(){
			assert.equal(myApp.aritGeo([]), 0);
		});
	})
})
