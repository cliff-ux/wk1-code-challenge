function gradeStudent() {
    // Prompt the user to input student marks
    let marks = prompt("70");

    // Convert the input to a number
    marks = parseFloat(marks);

    // Validate if the input is a number and within the range of 0 to 100
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input! Please enter a number between 0 and 100.");
        return; // Exit the function early if input is invalid
    }

    // Determine the grade based on the marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Display the grade to the user
    alert(`Student's grade: ${grade}`);
}

// Call the function to start the grading process
gradeStudent();
