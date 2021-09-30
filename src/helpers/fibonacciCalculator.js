export const fibonacciCalculator = (n) =>{
    const fibArray = []
   
    for(let i = 0; i <= n; i++) {
        
        if(fibArray.length > 1){
            
            const number = fibArray[i - 2] + fibArray[i - 1]
            fibArray.push(number)
        
        } else {

            fibArray.push(i)
        
        }   

    }
    
    return fibArray
}