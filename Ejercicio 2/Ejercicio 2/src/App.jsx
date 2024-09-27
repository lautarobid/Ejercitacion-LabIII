
import React from 'react';

const netIncomes = [
  { brand: 'McDonalds', income: 1291283 },
  { brand: 'Burger King', income: 1927361 },
  { brand: 'KFC', income: 1098463 }
];

function App() {
  const brands = netIncomes.map(item => item.brand);
  const incomes = netIncomes.map(item => item.income);
  return { brands, incomes };


}
export default App;


