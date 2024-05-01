function createRegistorCV() {
        let studentCode = document.getElementById("studentCode").value;
        let sureName = document.getElementById("surName").value;
        let lastName = document.getElementById("lastName").value;
        let firstName = document.getElementById("firstName").value;
        let birthday = document.getElementById("birthday").value;
        let gender = document.getElementById("gender").value;
        let birthPlace = document.getElementById("birthPlace").value;
        let phoneNumber = document.getElementById("phoneNumber").value;
        let email = document.getElementById("email").value;
        let fbAddress = document.getElementById("fbAddress").value;
        let address = document.getElementById("address").value;
        let year = document.getElementById("year").value;
        let sector = document.getElementById("sector").value;
        let majors = document.getElementById("Majors").value;



        var title = document.getElementById("title-studentCode");
        var value = document.getElementById("value-studentCode");
        title.innerText = "Оюутаны код";
        value.innerText = studentCode;
               
        var title = document.getElementById("title-sureName");
        var value = document.getElementById("value-sureName");
        title.innerText = "Ургийн овог";
        value.innerText = sureName;
        
        var title = document.getElementById("title-lastName");
        var value = document.getElementById("value-lastName");
        title.innerText = "Овог";
        value.innerText = lastName;
        
        var title = document.getElementById("title-firstName");
        var value = document.getElementById("value-firstName");
        title.innerText = "Нэр";
        value.innerText = firstName;
                   
        var title = document.getElementById("title-birthDay");
        var value = document.getElementById("value-birthDay");
        title.innerText = "Төрсөн өдөр";
        value.innerText = birthDay;
        
        var title = document.getElementById("title-gender");
        var value = document.getElementById("value-gender");
        title.innerText = "Хүйс";
        value.innerText = gender;
        
        var title = document.getElementById("title-birthPlace");
        var value = document.getElementById("value-birthPlace");
        title.innerText = "Төрсөн газар";
        value.innerText = birthPlace;
        
        var title = document.getElementById("title-phoneNumber");
        var value = document.getElementById("value-phoneNumber");
        title.innerText = "Утасны дугаар";
        value.innerText = phoneNumber;
        
        var title = document.getElementById("title-email");
        var value = document.getElementById("value-email");
        title.innerText = "Майл хаяг";
        value.innerText = email;
        
        var title = document.getElementById("title-fbAddress");
        var value = document.getElementById("value-fbAddress");
        title.innerText = "FB хаяг";
        value.innerText = fbAddress;
        
        var title = document.getElementById("title-Address");
        var value = document.getElementById("value-Address");
        title.innerText = "Гэрийн хаяг";
        value.innerText = address;
        
    return false; 
}

var button = document.getElementById('submit');
button.addEventListener('click', createRegistorCV);

function addRow() {
    var lessonName = document.getElementById("lesson1").value;
    var lessonTime = document.getElementById("timeLesson1").value;
    var lessonTeacher = document.getElementById("teacherLesson1").value;

    var tableBody = document.getElementById("hicheel-songolt");
    var newRow = tableBody.insertRow();
    var lesson = newRow.insertCell(0);
    var time = newRow.insertCell(1);
    var teacher = newRow.insertCell(2);

    lesson.innerHTML = lessonName;
    time.innerHTML = lessonTime;
    teacher.innerHTML = lessonTeacher;
}
