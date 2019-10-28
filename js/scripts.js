function calcbdate(){
    var dob = document.getElementById("dob").value;
    if(dob==""|| dob==null){
        alert("Please enter a valid date");
    }
    var ent = new Date(dob);
    var date = parseInt(ent.getDate());
    var month = parseInt(ent.getMonth());
    var year = parseInt(ent.getFullYear());
    var day = ent.getDay();


    if (month===0){
        month=11;
    }
    else if(month===1){
        month=12;
    }
    else if(month===2){
        month=1;
    }
    else if(month===3){
        month=2;
    }
    else if(month===4){
        month=3;
    }
    else if(month===5){
        month=4;
    }
    else if(month===6){
        month=5;
    }
    else if(month===7){
        month=6;
    }
    else if(month===8){
        month=7;
    }else if(month===9){
        month=8;
    }else if(month===10){
        month=9;
    }else if(month===11){
        month=10;
    }

    if (month===11 || month===12){
        var nw = year-1;
    }
    else{
        var nw = year;
    }

    var yr= nw.toString().split('');
    var yrlst = yr.map(String);
    var cc = parseInt(yrlst[0].concat(yrlst[1]));
    var yy = parseInt(yrlst[2].concat(yrlst[3]));

    var girlakan = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    var manakan =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

    
    var typeofgender = document.getElementsByName("gender");
    for(i=0; i<typeofgender.length;i++){
        if(typeofgender[i].checked){
            var sex = typeofgender[i].value;
        }
    }
   
    var w = Math.floor(date + ((2.6*month)-2)+yy+(yy/4)+(cc/4)-(2*cc))%7;
    var dow1 = w.toString();
    
    if(day===0){
        dow1=0;
    }
    if(day===1){
        dow1=1;
    }
    if(day===2){
        dow1=2;
    }
    if(day===3){
        dow1=3;
    }
    if(day===4){
        dow1=4;
    }
    if(day===5){
        dow1=5;
    }
    if(day===6){
        dow1=6;
    }
    
    var dow1 = dow1.toString();
    
    if(sex==="female" && dow1==="0"){
        var akan = girlakan[0];
    }
    else if(sex==="female" && dow1==="1"){
        var akan = girlakan[1];
    }
    else if(sex==="female" && dow1==="2"){
        var akan = girlakan[2];
    }
    else if(sex==="female" && dow1==="3"){
        var akan = girlakan[3];
    }
    else if(sex==="female" && dow1==="4"){
        var akan = girlakan[4];
    }
    else if(sex==="female" && dow1==="5"){
        var akan = girlakan[5];
    }
    else if(sex==="female" && dow1==="6"){
        var akan = girlakan[6];
    }

    if(sex==="male" && dow1==="0"){
        var akan = manakan[0];
    }
    else if(sex==="male" && dow1==="1"){
        var akan = manakan[1];
    }
    else if(sex==="male" && dow1==="2"){
        var akan = manakan[2];
    }
    else if(sex==="male" && dow1==="3"){
        var akan = manakan[3];
    }
    else if(sex==="male" && dow1==="4"){
        var akan = manakan[4];
    }
    else if(sex==="male" && dow1==="5"){
        var akan = manakan[5];
    }
    else if(sex==="male" && dow1==="6"){
        var akan = manakan[6];
    }
  
    var rlt = document.getElementById("results").value= "Your Akan name is: " + akan;

}