let listItems = document.body.querySelector(".tbody-class")
var moneyFormatter  = new Intl.NumberFormat();
function datalist (item) {
  let Trow_tabel = document.createElement('div'); // +
  Trow_tabel.classList.add("row-center","padding-t-b","tb-border",);

  let rank = document.createElement('div'); // + 
  
  let name = document.createElement('div'); // + 
  let trd_pairs = document.createElement('div'); // +
  let top_pair = document.createElement('div');
  let volumeUsd24Hr = document.createElement('div');
  let total = document.createElement('div');
  let status = document.createElement('div');
  let green = document.createElement("div")
  let red = document.createElement("div")
  let error = document.createElement("div")


  
  let b = item.socket;
  rank.textContent = item.rank ;
  rank.classList.add("padding","rank-size","text-align-center"); 

  name.textContent = item.name ;
  name.classList.add("padding","name-size");

  status.classList.add("padding","other-size-ex")
  trd_pairs.textContent = moneyFormatter.format(Math.floor(item.tradingPairs))+ ("$"); // +
  trd_pairs.classList.add("padding","other-size-ex");
  top_pair.textContent = item.exchangeId;
  top_pair.classList.add("padding","other-size-ex");
  volumeUsd24Hr.textContent = moneyFormatter.format(Math.floor(item.volumeUsd))+ ("$");
  volumeUsd24Hr.classList.add("padding","other-size-ex");
  total.textContent = moneyFormatter.format(Math.floor(item.percentTotalVolume))+ ("%");
  total.classList.add("padding","other-size-ex");
  if (b === true) {
      status.appendChild(green);
      green.classList.add("green","float")
  } if (b === false)  {
    status.appendChild(green);
      green.classList.add("green","float")
  }if (b === null) {
    status.appendChild(red); 
    red.classList.add("red","float")
  }

  


  listItems.appendChild(Trow_tabel);
  Trow_tabel.appendChild(rank);
  Trow_tabel.appendChild(name);
  Trow_tabel.appendChild(trd_pairs);
  Trow_tabel.appendChild(top_pair);
  Trow_tabel.appendChild(volumeUsd24Hr);
  Trow_tabel.appendChild(total);
  Trow_tabel.appendChild(status);
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