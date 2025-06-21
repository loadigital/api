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
      
            <div class="carousel-item active v-carousel-caption" >
           <img src="${IMG_URL + data.backdrop_path}" class="d-block" alt="...">
            <div class="carousel-caption  d-md-block">
            <h3>${element.title}</h3>
            
            <p><i class="bi-star-fill"></i><i class="bi-star-half"></i><i class="bi-star"></i> ${data.vote_average.toFixed(1)}</p>
            <p class="genre">${data.genres[0].name}</p>
            <a href=""><button class="button-0 b-boton-ver">Ver película</button></a>
            </div>
            </div> 
            
            
            ` 
  
    };  
    });
    });

const fragment = document.createDocumentFragment();
const vid2 = {
     method :'POST'
    };
    
    fetch('https://biloa.site/db/conex-movies.php',vid2)
    .then(respuesta => respuesta.json())
    .then(resultado =>{
   
        //function pintar(data){
            //return [...data].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 8)
          //}
          
    const newVid2 = resultado.reverse().slice(0, 10);
	 //const newArrayNew = pintar(data);
     newVid2.forEach(element => {

            
           // const card = document.createElement("div");
            const cardM = document.querySelector(".b-container-card");

            const divCardM = document.createElement("div");
            divCardM.className ="flx-j-center vx"
            divCardM .innerHTML +=`
            <div class="b-card flx-j-center">
            <img class="b-img-card" src="${element.img}" alt="">
            <div class="b-body-card w-12 flx-j-center">
            <h5>${element.title}</h5>
            </div>

          </div>
           
            
            
            `
           
      fragment.appendChild(divCardM);
      cardM.appendChild(fragment);
    });
  });
