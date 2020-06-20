//local review data

const reviews = [
  {
    id: 1,
    category: "crestinare",
    img: ".//poze/crestinare/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-1.jpg",
  },
  {
    id: 2,
    category: "crestinare",
    img: ".//poze/crestinare/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-2.jpg",
  },
  {
    id: 3,
    category: "crestinare",
    img: ".//poze/crestinare/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-3.jpg",
  },
  
  {
    id: 4,
    category: "crestinare",
    img: ".//poze/crestinare/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-4.jpg",
  },
  {
    id: 5,
    category: "crestinare",
    img: ".//poze/crestinare/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-6.jpg",
  },
  {
    id: 6,
    category: "nunta",
    img: ".//poze/nunta/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-6.jpg",
  },
  {
    id: 7,
    category: "nunta",
    img: ".//poze/nunta/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-2.jpg",
  },
  {
    id: 8,
    category: "nunta",
    img: ".//poze/nunta/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-3.jpg",
  },
  {
    id: 9,
    category: "nunta",
    img: ".//poze/nunta/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-7.jpg",
  },
  {
    id: 10,
    category: "nunta",
    img: ".//poze/nunta/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-8.jpg",
  },
  {
    id: 11,
    category: "sedinte",
    img: ".//poze/sedinte/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-1.jpg",
  },
  {
    id: 12,
    category: "sedinte",
    img: ".//poze/sedinte/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-2.jpg",
  },
  {
    id: 13,
    category: "sedinte",
    img: ".//poze/sedinte/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-3.jpg",
  },
  {
    id: 14,
    category: "sedinte",
    img: ".//poze/sedinte/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-7.jpg",
  },
  {
    id: 15,
    category: "sedinte",
    img: ".//poze/sedinte/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-8.jpg",
  },
  {
    id: 16,
    category: "logodna",
    img: ".//poze/logodna/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-1.jpg",
  },
  {
    id: 17,
    category: "logodna",
    img: ".//poze/logodna/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-2.jpg",
  },
  {
    id: 18,
    category: "logodna",
    img: ".//poze/logodna/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-6.jpg",
  },
  {
    id: 19,
    category: "logodna",
    img: ".//poze/logodna/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-7.jpg",
  },
  {
    id: 20,
    category: "logodna",
    img: ".//poze/logodna/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-8.jpg",
  },
  {
    id: 21,
    category: "diverse",
    img: ".//poze/diverse/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-1.jpg",
  },
  {
    id: 22,
    category: "diverse",
    img: ".//poze/diverse/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-2.jpg",
  },
  {
    id: 23,
    category: "diverse",
    img: ".//poze/diverse/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-6.jpg",
  },
  {
    id: 24,
    category: "diverse",
    img: ".//poze/diverse/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-8.jpg",
  },
  {
    id: 25,
    category: "diverse",
    img: ".//poze/diverse/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-5.jpg",
  },
  {
    id: 26,
    category: "nunta",
    img: ".//poze/nunta/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-9.jpg",
  },
  {
    id: 27,
    category: "nunta",
    img: ".//poze/nunta/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-15.jpg",
  },
  {
    id: 28,
    category: "nunta",
    img: ".//poze/nunta/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-12.jpg",
  },
  {
    id: 29,
    category: "nunta",
    img: ".//poze/nunta/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-17.jpg",
  },
  {
    id: 30,
    category: "nunta",
    img: ".//poze/nunta/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-14.jpg",
  },
  {
    id: 31,
    category: "crestinare",
    img: ".//poze/crestinare/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-7.jpg",
  },
  {
    id: 32,
    category: "crestinare",
    img: ".//poze/crestinare/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-12.jpg",
  },
  {
    id: 33,
    category: "crestinare",
    img: ".//poze/crestinare/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-9.jpg",
  },
  {
    id: 34,
    category: "crestinare",
    img: ".//poze/crestinare/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-10.jpg",
  },
  {
    id: 35,
    category: "crestinare",
    img: ".//poze/crestinare/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-11.jpg",
  },
  {
    id: 36,
    category: "sedinte",
    img: ".//poze/sedinte/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-9.jpg",
  },
  {
    id: 37,
    category: "sedinte",
    img: ".//poze/sedinte/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-10.jpg",
  },
  {
    id: 38,
    category: "sedinte",
    img: ".//poze/sedinte/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-14.jpg",
  },
  {
    id: 39,
    category: "sedinte",
    img: ".//poze/sedinte/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-12.jpg",
  },
  {
    id: 40,
    category: "sedinte",
    img: ".//poze/sedinte/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-13.jpg",
  },
  {
    id: 41,
    category: "logodna",
    img: ".//poze/logodna/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-14.jpg",
  },
  {
    id: 42,
    category: "logodna",
    img: ".//poze/logodna/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-15.jpg",
  },
  {
    id: 43,
    category: "logodna",
    img: ".//poze/logodna/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-16.jpg",
  },
  {
    id: 44,
    category: "logodna",
    img: ".//poze/logodna/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-12.jpg",
  },
  {
    id: 45,
    category: "logodna",
    img: ".//poze/logodna/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-13.jpg",
  },
  {
    id: 46,
    category: "diverse",
    img: ".//poze/diverse/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-6.jpg",
  },
  {
    id: 47,
    category: "diverse",
    img: ".//poze/diverse/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-11.jpg",
  },
  {
    id: 48,
    category: "diverse",
    img: ".//poze/diverse/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-8.jpg",
  },
  {
    id: 49,
    category: "diverse",
    img: ".//poze/diverse/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-12.jpg",
  },
  {
    id: 50,
    category: "diverse",
    img: ".//poze/diverse/Ionuț_Prilipceanu_IMAGE_Fotograf_Profesionist_Iași-15.jpg",
  },
];


const sectionCenter = document.querySelector('.section-center');
window.addEventListener('DOMContentLoaded', displayMenuItems(reviews));

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function(item){
    return `<article class="menu-item">
              <img src= ${item.img} class="photo"  alt="">
            </article>`;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}


let all = document.querySelector('#all');
    all.style.backgroundColor = "white";
    all.style.border = "1px solid rgb(25, 60, 80)"; 
    all.style.color = "rgb(25, 60, 80)"; 

const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(function(btn){
  btn.addEventListener('click', function(e) { 
    const category = e.currentTarget.dataset.id;
      const menuCategory = reviews.filter(function (menuItem) {
       if(menuItem.category === category) {
         return menuItem;
        }
      });
        if(category === 'all'){
          displayMenuItems(reviews);
        }
          else{
            displayMenuItems(menuCategory);
          }

          if(category === 'all'){
            let all = document.querySelector('#all');
            all.style.backgroundColor = "white";
            all.style.border = "1px solid rgb(25, 60, 80)"; 
            all.style.color = "rgb(25, 60, 80)"; 
          }
            else{
              all.style.backgroundColor = "rgb(25, 60, 80)";
              all.style.border = "none"; 
              all.style.color = "white"; 
            }

            if(category === 'nunta'){
              let nunta = document.querySelector('#nunta');
              nunta.style.backgroundColor = "white";
              nunta.style.border = "1px solid rgb(25, 60, 80)"; 
              nunta.style.color = "rgb(25, 60, 80)"; 
            }
              else{
                nunta.style.backgroundColor = "rgb(25, 60, 80)";
                nunta.style.border = "none"; 
                nunta.style.color = "white"; 
              }

              if(category === 'logodna'){
                let logodna = document.querySelector('#logodna');
                logodna.style.backgroundColor = "white";
                logodna.style.border = "1px solid rgb(25, 60, 80)"; 
                logodna.style.color = "rgb(25, 60, 80)"; 
              }
                else{
                  logodna.style.backgroundColor = "rgb(25, 60, 80)";
                  logodna.style.border = "none"; 
                  logodna.style.color = "white"; 
                }

                if(category === 'crestinare'){
                  let crestinare = document.querySelector('#crestinare');
                  crestinare.style.backgroundColor = "white";
                  crestinare.style.border = "1px solid rgb(25, 60, 80)"; 
                  crestinare.style.color = "rgb(25, 60, 80)"; 
                }
                  else{
                    crestinare.style.backgroundColor = "rgb(25, 60, 80)";
                    crestinare.style.border = "none"; 
                    crestinare.style.color = "white"; 
                  }
                  
                  if(category === 'sedinte'){
                    let sedinte = document.querySelector('#sedinte');
                    sedinte.style.backgroundColor = "white";
                    sedinte.style.border = "1px solid rgb(25, 60, 80)"; 
                    sedinte.style.color = "rgb(25, 60, 80)"; 
                  }
                    else{
                      sedinte.style.backgroundColor = "rgb(25, 60, 80)";
                      sedinte.style.border = "none"; 
                      sedinte.style.color = "white"; 
                    }

                    if(category === 'diverse'){
                      let diverse = document.querySelector('#diverse');
                      diverse.style.backgroundColor = "white";
                      diverse.style.border = "1px solid rgb(25, 60, 80)"; 
                      diverse.style.color = "rgb(25, 60, 80)"; 
                    }
                      else{
                        diverse.style.backgroundColor = "rgb(25, 60, 80)";
                        diverse.style.border = "none"; 
                        diverse.style.color = "white"; 
                      }
  });
});
