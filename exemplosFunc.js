checkFunc()

function checkFunc(){
    console.log("Os dado do funcionario são: ")
    loginFunc("Matheus", 12345)
    cadastrarFunc("Matheus")
    dadosFunc(121.708 , "Rua pratinha")
}

function loginFunc(Nome, senha){
    console.log("Nome do funcionario: " + Nome + "e a senha é: " + senha)
}
function cadastrarFunc(Nome){
    console.log("Nome: " + Nome)
}
function dadosFunc(Cpf, endereco){
    if(Cpf = true){
    console.log("CPF conferido |" + " Endereço é: " + endereco)
    }else{
        console.log("CPF com restrição")
    }

    
}