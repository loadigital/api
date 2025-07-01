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
      
           <div class="carousel-item v-carousel-caption" >
           <img src="${IMG_URL + data.backdrop_path}" class="d-block" alt="...">
            <div class="carousel-caption  d-md-block">
            <h3>${element.title}</h3>
            
            <p><i class="bi-star-fill"></i><i class="bi-star-half"></i><i class="bi-star"></i> ${data.vote_average.toFixed(1)}</p>
            <p class="genre">${data.genres[0].name}</p>
            <a class="a flx-j-center" href="${videoLink + element.id + '&v_id=' + element.video + '&cal=' + element.calidad + '&ge=' + element.genero}"><button class="button-0 b-boton-ver">Ver película</button></a>
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
   
        function pintar(resultado){
            return [...resultado].sort(() => (Math.random() > 0.5 ? 1 : -1))
          }
          
   // const newAccion = resultado.reverse().slice(0, 8);
	 //const newArrayNew = pintar(data);
     pintar(resultado).forEach(element => {

      if (element.ano === "2025") {
        const scrolling1 = document.querySelector(".scrolling1");
        const card_scrolling1 = document.createElement("div");
        card_scrolling1.classList = "scrolling-card";
        card_scrolling1.innerHTML += `
        <a href="${videoLink + element.id + '&v_id=' + element.video + '&cal=' + element.calidad + '&ge=' + element.genero}"><img src="${element.img}" alt=""></a>
        <p class="b-title">${element.title}</p class="b-title">
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
        <a href="${videoLink + element.id + '&v_id=' + element.video + '&cal=' + element.calidad + '&ge=' + element.genero}"><img src="${element.img}" alt=""></a>
        <p class="b-title">${element.title}</p class="b-title">
        `
        const fragment_accion = document.createDocumentFragment();
        fragment_accion.appendChild(card_scrolling2);
        scrolling2.appendChild(fragment_accion);
      };

const content2 = document.querySelector(".scrolling2");
document.querySelector("#scrolling-button-right2").addEventListener("click", () => {content2.scrollLeft += 800;});
document.querySelector("#scrolling-button-left2").addEventListener("click", () => {content2.scrollLeft -= 800;});


if (element.puntuacion === "7.9") {
        const scrolling3 = document.querySelector(".scrolling3");
        const card_scrolling3 = document.createElement("div");
        card_scrolling3.classList = "scrolling-card";
        card_scrolling3.innerHTML += `
        <a href="${videoLink + element.id + '&v_id=' + element.video + '&cal=' + element.calidad + '&ge=' + element.genero}"><img src="${element.img}" alt=""></a>
        <p class="b-title">${element.title}</p class="b-title">
        `
        const fragment_populares = document.createDocumentFragment();
        fragment_populares.appendChild(card_scrolling3);
        scrolling3.appendChild(fragment_populares);
      };

const content3 = document.querySelector(".scrolling3");
document.querySelector("#scrolling-button-right3").addEventListener("click", () => {content3.scrollLeft += 800;});
document.querySelector("#scrolling-button-left3").addEventListener("click", () => {content3.scrollLeft -= 800;});
  


if (element.genero === "12") {
        const scrolling4 = document.querySelector(".scrolling4");
        const card_scrolling4 = document.createElement("div");
        card_scrolling4.classList = "scrolling-card";
        card_scrolling4.innerHTML += `
        <a href="${videoLink + element.id + '&v_id=' + element.video + '&cal=' + element.calidad + '&ge=' + element.genero}"><img src="${element.img}" alt=""></a>
        <p class="b-title">${element.title}</p class="b-title">
        `
        const fragment_aventura = document.createDocumentFragment();
        fragment_aventura.appendChild(card_scrolling4);
        scrolling4.appendChild(fragment_aventura);
      };

const content4 = document.querySelector(".scrolling4");
document.querySelector("#scrolling-button-right4").addEventListener("click", () => {content4.scrollLeft += 800;});
document.querySelector("#scrolling-button-left4").addEventListener("click", () => {content4.scrollLeft -= 800;});


if (element.genero === "16") {
        const scrolling5 = document.querySelector(".scrolling5");
        const card_scrolling5 = document.createElement("div");
        card_scrolling5.classList = "scrolling-card";
        card_scrolling5.innerHTML += `
        <a href="${videoLink + element.id + '&v_id=' + element.video + '&cal=' + element.calidad + '&ge=' + element.genero}"><img src="${element.img}" alt=""></a>
        <p class="b-title">${element.title}</p class="b-title">
        `
        const fragment_animacion = document.createDocumentFragment();
        fragment_animacion.appendChild(card_scrolling5);
        scrolling5.appendChild(fragment_animacion);
      };

const content5 = document.querySelector(".scrolling5");
document.querySelector("#scrolling-button-right5").addEventListener("click", () => {content5.scrollLeft += 800;});
document.querySelector("#scrolling-button-left5").addEventListener("click", () => {content5.scrollLeft -= 800;});
  

if (element.genero === "80") {
        const scrolling6 = document.querySelector(".scrolling6");
        const card_scrolling6 = document.createElement("div");
        card_scrolling6.classList = "scrolling-card";
        card_scrolling6.innerHTML += `
        <a href="${videoLink + element.id + '&v_id=' + element.video + '&cal=' + element.calidad + '&ge=' + element.genero}"><img src="${element.img}" alt=""></a>
        <p class="b-title">${element.title}</p class="b-title">
        `
        const fragment_crimen = document.createDocumentFragment();
        fragment_crimen.appendChild(card_scrolling6);
        scrolling6.appendChild(fragment_crimen);
      };

const content6 = document.querySelector(".scrolling6");
document.querySelector("#scrolling-button-right6").addEventListener("click", () => {content6.scrollLeft += 800;});
document.querySelector("#scrolling-button-left6").addEventListener("click", () => {content6.scrollLeft -= 800;});
 
if (element.genero === "18") {
        const scrolling7 = document.querySelector(".scrolling7");
        const card_scrolling7 = document.createElement("div");
        card_scrolling7.classList = "scrolling-card";
        card_scrolling7.innerHTML += `
        <a href="${videoLink + element.id + '&v_id=' + element.video + '&cal=' + element.calidad + '&ge=' + element.genero}"><img src="${element.img}" alt=""></a>
        <p class="b-title">${element.title}</p class="b-title">
        `
        const fragment_drama = document.createDocumentFragment();
        fragment_drama.appendChild(card_scrolling7);
        scrolling7.appendChild(fragment_drama);
      };

const content7 = document.querySelector(".scrolling7");
document.querySelector("#scrolling-button-right7").addEventListener("click", () => {content7.scrollLeft += 800;});
document.querySelector("#scrolling-button-left7").addEventListener("click", () => {content7.scrollLeft -= 800;});
 
if (element.genero === "27") {
        const scrolling8 = document.querySelector(".scrolling8");
        const card_scrolling8 = document.createElement("div");
        card_scrolling8.classList = "scrolling-card";
        card_scrolling8.innerHTML += `
        <a href="${videoLink + element.id + '&v_id=' + element.video + '&cal=' + element.calidad + '&ge=' + element.genero}"><img src="${element.img}" alt=""></a>
        <p class="b-title">${element.title}</p class="b-title">
        `
        const fragment_terror = document.createDocumentFragment();
        fragment_terror.appendChild(card_scrolling8);
        scrolling8.appendChild(fragment_terror);
      };

const content8 = document.querySelector(".scrolling8");
document.querySelector("#scrolling-button-right8").addEventListener("click", () => {content8.scrollLeft += 800;});
document.querySelector("#scrolling-button-left8").addEventListener("click", () => {content8.scrollLeft -= 800;});
 

if (element.genero === "10749") {
        const scrolling9 = document.querySelector(".scrolling9");
        const card_scrolling9 = document.createElement("div");
        card_scrolling9.classList = "scrolling-card";
        card_scrolling9.innerHTML += `
        <a href="${videoLink + element.id + '&v_id=' + element.video + '&cal=' + element.calidad + '&ge=' + element.genero}"><img src="${element.img}" alt=""></a>
        <p class="b-title">${element.title}</p class="b-title">
        `
        const fragment_romance = document.createDocumentFragment();
        fragment_romance.appendChild(card_scrolling9);
        scrolling9.appendChild(fragment_romance);
      };

const content9 = document.querySelector(".scrolling9");
document.querySelector("#scrolling-button-right9").addEventListener("click", () => {content9.scrollLeft += 800;});
document.querySelector("#scrolling-button-left9").addEventListener("click", () => {content9.scrollLeft -= 800;});
 

});
});




//buscador


function ponleFocus(){
    document.getElementById("inp").focus();
}
ponleFocus();

const inp = document.getElementById("inp");
const cont_cards = document.getElementById("cont-cardss")
const fragment = document.createDocumentFragment();

const db_movies = {
     method :'POST'
    };
    
    fetch('https://biloa.site/db/conex-movies.php',db_movies)
    .then(resp_movies => resp_movies.json())
    .then(result_movies =>{

const db_series = {
     method :'POST'
    };
    
    fetch('https://biloa.site/db/conex-series.php',db_series)
    .then(resp_series => resp_series.json())
    .then(result_series =>{

    let new_db = [...result_movies, ...result_series];

    new_db.forEach(element =>{
      if (element.hasOwnProperty('poster')) {
        element.id_buscador = "serie"
      }else{
        element.id_buscador = "pelicula"
      };


      if (element.id_buscador === "pelicula") {
        const div_cont_cards = document.createElement("div");
        div_cont_cards.className = "cont-cards"
        div_cont_cards.innerHTML += `
        
        <div class="co-cards">
            
        <div class="cards" style="display:none;" >
         <div class="title-cards"><a class="link-play"  href="${videoLink + element.id + '&v_id=' + element.video + '&cal=' + element.calidad + '&ge=' + element.genero}">
            <img src="${element.img}" alt=""> 
            <p> ${element.title} <br><i class="bi-star-fill"></i><i class="bi-star-half"></i><i class="bi-star"></i> ${element.puntuacion}<br>${element.ano}</p>
           
         </a></div>
        </div>
        
        </div>
        
        `
        const clone =  div_cont_cards.cloneNode(true); 
        fragment.appendChild(clone);
        cont_cards.appendChild(fragment);
      }else{

         const div_cont_cards = document.createElement("div");
        div_cont_cards.className = "cont-cards"
        div_cont_cards.innerHTML += `
        
        <div class="co-cards">
            
        <div class="cards" style="display:none;">
         <div class="title-cards"><a class="link-play"  href="${linkSeries + element.id + '&v_id=' + element.video + '&id_db=' + element.poster + '&ge=' + element.genero}">
            <img src="${element.img}" alt=""> 
            <p> ${element.title} <br><i class="bi-star-fill"></i><i class="bi-star-half"></i><i class="bi-star"></i> ${element.puntuacion}<br>${element.ano}</p>
           
         </a></div>
        </div>
        
        </div>
        
        `
        const clone =  div_cont_cards.cloneNode(true); 
        fragment.appendChild(clone);
        cont_cards.appendChild(fragment);
      };
       

 
    });

    });
    });

      


  $(document).ready(function(){
    $("#inp").on("keyup", function() {
        $(".cards").show();

   document.querySelector(".no-results").style.display="flex";
   document.querySelector(".no-resultss").style.display="none";

    var value = $(this).val().toLowerCase();
    $(".title-cards").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

    });
    });
    });//buscador 

    document.querySelector(".xc").addEventListener("click", ()=>{
       document.querySelector(".cont-main").style.left="-100%"
    })
   
    function despl() {
       document.querySelector(".cont-main").style.left="0px"
    }
			       
