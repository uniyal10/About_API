var x=document.getElementById("input");
var xhr=new XMLHttpRequest();
xhr.open(GET,'./API/Friends.json',true);
xhr.onload=function(){
    console.log(xhr.responseText);
}
xhr.send();
