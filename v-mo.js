const vid1 = {
     method :'POST'
    };
    
    fetch('https://biloa.site/db/conex-movies.php',vid1)
    .then(respuesta => respuesta.json())
    .then(resultado =>{
   
        //function pintar(data){
            //return [...data].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 8)
          //}
          
    const newVid1 = resultado.reverse().slice(0, 3);
	 //const newArrayNew = pintar(data);
     newVid1.forEach(element => {

            const  API_URL  =  BASE_URL  +  '/movie/' + element.id + '?' + API_KEY + '&language=es-ES';//CODIGO TMBD
            
            getMovie(API_URL);

            function getMovie(url){
            fetch(url).then(res => res.json()).then(data =>{
                 console.log(data)
                 pintar(data);
                });
            };

        function pintar(data){

         
           // const card = document.createElement("div");
            const card = document.querySelector("#elemento");
            
            card.innerHTML +=`
      
           <div class="carousel-item  v-carousel-caption" >
           <img src="${IMG_URL + data.backdrop_path}" class="d-block" alt="...">
            <div class="carousel-caption  d-md-block">
            <h3>${element.title}</h3>
            
            <p><i class="bi-star-fill"></i><i class="bi-star-half"></i><i class="bi-star"></i> ${data.vote_average.toFixed(1)}</p>
            <p class="genre">${data.genres[0].name}</p>
            <a class="a" href=""><button class="button-0 b-boton-ver">Ver película</button></a>
            </div>
            </div> 
            
            
            ` 

            const elem = document.querySelectorAll("#elemento > div");

            if (elem.length > 0) {
              const elements = elem[0];
              elements.classList.add('active');
            }
  
    };  
    });
    });


const moAccion = {
     method :'POST'
    };
    
    fetch('https://biloa.site/db/conex-movies.php',moAccion)
    .then(respuesta => respuesta.json())
    .then(resultado =>{
   
        //function pintar(data){
            //return [...data].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 8)
          //}
          
    const newAccion = resultado.reverse();
	 //const newArrayNew = pintar(data);
     newAccion.forEach(element => {

      if (element.ano === "2025") {
        const scrolling1 = document.querySelector(".scrolling1");
        const card_scrolling1 = document.createElement("div");
        card_scrolling1.classList = "scrolling-card";
        card_scrolling1.innerHTML += `
        <img src="${element.img}" alt="">
        `
        const fragment_ano = document.createDocumentFragment();
        fragment_ano.appendChild(card_scrolling1);
        scrolling1.appendChild(fragment_ano);
      };

const content = document.querySelector(".scrolling1");
document.querySelector("#scrolling-button-right").addEventListener("click", () => {content.scrollLeft += 800;});
document.querySelector("#scrolling-button-left").addEventListener("click", () => {content.scrollLeft -= 800;});



 if (element.genero === "28") {
        const scrolling2 = document.querySelector(".scrolling2");
        const card_scrolling2 = document.createElement("div");
        card_scrolling2.classList = "scrolling-card";
        card_scrolling2.innerHTML += `
        <img src="${element.img}" alt="">
        `
        const fragment_accion = document.createDocumentFragment();
        fragment_accion.appendChild(card_scrolling2);
        scrolling2.appendChild(fragment_accion);
      };

const content2 = document.querySelector(".scrolling2");
document.querySelector("#scrolling-button-right2").addEventListener("click", () => {content2.scrollLeft += 800;});
document.querySelector("#scrolling-button-left2").addEventListener("click", () => {content2.scrollLeft -= 800;});
  });
  });
