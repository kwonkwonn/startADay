const aboutDate={
    whatTimeRN: new Date(),   
    greetingTime(){
        const Letter=document.querySelector(".greetingLetter");
        const hours=this.whatTimeRN.getHours();
        if(hours<=5||hours>=21){
            Letter.innerHTML="<p>Good Night</p>"
        }else if(hours<=11){
            Letter.innerHTML="<p>Good Morning</p>"
        }else if(hours<=17){
            Letter.innerHTML="<p>Good Afternoon</p>"
        }else Letter.innerHTML="<p>Good Evening</p>"
        
    }
}
window.addEventListener('DOMContentLoaded', aboutDate.greetingTime());
//모두 로드되면 인삿말 출력



