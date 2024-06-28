
//function calculateGrade(){
    //user input
//let input = prompt("Enter student marks(between0 and 100):");
//convert input to number
//let marks =parseFloat(input);

//look if marks is a valid number and within range
//if(isNaN)(marks) || (marks < 0 ||marks > 100) {
  //  console.log("invalid input.Marks should be between 0 and 100.");
   // return;
//}
//}

//Determine grade based on marks

//A=100-79
//B=79-60
//C=59-49
//D=49-40
//E=40-0


let marks= 80;

if(marks <=100 && marks>=79) {
    console.log('you got A')
}else if (marks <79 && marks>=60){
    console.log('you got B')
}else if (marks <60 && marks>=49 ){
    console.log('you got c')
}else if (marks <49 && marks>=40) {
    console.log('you got D')
}
else { (marks<40 && marks>=0)
   console.log('you got E')
}

//output the grade 
//console.log('The grade for ${marks} marks is ${grade}');
//console.log('A' ${79} 'B' ${60}  'C' ${49}  'D' ${40} 'E' ${0});
//for instance 
//calculateGrade(A);