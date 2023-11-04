const relayData = [
  ]
let autoIncrementId = 3045;

relayData.forEach((item) => {
// Convert price to a float
const priceString = item.price.replace(".", "").replace(",", ".");
item.price = parseFloat(priceString);

// Auto-increment the id
item.brand = "Direncnet"; 
item.tags = "Relays and timers"; 
item.id = autoIncrementId;
autoIncrementId++;
});

console.log(relayData);
