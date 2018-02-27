function check(){
    var cigars = document.getElementById("cigars").value;
    x = parseInt(cigars);
    if (x < 40){
        partyStatus.innerHTML = "The party is not successful (too few cigars).";
    } 
    else {
        checkDay();
        if (weekend == false && x > 60){
            partyStatus.innerHTML = "The party is not successful (too many cigars).";  
        }
        else {
            partyStatus.innerHTML = "The party is successful!!!";
        }
    }
}

function checkDay(){
    var day = document.getElementById("daySelect").value;
    if (day == "sunday"){
        weekend = true;
    }
    else if (day == "saturday"){
        weekend = true;
    }
    else {
        weekend = false;
    }
}