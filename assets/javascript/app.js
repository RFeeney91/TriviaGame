var span = document.querySelector("#count");

function countDown(counter){

    var interval = setInterval(function(){
        
        var minutes = ((counter / 60) | 0) + "";
        var seconds = (counter % 60) + "";
        var format = ""
                      + new Array(3-minutes.length).join("0") + minutes 
                      + ':' 
                      + new Array(3-seconds.length).join("0") + seconds;

        span.innerHTML = format;

        counter--;

        if(counter === 0){
            clearInterval(interval);
            alert('sorry, out of time')
        }
        
    },1e3)
}

countDown(120);