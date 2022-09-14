let item1_nome ;
let item1_preco ;
let item2_nome ;
let item2_preco ;
let item3_nome ;
let item3_preco ;


function botaoAtivado() {
    const pratos = document.querySelector('.pratos .selecionado')
    console.log(pratos)
    const bebidas = document.querySelector('.bebidas .selecionado')
    console.log(bebidas)
    const sobremesa = document.querySelector('.sobremesa .selecionado')
    console.log(sobremesa)

    if (pratos !== null || bebidas !== null || sobremesa !== null) {
        const documento_verde = document.querySelector(".background-dentro")
        documento_verde.classList.add("verde")
        let palavra = documento_verde.getElementsByTagName("h6")[0]
        palavra.innerHTML = "Fechar pedido"

        return true
    }
}
function botaoLigado() {
        const nomePessoa = prompt("Digite seu nome")
        const local = prompt("Digite o local de entrega")
        if(nomePessoa !== null && local!== null){
            const primeiro_elemento = document.querySelector(".pratos .selecionado")
        item1_nome=primeiro_elemento.getElementsByTagName("h3")[0]
        item1_preco=primeiro_elemento.getElementsByClassName("preco-numero")[0].innerHTML
        console.log(item1_preco.innerHTML)
        item1_preco= Number(item1_preco.replaceAll(',','.'))
        
        const segundo_elemento = document.querySelector(".bebidas .selecionado")
        item2_nome=segundo_elemento.getElementsByTagName("h3")[0]
        item2_preco=segundo_elemento.getElementsByClassName("preco-numero")[0].innerHTML
        console.log(item2_preco.innerHTML)
        item2_preco= Number(item2_preco.replaceAll(',','.'))
        
        const terceito_elemento = document.querySelector(".sobremesa .selecionado")
        item3_nome=terceito_elemento.getElementsByTagName("h3")[0]
        item3_preco=terceito_elemento.getElementsByClassName("preco-numero")[0].innerHTML
        console.log(item3_preco.innerHTML)
        item3_preco= Number(item3_preco.replaceAll(',','.'))
        
        let soma = item1_preco+item2_preco+item3_preco
        
        let mensagem = `Olá, gostaria de fazer o pedido:
        - Prato: ${item1_nome.innerHTML}
        - Bebida: ${item2_nome.innerHTML}
        - Sobremesa: ${item3_nome.innerHTML}
        Total: R$ ${soma.toFixed(2)}
        
        Nome - ${nomePessoa}
        Local - ${local}
        `
        
        
         
        let uri = encodeURIComponent(mensagem)
        window.open( 'https://wa.me/5512992545942?text='+uri)
    

        }

        
}

function selecionado(classPedido) {
    const pratoSelecionado = document.querySelector('.pratos .selecionado');

    const selecionado = document.querySelector(classPedido)
    selecionado.classList.toggle('selecionado')

    const check = document.querySelector(`${classPedido} .caixinha-pratos .check`)
    check.classList.toggle('escondido')

    botaoAtivado()
}


function selecionadoBebidas(classPedido) {
    const pratoSelecionado = document.querySelector('.bebidas .selecionado');

    const selecionado = document.querySelector(classPedido)
    selecionado.classList.toggle('selecionado')

    const check = document.querySelector(`${classPedido} .caixinha-pratos .check2`)
    check.classList.toggle('escondido')

    botaoAtivado()
}


function selecionadoSobremesas(classPedido) {
    const pratoSelecionado = document.querySelector('.sobremesa .selecionado');

    const selecionado = document.querySelector(classPedido)
    selecionado.classList.toggle('selecionado')

    const check = document.querySelector(`${classPedido} .caixinha-pratos .check3`)
    check.classList.toggle('escondido')

    botaoAtivado()
}