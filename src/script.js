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


// Create An Array Of Numbers From "1" to "n"
let range = (n)=>{
 return Array.from({length: n}, (_, i)=>i+1);
};
console.log(numbers(5));


// Create An Array Of Numbers From "1" to "n" with step "s"
let numbers = (n,step=1, skipZero=false)=>{
   return Array.from({length: n}, (_, i)=> skipZero ? (i===0 ? 1 :i*step+1) : i*step);
  };
console.log(numbers(6,5,true));


// Create An Array Of Length "n" and Fill With Value "f"
let fill = (n,f)=>{
  return Array(n).fill(f);
 };
console.log(fill(10,4));


 
 