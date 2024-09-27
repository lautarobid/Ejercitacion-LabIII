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
          <th>Marca</th>
          <th>Ingreso Neto</th>
        </tr>
      </thead>
      <tbody>
        {brands.map((brands, index) => (
          <tr key={index}>
            <td>{brands}</td>
            <td>{incomes[index]}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p>
    Promedio Total Ingreso Neto: {averageIncomes}
    </p>
  </div>
  );
}

export default Table;