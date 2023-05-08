const num1 = document.getElementById('num1');
const num2= document.getElementById('num2');
const respuesta= document.getElementById('res');
const btnCalcular= document.getElementById('calcular');

btnCalcular.addEventListener('click',e=>{
    calcular()
})
const calcular = () =>{
    const op1 = parseFloat(num1.value);
    const op2 = parseFloat(num2.value);
    let calcular = op1+op2;
    respuesta.innerHTML=calcular
}