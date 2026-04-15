// Sample JavaScript code to fetch and display stock market data

const stocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 150.00, changePercentage: 1.5 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2800.00, changePercentage: -0.3 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3300.00, changePercentage: 2.0 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 700.00, changePercentage: 0.5 }
];

function displayStocks() {
    const appSection = document.getElementById('app');
    appSection.innerHTML = ''; // Clear previous content

    stocks.forEach(stock => {
        const stockDiv = document.createElement('div');
        stockDiv.innerHTML = `<strong>${stock.symbol} - ${stock.name}</strong><br>
            Price: $${stock.price.toFixed(2)}<br>
            Change: ${stock.changePercentage}%`;
        appSection.appendChild(stockDiv);
    });
}

displayStocks();