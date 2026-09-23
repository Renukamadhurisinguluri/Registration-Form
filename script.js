document.querySelector('form').addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const rollno = document.getElementById("rollno").value.trim();
    const phno = document.getElementById("phno").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const dob = document.getElementById("dob").value;
    const branch = document.getElementById("branch").value;
    const course = document.getElementById("course").value;

    const gender = document.querySelector('input[name="gender"]:checked');

    if (
        name === "" ||
        rollno === "" ||
        phno === "" ||
        email === "" ||
        password === "" ||
        dob === "" ||
        branch === "select branch" ||
        course === "select a course" ||
        gender === null
    ) {
        alert("Enter required fields ⚠️");
    } 
    else {
        alert("Submitted Successfully 👍");
        this.reset();
    }
});