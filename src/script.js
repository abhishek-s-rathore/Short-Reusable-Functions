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

let numbers = (n)=>{
  Array.from({length: n}, (_, i)=>i+1)
}