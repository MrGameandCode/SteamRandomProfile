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
      case "info":
        initEditInfo()
      break;
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
function initEditInfo(){
  console.log("Hemos llegado a INFO");
  var buttonDiv = document.getElementsByClassName("chatentry_EmoticonPickerButton_K-lPM");
  if(typeof buttonDiv[0] == 'undefined'){
    const targetNode = document.getElementById('application_root');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            if(mutation.type === 'childList') {
              	var buttonDiv = document.getElementsByClassName("chatentry_EmoticonPickerButton_K-lPM");
  							if(typeof buttonDiv[0] != 'undefined'){
                  observer.disconnect();
                  createButtonRandomInfoDescription(buttonDiv[0]);
                }
            }
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  } else{
  	createButtonRandomInfoDescription(buttonDiv[0]);
    createButtonRandomEmojisInfoDescription(buttonDiv[0]);
  }
}
function createButtonRandomInfoDescription(parent){
  let botonExistente = document.getElementById('button_RandomQuote');
  if(botonExistente == null){
   	const boton = document.createElement("a");
    boton.setAttribute('id','button_RandomQuote');
    boton.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    boton.style.maxWidth = '190px'
    boton.style.padding = '10px'
    boton.setAttribute('href','#');
    let botonClasses = [ 'DialogButton', '_DialogLayout', 'Focusable' ];
    boton.classList.add(...botonClasses);
    boton.innerText = 'Add Random Quote';
    boton.addEventListener("click", function(event){event.preventDefault();chooseRandomInfoQuote(".summary_summaryTextArea_2ipSt")});
    parent.parentNode.insertBefore(boton,parent.nextSibling);
  }
}
function chooseRandomInfoQuote(element){
	var array_quotes = loadQuotes();
  var chosedQuote = pickRandomNumber(0, array_quotes.length -1);
  console.log(array_quotes[chosedQuote]);
  var quote = "";
  if(array_quotes[chosedQuote].game != undefined){
    quote = "\n\"[i]" + array_quotes[chosedQuote].quote +"[/i]\" - " + array_quotes[chosedQuote].character + " (" + array_quotes[chosedQuote].game + ").";
  } else{
    quote = "\n\"[i]" + array_quotes[chosedQuote].quote +"[/i]\" - " + array_quotes[chosedQuote].character + ".";
  }
  var textarea = document.querySelector(element);
  textarea.value += quote;
  textarea.focus();
}

function createButtonRandomEmojisInfoDescription(parent){
  let botonExistente = document.getElementById('button_RandomEmojis');
  if(botonExistente == null){
   	const boton = document.createElement("a");
    boton.setAttribute('id','button_RandomEmojis');
    boton.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    boton.style.maxWidth = '190px'
    boton.style.padding = '10px'
    boton.setAttribute('href','#');
    let botonClasses = [ 'DialogButton', '_DialogLayout', 'Focusable' ];
    boton.classList.add(...botonClasses);
    boton.innerText = 'Add Random Emojis';
    boton.addEventListener("click", function(event){event.preventDefault();chooseRandomEmojis(".summary_summaryTextArea_2ipSt")});
    parent.parentNode.insertBefore(boton,parent.nextSibling);
  }
}
function chooseRandomEmojis(element){
  document.querySelector(".summary_formattingButton_LhNoI").click();
  var divEmojis = document.querySelectorAll(".addonpicker_ItemList_2tnPH");
  var correctDivEmojis;
  if (divEmojis.length == 1){
    correctDivEmojis = divEmojis[0]
  } else{
    correctDivEmojis = divEmojis[1]
  }
  var emojis = correctDivEmojis.querySelectorAll(".emoticon_emoticon_316r8");
  var array_emojis = [];
  if(emojis.length != 0){
    for (var i = 0; i < emojis.length; i++) {
      array_emojis.push(emojis[i].getAttribute("data-copytext"));
    }
  }
  var randomNumberEmojis = pickRandomNumber(1,array_emojis.length);
  var emojis2add = "";
  document.querySelector(".summary_formattingButton_LhNoI").click();
  for (var i = 0; i < randomNumberEmojis; i++) {
      emojis2add += array_emojis[pickRandomNumber(1,array_emojis.length - 1)];
  }
  var textarea = document.querySelector(".summary_summaryTextArea_2ipSt");
  textarea.value += emojis2add;
  textarea.focus();
}
/*Final de la seccion avatar*/
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
  //We count if we have 1 or 2 avatarcollection_AvatarCollection_1UoAv. If we have 1, we are choosing frames, if not, we are choosing avatars
	if(document.getElementsByClassName('avatarcollection_AvatarCollection_1UoAv').length == 1){
    if(document.getElementsByClassName("avatarcollection_FramePreview_16w1D").length != 0){
      console.log("%c chosing frames", 'background: #222; color: #bada55');
      let contenedorMarcos = document.querySelector('.avatarcollection_CollectionGroupAvatars_wWso7');
    	contenedorMarcos.childNodes[pickRandomNumber(0, contenedorMarcos.childNodes.length)].click();
    } else{
      console.log("%c chosing profile pic", 'background: #222; color: #bada55');
      let contenedoresAvatares = document.querySelectorAll('.avatarcollection_CollectionGroup_2kbA6 > .avatarcollection_CollectionGroupAvatars_wWso7'); //Pueden ser los comprados en la tienda de puntos o los de los juegos
      let randomContenedor = pickRandomNumber(0, contenedoresAvatares.length + 1); //We choose a random group, then a random avatar from that group
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
                var elementoBotones = mutation.addedNodes[i].querySelector(".showcase_achievement_picker_select_ctn");
                createButtonsRandomAchievements(elementoBotones);
              }
              elemento = mutation.addedNodes[i].querySelector(".group_list_results");
              if(elemento != null){
                createButtonRandomBadgeShowcase(elemento);
              }
            }
          }
        }
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
  createButtonRandomQuoteShowcase(document.querySelector(".emoticon_container"));
  createButtonRandomEmojiShowcase(document.querySelector(".emoticon_container"));
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
    //Button for chosing only the game
   	const boton = document.createElement("button");
    boton.setAttribute('id','button_RandomGameForAchievent');
    boton.style.background = 'linear-gradient(to right, #0097c3 0%, #0035c3 60%)';
    let botonClasses = [ 'DialogButton', '_DialogLayout', 'Focusable' ];
    boton.classList.add(...botonClasses);
    boton.innerText = 'Random Game';
    boton.addEventListener("click", chooseRandomGameforListAchievements);
    parent.appendChild(boton); 
    //Button for chosing the game and the achievement
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
  let randomNumber = pickRandomNumber(1, totalGames); //We put "1", for not chosing empty
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

function createButtonRandomQuoteShowcase(parent){
  let botonExistente = document.getElementById('button_RandomQuoteForShowcase');
  if(botonExistente == null){
   	const boton = document.createElement("a");
    boton.setAttribute('id','button_RandomQuoteForShowcase');
    boton.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    boton.style.maxWidth = '190px'
    boton.style.padding = '5px'
    boton.setAttribute('href','#');
    let botonClasses = [ 'DialogButton', '_DialogLayout', 'Focusable' ];
    boton.classList.add(...botonClasses);
    boton.innerText = 'Add Random Quote';
    boton.addEventListener("click", function(event){event.preventDefault();chooseRandomInfoQuote("#showcase_8_notes")});
    parent.parentNode.insertBefore(boton,parent.nextSibling);
  }
}

function createButtonRandomEmojiShowcase(parent){
  let botonExistente = document.getElementById('button_RandomEmojisForShowcase');
  if(botonExistente == null){
   	const boton = document.createElement("a");
    boton.setAttribute('id','button_RandomEmojisForShowcase');
    boton.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    boton.style.maxWidth = '190px'
    boton.style.padding = '5px'
    boton.setAttribute('href','#');
    let botonClasses = [ 'DialogButton', '_DialogLayout', 'Focusable' ];
    boton.classList.add(...botonClasses);
    boton.innerText = 'Add Random Emojis';
    boton.addEventListener("click", function(event){event.preventDefault();chooseRandomEmojisForInfoShowcase("#showcase_8_notes")});
    parent.parentNode.insertBefore(boton,parent.nextSibling);
  }
}

function chooseRandomEmojisForInfoShowcase(element){
  document.querySelector(".emoticon_container span").click();
  setTimeout(function(){
    var emojis = document.querySelectorAll(".emoticon_option");
    var array_emojis = [];
    if(emojis.length != 0){
      for (var i = 0; i < emojis.length; i++) {
        array_emojis.push(emojis[i].getAttribute("data-emoticon"));
      }
    }
    var randomNumberEmojis = pickRandomNumber(1,array_emojis.length);
    var emojis2add = "";
    for (var i = 0; i < randomNumberEmojis; i++) {
        emojis2add += ":" + array_emojis[pickRandomNumber(1,array_emojis.length - 1)] + ":";
    }
    var textarea = document.querySelector(element);
    textarea.value += emojis2add;
    document.querySelector(".emoticon_container span").click();
  },3000);
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

function loadQuotes(){
  var array_quotes = []
  array_quotes.push({quote:"No gods or kings. Only man.", character:"Andrew Ryan"})
  array_quotes.push({quote:"You brought this on yourself.", character:"Martin Walker"})
  array_quotes.push({quote:"If you need to learn how to talk to a lady, ask your Mum.", character:"Bayonetta"})
  array_quotes.push({quote:"A man chooses, a slave obeys.", character:"Andrew Ryan"})
  array_quotes.push({quote:"What is a man? A miserable little pile of secrets!", character:"Dracula", game:"Castlevania"});
  array_quotes.push({quote:"Do you have any idea how many lawyers are in hell?", character:"Ghost Rider"})
  array_quotes.push({quote:"The cake is a lie", character:"Ratman", game: "Portal"})
  array_quotes.push({quote:"If our lives are already written, it would take a courageous man to change the script.", character:"Alan Wake"})
  array_quotes.push({quote:"We are all our own worst enemy. But also our best teacher.", character:"Gouken"})
  array_quotes.push({quote:"It ain't no secret I didn't get these scars falling over in church.", character:"John Marston"})
  array_quotes.push({quote:"Here's a touchin' story. Once upon a time you died, and I lived happily ever after. The end.", character:"The Sniper", game: "Team Fortress 2"})
  array_quotes.push({quote:"Shadow and light are two sides of the same coin, one cannot exist without the other.", character:"Princess Zelda"})
  array_quotes.push({quote:"I raised you, and loved you, I've given you weapons, taught you techniques, endowed you with knowledge. There's nothing more for me to give you. All that's left for you to take is my life.", character:"The Boss", game:"Metal Gear Solid 3"})
  array_quotes.push({quote:"At the end of the day, as long as there are two people left on the planet, someone is gonna want someone dead.", character:"The Sniper", game:"Team Fortress 2"})
  array_quotes.push({quote:"The Lord Forgives Everything, But I'm Just A Prophet...So I Don't Have To. Amen.", character:"Father Comstock"})
  array_quotes.push({quote:"You ever thought of therapy? All you do is get pissed off at and with just about anything and anyone. I'm attempting conversation here with you. ", character:"Agent G"})
  array_quotes.push({quote:"You’ve met with a terrible fate, haven’t you?", character:"Happy Mask Salesman"})
  array_quotes.push({quote:"War is when the young and stupid are tricked by the old and bitter into killing each other.", character:"Niko Bellic"})
  array_quotes.push({quote:"Love Is Just A Chemical, We Give It Meaning By Choice.", character:"Eleanor Lamb"})
  array_quotes.push({quote:"Nothing personal, I just had to shut you up.", character:"The Spy", game: "Team Fortress 2"})
  array_quotes.push({quote:"Bring me a bucket, and I'll show you a bucket!", character:"Psycho"})
  array_quotes.push({quote:"What is a man but the sum of his memories? We are the stories we live! The tales we tell ourselves!", character:"Clay Kaczmarek"})
  array_quotes.push({quote:"Good! Now we can fight as warriors. Hand-to-hand, it is the basis of all combat. Only a fool trusts his life to a weapon.", character:"Gray Fox"})
  array_quotes.push({quote:"Nothing is true, everything is permitted.", character:"Ezio Auditore"})
  array_quotes.push({quote:"Snake. We're not tools of the government, or anyone else. Fighting was the only thing... the only thing I was good at. But... at least I always fought for what I believed in.", character:"Gray Fox"})
  array_quotes.push({quote:"Get over here!", character:"Scorpion"})
  array_quotes.push({quote:"Sorry, I'm married. Can't blame you for wantin' me, though.", character:"Hawkeye"})
  array_quotes.push({quote:"Everyone thinks they’re the hero of their own story.", character:"Handsome Jack"})
  array_quotes.push({quote:"Stand in the ashes of a trillion dead souls, and asks the ghosts if honor matters. The silence is your answer.", character:"Javik"})
  array_quotes.push({quote:"If God had wanted you to live, He would not have created me!", character:"The Soldier", game:"Team Fortress 2"})
  array_quotes.push({quote:"Don't make a girl a promise... If you know you can't keep it.", character:"Cortana"})
  array_quotes.push({quote:"Did I ever tell you the definition of insanity?", character:"Vaas Montenegro"})
  array_quotes.push({quote:"It’s time to kick ass and chew bubble gum…and I’m all outta gum.", character:"Duke Nukem"});
  array_quotes.push({quote:"Grass grows, birds fly, sun shines and brother, I hurt people.", character:"The Scout", game:"Team Fortress 2"})
  array_quotes.push({quote:"The truth, Walker, is that you’re here because you wanted to feel like something you’re not: A hero.", character:"John Konrad"})
  array_quotes.push({quote:"You remember when we used to be friends, Jen? Yeah, neither do I.", character:"Hawkeye"})
  array_quotes.push({quote:"You were a two-bit punk when we first met. You're a two-bit punk now.", character:"Iron Man"})
  array_quotes.push({quote:"Mother fuck! ... What does a brother have to do to pacify a bitch!? I'm telling you G, I've tried my best with her. God, be my witness! I have shown respect, charm, under-fucking-standing. But that is the last fuckin' straw!", character:"Isaac Washington"})
  array_quotes.push({quote:"You know, sweetheart, if there's one thing I've learned, it's this: nobody knows what's gonna happen at the end of the line, so you might as well enjoy the trip.", character:"Manny Calavera"})
  array_quotes.push({quote:"Fighting me? You were always headstrong, Clint. Didn't think you were stupid, too.", character:"She-Hulk"})
  array_quotes.push({quote:"NOTHING IS MORE BADASS THAN TREATING A WOMAN WITH RESPECT!", character:"Mr. Torgue’"})
  array_quotes.push({quote:"I'll have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda.", character:"Big Smoke"})
  array_quotes.push({quote:"The right man in the wrong place can make all the difference in the world. So, wake up, Mister Freeman. Wake up and...", character:"G-man"})
  array_quotes.push({quote:"What is better – to be born good, or to overcome your evil nature through great effort?", character:"Paarthurnax"})
  array_quotes.push({quote:"Was that a 'Thanks for saving my worthless pig hide' I just heard, Lieutenant Limpdick?", character:"Varla Guns"})
  array_quotes.push({quote:"Science isn’t about why. It’s about why not.", character:"Cave Johson"})
  array_quotes.push({quote:"I enjoy pain. It's like a good Chinese dinner, you know? With the sweet, and the sour? Expanding on that analogy, I will smile with delight, that's the sweet, as you scream for your fucking life. Of course, that's the sour. Ciao!", character:"Papa Caesar"})
  array_quotes.push({quote:"Sorry, but there's no way I'm losing to an extra from Bambi.", character:"Nova", game:"Ultimate Marvel vs Capcom 3"})
  array_quotes.push({quote:"Act like jerks, your planet gets eaten. It's called karma, dude.", character:"Nova", game:"Ultimate Marvel vs Capcom 3"})
  array_quotes.push({quote:"Brother, you ugly. But not just ugly, like BIBLICAL ugly. Like 'you could model for death threads' ugly.", character:"Deadpool"})
  array_quotes.push({quote:"Check me out. I'm the Ghost of Christmas 'Kick Your Ass'!", character:"Deadpool"})

  return array_quotes;
}