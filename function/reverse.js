

const isPalidrom = (str) => {
    let reverse = "";
    for(let i=str.length-1; i>=0;i-- ){
         reverse = reverse + str[i]
    }
        console.log(reverse)
        if(reverse === str){
            return true
        } else{
            
          return false
        }
    
    
    
}
console.log(isPalidrom("level"))
