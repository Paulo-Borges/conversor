const trocar = document.getElementById('trocar')
const nova = document.querySelector('body')

function handleclick() {
      if (nova == nova) {
         nova.classList = 'nova'
      }
      // if (nova) {
      //    nova.remove = 'nova'
      // }
  
}

trocar.addEventListener('click', handleclick)

// let pokemon = ['pokemon1', 'pokemon2', 'pokemon3', 'pokemon4',]

// for(let item of pokemon) {
//    console.log(item)
// }

let  dolar = 5.66

let usdInput = document.getElementById('usd')
let brlInput = document.getElementById('brl')

usdInput.addEventListener('keyup', () => {
   convert("usd-to-brl")
})

brlInput.addEventListener('keyup', () => {
   convert("brl-to-usd")
   
})

usdInput.addEventListener("blur", () => {
   usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () => {
   brlInput.value = formatCurrency(brlInput.value)
})

usdInput.value = "1000,00"
convert("usd-to-brl")

function formatCurrency(value) {
   // ajustar valor 
   let fixedValue = fixValue(value)
   // utilizar função de formatar 
   let options = {
      useGrouping: false,
      minimumFractionDigits: 2
   }
   let formatter = new Intl.NumberFormat("pt-BR", options)
   // retornar o valor formatado 
   return formatter.format(fixedValue)
}

function fixValue(value) {
   let fixedValue = value.replace(",", ".")
   let flotValue = parseFloat(fixedValue)
   if(flotValue == NaN) {
      flotValue = 0
   }
   return flotValue
}

function convert(type) {
   if(type == "usd-to-brl") {
      // ajustar o valor 
      let fixedValue = fixValue(usdInput.value)

      let result = fixedValue * dolar
      result = result.toFixed(2)

      brlInput.value = formatCurrency(result)
      // converter o valor 
      // mostrar no campo real
   }

   if(type == "brl-to-usd") {
        // ajustar o valor 
        let fixedValue = fixValue(brlInput.value)

        let result = fixedValue / dolar
        result = result.toFixed(2)
  
        usdInput.value = formatCurrency(result)
        // converter o valor 
        // mostrar no campo real
     }
      
   
}