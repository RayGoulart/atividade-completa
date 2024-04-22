function gerarFizzBuzz(){
    let resultado09 = document.getElementById('resultado09')
    for(i=1; i<=100; i++){
        let MultiPOr3 = false
        let multiPor5 = false
        if(i % 3 == 0) {
            resultado09.innerHTML += "Fizz"
            MultiPOr3 = true
        }
        if(i % 5 == 0){
            resultado09.innerHTML += "Buzz"
            multiPor5 = true
        } 
        if(MultiPOr3 == false && multiPor5 == false){
            resultado09.innerHTML += i + '<br>'
        }else{
            resultado09.innerHTML += '<br>'
        }
    }
}