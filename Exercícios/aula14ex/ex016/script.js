function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert("Passo inválido! Considerando PASSO 1")
            p = 1 // Se o passo for menor ou igual a zero, considera-se o passo 1
        }

        if (i < f) {
            // Contagem crescente
            for (let c= i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}` // \u{1F449} é o emoji de seta para a direita
            }    
        } else {
            // Contagem decrescente
            for (let c= i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}` // \u{1F449} é o emoji de seta para a direita
            }    
        }
        res.innerHTML += `\u{1F3C1}` // \u{1F3C1} é o emoji de bandeira de chegada
        
    }
}

