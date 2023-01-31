

let input=document.getElementById("input").value




function cal(x){
document.getElementById("input").value+=x
  
}


function sub(){

  let val=document.getElementById("input").value

  let result=eval(val)
  document.getElementById("input").value=result

}

function del(){
    document.getElementById("input").value=""
}