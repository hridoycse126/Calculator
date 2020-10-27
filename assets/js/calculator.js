var box=document.getElementById('display');

function addtoscreen(x){
  box.value+=x;
  if(x=='CE'||x=='C'){

    box.value='';
  }
   }
function answer(){
	  x=box.value;
	  x=eval(x);
	  box.value=x;
	  
	}
function power(y) {

	x = box.value;
	x = Math.pow(x,y);
	box.value = x;
}
function backspace(){
  var num=box.value;
  var len=num.length-1;
  var newNum=num.substring(0,len);
  box.value = newNum;
}