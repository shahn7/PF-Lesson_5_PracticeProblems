  function getLetterGrade() {
		
  var grade = Number(prompt("Enter grade value from 0-100"));
	
switch (true) {
  case (grade == 100):
    document.write("The student's grade is a A+")
    break;
  
  case (grade >= 93 && grade <= 99.9):
    document.write("The student's grade is a A")
    break;
    
  case (grade >= 90 && grade <= 92.9):
    document.write("The student's grade is a A-")
    break;

  case (grade >= 87 && grade <= 89.9):
    document.write("The student's grade is a B+")
    break;

  case (grade >= 83 && grade <= 86.9):
    document.write("The student's grade is a B")
    break;

  case (grade >= 80 && grade <= 82.9):
    document.write("The student's grade is a B-")
    break;

  case (grade >= 77 && grade <= 79.9):
    document.write("The student's grade is a C+")
    break;

  case (grade >= 73 && grade <= 76.9):
    document.write("The student's grade is a C")
    break;

  case (grade >= 70 && grade <= 72.9):
    document.write("The student's grade is a C-")
    break;

  case (grade >= 69 && grade <= 69.9):
    document.write("The student's grade is a D+")
    break;

  case (grade >= 68 && grade <= 68.9):
    document.write("The student's grade is a D")
    break;

  case (grade >= 67 && grade <= 67.9):
    document.write("The student's grade is a D-")
    break;

  case (grade <= 66.9 && grade >= 0):
    document.write("The student's grade is a F")
    break;         
}
}
