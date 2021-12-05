function showTime(){
    var date=new Date();
    var hour=date.getHours(); 
    var mins=date.getMinutes(); 
    //  
    var period="AM";
    if(hour==0)
     hour=12;
    if(hour>12)
    hour=hour-12;
    period="PM";
    hour=(hour<10)?"0"+hour:hour;
    mins=(mins<10)?"0"+mins:mins;
    var time=hour+":"+mins+" "+period;
    document.getElementById("ourclock").innerText=time;
    document.getElementById("ourclock").textContent=time;
    setTimeout(showTime, 1000);    
}
      showTime();