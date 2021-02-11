document.getElementById("start").addEventListener('click',startList  =>{ 
    let i;
    let div;
    for(i=1;i<100;i++)
    {
        if(i % 3 ==0 && i % 5 == 0){
            div = document.getElementById("out");
            div.innerHTML += `<div id="fb">FizzBuzz</div>`;

        }
        else if(i % 3 == 0){
            div = document.getElementById("out");
            div.innerHTML += `<div id="fb">Fizz</div>`;
        }
        else if(i % 5 == 0){
            div = document.getElementById("out");
            div.innerHTML += `<div id="fb">Buzz</div>`;
        }
        else{
            div = document.getElementById("out");
            div.innerHTML += `<div id="others">${i}</div>`;
        }
    }
});

document.getElementById("reset").addEventListener('click', restart => {
    location.reload();
});