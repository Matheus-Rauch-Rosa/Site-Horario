function zero(z) {
    if (z<10) {z = "0" + z}
    return z
}

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = zero(data.getHours())
    var min = zero(data.getMinutes())
    msg.innerHTML = `Agora são ${hora}:${min} horas`
    if(hora >= 0 && hora < 12) {
        // Bom dia
        img.src = "manha.png"
        document.body.style.background = '#de9e57'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = "tarde.png"
        document.body.style.background = '#79553b'
    } else {
        //Boa noite
        img.src = "noite.png"
        document.body.style.background = '#022538'
    }
}