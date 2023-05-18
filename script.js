const userDetails=document.querySelector(".userDetails");
const generate=document.querySelector("#generateBtn");
const image=document.querySelector("#img");
const api="https://randomuser.me/api/";

async function fetchApi(api_link){
    const response=await fetch(api_link);

    let data=response.json();

    data.then(d=>{
        showUser(d.results[0]);
    })
    
}

fetchApi(api);


const showUser=(user)=>{
    let gender=formatGender(user.gender);

    image.src=user.picture.large;
    let html=`<p><i class="fa-solid fa-user"></i><span>Full Name: ${user.name.first} ${user.name.last}</span></p>
              <p><i class="fa-solid fa-location-pin"></i> <span>Location: ${user.location.country}</span></p>
              <p><i class="fa-solid fa-venus-mars"></i><span> Gender: ${gender}</span></p>
              <p><i class="fa-solid fa-phone"></i><span>Phone: ${user.phone}</span></p>`;
    
    userDetails.innerHTML=html;
}

generate.addEventListener("click",()=>{
    location.reload();
});

const formatGender=(gender)=>{
    let first=gender.charAt(0);
    let last=gender.substring(1,gender.length);
    return first.toUpperCase()+last;
}   