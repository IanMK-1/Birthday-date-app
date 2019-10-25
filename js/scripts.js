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

    
    var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

    var girlakan = ["Adwoa","Abenaa","Akua","Yaa","Afua","Ama","Akosua"];

    var manakan =["Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame","Kwasi"];


    var typeofgender = document.getElementsByName("gender");
    for(i=0; i<typeofgender.length;i++){
        if(typeofgender[i].checked){
            var sex = typeofgender[i].value;
        }
    }

    var dow = (date+((2.6*month)-0.2)-(2*cc)+(yy/4)+(cc/4))%7;
    var dow1 = dow.toFixed();
    

    if(sex==="female" && dow1==="1"){
        var akan = girlakan[0];
    }
    else if(sex==="female" && dow1==="2"){
        var akan = girlakan[1];
    }
    else if(sex==="female" && dow1==="3"){
        var akan = girlakan[2];
    }
    else if(sex==="female" && dow1==="4"){
        var akan = girlakan[3];
    }
    else if(sex==="female" && dow1==="5"){
        var akan = girlakan[4];
    }
    else if(sex==="female" && dow1==="6"){
        var akan = girlakan[5];
    }
    else if(sex==="female" && dow1==="7"){
        var akan = girlakan[6];
    }

    if(sex==="male" && dow1==="1"){
        var akan = manakan[0];
    }
    else if(sex==="male" && dow1==="2"){
        var akan = manakan[1];
    }
    else if(sex==="male" && dow1==="3"){
        var akan = manakan[2];
    }
    else if(sex==="male" && dow1==="4"){
        var akan = manakan[3];
    }
    else if(sex==="male" && dow1==="5"){
        var akan = manakan[4];
    }
    else if(sex==="male" && dow1==="6"){
        var akan = manakan[5];
    }
    else if(sex==="male" && dow1==="7"){
        var akan = manakan[6];
    }
  
    var rlt = document.getElementById("results").value= "Your Akan name is: " + akan;
    
}