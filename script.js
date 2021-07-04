setTimeout(()=>{
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const cross = document.querySelector('.close-cross');
  const opacityMenu = document.querySelector('.menu-opacity');
    
    
    console.log(burger, menu);
  


    
burger.onclick = function(){
  menu.classList.toggle('active');
  opacityMenu.style.display = 'flex';

};


cross.onclick = function(){
  menu.classList.remove('active');
  opacityMenu.style.display = 'none';

};


},500);




