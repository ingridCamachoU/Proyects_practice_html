const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
const list = document.querySelectorAll('.list');

menuToggle.onclick = ()=>{
    navigation.classList.toggle('open');
};

function activarLink () {
    list.forEach((item)=>item.classList.remove('active'));
    this.classList.toggle('active');
}

list.forEach((item)=>item.addEventListener('click', activarLink));
