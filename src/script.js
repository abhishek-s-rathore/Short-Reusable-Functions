// Index Generator
function* indexGenerator(){
     let index = 0;
     while(true){
        yield index++;
     }
}
const index = indexGenerator();
console.log(index.next().value);

// Calculate Time Of Execution
(function CalculateTime(){
console.time('calculated_time');
      // Block Of Code
console.timeEnd('calculated_time');
})();


// Create An Array Of Numbers From 1 to n

let range = (n)=>{
 return Array.from({length: n}, (_, i)=>i+1)
}

// Create An Array Of Length "n" and Fill With Value "f"

let fill = (n,f)=>{
  return Array(n).fill(f)
 }