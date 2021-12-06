var listaDePecas = ["Filtro do Ar", "Motor", "Amortecedor"]

if (listaDePecas.length < 10) {

    console.log("É possível cadastrar mais peças")

}else{
    console.log("Não tem mais espaço na lista")
    }


    let peso = 50;
    if(peso < 100){
        console.log("A peça deve pesar no minimo 100g")
    }else{
        console.log("A peça possui peso adequado")
    }

    let NomePeca = "Disco de Freio"
    if(NomePeca.length > 3){
        console.log("Nome de peça está adequado para o cadastro")
    
    }else if(NomePeca.length == 0){
        console.log("O nome da Peça não pode ser vazio.")
    
    }else{
        console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado.")
    }

    switch(NomePeca.length){
        case 0:
            console.log("O nome da peça não pode ser vazio.")
            break

        case 1:
        case 2:
        case 3:
            console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado. ")
            break
        default:
            console.log("Nome da peça está adequado. ")
            break
    }
