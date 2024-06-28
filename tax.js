function calculateNetSalary(basicSalary, benefits) {
    // Constants  tax and deduction rates
    const PAYE_PERCENTAGE = 10.0; // 0.010% tax rate
    const NHIF_RATE =2.50; //0.025% NHIF rate
    const NSSF_RATE = 10.0; // 0.01% NSSF rate

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE (Tax)
    const payee = grossSalary * PAYE_PERCENTAGE;

    // Calculate NHIF Deductions
    const nhifDeductions = grossSalary * NHIF_RATE;

    // Calculate NSSF Deductions
    const nssfDeductions = grossSalary * NSSF_RATE;

    // Calculate Net Salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    // Prepare results object
    const results = {
        grossSalary: grossSalary,
        payee: payee,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };

    return results;
}

//  usage:
const basicSalary = 110000; //  basic salary
const benefits = 20000; //  benefits
const salaryDetails = calculateNetSalary(basicSalary, benefits);

// Output the calculated details
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYE (Tax):", salaryDetails.payee);
console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
console.log("Net Salary:", salaryDetails.netSalary);
