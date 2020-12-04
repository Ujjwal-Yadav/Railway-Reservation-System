var displayL=0,displayS=0;

function showL(){
if(displayS%2===0){
$( "#bac2" ).toggle( 400 );
displayL++;
}
}
function showS(){
if(displayL%2===0){
$( "#bac3" ).toggle( 400 );
displayS++;
}
}

var displayI=1,displayD=0;

function showD(){
if(displayD===0){
$( "#ad1" ).hide( 200 );
$( "#ad2" ).show( 200 );
displayI=0;
displayD=1;
}
}
function showI(){
if(displayI===0){
$( "#ad2" ).hide( 200 );
$( "#ad1" ).show( 200 );
displayI=1;
displayD=0;
}
}