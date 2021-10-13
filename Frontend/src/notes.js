const tb = document.getElementById('tabela-notas')

let notasLuis = [9.3, 9.7]
let notasLucas = [9.6, 9.3]

const mediaLuis = (notasLuis[0] + notasLuis[1]) / 2
const mediaLucas = (notasLucas[0] + notasLucas[1]) / 2 

notasLuis.push(mediaLuis)
notasLucas.push(mediaLucas)


for (let i = 0; i < notasLuis.length; i++){
    tb.rows[i+1].cells[2].innerHTML = `<span>${notasLuis[i]}</span>`
}


for (let i = 0; i < notasLucas.length; i++){
    tb.rows[i+1].cells[1].innerHTML = `<span>${notasLucas[i]}</span>`
}
