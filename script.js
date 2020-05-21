var toggle=true;
function menu() {
    if(toggle!=true){
        document.getElementById("aside").style.display = "block";
        document.getElementById("sidebar").style.width = "100%";
        document.getElementById("sidebar").style.display = "block";
        toggle=true;
    }
    else if(toggle==true){
        document.getElementById("aside").style.display = "none";
        document.getElementById("sidebar").style.display = "none"; 
        toggle=false;
    }
}
