function mostrar (){
    var texto = document.getElementById('i1').value
    var cor = document.getElementById('i2').value
     var data = document.getElementById('i3').value
     var check = document.getElementById('i4').value


    var printTexto = document.getElementById('printTexto')
    var printColor = document.getElementById('printColor')
     var printData = document.getElementById('printData')
     var printChek = document.getElementById('printChec')

      

    printTexto.innerHTML =  `o texto digitado foi :  ${texto}`
    printColor.innerHTML = `a cor escolhida foi : ${cor}`
    printData.innerHTML =  `a data escolhida foi :  ${data}`
    printCheck.textContent =  `sim ou nao :  ${check}`


}
