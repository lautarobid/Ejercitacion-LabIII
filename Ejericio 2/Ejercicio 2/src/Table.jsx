import React from 'react';
import App from './App';

function Table(){
    const { brands, incomes } = App();
    const totalIncome = incomes.reduce((sum, income) => sum + income, 0);
    const averageIncomes = totalIncome / incomes.length;
    
  return (
    <div>
    <h2>Incomes</h2>
    <table>
      <thead>
        <tr>
          <th>Brands</th>
          <th>Income</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{brands[0]}</td>
          <td>{incomes[0]}</td>
        </tr>
        <tr>
          <td>{brands[1]}</td>
          <td>{incomes[1]}</td>
        </tr>
        <tr>
          <td>{brands[2]}</td>
          <td>{incomes[2]}</td>
        </tr>
      </tbody>
    </table>
    <p>
    Average: {averageIncomes}
    </p>
  </div>
  );
}

export default Table;