const typearea=document.getElementById('typearea');
const btn=document.getElementById('btn');
const demo=document.getElementById('demo');
const result=document.getElementById('result');
var startTime,endTime;
	var demo_text=["The purpose of our lives is to be happy",
                   "Try to be a rainbow in someone's cloud",
                    "A book is a medium for recording information in the form of writing or images, typically composed of many pages bound together and protected by a cover"];
btn.addEventListener("click",function(){
   if(this.innerText=='Start')
   {
   	typearea.disabled=false;
   	typearea.value="";
   	startTest();
   }
  else if(this.innerText=='Done')
   {
   	typearea.disabled=true;
   	btn.innerText='Start';
   	evaluateTest();
   }
})
 const startTest =()=>{
	demo.innerText=demo_text[Math.floor(Math.random()*demo_text.length)];
	let d=new Date();
	 startTime=d.getTime();
	 btn.innerText="Done";
}
const evaluateTest=()=>{
	let d=new Date();
	 endTime=d.getTime();
	 let timeTaken=(endTime-startTime)/1000;

	let totalstr=typearea.value;
	let wordCount=wordCounter(totalstr);

	let speed=Math.round((wordCount/timeTaken)*60);

	let resultmsg="You typed at the speed of "+" " + speed + " " +"words per minute";
	 
     resultmsg += compareWords(demo.innerText,totalstr);

	result.innerText=resultmsg;
}
const compareWords=(str1,str2)=>{
let strWords1=str1.split(" ");
let strWords2=str2.split(" ");
let errorcnt=0;
strWords1.forEach( function(element, index) {
	if(element!=strWords2[index]){
		errorcnt++;
	}
});
let correctWords=strWords1.length-errorcnt;
return (" with "+correctWords+" correct out of "+ strWords1.length + " and total number of error are " 
	+ errorcnt);
}
const wordCounter=(str)=>{
	let response =str.split(" ").length;
	return response;
}

	

