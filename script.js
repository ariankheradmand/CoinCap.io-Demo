
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
  let Trow_tabel = document.createElement('div');
  Trow_tabel.classList.add("row-center","bd-size","tb-border",);

  let rank = document.createElement('div');
  rank.classList.add("padding","rank-size","text-align-center");



  let cnt_name = document.createElement('div');
  cnt_name.classList.add("padding","name-size");
  let link_name = document.createElement('a');
  link_name.classList.add("name-style");
  let name = document.createElement('div');
  let symbol = document.createElement('div');
  symbol.classList.add("symbol-name-table");


  let name_img = document.createElement('img');


  let usdprice = document.createElement('div');
  usdprice.classList.add("padding","other-size");


  let marketcap = document.createElement('div');
  marketcap.classList.add("padding","other-size");


  let vwap24Hr = document.createElement('div');
  vwap24Hr.classList.add("padding","other-size");
  let supply = document.createElement('div');
  supply.classList.add("padding","other-size");
  let volumeUsd24Hr = document.createElement('div');
  volumeUsd24Hr.classList.add("padding","other-size");
  let changePercent24Hr = document.createElement('div');
  changePercent24Hr.classList.add("padding","other-size");

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
  Trow_tabel.appendChild(rank);
  Trow_tabel.appendChild(cnt_name);
  cnt_name.appendChild(link_name);
  link_name.appendChild(name);
  link_name.appendChild(symbol);

  Trow_tabel.appendChild(usdprice);
  Trow_tabel.appendChild(marketcap);
  Trow_tabel.appendChild(vwap24Hr);
  Trow_tabel.appendChild(supply);
  Trow_tabel.appendChild(volumeUsd24Hr);
  Trow_tabel.appendChild(changePercent24Hr);
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
