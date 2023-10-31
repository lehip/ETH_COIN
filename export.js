const axios = require('axios');

const API_KEY = "FNV7S53547HGUG8RSV3XEGYYH4143RC38A";
const BASE_URL = "https://api.etherscan.io/api";

const addresses = [
  "0x2c1ba59d6f58433fb1eaee7d20b26ed83bda51a3",
  "0x63a9975ba31b0b9626b34300f7f627147df1f526",
  "0x198ef1ec325a96cc354c7266a038be8b5c558f67"
];

async function fetchValue() {
    try {

async function getDataForAddresses() {
    const dataPromises = addresses.map(async (address) => {
      const balancePromise = getWalletBalance(address);
      const buyPricePromise = getBuyPrice();
      const sellPricePromise = getSellPrice();
//      const sellTransactionsPromise = getSellTransactions(address);

  
      const [balance, buyPrice, sellPrice, sellTransactions] = await Promise.all([
        balancePromise,
        buyPricePromise,
        sellPricePromise,
 //       sellTransactionsPromise
      ]);
  
      return {
        address,
        balance,
        buyPrice,
        sellPrice,
//        sellTransactions
      };
    });
  
    const results = await Promise.all(dataPromises);
    console.log(results);

  }
  
  async function getWalletBalance(address) {
    const url = `${BASE_URL}?module=account&action=balance&address=${address}&tag=latest&apikey=${API_KEY}`;
    const response = await axios.get(url);
    const balance = response.data.result;
    return balance;
  }
  
  async function getBuyPrice() {
    const url = `${BASE_URL}?module=stats&action=ethprice&apikey=${API_KEY}`;
    const response = await axios.get(url);
    const buyPrice = response.data.result.ethusd;
    return buyPrice;
  }
  
  async function getSellPrice() {
    const url = `${BASE_URL}?module=stats&action=ethprice&apikey=${API_KEY}`;
    const response = await axios.get(url);
    const sellPrice = response.data.result.ethusd;
    return sellPrice;
  }
  
//   async function getSellTransactions(address) {
//     const url = `${BASE_URL}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${API_KEY}`;
//     const response = await axios.get(url);
//     const transactions = response.data.result;
//     const sellTransactions = transactions.filter(transaction => transaction.from.toLowerCase() === address.toLowerCase());
//     return sellTransactions;
//   }

// async function getSellTransactions(address) {
//     const url = `${BASE_URL}?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${API_KEY}`;
//     const response = await axios.get(url);
//     const transactions = response.data.result;
    
//     if (Array.isArray(transactions)) {
//       const sellTransactions = transactions.filter(transaction => transaction.from.toLowerCase() === address.toLowerCase());
//       console.log(sellTransactions);
//       return sellTransactions;
//      } 
//     else {
//       return [];
//     }
//   }


// 
function displayData(data) {
  // const balanceElement = document.getElementById("balance");
  // const buyPriceElement = document.getElementById("buyPrice");
  // const sellPriceElement = document.getElementById("sellPrice");

  // data.forEach((item) => {
  //     const addressElement = document.createElement("p");
  //     addressElement.textContent = `Địa chỉ: ${item.address}`;

  //     const balanceElement = document.createElement("p");
  //     balanceElement.textContent = `Số dư: ${item.balance}`;

  //     const buyPriceElement = document.createElement("p");
  //     buyPriceElement.textContent = `Giá mua: ${item.buyPrice}`;

  //     const sellPriceElement = document.createElement("p");
  //     sellPriceElement.textContent = `Giá bán: ${item.sellPrice}`;

  //     document.body.appendChild(addressElement);
  //     document.body.appendChild(balanceElement);
  //     document.body.appendChild(buyPriceElement);
  //     document.body.appendChild(sellPriceElement);
  // });
        document.getElementById("balance").innerText = '15' +'USD';
        document.getElementById("buyPrice").innerText = '15' +'USD';
 }

  //This updated code includes the getSellTransactions function, which retrieves the transaction data
getDataForAddresses();
  
} catch (error) {
    console.error('Error fetching value:', error);
   }
}

setInterval(fetchValue, 2000); 