// Get/set to variables elements from html form
 let walletInput = document.getElementById('walletInput');
 let persentInput = document.getElementById('persentInput');
 let goalInput = document.getElementById('goalInput');
 const result = document.querySelector('#result');
 const detailsList = document.querySelector('#detailsList');
 let details = [{ key: 1, mySumPercent: 0, achivment: 0 }];
 let resultItems = [];
 let list = [];

 // We getting values from the html form
 // Chech if all numbera exist and more then '0'
 // Iterate so many times as needed to achive the 'goal'
 // Alhoritm in 'while' counts all values and pushes in to the 'list'
 // After all call the func 
 const counter = () => {
   let walletBalance = +walletInput.value;
   let persent = +persentInput.value;
   let goal = +goalInput.value;

   if ((walletBalance && persent && goal) > 0) {
     const persentMath = persent / 100;
     let percentOfMySum = 0;
     let newSum = 0;
     let i = 0;

     while (walletBalance < goal) {
       percentOfMySum = walletBalance * persentMath;
       newSum = Math.ceil(walletBalance) + percentOfMySum;
       walletBalance = newSum;
       i++;
       details = {
         key: i,
         mySumPercent: percentOfMySum,
         achivment: newSum,
       };
       list.push(details);
     }
   }
   setDataOfIterations();
 };

 // Counted data passed to html and clear the 'list' of old data
 const setDataOfIterations = () => {
   resultItems = list.map((iteration) => {
     return `<option value="${iteration.key}"> Cycle: ${iteration.key}, Achived: ${iteration.achivment}$</option>`;
   });
   detailsList.innerHTML = resultItems;
   list = [];
 };

 // Invoke the func clicked on it
 const btnCount = document
   .getElementById('btnCount')
   .addEventListener('click', counter);