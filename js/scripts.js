function calcbdate(){
    var dob = document.getElementById("dob").value;
    var ent = new Date(dob);
    var date = ent.getDate();
    var month = ent.getMonth();
    var year = ent.getFullYear();
    alert(year);


    var typeofgender = document.getElementsByName("gender");
    for(i=0; i<typeofgender.length;i++){
        if(typeofgender[i].checked){
            var sex = typeofgender[i].value;
        }
    }

}