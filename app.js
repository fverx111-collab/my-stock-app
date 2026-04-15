// app.js

// Function to fetch FlowTrack dashboard data
async function fetchDashboardData() {
    try {
        const response = await fetch('https://api.flowtrack.com/dashboard');
        const data = await response.json();
        renderDashboard(data);
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
    }
}

// Function to render the dashboard
function renderDashboard(data) {
    const globalMarketIndicators = document.getElementById('global-market-indicators');

    // Render DXY tracking
    const dxyValue = data.globalIndicators.dxy;
    globalMarketIndicators.innerHTML += `<div>DXY: ${dxyValue}</div>`;

    // Render sector fund flows
    const sectorFlows = data.sectorFundFlows;
    const flowsContainer = document.getElementById('sector-flows');
    flowsContainer.innerHTML = '';

    sectorFlows.forEach(flow => {
        const barWidth = flow.amount * 10; // Change multiplier for scaling
        const barColor = flow.amount > 0 ? 'green' : 'red';
        const bar = `<div style='width:${barWidth}px; background-color:${barColor};'>${flow.name}: ${flow.amount}</div>`;
        flowsContainer.innerHTML += bar;
    });

    // Update timestamp
    const timestamp = document.getElementById('timestamp');
    timestamp.innerHTML = `Last updated: ${new Date().toUTCString()}`;
}

// Function to refresh the dashboard
function refreshDashboard() {
    fetchDashboardData();
}

// Set an interval to refresh the dashboard every minute
setInterval(refreshDashboard, 60000);

// Initial fetch
fetchDashboardData();

// Add timestamp element
const timestampElement = document.createElement('div');
timestampElement.id = 'timestamp';
document.body.appendChild(timestampElement);
