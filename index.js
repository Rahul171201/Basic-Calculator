var z = 0;
var l;
function getExpression(S){
    if(z===0){
        var y = S;
        z++;
        document.querySelector("p").innerHTML = y;
        l = y;
    }
    else{
        y = l + S;
        z++;
        document.querySelector("p").innerHTML = y;
        l = y;
    }
}

for(var i=0;i<16;i++){
    var x = document.querySelectorAll("button");
    x[i].addEventListener("click", function(){

            if(this.textContent==="="){
                document.querySelector("p").innerHTML = eval(l);
                z = 0;
            }
            else{
                getExpression(this.textContent);
            }
            
    });
}