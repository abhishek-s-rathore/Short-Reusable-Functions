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
   // Block of code whose execution time need to be calculated
console.timeEnd('calculated_time');
})();


