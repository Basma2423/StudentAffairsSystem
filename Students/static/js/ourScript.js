class Student {
    constructor(name, id, gpa, birthDate, gender, level, status, department, email, mobilePhone) {
      this.name = name;
      this.ID = id;
      this.GPA = gpa;
      this.birthDate = birthDate;
      this.gender = gender;
      this.level = level;
      this.status = status;
      this.department = department;
      this.email = email;
      this.mobilePhone = mobilePhone;
    }
  }

function initializeStudentArray() {
    // Check if "students" array is already present in local storage
    if (localStorage.getItem("students") !== null) {
      return;
    }
    else
    {
        var students = [];
        localStorage.setItem("students", JSON.stringify(students));
    }
}

function showMessage(messageText)
{
    var message = document.getElementById("message");
    message.innerHTML = messageText;
    setTimeout(function() {
    message.style.opacity = 0;
    }, 3000);
}

function getStatus()
{
    var status = document.getElementById("c1").checked;
    if (status == true) {
        return "active";
    }
    else
    {
        return "not active";
    }
}

function setStudentValues() {
    var id = document.getElementById("fname2").value;
    var name = document.getElementById("fname9").value;
    var gpa = document.getElementById("fname3").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var level = document.getElementById("student-level").value;
    var status = getStatus();
    var department = document.getElementById("department").value;
    var email = document.getElementById("fname8").value;
    var mobile = document.getElementById("phone number").value;

    // Check if the student ID already exists in local storage
    if (checkIfStudentIDExists(id)) {
        // Display a warning message if the ID already exists
        showMessage("Student with this ID already exists!");
        return;
    }

    var newStudent = new Student(name, id, gpa, dob, gender, level, status, department, email, mobile);
    addStudentToLocalStorage(newStudent);
    showMessage("Registration was a Success!");
}

// Function to add a student to local storage
function addStudentToLocalStorage(student) {
    var storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    storedStudents.push(student);
    localStorage.setItem("students", JSON.stringify(storedStudents));
}
  
// Function to retrieve students from local storage by name
function retrieveStudentFromLocalStorageByName(name) {
    var storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    var matchingStudents = storedStudents.filter(function(student) {
      return student.name === name;
    });
    
    return Array.isArray(matchingStudents) ? matchingStudents : Array.from(matchingStudents);
}

// Function to retrieve students from local storage by name
function retrieveStudentFromLocalStorageByID(id) {
    var storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    var matchingStudents = storedStudents.filter(function(student) {
      return student.ID === id;
    });
    
    return matchingStudents;
}
function checkIfStudentIDExists(id) {
    var matchingStudents = retrieveStudentFromLocalStorageByID(id);
    if (matchingStudents.length > 0) {
        var warningMessage = document.getElementById("warning-message");
        if (warningMessage !== null) {
            warningMessage.innerHTML = "Student with this ID already exists!";
            alert("This is id already exists !");
        } else {
            console.error("warning-message element not found");
        }
        return true;
    }
    else {
        return false;
    }
}
  
// Function to edit a student in local storage by ID
function updateStudentInLocalStorage(id, newStudent) {
    var storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    var index = storedStudents.findIndex(function(student) {
        return student.ID === id;
    });
    if (index !== -1) {
        storedStudents[index] = newStudent;
        localStorage.setItem("students", JSON.stringify(storedStudents));
    }
}