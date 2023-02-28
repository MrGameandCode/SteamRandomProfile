let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    onUrlChange(url);
  }
}).observe(document, { subtree: true, childList: true });
function onUrlChange(current) {
  if (current.startsWith("https://steamcommunity.com/profiles")) {
    let section = current.substr(current.indexOf("edit") + 5);
    console.log("Current tab: " + section);
    switch (section) {
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
/*Start of the section avatar*/
function initEditInfo() {
  var buttonDiv = document.getElementsByClassName("chatentry_EmoticonPickerButton_K-lPM");
  if (typeof buttonDiv[0] == 'undefined') {
    const targetNode = document.getElementById('application_root');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          var buttonDiv = document.getElementsByClassName("chatentry_EmoticonPickerButton_K-lPM");
          if (typeof buttonDiv[0] != 'undefined') {
            observer.disconnect();
            createButtonRandomInfoDescription(buttonDiv[0]);
          }
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  } else {
    createButtonRandomInfoDescription(buttonDiv[0]);
    createButtonRandomEmojisInfoDescription(buttonDiv[0]);
  }
}
function createButtonRandomInfoDescription(parent) {
  let existingButton = document.getElementById('button_RandomQuote');
  if (existingButton == null) {
    const button = document.createElement("a");
    button.setAttribute('id', 'button_RandomQuote');
    button.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    button.style.maxWidth = '190px'
    button.style.padding = '10px'
    button.setAttribute('href', '#');
    let buttonClasses = ['DialogButton', '_DialogLayout', 'Focusable'];
    button.classList.add(...buttonClasses);
    button.innerText = 'Add Random Quote';
    button.addEventListener("click", function (event) { event.preventDefault(); chooseRandomInfoQuote(".summary_summaryTextArea_2ipSt") });
    parent.parentNode.insertBefore(button, parent.nextSibling);
  }
}
function chooseRandomInfoQuote(element) {
  var arrayQuotes = loadQuotes();
  var chosedQuote = pickRandomNumber(0, arrayQuotes.length - 1);
  var quote = "";
  if (arrayQuotes[chosedQuote].game != undefined) {
    quote = "\n\"[i]" + arrayQuotes[chosedQuote].quote + "[/i]\" - " + arrayQuotes[chosedQuote].character + " (" + arrayQuotes[chosedQuote].game + ").";
  } else {
    quote = "\n\"[i]" + arrayQuotes[chosedQuote].quote + "[/i]\" - " + arrayQuotes[chosedQuote].character + ".";
  }
  var textarea = document.querySelector(element);
  textarea.value += quote;
  textarea.focus();
}

function createButtonRandomEmojisInfoDescription(parent) {
  let existingButton = document.getElementById('button_RandomEmojis');
  if (existingButton == null) {
    const button = document.createElement("a");
    button.setAttribute('id', 'button_RandomEmojis');
    button.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    button.style.maxWidth = '190px'
    button.style.padding = '10px'
    button.setAttribute('href', '#');
    let buttonClasses = ['DialogButton', '_DialogLayout', 'Focusable'];
    button.classList.add(...buttonClasses);
    button.innerText = 'Add Random Emojis';
    button.addEventListener("click", function (event) { event.preventDefault(); chooseRandomEmojis(".summary_summaryTextArea_2ipSt") });
    parent.parentNode.insertBefore(button, parent.nextSibling);
  }
}
function chooseRandomEmojis(element) {
  document.querySelector(".summary_formattingButton_LhNoI").click();
  var divEmojis = document.querySelectorAll(".addonpicker_ItemList_2tnPH");
  var correctDivEmojis;
  if (divEmojis.length == 1) {
    correctDivEmojis = divEmojis[0]
  } else {
    correctDivEmojis = divEmojis[1]
  }
  var emojis = correctDivEmojis.querySelectorAll(".emoticon_emoticon_316r8");
  var arrayEmojis = [];
  if (emojis.length != 0) {
    for (var i = 0; i < emojis.length; i++) {
      arrayEmojis.push(emojis[i].getAttribute("data-copytext"));
    }
  }
  var randomNumberEmojis = pickRandomNumber(1, arrayEmojis.length);
  var emojis2add = "";
  document.querySelector(".summary_formattingButton_LhNoI").click();
  for (var i = 0; i < randomNumberEmojis; i++) {
    emojis2add += arrayEmojis[pickRandomNumber(1, arrayEmojis.length - 1)];
  }
  var textarea = document.querySelector(".summary_summaryTextArea_2ipSt");
  textarea.value += emojis2add;
  textarea.focus();
}
/*End of the section avatar*/
/*Start of the section avatar*/
function initEditAvatar() {
  var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  if (typeof buttonDiv[0] == 'undefined') {
    const targetNode = document.getElementById('application_root');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
          if (typeof buttonDiv[0] != 'undefined') {
            observer.disconnect();
            createButtonRandomAvatar(buttonDiv[0]);
          }
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  } else {
    createButtonRandomAvatar(buttonDiv[0]);
  }
}

function createButtonRandomAvatar(parent) {
  let existingButton = document.getElementById('button_RandomAvatar');
  if (existingButton == null) {
    const button = document.createElement("button");
    button.setAttribute('id', 'button_RandomAvatar');
    button.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let buttonClasses = ['DialogButton', '_DialogLayout', 'Focusable'];
    button.classList.add(...buttonClasses);
    button.innerText = 'Random';
    button.addEventListener("click", chooseRandomAvatar);
    parent.appendChild(button);
  }
}

function chooseRandomAvatar() {
  //We count if we have 1 or 2 avatarcollection_AvatarCollection_1UoAv. If we have 1, we are choosing frames, if not, we are choosing avatars
  if (document.getElementsByClassName('avatarcollection_AvatarCollection_1UoAv').length == 1) {
    if (document.getElementsByClassName("avatarcollection_FramePreview_16w1D").length != 0) {
      let containerFrames = document.querySelector('.avatarcollection_CollectionGroupAvatars_wWso7');
      containerFrames.childNodes[pickRandomNumber(0, containerFrames.childNodes.length)].click();
    } else {
      let containersAvatars = document.querySelectorAll('.avatarcollection_CollectionGroup_2kbA6 > .avatarcollection_CollectionGroupAvatars_wWso7'); //Pueden ser los comprados en la tienda de puntos o los de los juegos
      let randomContainer = pickRandomNumber(0, containersAvatars.length + 1); //We choose a random group, then a random avatar from that group
      let randomNumber = pickRandomNumber(0, containersAvatars[randomContainer].childNodes.length - 1);
      containersAvatars[randomContainer].childNodes[randomNumber].click();
    }
  } else {
    alert("You must choose between avatars of frames first");
  }
}
/*End of the section avatar*/
/*Start of the section background*/
function initEditBackground() {
  var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  if (typeof buttonDiv[0] == 'undefined') {
    const targetNode = document.getElementById('application_root');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
          if (typeof buttonDiv[0] != 'undefined') {
            observer.disconnect();
            createButtonRandomBackground(buttonDiv[0]);
          }
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  } else {
    createButtonRandomBackground(buttonDiv[0]);
  }
}

function createButtonRandomBackground(parent) {
  let existingButton = document.getElementById('button_RandomBackground');
  if (existingButton == null) {
    const button = document.createElement("button");
    button.setAttribute('id', 'button_RandomBackground');
    button.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let buttonClasses = ['DialogButton', '_DialogLayout', 'Focusable'];
    button.classList.add(...buttonClasses);
    button.innerText = 'Random';
    button.addEventListener("click", chooseRandomBackground);
    parent.appendChild(button);
  }
}

function chooseRandomBackground() {
  let containerBackgrounds = document.querySelector('.profileedit_ItemPickerList_SMUuC');
  if (containerBackgrounds != null) {
    let randomNumber = pickRandomNumber(0, containerBackgrounds.childNodes.length + 1);
    containerBackgrounds.childNodes[randomNumber].click();
  }
  let optionsBackground = document.querySelector('.profilebackground_ProfileBackgroundEquipOptions_RS77U');
  if (optionsBackground != null) {
    optionsBackground.childNodes[pickRandomNumber(0, optionsBackground.childNodes.length + 1)].childNodes[0].click()
  }
}
/*End of the section background*/
/*Start of the section miniprofile*/
function initEditMiniProfile() {
  var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  if (typeof buttonDiv[0] == 'undefined') {
    const targetNode = document.getElementById('application_root');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
          if (typeof buttonDiv[0] != 'undefined') {
            observer.disconnect();
            createButtonRandomMiniProfile(buttonDiv[0]);
          }
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  } else {
    createButtonRandomMiniProfile(buttonDiv[0]);
  }
}
function createButtonRandomMiniProfile(parent) {
  let existingButton = document.getElementById('button_RandomMiniProfile');
  if (existingButton == null) {
    const button = document.createElement("button");
    button.setAttribute('id', 'button_RandomMiniProfile');
    button.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let buttonClasses = ['DialogButton', '_DialogLayout', 'Focusable'];
    button.classList.add(...buttonClasses);
    button.innerText = 'Random';
    button.addEventListener("click", chooseRandomMiniProfile);
    parent.appendChild(button);
  }
}
function chooseRandomMiniProfile() {
  let containerMiniProfiles = document.querySelector('.profileedit_ItemPickerList_SMUuC');
  if (containerMiniProfiles != null) {
    containerMiniProfiles.childNodes[pickRandomNumber(0, containerMiniProfiles.childNodes.length - 1)].click();
  }
}
/*End of the section miniprofile*/
/*Start of the section goldenprofile*/
function initEditGoldenProfile() {
  var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  if (typeof buttonDiv[0] == 'undefined') {
    const targetNode = document.getElementById('application_root');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
          if (typeof buttonDiv[0] != 'undefined') {
            observer.disconnect();
            createButtonRandomGoldenProfile(buttonDiv[0]);
          }
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  } else {
    createButtonRandomGoldenProfile(buttonDiv[0]);
  }
}
function createButtonRandomGoldenProfile(parent) {
  let existingButton = document.getElementById('button_RandomGoldenProfile');
  if (existingButton == null) {
    const button = document.createElement("button");
    button.setAttribute('id', 'button_RandomGoldenProfile');
    button.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let buttonClasses = ['DialogButton', '_DialogLayout', 'Focusable'];
    button.classList.add(...buttonClasses);
    button.innerText = 'Random';
    button.addEventListener("click", chooseRandomGoldenProfile);
    parent.appendChild(button);
  }
}
function chooseRandomGoldenProfile() {
  let contenainerProfiles = document.querySelector('.profileedit_ItemPickerList_SMUuC');
  if (contenainerProfiles != null) {
    contenainerProfiles.childNodes[pickRandomNumber(0, contenainerProfiles.childNodes.length - 1)].click();
  }
}
/*End of the section goldenprofile*/
/*Start of the section theme*/
function initEditTheme() {
  var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  if (typeof buttonDiv[0] == 'undefined') {
    const targetNode = document.getElementById('application_root');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
          if (typeof buttonDiv[0] != 'undefined') {
            observer.disconnect();
            createButtonRandomTheme(buttonDiv[0]);
          }
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  } else {
    createButtonRandomTheme(buttonDiv[0]);
  }
}
function createButtonRandomTheme(parent) {
  let existingButton = document.getElementById('button_RandomTheme');
  if (existingButton == null) {
    const button = document.createElement("button");
    button.setAttribute('id', 'button_RandomTheme');
    button.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let buttonClasses = ['DialogButton', '_DialogLayout', 'Focusable'];
    button.classList.add(...buttonClasses);
    button.innerText = 'Random';
    button.addEventListener("click", chooseRandomTheme);
    parent.appendChild(button);
  }
}
function chooseRandomTheme() {
  let containerThemes = document.querySelector('.profileedit_ItemPickerList_SMUuC');
  if (containerThemes != null) {
    containerThemes.childNodes[pickRandomNumber(0, containerThemes.childNodes.length - 1)].click();
  }
}

/*End of the section theme*/
/*Start of the section favoritebadge*/
function initEditFavouriteBadge() {
  var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  if (typeof buttonDiv[0] == 'undefined') {
    const targetNode = document.getElementById('application_root');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
          if (typeof buttonDiv[0] != 'undefined') {
            observer.disconnect();
            createButtonRandomFavouriteBadge(buttonDiv[0]);
          }
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  } else {
    createButtonRandomFavouriteBadge(buttonDiv[0]);
  }
}
function createButtonRandomFavouriteBadge(parent) {
  let existingButton = document.getElementById('button_RandomFavouriteBadge');
  if (existingButton == null) {
    const button = document.createElement("button");
    button.setAttribute('id', 'button_RandomFavouriteBadge');
    button.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let buttonClasses = ['DialogButton', '_DialogLayout', 'Focusable'];
    button.classList.add(...buttonClasses);
    button.innerText = 'Random';
    button.addEventListener("click", chooseRandomFavouriteBadge);
    parent.appendChild(button);
  }
}
function chooseRandomFavouriteBadge() {
  let containerBadges = document.querySelector('.profileedit_ItemPickerList_SMUuC');
  if (containerBadges != null) {
    containerBadges.childNodes[pickRandomNumber(0, containerBadges.childNodes.length - 1)].click();
  }
}
/*End of the section favoritebadge*/
/*Start of the section favoritegroup*/
function initEditFavouriteGroup() {
  var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
  if (typeof buttonDiv[0] == 'undefined') {
    const targetNode = document.getElementById('application_root');
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          var buttonDiv = document.getElementsByClassName("profileedit_SaveCancelButtons_2KJ8a");
          if (typeof buttonDiv[0] != 'undefined') {
            observer.disconnect();
            createButtonRandomFavouriteGroup(buttonDiv[0]);
          }
        }
      }
    };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  } else {
    createButtonRandomFavouriteGroup(buttonDiv[0]);
  }
}
function createButtonRandomFavouriteGroup(parent) {
  let existingButton = document.getElementById('button_RandomFavouriteGroup');
  if (existingButton == null) {
    const button = document.createElement("button");
    button.setAttribute('id', 'button_RandomFavouriteGroup');
    button.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let buttonClasses = ['DialogButton', '_DialogLayout', 'Focusable'];
    button.classList.add(...buttonClasses);
    button.innerText = 'Random';
    button.addEventListener("click", chooseRandomFavouriteGroup);
    parent.appendChild(button);
  }
}
function chooseRandomFavouriteGroup() {
  let containerGroups = document.querySelector('.profileedit_ItemPickerList_SMUuC');
  if (containerGroups != null) {
    containerGroups.childNodes[pickRandomNumber(0, containerGroups.childNodes.length - 1)].click();
  }
}
/*End of the section favoritegroup*/
/*Start of the section showcases*/
function initEditShocases() {
  var targetNode = document.querySelector('body');
  var config = { attributes: false, childList: true, subtree: true };
  const callback = function (mutationList, observer) {
    // Using traditional 'for loops' for IE 11
    for (const mutation of mutationList) {
      if (mutation.type === 'childList') {
        //A child node has been added or removed
        if (mutation.addedNodes.length != 0) {
          for (var i = 0; i <= mutation.addedNodes.length; i++) {
            if (mutation.addedNodes[i].className == 'newmodal') {
              //console.log("%c newmodal opened", 'background: #222; color: #bada55'); 
              var element = mutation.addedNodes[i].querySelector(".showcase_achievement_picker");
              if (element != null) {
                var elementButtons = mutation.addedNodes[i].querySelector(".showcase_achievement_picker_select_ctn");
                createButtonsRandomAchievements(elementButtons);
              }
              element = mutation.addedNodes[i].querySelector(".group_list_results");
              if (element != null) {
                createButtonRandomBadgeShowcase(element);
              }
            }
          }
        }
        var element = document.querySelector(".group_list_results");
        if (element != null) {
          createButtonRandomBadgeShowcase(element);
        }
        var test = document.querySelector(".game_list_results");
        if (test != null) {
          var elementsGrupo = document.getElementsByClassName('group_list_option');
          if (elementsGrupo != null) {
            createRandomGenericButtonShowcase(test);
          }
        }
      }
    }
  };
  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
  createButtonRandomShowcaseOrder(document.querySelector(".DialogBodyText"));
  if (document.querySelectorAll('[id^=button_RandomAchieventShowcase]').length == 0) {
    alert(document.querySelectorAll('[id^=button_RandomAchieventShowcase]').length)
    createButtonsRandomShowcaseContainer();
    createButtonRandomQuoteShowcase(document.querySelector(".emoticon_container"));
    createButtonRandomEmojiShowcase(document.querySelector(".emoticon_container"));
    var selects = document.querySelectorAll(".profile_showcase_selection_options_ctn .gray_bevel");
    for (i = 0; i < selects.length; ++i) {
      selects[i].style.width = "30%";
    }
  }
}

function createButtonRandomShowcaseOrder(parent) {
  let existingButton = document.getElementById('button_RandomShowcasesOrder');
  if (existingButton == null) {
    const button = document.createElement("button");
    button.setAttribute('id', 'button_RandomShowcasesOrder');
    button.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let buttonClasses = ['DialogButton', '_DialogLayout', 'Focusable'];
    button.classList.add(...buttonClasses);
    button.innerText = 'Random showcases order';
    button.addEventListener("click", RandomizeShowcases);
    parent.parentNode.insertBefore(button, parent.nextSibling);
  }
}

function RandomizeShowcases() {
  var showcases = document.querySelectorAll(".profile_showcase_selector");
  if (showcases.length != 0) {
    var positions = Array.from(Array(showcases.length).keys())
    positions = shuffleArray(positions)
    for (var i = 0; i <= showcases.length - 1; i++) {
      showcases[i].setAttribute("SRP_desiredOrder", positions[i]);
    }
    for (var j = 0; j <= showcases.length - 1; j++) {
      var number = parseInt(showcases[j].getAttribute("SRP_desiredOrder"));
      if (parseInt(number) != parseInt(j)) {
        while (j != number) {
          if (j < number) {
            number--;
            showcases[j].querySelector(".profile_showcase_sort_down").click();
          } else {
            number++;
            showcases[j].querySelector(".profile_showcase_sort_up").click();
          }
        }
      }
    }
  }
}

function createButtonsRandomShowcaseContainer() {
  var showcases = document.querySelectorAll(".profile_showcase_selector");
  if (showcases.length != 0) {
    for (var i = 0; i <= showcases.length - 1; i++) {
      var prevButton = showcases[i].querySelector(".customization_controls_nextprev a")
      const button = document.createElement("a");
      button.setAttribute('id', 'button_RandomAchieventShowcase_' + i);
      button.setAttribute('href', '#');
      let buttonClasses = ['btn_grey_black', 'btn_medium'];
      button.classList.add(...buttonClasses);
      button.addEventListener("click", function (event) { event.preventDefault(); chooseRandomShowcase(button) });
      var spanNode = document.createElement("span");
      spanNode.innerText = 'Random showcase';
      button.appendChild(spanNode);
      prevButton.parentNode.insertBefore(button, prevButton.nextSibling);
      var whitespace = document.createTextNode("\u00A0\u00A0\u00A0");
      prevButton.parentNode.insertBefore(whitespace, prevButton.nextSibling);
    }
  }
}

function chooseRandomShowcase(button) {
  var numberElement = button.id.substr(-1);
  var activeOptions = document.querySelectorAll("#showcase_" + numberElement + "_select option:not([disabled])");
  var select = document.querySelector("#showcase_" + numberElement + "_select")
  var possible = false;
  var randomNumber;
  while (!possible) {
    randomNumber = pickRandomNumber(1, activeOptions.length);//Check if it's disabled, so in that case we chose another number
    if (!document.querySelector("#showcase_" + numberElement + "_select option:nth-child(" + randomNumber + ")").disabled) {
      possible = true;
    }
  }
  select.selectedIndex = randomNumber - 1; //SelectedIndex and nth-child difference
  select.dispatchEvent(new Event('change'));
}

function createButtonRandomBadgeShowcase(parent) {
  let existingButton = document.getElementById('button_RandomAchieventShowcase');
  if (existingButton == null) {
    const button = document.createElement("button");
    button.setAttribute('id', 'button_RandomAchieventShowcase');
    button.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let buttonClasses = ['DialogButton', '_DialogLayout', 'Focusable'];
    button.classList.add(...buttonClasses);
    button.innerText = 'Random selection';
    button.addEventListener("click", chooseRandomBadgeForShowcase);
    parent.prepend(button);
  }
}

function chooseRandomBadgeForShowcase() {
  var badges = document.getElementsByClassName('group_list_option');
  badges[pickRandomNumber(0, badges.length)].click();
}

function createButtonsRandomAchievements(parent) {
  let existingButton = document.getElementById('button_RandomGameForAchievent');
  if (existingButton == null) {
    //Button for chosing only the game
    const button = document.createElement("button");
    button.setAttribute('id', 'button_RandomGameForAchievent');
    button.style.background = 'linear-gradient(to right, #0097c3 0%, #0035c3 60%)';
    let buttonClasses = ['DialogButton', '_DialogLayout', 'Focusable'];
    button.classList.add(...buttonClasses);
    button.innerText = 'Random Game';
    button.addEventListener("click", chooseRandomGameforListAchievements);
    parent.appendChild(button);
    //Button for chosing the game and the achievement
    const button2 = document.createElement("button");
    button2.setAttribute('id', 'button_RandomAchievent');
    button2.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    button2.classList.add(...buttonClasses);
    button2.innerText = 'Random Achievement';
    button2.addEventListener("click", chooseRandomAchievement);
    parent.appendChild(button2);
  }
}
function resetGameAchievementList() {
  var select = document.querySelector('.showcase_achievement_picker_select_ctn .gray_bevel');
  select.selectedIndex = 0;
  select.dispatchEvent(new Event('change'));
}
function chooseRandomGameforListAchievements() {
  var select = document.querySelector('.showcase_achievement_picker_select_ctn .gray_bevel');
  var totalGames = select.length;
  let randomNumber = pickRandomNumber(1, totalGames); //We put "1", for not chosing empty
  select.selectedIndex = randomNumber;
  select.dispatchEvent(new Event('change'));
}
function chooseRandomAchievement() {
  resetGameAchievementList();
  var targetNode = document.querySelector('.showcase_achievement_picker_list');
  var config = { attributes: false, childList: true, subtree: true };
  const callback = function (mutationList, observer) {
    // Using traditional 'for loops' for IE 11
    for (const mutation of mutationList) {
      if (mutation.type === 'childList') {
        if (mutation.addedNodes.length != 0) {
          for (var i = 0; i <= mutation.addedNodes.length; i++) {
            var achievements = document.getElementsByClassName('achievement_list_item');
            if (achievements.length != 0) {
              achievements[pickRandomNumber(0, achievements.length - 1)].click();
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
function createRandomGenericButtonShowcase(parent) {
  let existingButton = document.getElementById('button_GenericRandomShowcase');
  if (existingButton == null) {
    const button = document.createElement("button");
    button.setAttribute('id', 'button_GenericRandomShowcase');
    button.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    let buttonClasses = ['DialogButton', '_DialogLayout', 'Focusable'];
    button.classList.add(...buttonClasses);
    button.innerText = 'Random selection';
    button.addEventListener("click", chooseRandomBadgeForShowcase);
    parent.prepend(button);
  }
}

function createButtonRandomQuoteShowcase(parent) {
  let existingButton = document.getElementById('button_RandomQuoteForShowcase');
  if (existingButton == null) {
    const button = document.createElement("a");
    button.setAttribute('id', 'button_RandomQuoteForShowcase');
    button.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    button.style.maxWidth = '190px'
    button.style.padding = '5px'
    button.setAttribute('href', '#');
    let buttonClasses = ['DialogButton', '_DialogLayout', 'Focusable'];
    button.classList.add(...buttonClasses);
    button.innerText = 'Add Random Quote';
    button.addEventListener("click", function (event) { event.preventDefault(); chooseRandomInfoQuote("#showcase_8_notes") });
    parent.parentNode.insertBefore(button, parent.nextSibling);
  }
}

function createButtonRandomEmojiShowcase(parent) {
  let existingButton = document.getElementById('button_RandomEmojisForShowcase');
  if (existingButton == null) {
    const button = document.createElement("a");
    button.setAttribute('id', 'button_RandomEmojisForShowcase');
    button.style.background = 'linear-gradient(to right, #9bee84de 0%, #086000 60%)';
    button.style.maxWidth = '190px'
    button.style.padding = '5px'
    button.setAttribute('href', '#');
    let buttonClasses = ['DialogButton', '_DialogLayout', 'Focusable'];
    button.classList.add(...buttonClasses);
    button.innerText = 'Add Random Emojis';
    button.addEventListener("click", function (event) { event.preventDefault(); chooseRandomEmojisForInfoShowcase("#showcase_8_notes") });
    parent.parentNode.insertBefore(button, parent.nextSibling);
  }
}

function chooseRandomEmojisForInfoShowcase(element) {
  document.querySelector(".emoticon_container span").click();
  setTimeout(function () {
    var emojis = document.querySelectorAll(".emoticon_option");
    var arrayEmojis = [];
    if (emojis.length != 0) {
      for (var i = 0; i < emojis.length; i++) {
        arrayEmojis.push(emojis[i].getAttribute("data-emoticon"));
      }
    }
    var randomNumberEmojis = pickRandomNumber(1, arrayEmojis.length);
    var emojis2add = "";
    for (var i = 0; i < randomNumberEmojis; i++) {
      emojis2add += ":" + arrayEmojis[pickRandomNumber(1, arrayEmojis.length - 1)] + ":";
    }
    var textarea = document.querySelector(element);
    textarea.value += emojis2add;
    document.querySelector(".emoticon_container span").click();
  }, 3000);
}
/*End of the section showcases*/

onUrlChange(lastUrl);

function pickRandomNumber(min, max) {
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

function loadQuotes() {
  var arrayQuotes = []
  arrayQuotes.push({ quote: "No gods or kings. Only man.", character: "Andrew Ryan" })
  arrayQuotes.push({ quote: "You brought this on yourself.", character: "Martin Walker" })
  arrayQuotes.push({ quote: "The best solution to a problem is usually the easiest one. And I'll be honest - killing you is hard. You know what my days used to be like? I just tested. Nobody murdered me, or put me in a potato, or fed me to birds. I had a pretty good life. And then you showed up. You dangerous, mute lunatic. So you know what? You win. Just go. It's been fun. Don't come back.", character: "GLaDOS" })
  arrayQuotes.push({ quote: "Is your cause just or is that what you tell yourself? ", character: "Samuel Rodriguez", game: "Metal Gear Rising" })
  arrayQuotes.push({ quote: "If you need to learn how to talk to a lady, ask your Mum.", character: "Bayonetta" })
  arrayQuotes.push({ quote: "A man chooses, a slave obeys.", character: "Andrew Ryan" })
  arrayQuotes.push({ quote: "What is a man? A miserable little pile of secrets!", character: "Dracula", game: "Castlevania" });
  arrayQuotes.push({ quote: "Ain't ready for the big leagues yet, kid. Back to the minors with ya.", character: "Wolverine", game: "Ultimate Marvel vs Capcom 3" })
  arrayQuotes.push({ quote: "Yo, bucket-head! Let's have some fun.", character: "Wolverine", game: "Ultimate Marvel vs Capcom 3" })
  arrayQuotes.push({ quote: "Do you have any idea how many lawyers are in hell?", character: "Ghost Rider" })
  arrayQuotes.push({ quote: "The cake is a lie", character: "Ratman", game: "Portal" })
  arrayQuotes.push({ quote: "Science isn't about why! It’s about why not!", character: "Cave Johnson" })
  arrayQuotes.push({ quote: "Pain... this is why I fight.", character: "Jack the Ripper", game: "Metal Gear Rising" })
  arrayQuotes.push({ quote: "My sword is a tool of justice.", character: "Raiden", game: "Metal Gear Rising" })
  arrayQuotes.push({ quote: "If our lives are already written, it would take a courageous man to change the script.", character: "Alan Wake" })
  arrayQuotes.push({ quote: "We are all our own worst enemy. But also our best teacher.", character: "Gouken" })
  arrayQuotes.push({ quote: "It ain't no secret I didn't get these scars falling over in church.", character: "John Marston" })
  arrayQuotes.push({ quote: "I'll make you wish you were facing Magneto.", character: "Doctor Doom", game: "Ultimate Marvel vs Capcom 3" })
  arrayQuotes.push({ quote: "You will reveal to me the source of your power, or you will die!", character: "Doctor Doom", game: "Ultimate Marvel vs Capcom 3" })
  arrayQuotes.push({ quote: "Here's a touchin' story. Once upon a time you died, and I lived happily ever after. The end.", character: "The Sniper", game: "Team Fortress 2" })
  arrayQuotes.push({ quote: "Shadow and light are two sides of the same coin, one cannot exist without the other.", character: "Princess Zelda" })
  arrayQuotes.push({ quote: "When life gives you lemons, don't make lemonade. Make life take the lemons back! Get mad! I don't want your damn lemons! What am I supposed to do with these?! Demand to see life's manager! Make life rue the day it thought it could give Cave Johnson lemons! Do you know who I am?! I'm the man who's gonna burn your house down! With the lemons! I'm gonna get my engineers to invent a combustible lemon that burns your house down!", character: "Cave Johnson" })
  arrayQuotes.push({ quote: "I raised you, and loved you, I've given you weapons, taught you techniques, endowed you with knowledge. There's nothing more for me to give you. All that's left for you to take is my life.", character: "The Boss", game: "Metal Gear Solid 3" })
  arrayQuotes.push({ quote: "At the end of the day, as long as there are two people left on the planet, someone is gonna want someone dead.", character: "The Sniper", game: "Team Fortress 2" })
  arrayQuotes.push({ quote: "The Lord Forgives Everything, But I'm Just A Prophet...So I Don't Have To. Amen.", character: "Father Comstock" })
  arrayQuotes.push({ quote: "You ever thought of therapy? All you do is get pissed off at and with just about anything and anyone. I'm attempting conversation here with you.", character: "Agent G" })
  arrayQuotes.push({ quote: "We both said a lot of things that you're going to regret. But I think we can put our differences behind us. For science. You monster.", character: "GLaDOS" })
  arrayQuotes.push({ quote: "This dimension is not big enough for the both of us.", character: "Doctor Doom", game: "Ultimate Marvel vs Capcom 3" })
  arrayQuotes.push({ quote: "There's more to life than just fighting. Fast cars and women, for example.", character: "Iron Man", game: "Ultimate Marvel vs Capcom 3" })
  arrayQuotes.push({ quote: "Like I said, kids are cruel, Jack. And I'm very in touch with my inner child.", character: "Sundowner", game: "Metal Gear Rising" })
  arrayQuotes.push({ quote: "I'm fucking INVINCIBLE!", character: "Sundowner", game: "Metal Gear Rising" })
  arrayQuotes.push({ quote: "Home? We can't go home. There's a line men like us have to cross. If we're lucky, we do what's necessary, then we die. No, all I really want, Captain, is peace.", character: "John Konrad" })
  arrayQuotes.push({ quote: "You’ve met with a terrible fate, haven’t you?", character: "Happy Mask Salesman" })
  arrayQuotes.push({ quote: "War is when the young and stupid are tricked by the old and bitter into killing each other.", character: "Niko Bellic" })
  arrayQuotes.push({ quote: "Love Is Just A Chemical, We Give It Meaning By Choice.", character: "Eleanor Lamb" })
  arrayQuotes.push({ quote: "Nothing personal, I just had to shut you up.", character: "The Spy", game: "Team Fortress 2" })
  arrayQuotes.push({ quote: "Bring me a bucket, and I'll show you a bucket!", character: "Psycho" })
  arrayQuotes.push({ quote: "What is a man but the sum of his memories? We are the stories we live! The tales we tell ourselves!", character: "Clay Kaczmarek" })
  arrayQuotes.push({ quote: "Good! Now we can fight as warriors. Hand-to-hand, it is the basis of all combat. Only a fool trusts his life to a weapon.", character: "Gray Fox" })
  arrayQuotes.push({ quote: "Don’t blame yourself. No witcher’s ever died in his bed.", character: "Geralt of Rivia", game: "The Witcher 3" })
  arrayQuotes.push({ quote: "Witchers were made to kill monsters. It doesn't matter who posted the notice, the coin has to be right, that's all.", character: "Geralt of Rivia", game: "The Witcher 3" })
  arrayQuotes.push({ quote: "Nothing is true, everything is permitted.", character: "Ezio Auditore" })
  arrayQuotes.push({ quote: "You should try fighting for what you believe in sometime, Jack. Not for a company, or for a nation, or for anyone else.", character: "Senator Armstrong", game: "Metal Gear Rising" })
  arrayQuotes.push({ quote: "But you did survive! Through sheer force of will, following your own set of rules. With your own two hands, you took back your live!", character: "Senator Armstrong", game: "Metal Gear Rising" })
  arrayQuotes.push({ quote: "Snake. We're not tools of the government, or anyone else. Fighting was the only thing... the only thing I was good at. But... at least I always fought for what I believed in.", character: "Gray Fox" })
  arrayQuotes.push({ quote: "Get over here!", character: "Scorpion" })
  arrayQuotes.push({ quote: "It's more important to master the cards you're holding than to complain about the ones your opponents were dealt.", character: "Grimsley" })
  arrayQuotes.push({ quote: "Sorry, I'm married. Can't blame you for wantin' me, though.", character: "Hawkeye" })
  arrayQuotes.push({ quote: "Death is inevitable. Our fear of it makes us play safe, blocks out emotion. It's a losing game. Without passion, you are already dead.", character: "Max Payne" })
  arrayQuotes.push({ quote: "Everyone thinks they’re the hero of their own story.", character: "Handsome Jack" })
  arrayQuotes.push({ quote: "Stand in the ashes of a trillion dead souls, and asks the ghosts if honor matters. The silence is your answer.", character: "Javik" })
  arrayQuotes.push({ quote: "If God had wanted you to live, He would not have created me!", character: "The Soldier", game: "Team Fortress 2" })
  arrayQuotes.push({ quote: "Time eats away at memories, distorts them. Sometimes we only remember the good... sometimes only the bad.", character: "Geralt of Rivia", game: "The Witcher 3" })
  arrayQuotes.push({ quote: "Keep the gods out of it. Swear on your heads. Which I will take if you break your vow.", character: "Geralt of Rivia", game: "The Witcher 3" })
  arrayQuotes.push({ quote: "Don't make a girl a promise... If you know you can't keep it.", character: "Cortana" })
  arrayQuotes.push({ quote: "Did I ever tell you the definition of insanity?", character: "Vaas Montenegro" })
  arrayQuotes.push({ quote: "Jeremy. Someday, people will tell you about your father. For that, I'm sorry. I love you.", character: "John Konrad" })
  arrayQuotes.push({ quote: "It’s time to kick ass and chew bubble gum…and I’m all outta gum.", character: "Duke Nukem" });
  arrayQuotes.push({ quote: "Maybe I was wrong about you... I was wrong. You're not greedy -- you're bat-shit insane!", character: "Raiden", game: "Metal Gear Rising" })
  arrayQuotes.push({ quote: "Well, I don't write my own speeches.", character: "Senator Armstrong", game: "Metal Gear Rising" })
  arrayQuotes.push({ quote: "Grass grows, birds fly, sun shines and brother, I hurt people.", character: "The Scout", game: "Team Fortress 2" })
  arrayQuotes.push({ quote: "The truth, Walker, is that you’re here because you wanted to feel like something you’re not: A hero.", character: "John Konrad" })
  arrayQuotes.push({ quote: "You remember when we used to be friends, Jen? Yeah, neither do I.", character: "Hawkeye" })
  arrayQuotes.push({ quote: "You were a two-bit punk when we first met. You're a two-bit punk now.", character: "Iron Man" })
  arrayQuotes.push({ quote: "Mother fuck! ... What does a brother have to do to pacify a bitch!? I'm telling you G, I've tried my best with her. God, be my witness! I have shown respect, charm, under-fucking-standing. But that is the last fuckin' straw!", character: "Isaac Washington" })
  arrayQuotes.push({ quote: "You smell wonderful at this funeral.", character: "Geralt of Rivia", game: "The Witcher 3" })
  arrayQuotes.push({ quote: "Traveled half the world to find you, but I never intended to force anything on you.", character: "Geralt of Rivia", game: "The Witcher 3" })
  arrayQuotes.push({ quote: "You know, sweetheart, if there's one thing I've learned, it's this: nobody knows what's gonna happen at the end of the line, so you might as well enjoy the trip.", character: "Manny Calavera" })
  arrayQuotes.push({ quote: "Fighting me? You were always headstrong, Clint. Didn't think you were stupid, too.", character: "She-Hulk" })
  arrayQuotes.push({ quote: "Boss... you were right. It's not about changing the world. It's about doing our best to leave the world... the way it is. It's about respecting the will of others, and believing in your own.", character: "Big Boss" })
  arrayQuotes.push({ quote: "NOTHING IS MORE BADASS THAN TREATING A WOMAN WITH RESPECT!", character: "Mr. Torgue" })
  arrayQuotes.push({ quote: "You are not a good person. You know that, right? Good people don't end up here.", character: "GLaDOS" })
  arrayQuotes.push({ quote: "A MadWorld... I'll fit right in.", character: "Jack Cayman" })
  arrayQuotes.push({ quote: "I'll have two number 9s, a number 9 large, a number 6 with extra dip, a number 7, two number 45s, one with cheese, and a large soda.", character: "Big Smoke" })
  arrayQuotes.push({ quote: "The right man in the wrong place can make all the difference in the world. So, wake up, Mister Freeman. Wake up and...", character: "G-man" })
  arrayQuotes.push({ quote: "Typical politician... bug promises, but all talk.", character: "Raiden", game: "Metal Gear Rising" })
  arrayQuotes.push({ quote: "I said my sword is a tool of justice, not used in anger, not drawn in vengeance. But now, I’m not so sure. And besides, this isn’t my sword.", character: "Raiden", game: "Metal Gear Rising" })
  arrayQuotes.push({ quote: "Beware of an old man in a profession where men usually die young.", character: "Geralt of Rivia", game: "The Witcher 3" })
  arrayQuotes.push({ quote: "This world doesn't need a hero. It needs a professional.", character: "Geralt of Rivia", game: "The Witcher 3" })
  arrayQuotes.push({ quote: "What is better – to be born good, or to overcome your evil nature through great effort?", character: "Paarthurnax" })
  arrayQuotes.push({ quote: "Was that a 'Thanks for saving my worthless pig hide' I just heard, Lieutenant Limpdick?", character: "Varla Guns" })
  arrayQuotes.push({ quote: "Science isn’t about why. It’s about why not.", character: "Cave Johson" })
  arrayQuotes.push({ quote: "I enjoy pain. It's like a good Chinese dinner, you know? With the sweet, and the sour? Expanding on that analogy, I will smile with delight, that's the sweet, as you scream for your fucking life. Of course, that's the sour. Ciao!", character: "Papa Caesar" })
  arrayQuotes.push({ quote: "Sorry, but there's no way I'm losing to an extra from Bambi.", character: "Nova", game: "Ultimate Marvel vs Capcom 3" })
  arrayQuotes.push({ quote: "Act like jerks, your planet gets eaten. It's called karma, dude.", character: "Nova", game: "Ultimate Marvel vs Capcom 3" })
  arrayQuotes.push({ quote: "Brother, you ugly. But not just ugly, like BIBLICAL ugly. Like 'you could model for death threads' ugly.", character: "Deadpool" })
  arrayQuotes.push({ quote: "Check me out. I'm the Ghost of Christmas 'Kick Your Ass'!", character: "Deadpool", game: "Ultimate Marvel vs Capcom 3" })
  arrayQuotes.push({ quote: "At times we must purge things from this world because they should not exist. Even if it means losing someone that you love.", character: "Francis York Morgan", game: "Deadly Premonition" })
  arrayQuotes.push({ quote: "My coffee warned me about it.", character: "Francis York Morgan", game: "Deadly Premonition" })

  return arrayQuotes;
}