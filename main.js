let oldInput = document.querySelector(".old")
let newInput = document.querySelector(".new")
let buttons = document.querySelectorAll("button")

let useOperator = false
let usePoint = false
let operator = null

buttons.forEach(ele=>ele.addEventListener("click",_=>ele.hasAttribute("data-clear")? clear() : null))
buttons.forEach(ele=>ele.addEventListener("click",_=>ele.hasAttribute("data-number")? update(ele.textContent,newInput,true) : null))
buttons.forEach(ele=>ele.addEventListener("click",_=>ele.hasAttribute("data-operator")? update(ele.textContent,newInput,false) : null))
buttons.forEach(ele=>ele.addEventListener("click",_=>ele.hasAttribute("data-equal")? updateValues() : null))




function updateValues(){
    oldInput.textContent = cacl(operator, oldInput.textContent, newInput.textContent )
    newInput.textContent = ""
    operator = null
    useOperator = false
    usePoint = false

}

function cacl(ope,num1,num2){
    if(ope === "+"){
        return parseFloat(num1) + parseFloat(num2)
    }else if(ope === "-"){
        return parseFloat(num1) - parseFloat(num2)
    }else if(ope === "x"){
        return parseFloat(num1) * parseFloat(num2)
    }else if(ope === "/"){
        return parseFloat(num1) / parseFloat(num2)
    }
}

function updateSec(){
    oldInput.textContent = newInput.textContent
    newInput.textContent = ""
}

function update(value, screen, isnumber){
    if(isnumber){
        if(value === "." ){
            if(!usePoint){
                screen.textContent += value

            }
            return usePoint = true
        }
        screen.textContent += value
    }else{
        if(screen.textContent != "" && useOperator == false){
            useOperator = true
            usePoint = false
            screen.textContent += value
            operator = value
            updateSec()
           
        }
    }
}

function clear(){
    useOperator = false
    usePoint = false
    newInput.textContent = ""
    oldInput.textContent = ""

}