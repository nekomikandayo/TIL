const calculateTotal = (price, taxRate = 0.1) => {
    return price + (price * taxRate);
  };
  
  const total = calculateTotal(1000);
  console.log(`合計金額は ${total} 円です。`);