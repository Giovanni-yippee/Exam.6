// 1-Тапсырма: School Объектісін Құру

let School = {
    name: "Amjilt Cyber School",
    phoneNumber: "+7 (727) 123-4567",
    students: [
        {
            studentName: "Qaisar",
            top: "Physics",
            progress: 85,
            lessons: 5
        },
        {
            studentName: "Meir",
            top: "Mathematics",
            progress: 92,
            lessons: 6
        },
        {
            studentName: "Akerke",
            top: "English",
            progress: 78,
            lessons: 4
        },
        {
            studentName: "Yerkebulan",
            top: "Physics",
            progress: 88,
            lessons: 5
        },
        {
            studentName: "Asadbek",
            top: "Mathematics",
            progress: 91,
            lessons: 6
        }
    ]
};

console.log(School);

// 2-Тапсырма: Оқу орталығынын атауын өзгерту

function changeSchoolName() {
    let zhanaAtau = prompt("Zhana mektep atauyn engiz: "); 
    if (zhanaAtau) {
        School.name = zhanaAtau; 
        console.log("Mekteptin zhana atauy: ", School.name);
    } else {
        console.log("Zhana atau engizilmedi");
    }
}

changeSchoolName();

// 3-Тапсырма: Телефон нөмірін өзгерту

function changePhoneNumber() {
    let zhanaPhoneNumber = prompt("Zhana telephone nomerin engiz: ");
    if (zhanaPhoneNumber) {
        School.phoneNumber = zhanaPhoneNumber; 
        console.log("Zhana telephone nomeri", School.phoneNumber);
    } else {
        console.log("telephone nomeri engizilmedi. Eski telephone nomeri: ", School.phoneNumber);
    }
}

changePhoneNumber();

// 4-Тапсырма: Студенттердін атауын шығару

function listStudentNames() {
    School.students.studentName.map()
}