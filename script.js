
// let nav_1 = document.querySelector(".nav-cnt");
// let nav_2 = document.querySelector(".hamburger-menu-cnt");
// let ham = document.querySelector(".hamburger");

// ham.addEventListener("click", () => {
//   nav_1.classList.toggle("active")
//   nav_2.classList.toggle("active")
// })


let listItems = document.body.querySelector(".tbody-class")
var moneyFormatter  = new Intl.NumberFormat();
function datalist (item) {
  let Trow_tabel = document.createElement('tr');
  let rank = document.createElement('td');
  let cnt_name = document.createElement('td');
  let link_name = document.createElement('a');
  link_name.classList.add("name-style");
  let name = document.createElement('div');
  let symbol = document.createElement('div');
  symbol.classList.add("symbol-name-table");
  let name_img = document.createElement('img');
  let usdprice = document.createElement('td');
  let marketcap = document.createElement('td');
  let vwap24Hr = document.createElement('td');
  vwap24Hr.classList.add("display-none");
  let supply = document.createElement('td');
  supply.classList.add("display-none");
  let volumeUsd24Hr = document.createElement('td');
  let changePercent24Hr = document.createElement('td');

  rank.textContent = item.rank ;
  name.textContent = item.name;
  symbol.textContent = item.symbol;
  usdprice.textContent = moneyFormatter.format(Math.floor(item.priceUsd))+ ("$");
  marketcap.textContent = moneyFormatter.format(Math.floor(item.marketCapUsd))+ ("$");
  vwap24Hr.textContent = moneyFormatter.format(Math.floor(item.vwap24Hr))+ ("$");
  supply.textContent = moneyFormatter.format(Math.floor(item.supply))+ ("$");
  volumeUsd24Hr.textContent = moneyFormatter.format(Math.floor(item.volumeUsd24Hr))+ ("$");
  changePercent24Hr.textContent = moneyFormatter.format(item.changePercent24Hr) + ("%");


  listItems.appendChild(Trow_tabel);
  listItems.appendChild(rank);
  listItems.appendChild(cnt_name);
  cnt_name.appendChild(link_name);
  link_name.appendChild(name);
  link_name.appendChild(symbol);

  listItems.appendChild(usdprice);
  listItems.appendChild(marketcap);
  listItems.appendChild(vwap24Hr);
  listItems.appendChild(supply);
  listItems.appendChild(volumeUsd24Hr);
  listItems.appendChild(changePercent24Hr);
}

fetch('https://api.coincap.io/v2/assets')
.then (function (res) {
  return res.json();
})
.then (function (data){
  let file = data.data;
  file.forEach(function (list){  
    datalist(list);
  })
});
