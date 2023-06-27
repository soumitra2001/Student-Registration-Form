
var jpdbBaseURL=" http://api.login2explore.com:5577";
var jpdbIRL="/api/irl";
var jpdbIML="/api/iml";
var dbName="School-DB";
var relName="Student-Table";
var connToken="90933111|-31949318232646512|90951200";
function validateAndGetFormateData() {
    var stuName = $("#name").val();
    if (stuName === "") {
        alert("Student Name is Required Value");
        $("#name").focus();
        return "";
    }

    var stuRollno = $("#stuRollno").val();
    if (stuRollno === "") {
        alert("Student Roll no is Required Value");
        $("#stuRollno").focus();
        return "";
    }

    var stuClass = $("#stuClass").val();
    if (stuClass === "") {
        alert("Student's Class is Required Value");
        $("#stuClass").focus();
        return "";
    }

    var stuDOB = $("#dob").val();
    if (stuDOB === "") {
        alert("Student's Date of Birth is Required Value");
        $("#dob").focus();
        return "";
    }

    var stuEnroll_Date = $("#enroll_date").val();
    if (stuEnroll_Date === "") {
        alert("Student Enroll Date is Required Value");
        $("#enroll_date").focus();
        return "";
    }

    var stuAddress = $("#address").val();
    if (stuAddress === "") {
        alert("Student Address is Required Value");
        $("#address").focus();
        return "";
    }

    var jsonStrObj = {
        Full_Name: stuName,
        Rollno: stuRollno,
        Class: stuClass,
        Date_of_Birth: stuDOB,
        Enrollment_Date: stuEnroll_Date,
        Address: stuAddress
    };
    console.log("Hello");

    return JSON.stringify(jsonStrObj);
}

function resetForm() {
    $("#name").val("");
    $("#stuRollno").val("");
    $("#stuClass").val("");
    $("#dob").val("");
    $("#enroll_date").val("");
    $("#address").val("");
    $("#name").focus();
}

function saveStudent() {
    var jsonStr = validateAndGetFormateData();
    if (jsonStr === "") {
        console.log("Hello");
        return;
    }

    var putReqStr = createPUTRequest(connToken, jsonStr, dbName, relName);
    alert(putReqStr);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr, jpdbBaseURL, jpdbIML);
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({async: true});

    resetForm();
}

function updateData(){
    $("#update").prop("disabled",true);
    var jsonUpdatedData=validateAndGetFormateData();
    var updateRequest=creatUpdateRequest(connToken, jsonUpdatedData,dbName,relName);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    
    resetForm();
}


