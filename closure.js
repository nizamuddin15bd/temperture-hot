// const bank = owner => {
//     balance = 0;
//     return amount => {
//         // balance = balance + amount;
//         balance += amount;
//         return balance;
//     }
    
// }


const bank = owner => {
    balance = 0;
    return {
        deposit: amount => {
            // balance = balance + amount;
            balance += amount;
            return balance;
        },
        withdraw: amount => {
            // balance = balance - amount;
            balance -= amount;
            return balance;
        }
    }
   
}

const mofijBank = bank ('Mofij');
console.log (mofijBank.deposit(100));
console.log (mofijBank.deposit(500));
console.log (mofijBank.deposit(400));
console.log(mofijBank.balance);
console.log(mofijBank.withdraw(210));