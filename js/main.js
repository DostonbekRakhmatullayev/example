// 1-example
function addition(a, b) {
	return a + b;
	// Test Passed: Value == 5
	// Test Passed: Value == -9
	// Test Passed: Value == 10
	// Test Passed: Value == 90
}

// 2-example
function convert(minutes) {
	return minutes * 60;
	// Test Passed: Value == 360
	// Test Passed: Value == 240
	// Test Passed: Value == 480
	// Test Passed: Value == 3600
}

// 3-example
function addition(num) {
	return num + 1;
	// Test Passed: Value == 3
	// Test Passed: Value == -8
	// Test Passed: Value == 1
	// Test Passed: Value == 1000
	// Test Passed: Value == 74
}

// 4-example
function triArea(base, height) {
	return (base * height) / 2
	// Test Passed: Value == 3
	// Test Passed: Value == 10
	// Test Passed: Value == 50
	// Test Passed: Value == 0
	// Test Passed: Value == 66
}

// 5-example
function calcAge(age) {
	return age * 365;
	// Test Passed: Value == 3650
	// Test Passed: Value == '0'
	// Test Passed: Value == '26645'
}

// 6-example
function remainder(x, y) {
	return x % y;
	// Test Passed: Value == 1
	// Test Passed: Value == 3
	// Test Passed: Value == -9
	// Test Passed: Value == 0
}

// 7-example
function footballPoints(wins, draws, losses) {
	return (wins * 3) + draws 
	// Test Passed: Value == 5
// Test Passed: Value == 20
// Test Passed: Value == 3
// Test Passed: Value == 7
// Test Passed: Value == 0
}

// 8-example
function points(twoPointers, threePointers) {
	return (twoPointers * 2) + (threePointers * 3);
	// Test Passed: Value == 5
	// Test Passed: Value == 8
	// Test Passed: Value == 7
	// Test Passed: Value == 10
	// Test Passed: Value == 1398
}

// 9-example
function lessThan100(a, b) {
	var num = a + b;
	if (num < 100 ) {
		return true
	}else {
		return false
	}
	// Test Passed: Value == true
	// Test Passed: Value == false
	// Test Passed: Value == true
	// Test Passed: Value == false
	// Test Passed: Value == true
	// Test Passed: Value == false
	// Test Passed: Value == true
	// Test Passed: Value == false
	// Test Passed: Value == true
	// Test Passed: Value == false
	// Test Passed: Value == true
	// Test Passed: Value == false
	// Test Passed: Value == true
	// Test Passed: Value == false
	// Test Passed: Value == true
	// Test Passed: Value == false
	// Test Passed: Value == true
	// Test Passed: Value == false
	// Test Passed: Value == true
	// Test Passed: Value == false
}

// 10-example
function animals(chickens, cows, pigs) {
	return (chickens * 2) + (cows * 4) + (pigs * 4);
	// Test Passed: Value == 50
	// Test Passed: Value == 50
	// Test Passed: Value == 22
	// Test Passed: Value == 34
}