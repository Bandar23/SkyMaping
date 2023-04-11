/*
const api_url = "http://localhost/AngularNg/all_user";
 
let data;
fetch(api_url).then(res =>{ return res.json() }).then(d =>{
  data = d;
  data.forEach(user => {
    let classOur = document.querySelector(".Our-Vision");
    let d = document.createElement('li');
    d.innerHTML = user.nam_User;
    d.style.display = "block"
    classOur.append(d);
  });
});

*/

let rev = 0;

 function carousel(review){

   let reviews = document.getElementsByClassName("review__items");

   if(review >= reviews.length){
     review = 0;
     rev =0;
   }

   if(review < 0 ){
     review = reviews.length -1;
     rev = reviews.length -1;
   }

   for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
   }
    reviews[review].style.display = "block";

}


function previousReview() {
  rev = rev - 1;
  carousel(rev);
}

function nextReview() {
  rev = rev + 1;
  carousel(rev);
}

carousel(rev);









