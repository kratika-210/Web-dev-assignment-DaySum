const solution = require('./solution');

function objAreEqu(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

function checkTest(testName, input, expected) {
    const result = solution(input);
    if (objAreEqu(result, expected)) {
        console.log(`${testName}: PASS`);
    } else {
        console.log(`${testName}: FAIL`);
        console.log("  Expected:", expected);
        console.log("  Got     :", result);
    }
}

// Test Cases
checkTest(
    "Test 1 - Example from problem",
    {
        '2020-01-01': 4,
        '2020-01-02': 4,
        '2020-01-03': 6,
        '2020-01-04': 8,
        '2020-01-05': 2,
        '2020-01-06': -6,
        '2020-01-07': 2,
        '2020-01-08': -2
    },
    { 'Mon': -6, 'Tue': 2, 'Wed': 2, 'Thu': 4, 'Fri': 6, 'Sat': 8, 'Sun': 2 }
);

checkTest(
    "Test 2 - Missing Thu & Fri",
    {
        '2020-01-01': 6,  
        '2020-01-04': 12, 
        '2020-01-05': 14, 
        '2020-01-06': 2,  
        '2020-01-07': 4   
    },
    { 'Mon': 2, 'Tue': 4, 'Wed': 6, 'Thu': 9, 'Fri': 10, 'Sat': 12, 'Sun': 14 }
);
