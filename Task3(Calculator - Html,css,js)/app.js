
let str = "";
let btns = document.querySelectorAll('button')
const splch = ["%","*","/","-","+","=","."] 

Array.from(btns).forEach((button) => {
   button.addEventListener('click', (e) => {
    if(e.target.innerHTML == '=' && e.target.innerHTML != ""){
        if (str.length == 3){
        let res  = eval(str.replace("%","/100"));
        str = Math.floor(res);
        document.querySelector('input').value = str ;
        }
        else{
            str = eval(str)
            document.querySelector('input').value = str ;
         }
    }

    else if(e.target.innerHTML == 'AC'){
        str = "";
        document.querySelector('input').value = str
    }
    
    else if(e.target.innerHTML == "DEL"){
        str = str.toString().slice(0,-1);
        document.querySelector('input').value = str;
    }

    else if (e.target.innerHTML == "" && splch.includes(e.target.innerHTML)){
        str += e.target.innerHTML;        
    }

    else {
    console.log(e.target.dataset.value);
    str = str + e.target.innerHTML;
    document.querySelector('input').value = str ;
    }
   })
})