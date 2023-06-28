
var jpdbBaseURL=" http://api.login2explore.com:5577";
var jpdbIRL="/api/irl";
var jpdbIML="/api/iml";
var dbName="School-DB";
var relName="Student-Table";
var connToken="90933111|-31949318232646512|90951200";

function getStuRollAsJsonObj(){
    var stuRollno=$("#stuRollno").val();
    var jsonStr = {
        "Roll No" : stuRollno
    };
    
    return JSON.stringify(jsonStr);
}

function fillData(jsonObj){
    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
    $("#name").val(record.name);
    $("#stuClass").val(record.stuClass);
    $("#dob").val(record.dob);
    $("#enroll_date").val(record.enroll_date);
    $("#address").val(record.address);
}

function saveRecNo2LS(jsonObj){
    var record=JSON.parse(jsonObj.data);
    localStorage.setItem("recNo",record.rec_no);
}

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
    $("#name").prop("disabled", false);
    $("#save").prop("disabled", true);
    $("#update").prop("disabled", true);
    $("#reset").prop("disabled", true);
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
    var updateRequest=createUPDATERecordRequest(connToken, jsonUpdatedData,dbName,relName,localStorage.getItem("recNo"));
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    console.log(resJsonObj);
    
    resetForm();
}

function getStudent(){
    var stuRollJsonObj = getStuRollAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(connToken,dbName,relName,stuRollJsonObj);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest,jpdbBaseURL,jpdbIRL);
    jQuery.ajaxSetup({async: true});
    if(resJsonObj.status===400){
        $("#save").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#name").focus();
    }else if(resJsonObj.status === 200){
        $("#stuRollno").prop("disabled", true);
        fillData(resJsonObj);
        
        $("#update").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#name").focus();
    }
}


