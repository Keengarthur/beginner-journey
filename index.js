const toggleBtn = document.querySelector('.toggle'),
        menu = document.querySelector('.menu');


toggleBtn.addEventListener('click',function(){
    let a = toggleBtn.classList;

        a.contains('open')?(a.remove('open'),menu.style.width='0'):
        (a.add('open'),menu.style.width = '80%')
  
},false)

