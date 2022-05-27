function factorial(n) {
    let answer = 1;
    if (n < 0)
        return 'NaN';
  
    for (let i = n; i >= 1; i--) {
       answer *= i;
    }
  
   return answer;
  }
module.exports = {factorial}
