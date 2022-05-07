function mudarCor() {
    
    let textRed = document.getElementById('idRed');
    let textGreen = document.getElementById('idGreen');
    let textBlue = document.getElementById('idBlue');

    let red = document.getElementById('InputRed').value;
    let green = document.getElementById('InputGreen').value;
    let blue = document.getElementById('InputBlue').value;

    let cor = `rgb(${red},${green},${blue})`;
    let rgb = document.getElementById('RGB');
    rgb.style.color = cor;
    
    document.getElementById('elementos').style.boxShadow = `0px 0px 70px ${cor}`;

    textRed.value = red;
    textGreen.value = green;
    textBlue.value = blue;
 
}

document.getElementById("InputRed").addEventListener('input',mudarCor);
document.getElementById("InputGreen").addEventListener('input',mudarCor);
document.getElementById("InputBlue").addEventListener('input',mudarCor);

window.onload = mudarCor;