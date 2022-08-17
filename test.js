let lastUrl = location.href; 
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    onUrlChange(url);
  }
}).observe(document, {subtree: true, childList: true}); 
function onUrlChange(current) {
  if(current.startsWith("https://steamcommunity.com/profiles")){
		let seccion = current.substr(current.indexOf("edit")+5);
    console.log("Localizando accion para seccion " + seccion);
    switch(seccion){    
      case "avatar":
        initEditAvatar()
      break;
      case "background":
        initEditBackground()
      break;
      case "miniprofile":
        initEditMiniProfile()
      break;
      case "goldenprofile":
        initEditGoldenProfile()
      break;
      case "theme":
        initEditTheme()
      break;
      case "favoritebadge":
        initEditFavouriteBadge();
      break;
      case "favoritegroup":
        initEditFavouriteGroup();
      break;
      case "showcases":
        initEditShocases();
      break;
        
    }
  }
}
/*Inicio de la seccion avatar*/
function initEditAvatar(){
  console.log("Hemos llegado a AVATAR");
  var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  if(typeof buttonDiv[0] == 'undefined'){
    const targetNode = document.getElementById('application_root');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if(mutation.type === 'childList') {
              	var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  							if(typeof buttonDiv[0] != 'undefined'){
                  observer.disconnect();
                  createButtonRandomAvatar(buttonDiv[0]);
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  } else{
  	createButtonRandomAvatar(buttonDiv[0]);
  }
}

function createButtonRandomAvatar(parent){
  let botonExistente = document.getElementById('button_RandomAvatar');
  if(botonExistente == null){
   	const boton = document.createElement("button");
    boton.setAttribute('id','button_RandomAvatar');
    boton.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let botonClasses = [ 'DialogButton', '_DialogLayout', 'Focusable' ];
    boton.classList.add(...botonClasses);
    boton.innerText = 'Random';
    boton.addEventListener("click", chooseRandomAvatar);
    parent.appendChild(boton); 
  }
}

function chooseRandomAvatar(){
  /*Mirar si hay 2 avatarcollection_AvatarCollection_1UoAv. Si los hay, alert de que "tenemos que elegir uno de los 2 cuadros"
  Cuando haya solo 1, contar si tenemos marcos. Si hay, estamos en marcos. Si no, estamos en avatares :)
  */
  
	if(document.getElementsByClassName('avatarcollection_AvatarCollection_1UoAv').length == 1){
    if(document.getElementsByClassName("avatarcollection_FramePreview_16w1D").length != 0){
      console.log("%c chosing frames", 'background: #222; color: #bada55');
      let contenedorMarcos = document.querySelector('.avatarcollection_CollectionGroupAvatars_wWso7');
      //let randomNumber = Math.floor(Math.random() * (contenedorMarcos.childNodes.length) + 0);
    	contenedorMarcos.childNodes[pickRandomNumber(0, contenedorMarcos.childNodes.length)].click();
    } else{
      console.log("%c chosing profile pic", 'background: #222; color: #bada55');
      let contenedoresAvatares = document.querySelectorAll('.avatarcollection_CollectionGroup_2kbA6 > .avatarcollection_CollectionGroupAvatars_wWso7'); //Pueden ser los comprados en la tienda de puntos o los de los juegos
      //let randomContenedor = Math.floor(Math.random() * (contenedoresAvatares.length - 0 + 1) + 0); //Seleccionamos contenedor al azar
      let randomContenedor = pickRandomNumber(0, contenedoresAvatares.length + 1); //Seleccionamos contenedor al azar
      //let randomNumber = Math.floor(Math.random() * (contenedoresAvatares[randomContenedor].childNodes.length - 1) + 0);
      let randomNumber = pickRandomNumber(0, contenedoresAvatares[randomContenedor].childNodes.length - 1);
      console.log(contenedoresAvatares[randomContenedor].childNodes[randomNumber]);
      contenedoresAvatares[randomContenedor].childNodes[randomNumber].click();
    }
  } else{
    alert("Debes elegir entre avatar o marco");
  }
}
/*Final de la seccion avatar*/
/*Inicio de la seccion background*/
function initEditBackground(){
  var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  if(typeof buttonDiv[0] == 'undefined'){
    const targetNode = document.getElementById('application_root');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if(mutation.type === 'childList') {
              	var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  							if(typeof buttonDiv[0] != 'undefined'){
                  observer.disconnect();
                	//alert("Ya podemos colocar el boton");
                  createButtonRandomBackground(buttonDiv[0]);
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  } else{
  	createButtonRandomBackground(buttonDiv[0]);
  }
}

function createButtonRandomBackground(parent){
  let botonExistente = document.getElementById('button_RandomBackground');
  if(botonExistente == null){
   	const boton = document.createElement("button");
    boton.setAttribute('id','button_RandomBackground');
    boton.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let botonClasses = [ 'DialogButton', '_DialogLayout', 'Focusable' ];
    boton.classList.add(...botonClasses);
    boton.innerText = 'Random';
    boton.addEventListener("click", chooseRandomBackground);
    parent.appendChild(boton); 
  }
}

function chooseRandomBackground(){
	let contenedorFondos = document.querySelector('.profileedit_ItemPickerList_SMUuC');
  if(contenedorFondos != null){
    let randomNumber = pickRandomNumber(0, contenedorFondos.childNodes.length + 1);
    contenedorFondos.childNodes[randomNumber].click();
  }
  let opcionesFondo = document.querySelector('.profilebackground_ProfileBackgroundEquipOptions_RS77U');
  if(opcionesFondo != null){
    opcionesFondo.childNodes[pickRandomNumber(0, opcionesFondo.childNodes.length + 1)].childNodes[0].click()
  }
}
/*Final de la seccion background*/
/*Inicio de la seccion miniprofile*/
function initEditMiniProfile(){
  var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  if(typeof buttonDiv[0] == 'undefined'){
    const targetNode = document.getElementById('application_root');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if(mutation.type === 'childList') {
              	var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  							if(typeof buttonDiv[0] != 'undefined'){
                  observer.disconnect();
                  createButtonRandomMiniProfile(buttonDiv[0]);
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  } else{
  	createButtonRandomMiniProfile(buttonDiv[0]);
  }
}
function createButtonRandomMiniProfile(parent){
  let botonExistente = document.getElementById('button_RandomMiniProfile');
  if(botonExistente == null){
   	const boton = document.createElement("button");
    boton.setAttribute('id','button_RandomMiniProfile');
    boton.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let botonClasses = [ 'DialogButton', '_DialogLayout', 'Focusable' ];
    boton.classList.add(...botonClasses);
    boton.innerText = 'Random';
    boton.addEventListener("click", chooseRandomMiniProfile);
    parent.appendChild(boton); 
  }
}
function chooseRandomMiniProfile(){
	let contenedorMiniPerfiles = document.querySelector('.profileedit_ItemPickerList_SMUuC');
  if(contenedorMiniPerfiles != null){
    contenedorMiniPerfiles.childNodes[pickRandomNumber(0, contenedorMiniPerfiles.childNodes.length - 1)].click();
  }
}
/*Final de la seccion miniprofile*/
/*Inicio de la seccion goldenprofile*/
function initEditGoldenProfile(){
  var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  if(typeof buttonDiv[0] == 'undefined'){
    const targetNode = document.getElementById('application_root');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if(mutation.type === 'childList') {
              	var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  							if(typeof buttonDiv[0] != 'undefined'){
                  observer.disconnect();
                  createButtonRandomGoldenProfile(buttonDiv[0]);
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  } else{
  	createButtonRandomGoldenProfile(buttonDiv[0]);
  }
}
function createButtonRandomGoldenProfile(parent){
  let botonExistente = document.getElementById('button_RandomGoldenProfile');
  if(botonExistente == null){
   	const boton = document.createElement("button");
    boton.setAttribute('id','button_RandomGoldenProfile');
    boton.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let botonClasses = [ 'DialogButton', '_DialogLayout', 'Focusable' ];
    boton.classList.add(...botonClasses);
    boton.innerText = 'Random';
    boton.addEventListener("click", chooseRandomGoldenProfile);
    parent.appendChild(boton); 
  }
}
function chooseRandomGoldenProfile(){
	let contenedorPerfiles = document.querySelector('.profileedit_ItemPickerList_SMUuC');
  if(contenedorPerfiles != null){
    contenedorPerfiles.childNodes[pickRandomNumber(0, contenedorPerfiles.childNodes.length - 1)].click();
  }
}
/*Final de la seccion goldenprofile*/
/*Inicio de la seccion theme*/
function initEditTheme(){
  var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  if(typeof buttonDiv[0] == 'undefined'){
    const targetNode = document.getElementById('application_root');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if(mutation.type === 'childList') {
              	var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  							if(typeof buttonDiv[0] != 'undefined'){
                  observer.disconnect();
                	//alert("Ya podemos colocar el boton");
                  createButtonRandomTheme(buttonDiv[0]);
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  } else{
  	createButtonRandomTheme(buttonDiv[0]);
  }
}
function createButtonRandomTheme(parent){
  let botonExistente = document.getElementById('button_RandomTheme');
  if(botonExistente == null){
   	const boton = document.createElement("button");
    boton.setAttribute('id','button_RandomTheme');
    boton.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let botonClasses = [ 'DialogButton', '_DialogLayout', 'Focusable' ];
    boton.classList.add(...botonClasses);
    boton.innerText = 'Random';
    boton.addEventListener("click", chooseRandomTheme);
    parent.appendChild(boton); 
  }
}
function chooseRandomTheme(){
	let contenedorTemas = document.querySelector('.profileedit_ItemPickerList_SMUuC');
  if(contenedorTemas != null){
    contenedorTemas.childNodes[pickRandomNumber(0, contenedorTemas.childNodes.length - 1)].click();
  }
}

/*Final de la seccion theme*/
/*Inicio de la seccion favoritebadge*/
function initEditFavouriteBadge(){
  var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  if(typeof buttonDiv[0] == 'undefined'){
    const targetNode = document.getElementById('application_root');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if(mutation.type === 'childList') {
              	var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  							if(typeof buttonDiv[0] != 'undefined'){
                  observer.disconnect();
                  createButtonRandomFavouriteBadge(buttonDiv[0]);
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  } else{
  	createButtonRandomFavouriteBadge(buttonDiv[0]);
  }
}
function createButtonRandomFavouriteBadge(parent){
  let botonExistente = document.getElementById('button_RandomFavouriteBadge');
  if(botonExistente == null){
   	const boton = document.createElement("button");
    boton.setAttribute('id','button_RandomFavouriteBadge');
    boton.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let botonClasses = [ 'DialogButton', '_DialogLayout', 'Focusable' ];
    boton.classList.add(...botonClasses);
    boton.innerText = 'Random';
    boton.addEventListener("click", chooseRandomFavouriteBadge);
    parent.appendChild(boton); 
  }
}
function chooseRandomFavouriteBadge(){
	let contenedorInsignias = document.querySelector('.profileedit_ItemPickerList_SMUuC');
  if(contenedorInsignias != null){
    contenedorInsignias.childNodes[pickRandomNumber(0, contenedorInsignias.childNodes.length - 1)].click();
  }
}
/*Final de la seccion favoritebadge*/
/*Inicio de la seccion favoritegroup*/
function initEditFavouriteGroup(){
  var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  if(typeof buttonDiv[0] == 'undefined'){
    const targetNode = document.getElementById('application_root');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if(mutation.type === 'childList') {
              	var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  							if(typeof buttonDiv[0] != 'undefined'){
                  observer.disconnect();
                  createButtonRandomFavouriteGroup(buttonDiv[0]);
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  } else{
  	createButtonRandomFavouriteGroup(buttonDiv[0]);
  }
}
function createButtonRandomFavouriteGroup(parent){
  let botonExistente = document.getElementById('button_RandomFavouriteGroup');
  if(botonExistente == null){
   	const boton = document.createElement("button");
    boton.setAttribute('id','button_RandomFavouriteGroup');
    boton.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let botonClasses = [ 'DialogButton', '_DialogLayout', 'Focusable' ];
    boton.classList.add(...botonClasses);
    boton.innerText = 'Random';
    boton.addEventListener("click", chooseRandomFavouriteGroup);
    parent.appendChild(boton); 
  }
}
function chooseRandomFavouriteGroup(){
	let contenedorGrupos = document.querySelector('.profileedit_ItemPickerList_SMUuC');
  if(contenedorGrupos != null){
    contenedorGrupos.childNodes[pickRandomNumber(0, contenedorGrupos.childNodes.length - 1)].click();
  }
}
/*Final de la seccion favoritegroup*/
/*Inicio de la seccion showcases*/
function initEditShocases(){
  var targetNode = document.querySelector('body');
  var config = { attributes: false, childList: true, subtree: true };
  const callback = function(mutationList, observer) {
    // Using traditional 'for loops' for IE 11
    for(const mutation of mutationList) {
      if (mutation.type === 'childList') {
        //A child node has been added or removed
        if(mutation.addedNodes.length != 0){
          for(var i = 0; i <= mutation.addedNodes.length; i++){
            if(mutation.addedNodes[i].className == 'newmodal'){
             	console.log("%c Se ha abierto un modal", 'background: #222; color: #bada55'); 
              var elemento = mutation.addedNodes[i].querySelector(".showcase_achievement_picker");
              if(elemento != null){
                //console.log("%c ¡Estamos cargando los logros! Holy shit!", 'background: #222; color: #bada55'); 
                var elementoBotones = mutation.addedNodes[i].querySelector(".showcase_achievement_picker_select_ctn");
                createButtonsRandomAchievements(elementoBotones);
              }
              elemento = mutation.addedNodes[i].querySelector(".group_list_results");
              if(elemento != null){
                //console.log("%c ¡Estamos cargando las insignias o los grupos! Holy shit!", 'background: #222; color: #bada55'); 
                createButtonRandomBadgeShowcase(elemento);
              }
            }
          }
        }
        //Sacandolos justo debajo del primer for funcionan... asi que para la siguiente versión, sacarlos, sacar tambien el de insignias y mirar si con eso es suficiente. Pero antes. backup
        //Review this, because I'm not sure why this works when there's a mutation, but not a childlist mutation.
        var elemento = document.querySelector(".group_list_results");
        if(elemento != null){
          console.log("%c ¡Estamos cargando las insignias o los grupos! Holy shit!", 'background: #222; color: #bada55'); 
          console.log(elemento);
          createButtonRandomBadgeShowcase(elemento);
        }
        var test = document.querySelector(".game_list_results");
        if(test != null){
          console.log("%c ¡comprobado fuera del if del nombre!", 'background: #222; color: red'); 
          var elementosGrupo = document.getElementsByClassName('group_list_option');
          if(elementosGrupo != null){
            console.log("%c ¡ready para aleatorizar!", 'background: #222; color: green'); 
            createRandomGenericButtonShowcase(test);
          }
        }
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
  createButtonRandomShowcaseOrder(document.querySelector(".DialogBodyText"));
  createButtonsRandomShowcaseContainer();
}

function createButtonRandomShowcaseOrder(parent){
  let botonExistente = document.getElementById('button_RandomShowcasesOrder');
  if(botonExistente == null){
    const boton = document.createElement("button");
    boton.setAttribute('id','button_RandomShowcasesOrder');
    boton.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let botonClasses = [ 'DialogButton', '_DialogLayout', 'Focusable' ];
    boton.classList.add(...botonClasses);
    boton.innerText = 'Random showcases order';
    boton.addEventListener("click", RandomizeShowcases);
    parent.parentNode.insertBefore(boton,parent.nextSibling);
  }
}

function RandomizeShowcases(){
  var showcases = document.querySelectorAll(".profile_showcase_selector");
  if(showcases.length != 0){
    var positions = Array.from(Array(showcases.length).keys())
    positions = shuffleArray(positions)
    console.log(positions);
    for (var i = 0; i <= showcases.length - 1; i++) {
      showcases[i].setAttribute("SRP_desiredOrder", positions[i]);
      console.log(showcases[i]);
    }
    for (var j = 0; j <= showcases.length -1; j++) {
      //console.log("Comparando " + showcases[j].getAttribute("SRP_desiredOrder") + " con " + j)
      var numero = parseInt(showcases[j].getAttribute("SRP_desiredOrder"));


      if(parseInt(numero) != parseInt(j)){
        while(j != numero){
          console.log(numero +"!=" + j);
          if(j < numero){
            numero--;
            showcases[j].querySelector(".profile_showcase_sort_down").click();
          } else{
            numero++;    
            showcases[j].querySelector(".profile_showcase_sort_up").click();
          }
        }
      }
    }
    /*showcases = document.querySelectorAll(".profile_showcase_selector");
    for (var i = 0; i <= showcases.length - 1; i++) {
      console.log(showcases[i]);
    }*/
  }
}

function createButtonsRandomShowcaseContainer(){
  var showcases = document.querySelectorAll(".profile_showcase_selector");
  if(showcases.length != 0){
    for (var i = 0; i <= showcases.length - 1; i++) {
      var prevButton = showcases[i].querySelector(".customization_controls_nextprev a")
      const boton = document.createElement("a");
      boton.setAttribute('id','button_RandomAchieventShowcase_' + i);
      boton.setAttribute('href','#');
      let botonClasses = [ 'btn_grey_black', 'btn_medium' ];
      boton.classList.add(...botonClasses);
      boton.addEventListener("click", function(event){event.preventDefault();chooseRandomShowcase(boton)});
      var spanNode = document.createElement("span");
      spanNode.innerText = 'Random showcase';
      boton.appendChild(spanNode);
      prevButton.parentNode.insertBefore(boton,prevButton.nextSibling);
      var whitespace = document.createTextNode("\u00A0\u00A0\u00A0");
      prevButton.parentNode.insertBefore(whitespace,prevButton.nextSibling);
    }
  }
}

function chooseRandomShowcase(button){
  console.log(button)
  var numberElement = button.id.substr(-1);
  console.log(numberElement);
  var activeOptions = document.querySelectorAll("#showcase_"+numberElement+"_select option:not([disabled])");
  var select = document.querySelector("#showcase_"+numberElement+"_select")
  var posible = false;
  var randomNumber;
  while(!posible){
    randomNumber = pickRandomNumber(1, activeOptions.length);//Check if it's disabled, so in that case we chose another number
    if(!document.querySelector("#showcase_"+numberElement+"_select option:nth-child("+randomNumber+")").disabled){ 
      posible = true;
    }
  }
  select.selectedIndex=randomNumber - 1; //SelectedIndex and nth-child difference
  select.dispatchEvent(new Event('change'));
}

function createButtonRandomBadgeShowcase(parent){
  let botonExistente = document.getElementById('button_RandomAchieventShowcase');
  if(botonExistente == null){
    const boton = document.createElement("button");
    boton.setAttribute('id','button_RandomAchieventShowcase');
    boton.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let botonClasses = [ 'DialogButton', '_DialogLayout', 'Focusable' ];
    boton.classList.add(...botonClasses);
    boton.innerText = 'Random selection';
    boton.addEventListener("click", chooseRandomBadgeForShowcase);
    parent.prepend(boton); 
  }
}

function chooseRandomBadgeForShowcase(){
  var badges = document.getElementsByClassName('group_list_option');
  badges[pickRandomNumber(0, badges.length)].click();
}

function createButtonsRandomAchievements(parent){
  let botonExistente = document.getElementById('button_RandomGameForAchievent');
  if(botonExistente == null){
    //Boton para que seleccione solo el juego
   	const boton = document.createElement("button");
    boton.setAttribute('id','button_RandomGameForAchievent');
    boton.style.background = 'linear-gradient(to right, #0097c3 0%, #0035c3 60%)';
    let botonClasses = [ 'DialogButton', '_DialogLayout', 'Focusable' ];
    boton.classList.add(...botonClasses);
    boton.innerText = 'Random Game';
    boton.addEventListener("click", chooseRandomGameforListAchievements);
    parent.appendChild(boton); 
    //Boton para que seleccione juego y logro
    const boton2 = document.createElement("button");
    boton2.setAttribute('id','button_RandomAchievent');
    boton2.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    boton2.classList.add(...botonClasses);
    boton2.innerText = 'Random Achievement';
    boton2.addEventListener("click", chooseRandomAchievement);
    parent.appendChild(boton2); 
  }
}
function resetGameAchievementList(){
  var select = document.querySelector('.showcase_achievement_picker_select_ctn .gray_bevel');
  select.selectedIndex=0;
  select.dispatchEvent(new Event('change'));
}
function chooseRandomGameforListAchievements(){
  console.log("%c Opcion pulsada: juego al azar", 'background: #222; color: #bada55');
  var select = document.querySelector('.showcase_achievement_picker_select_ctn .gray_bevel');
  var totalGames = select.length;
  let randomNumber = pickRandomNumber(1, totalGames); //Forzamos el +1, para que no elija el vacio
  select.selectedIndex=randomNumber;
  select.dispatchEvent(new Event('change'));
}
function chooseRandomAchievement(){
  resetGameAchievementList();
  console.log("%c Opcion pulsada: logro al azar", 'background: #222; color: #bada55');
  var targetNode = document.querySelector('.showcase_achievement_picker_list');
  var config = { attributes: false, childList: true, subtree: true };
  const callback = function(mutationList, observer) {
    // Using traditional 'for loops' for IE 11
    for(const mutation of mutationList) {
      if (mutation.type === 'childList') {
        if(mutation.addedNodes.length != 0){
          for(var i = 0; i <= mutation.addedNodes.length; i++){
            var logros = document.getElementsByClassName('achievement_list_item');
            if(logros.length != 0){
  						 logros[pickRandomNumber(0, logros.length - 1)].click();
            }
          }
        }
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
  chooseRandomGameforListAchievements()
}
function createRandomGenericButtonShowcase(parent){
  let botonExistente = document.getElementById('button_GenericRandomShowcase');
  if(botonExistente == null){
    const boton = document.createElement("button");
    boton.setAttribute('id','button_GenericRandomShowcase');
    boton.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let botonClasses = [ 'DialogButton', '_DialogLayout', 'Focusable' ];
    boton.classList.add(...botonClasses);
    boton.innerText = 'Random selection';
    boton.addEventListener("click", chooseRandomBadgeForShowcase);
    parent.prepend(boton); 
  }
}
/*Final de la seccion showcases*/

onUrlChange(lastUrl);

function pickRandomNumber(min,max){
  var r = Math.floor(Math.random() * (max - min + 1) + min); 
  console.log("Between " + min + " and " + max + " (both included), I choose " + r);
  return r;
}

//From w3docs
function shuffleArray(array) {
  let curId = array.length;
  // There remain elements to shuffle
  while (0 !== curId) {
    // Pick a remaining element
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    // Swap it with the current element.
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  return array;
}