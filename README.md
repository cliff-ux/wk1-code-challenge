# wk1-code-challenge

# calculateDemeritPoints Function

A simple JavaScript function to calculate demerit points for speeding based on a predefined speed limit.

## Overview

The `calculateDemeritPoints` function calculates demerit points based on how much a vehicle's speed exceeds a predefined speed limit.

## Function Details

The function takes one parameter:
- `speed`: The speed of the vehicle in kilometers per hour (km/h).

### Constants Used
- `speedLimit`: The maximum allowed speed limit, set to 100 km/h.
- `kmPerDemeritPoint`: Defines how many kilometers per hour over the speed limit equate to one demerit point, set to 10 km/h.

### Behavior
- If `speed` is less than or equal to `speedLimit`, it logs "Speed is fine." and returns `0` demerit points.
- If `speed` exceeds `speedLimit`, it calculates how many kilometers per hour the vehicle is over the limit (`kmAboveLimit`), then computes the demerit points based on `kmAboveLimit` divided by `kmPerDemeritPoint` (using `Math.floor` to round down to the nearest whole number).
- It logs the number of demerit points calculated as "license suspended ${demeritPoints}".

## Example Usage

```javascript
const carSpeed = 110; // Example speed in km/h
const points = calculateDemeritPoints(carSpeed);
console.log(`Demerit Points: ${points}`);


### Explanation:


- **Function Details**: Describes the parameters, constants used, and behavior of the `calculateDemeritPoints` function.
- **Constants Used**: Clarifies the constants (`speedLimit` and `kmPerDemeritPoint`) used in the function.
- **Behavior**: Details how the function behaves based on the input `speed`.
- **Example Usage**: Demonstrates how to use the function with an example and shows expected output.
- **License**: Mentions the licensing information for the code (MIT License in this case).

/////////////////gragind system///////
# Grade Evaluation Based on Marks

This script evaluates a student's grade based on their marks using conditional statements in JavaScript.

## Overview

The script assigns a grade ('A', 'B', 'C', 'D', or 'E') to a student based on their marks. It uses a series of conditional statements to determine the grade based on predefined mark ranges.

## Code Details

The code snippet assigns a value to the variable `marks` and then evaluates it against multiple conditions:

```javascript
let marks = 80;

if (marks <= 100 && marks >= 79) {
    console.log('You got A');
} else if (marks < 79 && marks >= 60) {
    console.log('You got B');
} else if (marks < 60 && marks >= 49) {
    console.log('You got C');
} else if (marks < 49 && marks >= 40) {
    console.log('You got D');
} else if (marks < 40 && marks >= 0) {
    console.log('You got E');
}

///////tax payment////


##Net Salary Calculator

This function `calculateNetSalary` calculates the net salary after deducting taxes (PAYE), NHIF contributions, and NSSF contributions based on given inputs of basic salary and benefits.

## Function Definition

### `calculateNetSalary(basicSalary, benefits)`

Calculates the net salary after deducting PAYE (Tax), NHIF deductions, and NSSF deductions from the gross salary (basic salary + benefits).

#### Parameters

- `basicSalary` (number): The basic salary amount.
- `benefits` (number): Additional benefits or allowances.

#### Returns

An object with the following properties:

- `grossSalary` (number): Total gross salary (basic salary + benefits).
- `payee` (number): Amount deducted as PAYE (Tax).
- `nhifDeductions` (number): Amount deducted as NHIF.
- `nssfDeductions` (number): Amount deducted as NSSF.
- `netSalary` (number): Net salary after deducting PAYE, NHIF, and NSSF from gross salary.

## Constants Used

- `PAYE_PERCENTAGE`: 10.0 (0.010% tax rate)
- `NHIF_RATE`: 2.50 (0.025% NHIF rate)
- `NSSF_RATE`: 10.0 (0.01% NSSF rate)

## Example Usage

```javascript
const basicSalary = 110000; // Basic salary
const benefits = 20000; // Benefits
const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYE (Tax):", salaryDetails.payee);
console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
console.log("Net Salary:", salaryDetails.netSalary);


