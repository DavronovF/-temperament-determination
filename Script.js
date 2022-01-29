let xol = 0;
let san = 0;
let mel = 0;
let fle = 0;
let sum = 0;
function green(n, t){
    document.getElementById(n).style.backgroundColor = "rgba(89, 243, 89, 0.562)";
    if(t>200){
        document.getElementsByClassName("answer")[(t-200)*2-1].style.backgroundColor = "rgba(148, 243, 191, 0.795)";
        document.getElementsByClassName("answer")[(t-200)*2-2].style.backgroundColor = "white";
    }else{
        document.getElementsByClassName("answer")[(t-101)*2].style.backgroundColor = "rgba(148, 243, 191, 0.795)";
        document.getElementsByClassName("answer")[(t-101)*2+1].style.backgroundColor = "white";
    }
    
    if(t>=101 && t<=120){xol++;}
    if(t>=121 && t<=140){san++;}
    if(t>=141 && t<=160){fle++;}
    if(t>=161 && t<=180){mel++;}
}
function result(){
    document.getElementById("result").style.display = "block";
    for(let i=0.1;i<=1;i+=0.1){
    setTimeout(function(){document.getElementById("result").style.opacity = i;},100);
    }
    let sum = xol+san+fle+mel;
    let xol1 = Math.round(xol*100/sum);
    let san1 = Math.round(san*100/sum);
    let fle1 = Math.round(fle*100/sum);
    let mel1 = 100-(xol1+san1+fle1);
    
    let javob = [
        {name:'Xolerik', value: xol1},
        {name:'Sangvinik', value: san1},
        {name:'Flegmatik', value: fle1},
        {name:'Melanxolik', value: mel1}
    ]
    javob.sort(function(a,b){
        return b.value - a.value;
    });
    document.getElementById("temp1").innerHTML = javob[0].name ;
    document.getElementById("temp2").innerHTML = javob[1].name ;
    document.getElementById("temp3").innerHTML = javob[2].name ;
    document.getElementById("temp4").innerHTML = javob[3].name ;

    document.getElementById("result_1").innerHTML = javob[0].value + "%";
    document.getElementById("result_2").innerHTML = javob[1].value + "%";
    document.getElementById("result_3").innerHTML = javob[2].value + "%";
    document.getElementById("result_4").innerHTML = javob[3].value + "%";
    if(javob[0].value == javob[1].value){
        document.getElementById("temp2").style.color = "rgb(110, 5, 5)";
        document.getElementById("result_2").style.color = "rgb(110, 5, 5)";
    }
    xol = 0;
    san = 0;
    mel = 0;
    fle = 0;
    sum = 0;
}
let span = document.getElementsByClassName("close")[0];
span.onclick = function(){window.open("index.html", "_self");}
