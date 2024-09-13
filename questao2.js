let input = 20

let ini = 0
let mid = 1
let end = 0

for (let index = 1; index < 20; index++) {
     end = ini + mid
     console.log(end)
     ini = mid
     mid = end

     if (end == input) {
       console.log("valor encontrado");
       return;
     }
}