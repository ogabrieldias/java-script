function verificar() {  
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img") // cria um elemento de imagem
        img.setAttribute("id", "foto") // define o id do elemento de imagem
        if (fsex[0].checked) { // se o primeiro radio button estiver selecionado
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                // criança
                
            } else if (idade < 21) {
                // jovem
                
            } else if (idade < 50) {
                // adulto
                
            } else {
                // idoso
                
            }
        } else if (fsex[1].checked) { // se o segundo radio button estiver selecionado
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                // criança
                
            } else if (idade < 21) {
                // jovem
                
            } else if (idade < 50) {
                // adulta
                
            } else {
                // idosa
                
            }
        }
        res.style.textAlign = "center" // centraliza o texto do resultado
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.` // exibe o resultado na div res
        res.appendChild(img) // adiciona a imagem ao resultado
    }
}