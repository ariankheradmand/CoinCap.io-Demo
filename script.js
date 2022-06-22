
// let nav_1 = document.querySelector(".nav-cnt");
// let nav_2 = document.querySelector(".hamburger-menu-cnt");
// let ham = document.querySelector(".hamburger");

// ham.addEventListener("click", () => {
//   nav_1.classList.toggle("active")
//   nav_2.classList.toggle("active")
// })

let listItems = document.body.querySelector(".tbody-class")
let button = document.body.querySelector(".more-bt")

 function datalist (item) {
  let Trow_tabel = document.createElement('div');
  Trow_tabel.classList.add("row-center","bd-size","tb-border",);

  let rank = document.createElement('div');
  rank.textContent = item.rank;
  rank.classList.add("padding","rank-size","text-align-center");
  let rank_ed = rank.textContent;
  


  let cnt_name = document.createElement('div');
  cnt_name.classList.add("padding","name-size","row-without-space");
  let link_name = document.createElement('a');
  link_name.classList.add("name-style");
  let name = document.createElement('div');



  let symbol = document.createElement('div');
  symbol.classList.add("symbol-name-table");
  symbol.textContent = item.symbol;
  
  let img_data = symbol.textContent;
  img_data = img_data.toLowerCase();
  
  let name_img = document.createElement('img');
  name_img.setAttribute("src" , `https://assets.coincap.io/assets/icons/${img_data}@2x.png`);
  name_img.setAttribute("width" , "28px");


  let usdprice = document.createElement('div');
  usdprice.textContent = item.priceUsd
  let usdprice_ed = usdprice.textContent;
  let usdprice_ed_1 = numeral(usdprice_ed).format("$0,0.00");
  usdprice.textContent = usdprice_ed_1
  usdprice.classList.add("padding","other-size");
  

  let marketcap = document.createElement('div');
  marketcap.textContent = item.marketCapUsd
  let marketcap_ed = marketcap.textContent;
  let marketcap_ed_1 = numeral(marketcap_ed).format("$0,0.00a");
  marketcap.textContent = marketcap_ed_1
  marketcap.classList.add("padding","other-size");


  let vwap24Hr = document.createElement('div');
  vwap24Hr.textContent = item.vwap24Hr
  let vwap24Hr_ed = vwap24Hr.textContent;
  let vwap24Hr_ed_1 = numeral(vwap24Hr_ed).format("$0,0.00a");
  vwap24Hr.textContent = vwap24Hr_ed_1
  vwap24Hr.classList.add("padding","other-size");


  let supply = document.createElement('div');
  supply.textContent = item.supply
  let supply_ed = supply.textContent;
  let supply_ed_1 = numeral(supply_ed).format("$0,0.00a");
  supply.textContent = supply_ed_1
  supply.classList.add("padding","other-size");


  let volumeUsd24Hr = document.createElement('div');
  volumeUsd24Hr.textContent = item.volumeUsd24Hr
  let volumeUsd24Hr_ed = volumeUsd24Hr.textContent;
  volumeUsd24Hr_ed = numeral(volumeUsd24Hr_ed).format("$0,0.00a");
  volumeUsd24Hr.textContent = volumeUsd24Hr_ed
  volumeUsd24Hr.classList.add("padding","other-size");


  let changePercent24Hr = document.createElement('div');
  changePercent24Hr.textContent = item.changePercent24Hr
  let changePercent24Hr_ed = changePercent24Hr.textContent;
  
  function containsSpecialChars(str) {
    const specialChars = /-/;
    return specialChars.test(str);
  }
  if (containsSpecialChars(changePercent24Hr_ed) == true) {
    changePercent24Hr.classList.add("padding","other-size","red-text");
  }else {
    changePercent24Hr.classList.add("padding","other-size","green-text");
  }

  
  let changePercent24Hr_ed_1 = numeral(changePercent24Hr_ed).format("0,0.00")+("%");
  changePercent24Hr.textContent = changePercent24Hr_ed_1
  changePercent24Hr.classList.add("padding","other-size");

 
  name.textContent = item.name;
  symbol.textContent = item.symbol;
  
  
  
  add_number(20);
  
  
  
   
   button.addEventListener("click", () => {
    let a = 20;
    add_number(a + 20);
    button.addEventListener("click", () => {
      let a = 40;
      add_number(a + 20);
    button.addEventListener("click", () => {
      let a = 60;
      add_number(a + 20);
      button.addEventListener("click", () => {
        let a = 80;
        add_number(a + 20);
        })
      })
    })
  })
    
    function add_number (items) {
    if (rank_ed <= items ) {
      
      listItems.appendChild(Trow_tabel);
      Trow_tabel.appendChild(rank);
      Trow_tabel.appendChild(cnt_name);
      cnt_name.appendChild(name_img);
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
  }

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
