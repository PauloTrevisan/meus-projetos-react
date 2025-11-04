import { useState, useMemo } from 'react';

const EXCHANGE_RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7,
  BRL: 5.45
};

export default function App() {

const [amount, setAmount] = useState(1);
const [fromCurrency, setFromCurrency] = useState("USD");
const [toCurrency, setToCurrency] = useState("EUR");

const amountInUSD = useMemo(() => {
  const numAmount = Number(amount);
  return amount / EXCHANGE_RATES[fromCurrency];
}, [amount, fromCurrency]);
const convertedAmount = amountInUSD * EXCHANGE_RATES[toCurrency];

  return (
  <>
    <style>{`
    body {
      font-family: 'Inter', sans-serif;
      background-color: #f0f2f5;
      color: #333;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

    .currency-converter {
      background-color: #ffffff;
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      width: 100%;
      max-width: 400px;
    }

    h1 {
      font-size: 24px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 24px;
    }

    .input-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 8px;
    }

    input[type="number"],
    select {
      width: 100%;
      padding: 12px;
      font-size: 16px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      box-sizing: border-box;
      transition: border-color 0.2s;
    }

    input[type="number"]:focus,
    select:focus {
      border-color: #4f46e5;
      outline: none;
      box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
    }

    .result h2 {
      font-size: 28px;
      font-weight: 700;
      text-align: center;
      color: #4f46e5;
      margin-top: 16px;
    }
  `}</style>

    <div className="currency-converter">
      <h1>Currency Converter</h1>

      <div className="input-group">
        <label>Value to be converted:</label>
        <input
        id="amount-input"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="from-currency">
          From
        </label>
        <select
        id="from-currency"
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="BRL">BRL</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="to-currency">
          To:
        </label>
        <select
        id="to-currency"
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="BRL">BRL</option>
        </select>
      </div>

      <div className="result">
        <h2>
          {convertedAmount.toFixed(2)} {toCurrency}
        </h2>
      </div>

    </div>
  </>
  )
}