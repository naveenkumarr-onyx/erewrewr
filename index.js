var navStatus = 0 
var x = document.querySelector('button');


x.addEventListener('click',()=>{

    if(!navStatus){
        $('.maindiv').css({width:"100%"})
        $('li').css('display','block')
        $('button').css('background-color','white')
        navStatus=1
    }else{
        $('.maindiv').css('width','0')
        $('li').css({display:'none',Transition:"1s"})
        $('button').css('background-color','')
        navStatus=0
    }

})
