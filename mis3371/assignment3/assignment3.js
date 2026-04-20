/*
  Author: Maxwell Sleeper
  File: assignment3.js
  Date created: 2/20/26
  Date last edited: 3/27/26
  Version: 3
*/

/* ── NAME ─────────────────────────────────────────── */
function validateName(){
    let f = document.getElementById("fname").value;
    let l = document.getElementById("lname").value;
    let msg = "";

    if (f.length < 1 || f.length > 30 || !/^[A-Za-z'\-]+$/.test(f)) {
        msg = "First name: 1-30 letters, apostrophes, or dashes only.";
    } else if (l.length < 1 || l.length > 30 || !/^[A-Za-z'\-]+$/.test(l)) {
        msg = "Last name: 1-30 letters, apostrophes, or dashes only.";
    }

    document.getElementById("name_text").innerHTML = msg;
}

/* ── MIDDLE INITIAL ───────────────────────────────── */
function validateMI(){
    let v = document.getElementById("mi").value;
    document.getElementById("mi_text").innerHTML =
        (v && !/^[A-Za-z]$/.test(v)) ? "Middle initial: 1 letter only." : "";
}

/* ── DATE OF BIRTH ────────────────────────────────── */
function validateDOB(){
    let dobVal = document.getElementById("dob").value;
    let msg = "";

    if (!dobVal) {
        msg = "Date of birth is required.";
    } else {
        let d = new Date(dobVal);
        let today = new Date();
        today.setHours(0,0,0,0);
        let minDate = new Date();
        minDate.setFullYear(today.getFullYear() - 120);

        if (d > today) {
            msg = "Date of birth cannot be in the future.";
        } else if (d < minDate) {
            msg = "Date of birth cannot be more than 120 years ago.";
        }
    }

    document.getElementById("dob_text").innerHTML = msg;
}

/* ── SSN ──────────────────────────────────────────── */
function formatSSN(field){
    let v = field.value.replace(/\D/g, '');
    if (v.length > 3 && v.length <= 5)
        field.value = v.slice(0,3) + "-" + v.slice(3);
    else if (v.length > 5)
        field.value = v.slice(0,3) + "-" + v.slice(3,5) + "-" + v.slice(5,9);
}

function validateSSN(){
    document.getElementById("ssn_text").innerHTML =
        (!/^\d{3}-\d{2}-\d{4}$/.test(document.getElementById("ssn").value))
        ? "Format required: XXX-XX-XXXX (9 digits)." : "";
}

/* ── EMAIL ────────────────────────────────────────── */
function validateEmail(){
    document.getElementById("email_text").innerHTML =
        (!/^\S+@\S+\.\S+$/.test(document.getElementById("email").value))
        ? "Invalid email. Must be in format: name@domain.tld" : "";
}

/* ── PHONE ────────────────────────────────────────── */
function validatePhone(){
    document.getElementById("phone_text").innerHTML =
        (!/^\d{3}-\d{3}-\d{4}$/.test(document.getElementById("phone").value))
        ? "Phone must be in format: 000-000-0000" : "";
}

/* ── ADDRESS LINE 1 ───────────────────────────────── */
function validateAddress(){
    let v = document.getElementById("addr1").value;
    document.getElementById("addr1_text").innerHTML =
        (v.length < 2 || v.length > 30)
        ? "Address Line 1: required, 2-30 characters." : "";
}

/* ── ADDRESS LINE 2 ───────────────────────────────── */
function validateAddress2(){
    let v = document.getElementById("addr2").value;
    document.getElementById("addr2_text").innerHTML =
        (v && (v.length < 2 || v.length > 30))
        ? "Address Line 2: if entered, must be 2-30 characters." : "";
}

/* ── CITY ─────────────────────────────────────────── */
function validateCity(){
    let v = document.getElementById("city").value;
    let msg = "";
    if (v.length < 2 || v.length > 30) {
        msg = "City: 2-30 characters required.";
    } else if (!/^[A-Za-z' \-]+$/.test(v)) {
        msg = "City: letters, spaces, apostrophes or dashes only.";
    }
    document.getElementById("city_text").innerHTML = msg;
}

/* ── STATE ────────────────────────────────────────── */
function validateState(){
    let val = document.getElementById("state").value;
    document.getElementById("state_text").innerHTML =
        (val === "") ? "Please select a state." : "";
}

/* ── ZIP ──────────────────────────────────────────── */
function validateZip(){
    document.getElementById("zip_text").innerHTML =
        (!/^\d{5}$/.test(document.getElementById("zip").value))
        ? "Zip code must be exactly 5 digits." : "";
}

/* ── SYMPTOMS ─────────────────────────────────────── */
function validateSymptoms(){
    let val = document.getElementById("symptoms").value;
    document.getElementById("symptoms_text").innerHTML =
        (val.length > 0 && val.length < 5)
        ? "Please enter at least 5 characters describing your symptoms." : "";
}

/* ── RADIO BUTTONS ────────────────────────────────── */
function validateRadios(){
    let g = document.querySelector('input[name="gender"]:checked');
    let v = document.querySelector('input[name="vax"]:checked');
    let i = document.querySelector('input[name="ins"]:checked');

    document.getElementById("gender_text").innerHTML = g ? "" : "Please select a gender.";
    document.getElementById("vax_text").innerHTML    = v ? "" : "Please indicate vaccination status.";
    document.getElementById("ins_text").innerHTML    = i ? "" : "Please answer this question.";
}

/* ── USER ID ──────────────────────────────────────── */
function checkUserID(field){
    let v = field.value;
    let msg = "";

    if (v.length === 0) {
        msg = "User ID is required.";
    } else if (/^[0-9]/.test(v)) {
        msg = "User ID cannot start with a number.";
    } else if (v.length < 5) {
        msg = "User ID must be at least 5 characters.";
    } else if (v.length > 20) {
        msg = "User ID must be no more than 20 characters.";
    } else if (/[^A-Za-z0-9_\-]/.test(v)) {
        msg = "User ID: letters, numbers, dash, and underscore only — no spaces.";
    }

    document.getElementById("userid_text").innerHTML = msg;
}

/* ── PASSWORDS ────────────────────────────────────── */
function checkPasswords(){
    let p1  = document.getElementById("pw1").value;
    let p2  = document.getElementById("pw2").value;
    let uid = document.getElementById("userid").value;
    let msg1 = "", msg2 = "";

    if (p1.length > 0) {
        if (p1.length < 8)          msg1 = "Password must be at least 8 characters.";
        else if (!/[A-Z]/.test(p1)) msg1 = "Password must contain at least 1 uppercase letter.";
        else if (!/[a-z]/.test(p1)) msg1 = "Password must contain at least 1 lowercase letter.";
        else if (!/[0-9]/.test(p1)) msg1 = "Password must contain at least 1 number.";
        else if (p1 === uid)        msg1 = "Password cannot be the same as your User ID.";
    }

    if (p2.length > 0 && p1 !== p2) msg2 = "Passwords do not match.";

    document.getElementById("pw1_text").innerHTML = msg1;
    document.getElementById("pw2_text").innerHTML = msg2;
}

/* ── REVIEW / GET DATA ────────────────────────────── */
function reviewData(){
    let checkedDiseases = [];
    let diseaseBoxes = ["Mumps","Measles","Rubella","ChickenPox","Covid19","HeartDisease"];
    diseaseBoxes.forEach(function(name){
        let cb = document.querySelector('input[name="' + name + '"]');
        if (cb && cb.checked) checkedDiseases.push(name);
    });

    let genderEl = document.querySelector('input[name="gender"]:checked');
    let vaxEl    = document.querySelector('input[name="vax"]:checked');
    let insEl    = document.querySelector('input[name="ins"]:checked');

    let rows = [
        ["First Name",          document.getElementById("fname").value],
        ["Middle Initial",      document.getElementById("mi").value],
        ["Last Name",           document.getElementById("lname").value],
        ["Date of Birth",       document.getElementById("dob").value],
        ["SSN",                 "(hidden)"],
        ["Email",               document.getElementById("email").value],
        ["Phone",               document.getElementById("phone").value],
        ["Address Line 1",      document.getElementById("addr1").value],
        ["Address Line 2",      document.getElementById("addr2").value],
        ["City",                document.getElementById("city").value],
        ["State",               document.getElementById("state").value],
        ["Zip",                 document.getElementById("zip").value],
        ["Medical History",     checkedDiseases.join(", ") || "None selected"],
        ["Gender",              genderEl ? genderEl.value : "Not selected"],
        ["Vaccinated?",         vaxEl    ? vaxEl.value    : "Not selected"],
        ["Ready to party?",     insEl    ? insEl.value    : "Not selected"],
        ["Monthly Budget",      "$" + document.getElementById("budget").value],
        ["Symptoms",            document.getElementById("symptoms").value],
        ["User ID",             document.getElementById("userid").value],
        ["Password",            "(hidden)"]
    ];

    let tbody = document.getElementById("reviewBody");
    tbody.innerHTML = "";
    rows.forEach(function(row){
        let tr = document.createElement("tr");
        tr.innerHTML = "<td><strong>" + row[0] + "</strong></td><td>" + (row[1] || "&nbsp;") + "</td>";
        tbody.appendChild(tr);
    });

    document.getElementById("reviewSection").style.display = "block";
    document.getElementById("reviewSection").scrollIntoView({behavior:"smooth"});
}

/* ── REMOVE REVIEW (called on reset) ─────────────── */
function removeReview(){
    document.getElementById("reviewSection").style.display = "none";
    document.getElementById("reviewBody").innerHTML = "";
    document.getElementById("submitBtn").style.display = "none";

    // Clear all error messages
    let msgs = document.querySelectorAll(".errmsg");
    msgs.forEach(function(m){ m.innerHTML = ""; });
}

/* ── VALIDATE FORM (VALIDATE button) ─────────────── */
function validateForm(){
    // Run all validators
    validateName();
    validateMI();
    validateDOB();
    validateSSN();
    validateEmail();
    validatePhone();
    validateAddress();
    validateAddress2();
    validateCity();
    validateState();
    validateZip();
    validateSymptoms();
    validateRadios();
    checkUserID(document.getElementById("userid"));
    checkPasswords();

    // Check if any error messages are showing
    let errors = document.querySelectorAll(".errmsg");
    let hasErrors = false;
    errors.forEach(function(e){
        if (e.innerHTML !== "") hasErrors = true;
    });

    // Also check required radio groups (they only validate when clicked)
    let g = document.querySelector('input[name="gender"]:checked');
    let v = document.querySelector('input[name="vax"]:checked');
    let i = document.querySelector('input[name="ins"]:checked');
    if (!g) { document.getElementById("gender_text").innerHTML = "Please select a gender."; hasErrors = true; }
    if (!v) { document.getElementById("vax_text").innerHTML    = "Please indicate vaccination status."; hasErrors = true; }
    if (!i) { document.getElementById("ins_text").innerHTML    = "Please answer this question."; hasErrors = true; }

    if (hasErrors) {
        alert("Please fix the highlighted errors before submitting.");
        document.getElementById("submitBtn").style.display = "none";
        return false;
    } else {
        alert("All fields look good! You may now click SUBMIT.");
        document.getElementById("submitBtn").style.display = "inline";
        return true;
    }
}
