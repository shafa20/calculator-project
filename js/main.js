
function insertnumber(number){
  var exist=$("#result").val();
  $("#result").val(exist + number);
}



function clearall(){
  $("#result").val('');
}

function claculation(){
 var answer=eval($("#result").val());
  $("#result").val(answer);
}

function Delete(){
  var pvalue=$("#result").val();
 
  if(pvalue !=''){
      $("#result").val(pvalue.slice(0,-1));
  }
}