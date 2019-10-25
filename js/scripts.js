function calcbdate(){
    var dob = document.getElementById("dob").value;
    var ent = new Date(dob);
    var date = ent.getDate();
    var month = ent.getMonth();
    var year = ent.getFullYear();
    alert(year);




}