const mesec = document.querySelector(".mesec");
const ceoDatum = document.querySelector(".ceoDatum");
const dani = document.querySelector(".dani");
const datumi = document.querySelector(".datumi");

mesec.innerHTML = new Date().toLocaleString("en", {month:"long"});
ceoDatum.innerHTML = new Date().toDateString();


const brojDana = new Date(new Date().getFullYear(), new Date().getMonth() +1, 0).getDate();
const prviDan = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();

datumiUpdate = "";


for (n=prviDan; n>0 ; n--){
    datumiUpdate +=`<div class="empty"></div>`;
}


for (i=1; i<=brojDana; i++){

    if(i === new Date().getDate()){
        datumiUpdate += `<div class="today">${i}</div>`;

    }else{
        datumiUpdate += `<div>${i}</div>`;
        
    }
    

}
    datumi.innerHTML = datumiUpdate;

























