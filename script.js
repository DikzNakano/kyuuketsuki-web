const counters = document.querySelectorAll(".count");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const speed=50;

const inc=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+inc);

setTimeout(update,20);

}else{

counter.innerText=target;

}

}

update();

});