let listItems = document.body.querySelector(".tbody-class")
var moneyFormatter  = new Intl.NumberFormat();
function datalist (item) {
  let Trow_tabel = document.createElement('tr'); // +
  let rank = document.createElement('td'); // + 
  let name = document.createElement('td'); // + 
  let trd_pairs = document.createElement('td'); // +
  trd_pairs.classList.add("column-center")
  let top_pair = document.createElement('td');
  let volumeUsd24Hr = document.createElement('td');
  let total = document.createElement('td');
  let status = document.createElement('td');
  status.classList.add("column-center")
  let green = document.createElement("div")
  let red = document.createElement("div")
  let error = document.createElement("div")
  let b = item.socket;
  rank.textContent = item.rank ; // +
  name.textContent = item.name + "\n" +"\n" +"\n" +"\n"; // +
  trd_pairs.textContent = moneyFormatter.format(Math.floor(item.tradingPairs))+ ("$"); // +
  top_pair.textContent = item.exchangeId;
  volumeUsd24Hr.textContent = moneyFormatter.format(Math.floor(item.volumeUsd))+ ("$");
  total.textContent = moneyFormatter.format(Math.floor(item.percentTotalVolume))+ ("%");
  if (b === true) {
      status.appendChild(green);
      green.classList.add("green")
  } if (b === false)  {
    status.appendChild(green);
      green.classList.add("green")
  }if (b === null) {
    status.appendChild(red); 
    red.classList.add("red")
  }

  


  listItems.appendChild(Trow_tabel);
  listItems.appendChild(rank);
  listItems.appendChild(name);
  listItems.appendChild(trd_pairs);
  listItems.appendChild(top_pair);
  listItems.appendChild(volumeUsd24Hr);
  listItems.appendChild(total);
  listItems.appendChild(status);
}

fetch('https://api.coincap.io/v2/exchanges')
.then (function (res) {
  return res.json();
})
.then (function (data){
  let file = data.data;
  file.forEach(function (list){  
    datalist(list);
  })
});