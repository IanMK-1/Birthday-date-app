function calcbdate(){
    var dob = document.getElementById("dob").value;
    var ent = new Date(dob);
    var date = ent.getDate();
    var month = ent.getMonth();
    var year = ent.getFullYear();
    
    var yr= year.toString().split('');
    var yrlst = yr.map(String);
    var cc = parseInt(yrlst[0].concat(yrlst[1]));
    
    var yy = parseInt(yrlst[2].concat(yrlst[3]));


    alert(date);
    
    
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var girlakan = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];


    var typeofgender = document.getElementsByName("gender");
    for(i=0; i<typeofgender.length;i++){
        if(typeofgender[i].checked){
            var sex = typeofgender[i].value;
        }
    }

}