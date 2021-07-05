setTimeout(()=>{
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const cross = document.querySelector('.close-cross');
  const opacityMenu = document.querySelector('.menu-opacity');
  const ancors = document.querySelectorAll('.menu a');

burger.onclick = function(){
  menu.classList.toggle('active');
  opacityMenu.style.display = 'flex';
  document.body.style.overflowY = 'hidden';
};

cross.onclick = function(){
  menu.classList.remove('active');
  opacityMenu.style.display = 'none';
  document.body.style.overflowY = 'scroll';
};

for(let i = 0; i<ancors.length; i++){
ancors[i].onclick = function(){
  menu.classList.remove('active');
  opacityMenu.style.display = 'none';
  document.body.style.overflowY = 'scroll';
};
}

},500);




