
let listItems = document.body.querySelector(".tbody-class")
var moneyFormatter  = new Intl.NumberFormat();
function datalist (item) {
  let Trow_tabel = document.createElement('tr');
  let rank = document.createElement('td');
  let name = document.createElement('td');
  let name_img = document.createElement('img');
  let usdprice = document.createElement('td');
  usdprice.classList.add(".left_aling_numbers")
  let marketcap = document.createElement('td');
  let vwap24Hr = document.createElement('td');
  let supply = document.createElement('td');
  let volumeUsd24Hr = document.createElement('td');
  let changePercent24Hr = document.createElement('td');

  rank.textContent = item.rank ;
  name.textContent = item.name + "\n" +"\n" +"\n" +"\n" + item.symbol;
  usdprice.textContent = moneyFormatter.format(Math.floor(item.priceUsd))+ ("$");
  marketcap.textContent = moneyFormatter.format(Math.floor(item.marketCapUsd))+ ("$");
  vwap24Hr.textContent = moneyFormatter.format(Math.floor(item.vwap24Hr))+ ("$");
  supply.textContent = moneyFormatter.format(Math.floor(item.supply))+ ("$");
  volumeUsd24Hr.textContent = moneyFormatter.format(Math.floor(item.volumeUsd24Hr))+ ("$");
  changePercent24Hr.textContent = moneyFormatter.format(item.changePercent24Hr) + ("%");


  listItems.appendChild(Trow_tabel);
  listItems.appendChild(rank);
  listItems.appendChild(name);
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
