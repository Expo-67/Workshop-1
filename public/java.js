const balance = document.getElementById("balance");
const amounts = [];
const deposits = [];
const withdrawals = [];
let Balance = 0;
const amount = document.getElementById("amount");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

// Create our number formatter.
const formatter = new Intl.NumberFormat("KES", {
  style: "currency",
  currency: "KES",
  minimumFractionDigits: 2,
});

// accept deposits from user, store deposits in array
depositBtn.addEventListener("click", () => {
  // checks if deposit is a number
  if (isNaN(amount.value)) {
    alert("Please enter a number.");
    return (amount.value = "");
  } else {
    // checks if deposit meets parameters
    if (amount.value < 129.01 || amount.value > 100000) {
      alert("You can only deposit between ksh129.01 and ksh100,000.");
      return (amount.value = "");
    } else {
      // push deposit to array
      deposits.push(Number(amount.value));
      // calculate Total Balance
      Balance += Number(amount.value);

      //  TotalBalance to show  (2 decimal places)
      let totalBalanceFormatted = formatter.format(Balance);
      document.getElementById("balance").innerHTML = totalBalanceFormatted;

      // print deposit to console to verify success
      console.log(amount.value);
      return (amount.value = "");
    }
  }
});

// accept withdrawals from user, store withdrawals in array
withdrawBtn.addEventListener("click", () => {
  // checks if withdrawal is a number
  if (isNaN(amount.value)) {
    alert("Please enter a number.");
    return (amount.value = "");
  } else {
    // checks if withdrawal meets parameters
    if (amount.value > Balance - 100) {
      alert("Your total balance cannot drop below ksh100.");
      return (amount.value = "");
    } else {
      // push withdrawal to array
      withdrawals.push(Number(amount.value));
      // calculate Total Balance
      Balance -= Number(amount.value);

      // format TotalBalance to show  (2 decimal places)
      let totalBalanceFormatted = formatter.format(Balance);
      document.getElementById("balance").innerHTML = totalBalanceFormatted;

      // print withdrawal to console to verfify success
      console.log("ksh" + amount.value);
      return (amount.value = "");
    }
  }
});

// format TotalBalance to show  (2 decimal places)

let totalBalanceFormatted = formatter.format(Balance);
document.getElementById("balance").innerHTML = totalBalanceFormatted;
