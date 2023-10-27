(function(a){if(typeof module==="object"&&module.exports){module.exports=a(require("jquery"),window,document)}else{if(typeof define==="function"&&define.amd){define(["jquery"],function(b){a(b,window,document)})}else{a(jQuery,window,document)}}})(function(f,l,p,h){var j=[["Afghanistan (افغانستان)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (الجزائر)","dz","213"],["American Samoa","as","1",5,["684"]],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1",6,["264"]],["Antigua and Barbuda","ag","1",7,["268"]],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1",8,["242"]],["Bahrain (البحرين)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1",9,["246"]],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1",10,["441"]],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1",11,["284"]],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1,["3","4","7"]],["Cayman Islands","ky","1",12,["345"]],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (جزر القمر)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1",13,["767"]],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (مصر)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1",14,["473"]],["Guadeloupe","gp","590",0],["Guam","gu","1",15,["671"]],["Guatemala","gt","502"],["Guernsey","gg","44",1,["1481","7781","7839","7911"]],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (ایران)","ir","98"],["Iraq (العراق)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2,["1624","74576","7524","7924","7624"]],["Israel (ישראל)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1",4,["876","658"]],["Japan (日本)","jp","81"],["Jersey","je","44",3,["1534","7509","7700","7797","7829","7937"]],["Jordan (الأردن)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1,["33","7"]],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (الكويت)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (لبنان)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (ليبيا)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (موريتانيا)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1,["269","639"]],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1",16,["664"]],["Morocco (المغرب)","ma","212",0],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1",17,["670"]],["Norway (Norge)","no","47",0],["Oman (عُمان)","om","968"],["Pakistan (پاکستان)","pk","92"],["Palau","pw","680"],["Palestine (فلسطين)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (قطر)","qa","974"],["Réunion (La Réunion)","re","262",0],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1",18,["869"]],["Saint Lucia","lc","1",19,["758"]],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1",20,["784"]],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (المملكة العربية السعودية)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1",21,["721"]],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (جنوب السودان)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්රී ලංකාව)","lk","94"],["Sudan (السودان)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1,["79"]],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (سوريا)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1",22,["868"]],["Tunisia (تونس)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1",23,["649"]],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1",24,["340"]],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (الإمارات العربية المتحدة)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1,["06698"]],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna (Wallis-et-Futuna)","wf","681"],["Western Sahara (الصحراء الغربية)","eh","212",1,["5288","5289"]],["Yemen (اليمن)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["Åland Islands","ax","358",1,["18"]]];for(var q=0;q<j.length;q++){var t=j[q];j[q]={name:t[0],iso2:t[1],dialCode:t[2],priority:t[3]||0,areaCodes:t[4]||null}}"use strict";function e(c,i){if(!(c instanceof i)){throw new TypeError("Cannot call a class as a function")}}function k(x,v){for(var c=0;c<v.length;c++){var w=v[c];w.enumerable=w.enumerable||false;w.configurable=true;if("value" in w){w.writable=true}Object.defineProperty(x,w.key,w)}}function r(v,c,i){if(c){k(v.prototype,c)}if(i){k(v,i)}return v}l.intlTelInputGlobals={getInstance:function s(c){var i=c.getAttribute("data-intl-tel-input-id");return l.intlTelInputGlobals.instances[i]},instances:{}};var n=0;var m={allowDropdown:true,autoHideDialCode:true,autoPlaceholder:"polite",customContainer:"",customPlaceholder:null,dropdownContainer:null,excludeCountries:[],formatOnDisplay:true,geoIpLookup:null,hiddenInput:"",initialCountry:"",localizedCountries:null,nationalMode:true,onlyCountries:[],placeholderNumberType:"MOBILE",preferredCountries:["us","gb"],separateDialCode:false,utilsScript:""};var b=["800","822","833","844","855","866","877","880","881","882","883","884","885","886","887","888","889"];l.addEventListener("load",function(){l.intlTelInputGlobals.windowLoaded=true});var g=function g(w,x){var v=Object.keys(w);for(var c=0;c<v.length;c++){x(v[c],w[v[c]])}};var d=function d(c){g(l.intlTelInputGlobals.instances,function(i){l.intlTelInputGlobals.instances[i][c]()})};var o=function(){function ab(aF,aG){var aH=this;e(this,ab);this.id=n++;this.telInput=aF;this.activeItem=null;this.highlightedItem=null;var aE=aG||{};this.options={};g(m,function(aI,aJ){aH.options[aI]=aE.hasOwnProperty(aI)?aE[aI]:aJ});this.hadInitialPlaceholder=Boolean(aF.getAttribute("placeholder"))}r(ab,[{key:"_init",value:function ax(){var aG=this;if(this.options.nationalMode){this.options.autoHideDialCode=false}if(this.options.separateDialCode){this.options.autoHideDialCode=this.options.nationalMode=false}this.isMobile=/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(this.isMobile){p.body.classList.add("iti-mobile");if(!this.options.dropdownContainer){this.options.dropdownContainer=p.body}}if(typeof Promise!=="undefined"){var aE=new Promise(function(aI,aH){aG.resolveAutoCountryPromise=aI;aG.rejectAutoCountryPromise=aH});var aF=new Promise(function(aI,aH){aG.resolveUtilsScriptPromise=aI;aG.rejectUtilsScriptPromise=aH});this.promise=Promise.all([aE,aF])}else{this.resolveAutoCountryPromise=this.rejectAutoCountryPromise=function(){};this.resolveUtilsScriptPromise=this.rejectUtilsScriptPromise=function(){}}this.selectedCountryData={};this._processCountryData();this._generateMarkup();this._setInitialState();this._initListeners();this._initRequests()}},{key:"_processCountryData",value:function ar(){this._processAllCountries();this._processCountryCodes();this._processPreferredCountries();if(this.options.localizedCountries){this._translateCountriesByLocale()}if(this.options.onlyCountries.length||this.options.localizedCountries){this.countries.sort(this._countryNameSort)}}},{key:"_addCountryCode",value:function Z(aF,aE,aI){if(aE.length>this.dialCodeMaxLen){this.dialCodeMaxLen=aE.length}if(!this.countryCodes.hasOwnProperty(aE)){this.countryCodes[aE]=[]}for(var aH=0;aH<this.countryCodes[aE].length;aH++){if(this.countryCodes[aE][aH]===aF){return}}var aG=aI!==h?aI:this.countryCodes[aE].length;this.countryCodes[aE][aG]=aF}},{key:"_processAllCountries",value:function X(){if(this.options.onlyCountries.length){var aF=this.options.onlyCountries.map(function(aG){return aG.toLowerCase()});this.countries=j.filter(function(aG){return aF.indexOf(aG.iso2)>-1})}else{if(this.options.excludeCountries.length){var aE=this.options.excludeCountries.map(function(aG){return aG.toLowerCase()});this.countries=j.filter(function(aG){return aE.indexOf(aG.iso2)===-1})}else{this.countries=j}}}},{key:"_translateCountriesByLocale",value:function O(){for(var aE=0;aE<this.countries.length;aE++){var aF=this.countries[aE].iso2.toLowerCase();if(this.options.localizedCountries.hasOwnProperty(aF)){this.countries[aE].name=this.options.localizedCountries[aF]}}}},{key:"_countryNameSort",value:function an(aF,aE){return aF.name.localeCompare(aE.name)}},{key:"_processCountryCodes",value:function az(){this.dialCodeMaxLen=0;this.countryCodes={};for(var aI=0;aI<this.countries.length;aI++){var aL=this.countries[aI];this._addCountryCode(aL.iso2,aL.dialCode,aL.priority)}for(var aG=0;aG<this.countries.length;aG++){var aK=this.countries[aG];if(aK.areaCodes){var aE=this.countryCodes[aK.dialCode][0];for(var aH=0;aH<aK.areaCodes.length;aH++){var aJ=aK.areaCodes[aH];for(var aF=1;aF<aJ.length;aF++){var aM=aK.dialCode+aJ.substr(0,aF);this._addCountryCode(aE,aM);this._addCountryCode(aK.iso2,aM)}this._addCountryCode(aK.iso2,aK.dialCode+aJ)}}}}},{key:"_processPreferredCountries",value:function R(){this.preferredCountries=[];for(var aG=0;aG<this.options.preferredCountries.length;aG++){var aE=this.options.preferredCountries[aG].toLowerCase();var aF=this._getCountryData(aE,false,true);if(aF){this.preferredCountries.push(aF)}}}},{key:"_createEl",value:function Q(aG,aF,aE){var aH=p.createElement(aG);if(aF){g(aF,function(aI,aJ){return aH.setAttribute(aI,aJ)})}if(aE){aE.appendChild(aH)}return aH}},{key:"_generateMarkup",value:function aB(){this.telInput.setAttribute("autocomplete","off");var aH="iti";if(this.options.allowDropdown){aH+=" iti--allow-dropdown"}if(this.options.separateDialCode){aH+=" iti--separate-dial-code"}if(this.options.customContainer){aH+=" ";aH+=this.options.customContainer}var aI=this._createEl("div",{"class":aH});this.telInput.parentNode.insertBefore(aI,this.telInput);this.flagsContainer=this._createEl("div",{"class":"iti__flag-container"},aI);aI.appendChild(this.telInput);this.selectedFlag=this._createEl("div",{"class":"iti__selected-flag",role:"combobox","aria-owns":"country-listbox"},this.flagsContainer);this.selectedFlagInner=this._createEl("div",{"class":"iti__flag"},this.selectedFlag);if(this.options.separateDialCode){this.selectedDialCode=this._createEl("div",{"class":"iti__selected-dial-code"},this.selectedFlag)}if(this.options.allowDropdown){this.selectedFlag.setAttribute("tabindex","0");this.dropdownArrow=this._createEl("div",{"class":"iti__arrow"},this.selectedFlag);this.countryList=this._createEl("ul",{"class":"iti__country-list iti__hide",id:"country-listbox","aria-expanded":"false",role:"listbox"});if(this.preferredCountries.length){this._appendListItems(this.preferredCountries,"iti__preferred");this._createEl("li",{"class":"iti__divider",role:"separator","aria-disabled":"true"},this.countryList)}this._appendListItems(this.countries,"iti__standard");if(this.options.dropdownContainer){this.dropdown=this._createEl("div",{"class":"iti iti--container"});this.dropdown.appendChild(this.countryList)}else{this.flagsContainer.appendChild(this.countryList)}}if(this.options.hiddenInput){var aE=this.options.hiddenInput;var aF=this.telInput.getAttribute("name");if(aF){var aG=aF.lastIndexOf("[");if(aG!==-1){aE="".concat(aF.substr(0,aG),"[").concat(aE,"]")}}this.hiddenInput=this._createEl("input",{type:"hidden",name:aE});aI.appendChild(this.hiddenInput)}}},{key:"_appendListItems",value:function aC(aE,aH){var aG="";for(var aF=0;aF<aE.length;aF++){var aI=aE[aF];aG+="<li class='iti__country ".concat(aH,"' tabIndex='-1' id='iti-item-").concat(aI.iso2,"' role='option' data-dial-code='").concat(aI.dialCode,"' data-country-code='").concat(aI.iso2,"'>");aG+="<div class='iti__flag-box'><div class='iti__flag iti__".concat(aI.iso2,"'></div></div>");aG+="<span class='iti__country-name'>".concat(aI.name,"</span>");aG+="<span class='iti__dial-code'>+".concat(aI.dialCode,"</span>");aG+="</li>"}this.countryList.insertAdjacentHTML("beforeend",aG)}},{key:"_setInitialState",value:function B(){var aJ=this.telInput.value;var aE=this._getDialCode(aJ);var aF=this._isRegionlessNanp(aJ);var aI=this.options,aL=aI.initialCountry,aK=aI.nationalMode,aH=aI.autoHideDialCode,aG=aI.separateDialCode;if(aE&&!aF){this._updateFlagFromNumber(aJ)}else{if(aL!=="auto"){if(aL){this._setFlag(aL.toLowerCase())}else{if(aE&&aF){this._setFlag("us")}else{this.defaultCountry=this.preferredCountries.length?this.preferredCountries[0].iso2:this.countries[0].iso2;if(!aJ){this._setFlag(this.defaultCountry)}}}if(!aJ&&!aK&&!aH&&!aG){this.telInput.value="+".concat(this.selectedCountryData.dialCode)}}}if(aJ){this._updateValFromNumber(aJ)}}},{key:"_initListeners",value:function I(){this._initKeyListeners();if(this.options.autoHideDialCode){this._initBlurListeners()}if(this.options.allowDropdown){this._initDropdownListeners()}if(this.hiddenInput){this._initHiddenInputListener()}}},{key:"_initHiddenInputListener",value:function ah(){var aE=this;this._handleHiddenInputSubmit=function(){aE.hiddenInput.value=aE.getNumber()};if(this.telInput.form){this.telInput.form.addEventListener("submit",this._handleHiddenInputSubmit)}}},{key:"_getClosestLabel",value:function F(){var aE=this.telInput;while(aE&&aE.tagName!=="LABEL"){aE=aE.parentNode}return aE}},{key:"_initDropdownListeners",value:function ap(){var aF=this;this._handleLabelClick=function(aG){if(aF.countryList.classList.contains("iti__hide")){aF.telInput.focus()}else{aG.preventDefault()}};var aE=this._getClosestLabel();if(aE){aE.addEventListener("click",this._handleLabelClick)}this._handleClickSelectedFlag=function(){if(aF.countryList.classList.contains("iti__hide")&&!aF.telInput.disabled&&!aF.telInput.readOnly){aF._showDropdown()}};this.selectedFlag.addEventListener("click",this._handleClickSelectedFlag);this._handleFlagsContainerKeydown=function(aH){var aG=aF.countryList.classList.contains("iti__hide");if(aG&&["ArrowUp","ArrowDown"," ","Enter"].indexOf(aH.key)!==-1){aH.preventDefault();aH.stopPropagation();aF._showDropdown()}if(aH.key==="Tab"){aF._closeDropdown()}};this.flagsContainer.addEventListener("keydown",this._handleFlagsContainerKeydown)}},{key:"_initRequests",value:function V(){var aE=this;if(this.options.utilsScript&&!l.intlTelInputUtils){if(l.intlTelInputGlobals.windowLoaded){l.intlTelInputGlobals.loadUtils(this.options.utilsScript)}else{l.addEventListener("load",function(){l.intlTelInputGlobals.loadUtils(aE.options.utilsScript)})}}else{this.resolveUtilsScriptPromise()}if(this.options.initialCountry==="auto"){this._loadAutoCountry()}else{this.resolveAutoCountryPromise()}}},{key:"_loadAutoCountry",value:function af(){if(l.intlTelInputGlobals.autoCountry){this.handleAutoCountry()}else{if(!l.intlTelInputGlobals.startedLoadingAutoCountry){l.intlTelInputGlobals.startedLoadingAutoCountry=true;if(typeof this.options.geoIpLookup==="function"){this.options.geoIpLookup(function(aE){l.intlTelInputGlobals.autoCountry=aE.toLowerCase();setTimeout(function(){return d("handleAutoCountry")})},function(){return d("rejectAutoCountryPromise")})}}}}},{key:"_initKeyListeners",value:function aq(){var aE=this;this._handleKeyupEvent=function(){if(aE._updateFlagFromNumber(aE.telInput.value)){aE._triggerCountryChange()}};this.telInput.addEventListener("keyup",this._handleKeyupEvent);this._handleClipboardEvent=function(){setTimeout(aE._handleKeyupEvent)};this.telInput.addEventListener("cut",this._handleClipboardEvent);this.telInput.addEventListener("paste",this._handleClipboardEvent)}},{key:"_cap",value:function am(aF){var aE=this.telInput.getAttribute("maxlength");return aE&&aF.length>aE?aF.substr(0,aE):aF}},{key:"_initBlurListeners",value:function L(){var aE=this;this._handleSubmitOrBlurEvent=function(){aE._removeEmptyDialCode()};if(this.telInput.form){this.telInput.form.addEventListener("submit",this._handleSubmitOrBlurEvent)}this.telInput.addEventListener("blur",this._handleSubmitOrBlurEvent)}},{key:"_removeEmptyDialCode",value:function aa(){if(this.telInput.value.charAt(0)==="+"){var aE=this._getNumeric(this.telInput.value);if(!aE||this.selectedCountryData.dialCode===aE){this.telInput.value=""}}}},{key:"_getNumeric",value:function al(aE){return aE.replace(/\D/g,"")}},{key:"_trigger",value:function v(aE){var aF=p.createEvent("Event");aF.initEvent(aE,true,true);this.telInput.dispatchEvent(aF)}},{key:"_showDropdown",value:function C(){this.countryList.classList.remove("iti__hide");this.countryList.setAttribute("aria-expanded","true");this._setDropdownPosition();if(this.activeItem){this._highlightListItem(this.activeItem,false);this._scrollTo(this.activeItem,true)}this._bindDropdownListeners();this.dropdownArrow.classList.add("iti__arrow--up");this._trigger("open:countrydropdown")}},{key:"_toggleClass",value:function J(aG,aF,aE){if(aE&&!aG.classList.contains(aF)){aG.classList.add(aF)}else{if(!aE&&aG.classList.contains(aF)){aG.classList.remove(aF)}}}},{key:"_setDropdownPosition",value:function D(){var aE=this;if(this.options.dropdownContainer){this.options.dropdownContainer.appendChild(this.dropdown)}if(!this.isMobile){var aL=this.telInput.getBoundingClientRect();var aJ=l.pageYOffset||p.documentElement.scrollTop;var aG=aL.top+aJ;var aH=this.countryList.offsetHeight;var aI=aG+this.telInput.offsetHeight+aH<aJ+l.innerHeight;var aK=aG-aH>aJ;this._toggleClass(this.countryList,"iti__country-list--dropup",!aI&&aK);if(this.options.dropdownContainer){var aF=!aI&&aK?0:this.telInput.offsetHeight;this.dropdown.style.top="".concat(aG+aF,"px");this.dropdown.style.left="".concat(aL.left+p.body.scrollLeft,"px");this._handleWindowScroll=function(){return aE._closeDropdown()};l.addEventListener("scroll",this._handleWindowScroll)}}}},{key:"_getClosestListItem",value:function G(aF){var aE=aF;while(aE&&aE!==this.countryList&&!aE.classList.contains("iti__country")){aE=aE.parentNode}return aE===this.countryList?null:aE}},{key:"_bindDropdownListeners",value:function K(){var aH=this;this._handleMouseoverCountryList=function(aJ){var aI=aH._getClosestListItem(aJ.target);if(aI){aH._highlightListItem(aI,false)}};this.countryList.addEventListener("mouseover",this._handleMouseoverCountryList);this._handleClickCountryList=function(aJ){var aI=aH._getClosestListItem(aJ.target);if(aI){aH._selectListItem(aI)}};this.countryList.addEventListener("click",this._handleClickCountryList);var aE=true;this._handleClickOffToClose=function(){if(!aE){aH._closeDropdown()}aE=false};p.documentElement.addEventListener("click",this._handleClickOffToClose);var aG="";var aF=null;this._handleKeydownOnDropdown=function(aI){aI.preventDefault();if(aI.key==="ArrowUp"||aI.key==="ArrowDown"){aH._handleUpDownKey(aI.key)}else{if(aI.key==="Enter"){aH._handleEnterKey()}else{if(aI.key==="Escape"){aH._closeDropdown()}else{if(/^[a-zA-ZÀ-ÿ ]$/.test(aI.key)){if(aF){clearTimeout(aF)}aG+=aI.key.toLowerCase();aH._searchForCountry(aG);aF=setTimeout(function(){aG=""},1000)}}}}};p.addEventListener("keydown",this._handleKeydownOnDropdown)}},{key:"_handleUpDownKey",value:function au(aE){var aF=aE==="ArrowUp"?this.highlightedItem.previousElementSibling:this.highlightedItem.nextElementSibling;if(aF){if(aF.classList.contains("iti__divider")){aF=aE==="ArrowUp"?aF.previousElementSibling:aF.nextElementSibling}this._highlightListItem(aF,true)}}},{key:"_handleEnterKey",value:function z(){if(this.highlightedItem){this._selectListItem(this.highlightedItem)}}},{key:"_searchForCountry",value:function c(aG){for(var aE=0;aE<this.countries.length;aE++){if(this._startsWith(this.countries[aE].name,aG)){var aF=this.countryList.querySelector("#iti-item-".concat(this.countries[aE].iso2));this._highlightListItem(aF,false);this._scrollTo(aF,true);break}}}},{key:"_startsWith",value:function ai(aF,aE){return aF.substr(0,aE.length).toLowerCase()===aE}},{key:"_updateValFromNumber",value:function ay(aF){var aJ=aF;if(this.options.formatOnDisplay&&l.intlTelInputUtils&&this.selectedCountryData){var aH=!this.options.separateDialCode&&(this.options.nationalMode||aJ.charAt(0)!=="+");var aE=intlTelInputUtils.numberFormat,aG=aE.NATIONAL,aI=aE.INTERNATIONAL;var aK=aH?aG:aI;aJ=intlTelInputUtils.formatNumber(aJ,this.selectedCountryData.iso2,aK)}aJ=this._beforeSetNumber(aJ);this.telInput.value=aJ}},{key:"_updateFlagFromNumber",value:function aA(aO){var aG=aO;var aE=this.selectedCountryData.dialCode;var aM=aE==="1";if(aG&&this.options.nationalMode&&aM&&aG.charAt(0)!=="+"){if(aG.charAt(0)!=="1"){aG="1".concat(aG)}aG="+".concat(aG)}if(this.options.separateDialCode&&aE&&aG.charAt(0)!=="+"){aG="+".concat(aE).concat(aG)}var aL=this._getDialCode(aG);var aN=this._getNumeric(aG);var aI=null;if(aL){var aF=this.countryCodes[this._getNumeric(aL)];var aJ=aF.indexOf(this.selectedCountryData.iso2)!==-1&&aN.length<=aL.length-1;var aK=aE==="1"&&this._isRegionlessNanp(aN);if(!aK&&!aJ){for(var aH=0;aH<aF.length;aH++){if(aF[aH]){aI=aF[aH];break}}}}else{if(aG.charAt(0)==="+"&&aN.length){aI=""}else{if(!aG||aG==="+"){aI=this.defaultCountry}}}if(aI!==null){return this._setFlag(aI)}return false}},{key:"_isRegionlessNanp",value:function N(aG){var aF=this._getNumeric(aG);if(aF.charAt(0)==="1"){var aE=aF.substr(1,3);return b.indexOf(aE)!==-1}return false}},{key:"_highlightListItem",value:function aw(aG,aE){var aF=this.highlightedItem;if(aF){aF.classList.remove("iti__highlight")}this.highlightedItem=aG;this.highlightedItem.classList.add("iti__highlight");if(aE){this.highlightedItem.focus()}}},{key:"_getCountryData",value:function w(aE,aH,aI){var aF=aH?j:this.countries;for(var aG=0;aG<aF.length;aG++){if(aF[aG].iso2===aE){return aF[aG]}}if(aI){return null}throw new Error("No country data for '".concat(aE,"'"))}},{key:"_setFlag",value:function ae(aH){var aJ=this.selectedCountryData.iso2?this.selectedCountryData:{};this.selectedCountryData=aH?this._getCountryData(aH,false,false):{};if(this.selectedCountryData.iso2){this.defaultCountry=this.selectedCountryData.iso2}this.selectedFlagInner.setAttribute("class","iti__flag iti__".concat(aH));var aK=aH?"".concat(this.selectedCountryData.name,": +").concat(this.selectedCountryData.dialCode):"Unknown";this.selectedFlag.setAttribute("title",aK);if(this.options.separateDialCode){var aF=this.selectedCountryData.dialCode?"+".concat(this.selectedCountryData.dialCode):"";this.selectedDialCode.innerHTML=aF;var aI=this.selectedFlag.offsetWidth||this._getHiddenSelectedFlagWidth();this.telInput.style.paddingLeft="".concat(aI+6,"px")}this._updatePlaceholder();if(this.options.allowDropdown){var aG=this.activeItem;if(aG){aG.classList.remove("iti__active");aG.setAttribute("aria-selected","false")}if(aH){var aE=this.countryList.querySelector("#iti-item-".concat(aH));aE.setAttribute("aria-selected","true");aE.classList.add("iti__active");this.activeItem=aE;this.countryList.setAttribute("aria-activedescendant",aE.getAttribute("id"))}}return aJ.iso2!==aH}},{key:"_getHiddenSelectedFlagWidth",value:function E(){var aE=this.telInput.parentNode.cloneNode();aE.style.visibility="hidden";p.body.appendChild(aE);var aG=this.selectedFlag.cloneNode(true);aE.appendChild(aG);var aF=aG.offsetWidth;aE.parentNode.removeChild(aE);return aF}},{key:"_updatePlaceholder",value:function ak(){var aE=this.options.autoPlaceholder==="aggressive"||!this.hadInitialPlaceholder&&this.options.autoPlaceholder==="polite";if(l.intlTelInputUtils&&aE){var aF=intlTelInputUtils.numberType[this.options.placeholderNumberType];var aG=this.selectedCountryData.iso2?intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2,this.options.nationalMode,aF):"";aG=this._beforeSetNumber(aG);if(typeof this.options.customPlaceholder==="function"){aG=this.options.customPlaceholder(aG,this.selectedCountryData)}this.telInput.setAttribute("placeholder",aG)}}},{key:"_selectListItem",value:function M(aF){var aG=this._setFlag(aF.getAttribute("data-country-code"));this._closeDropdown();this._updateDialCode(aF.getAttribute("data-dial-code"),true);this.telInput.focus();var aE=this.telInput.value.length;this.telInput.setSelectionRange(aE,aE);if(aG){this._triggerCountryChange()}}},{key:"_closeDropdown",value:function ao(){this.countryList.classList.add("iti__hide");this.countryList.setAttribute("aria-expanded","false");this.dropdownArrow.classList.remove("iti__arrow--up");p.removeEventListener("keydown",this._handleKeydownOnDropdown);p.documentElement.removeEventListener("click",this._handleClickOffToClose);this.countryList.removeEventListener("mouseover",this._handleMouseoverCountryList);this.countryList.removeEventListener("click",this._handleClickCountryList);if(this.options.dropdownContainer){if(!this.isMobile){l.removeEventListener("scroll",this._handleWindowScroll)}if(this.dropdown.parentNode){this.dropdown.parentNode.removeChild(this.dropdown)}}this._trigger("close:countrydropdown")}},{key:"_scrollTo",value:function T(aK,aQ){var aE=this.countryList;var aO=l.pageYOffset||p.documentElement.scrollTop;var aP=aE.offsetHeight;var aI=aE.getBoundingClientRect().top+aO;var aN=aI+aP;var aL=aK.offsetHeight;var aH=aK.getBoundingClientRect().top+aO;var aM=aH+aL;var aF=aH-aI+aE.scrollTop;var aG=aP/2-aL/2;if(aH<aI){if(aQ){aF-=aG}aE.scrollTop=aF}else{if(aM>aN){if(aQ){aF+=aG}var aJ=aP-aL;aE.scrollTop=aF-aJ}}}},{key:"_updateDialCode",value:function P(aJ,aF){var aE=this.telInput.value;var aG="+".concat(aJ);var aH;if(aE.charAt(0)==="+"){var aI=this._getDialCode(aE);if(aI){aH=aE.replace(aI,aG)}else{aH=aG}}else{if(this.options.nationalMode||this.options.separateDialCode){return}else{if(aE){aH=aG+aE}else{if(aF||!this.options.autoHideDialCode){aH=aG}else{return}}}}this.telInput.value=aH}},{key:"_getDialCode",value:function ac(aG){var aE="";if(aG.charAt(0)==="+"){var aH="";for(var aF=0;aF<aG.length;aF++){var aI=aG.charAt(aF);if(!isNaN(parseInt(aI,10))){aH+=aI;if(this.countryCodes[aH]){aE=aG.substr(0,aF+1)}if(aH.length===this.dialCodeMaxLen){break}}}}return aE}},{key:"_getFullNumber",value:function A(){var aH=this.telInput.value.trim();var aE=this.selectedCountryData.dialCode;var aF;var aG=this._getNumeric(aH);if(this.options.separateDialCode&&aH.charAt(0)!=="+"&&aE&&aG){aF="+".concat(aE)}else{aF=""}return aF+aH}},{key:"_beforeSetNumber",value:function aD(aF){var aG=aF;if(this.options.separateDialCode){var aE=this._getDialCode(aG);if(aE){aE="+".concat(this.selectedCountryData.dialCode);var aH=aG[aE.length]===" "||aG[aE.length]==="-"?aE.length+1:aE.length;aG=aG.substr(aH)}}return this._cap(aG)}},{key:"_triggerCountryChange",value:function y(){this._trigger("countrychange")}},{key:"handleAutoCountry",value:function i(){if(this.options.initialCountry==="auto"){this.defaultCountry=l.intlTelInputGlobals.autoCountry;if(!this.telInput.value){this.setCountry(this.defaultCountry)}this.resolveAutoCountryPromise()}}},{key:"handleUtils",value:function S(){if(l.intlTelInputUtils){if(this.telInput.value){this._updateValFromNumber(this.telInput.value)}this._updatePlaceholder()}this.resolveUtilsScriptPromise()}},{key:"destroy",value:function at(){var aF=this.telInput.form;if(this.options.allowDropdown){this._closeDropdown();this.selectedFlag.removeEventListener("click",this._handleClickSelectedFlag);this.flagsContainer.removeEventListener("keydown",this._handleFlagsContainerKeydown);var aE=this._getClosestLabel();if(aE){aE.removeEventListener("click",this._handleLabelClick)}}if(this.hiddenInput&&aF){aF.removeEventListener("submit",this._handleHiddenInputSubmit)}if(this.options.autoHideDialCode){if(aF){aF.removeEventListener("submit",this._handleSubmitOrBlurEvent)}this.telInput.removeEventListener("blur",this._handleSubmitOrBlurEvent)}this.telInput.removeEventListener("keyup",this._handleKeyupEvent);this.telInput.removeEventListener("cut",this._handleClipboardEvent);this.telInput.removeEventListener("paste",this._handleClipboardEvent);this.telInput.removeAttribute("data-intl-tel-input-id");var aG=this.telInput.parentNode;aG.parentNode.insertBefore(this.telInput,aG);aG.parentNode.removeChild(aG);delete l.intlTelInputGlobals.instances[this.id]}},{key:"getExtension",value:function U(){if(l.intlTelInputUtils){return intlTelInputUtils.getExtension(this._getFullNumber(),this.selectedCountryData.iso2)}return""}},{key:"getNumber",value:function Y(aF){if(l.intlTelInputUtils){var aE=this.selectedCountryData.iso2;return intlTelInputUtils.formatNumber(this._getFullNumber(),aE,aF)}return""}},{key:"getNumberType",value:function av(){if(l.intlTelInputUtils){return intlTelInputUtils.getNumberType(this._getFullNumber(),this.selectedCountryData.iso2)}return -99}},{key:"getSelectedCountryData",value:function x(){return this.selectedCountryData}},{key:"getValidationError",value:function ad(){if(l.intlTelInputUtils){var aE=this.selectedCountryData.iso2;return intlTelInputUtils.getValidationError(this._getFullNumber(),aE)}return -99}},{key:"isValidNumber",value:function H(){var aF=this._getFullNumber().trim();var aE=this.options.nationalMode?this.selectedCountryData.iso2:"";return l.intlTelInputUtils?intlTelInputUtils.isValidNumber(aF,aE):null}},{key:"setCountry",value:function ag(aE){var aF=aE.toLowerCase();if(!this.selectedFlagInner.classList.contains("iti__".concat(aF))){this._setFlag(aF);this._updateDialCode(this.selectedCountryData.dialCode,false);this._triggerCountryChange()}}},{key:"setNumber",value:function aj(aE){var aF=this._updateFlagFromNumber(aE);this._updateValFromNumber(aE);if(aF){this._triggerCountryChange()}}},{key:"setPlaceholderNumberType",value:function W(aE){this.options.placeholderNumberType=aE;this._updatePlaceholder()}}]);return ab}();l.intlTelInputGlobals.getCountryData=function(){return j};var u=function u(w,c,v){var i=p.createElement("script");i.onload=function(){d("handleUtils");if(c){c()}};i.onerror=function(){d("rejectUtilsScriptPromise");if(v){v()}};i.className="iti-load-utils";i.async=true;i.src=w;p.body.appendChild(i)};l.intlTelInputGlobals.loadUtils=function(c){if(!l.intlTelInputUtils&&!l.intlTelInputGlobals.startedLoadingUtilsScript){l.intlTelInputGlobals.startedLoadingUtilsScript=true;if(typeof Promise!=="undefined"){return new Promise(function(v,i){return u(c,v,i)})}u(c)}return null};l.intlTelInputGlobals.defaults=m;l.intlTelInputGlobals.version="16.0.2";var a="intlTelInput";f.fn[a]=function(i){var c=arguments;if(i===h||typeof i==="object"){return this.each(function(){if(!f.data(this,"plugin_"+a)){var w=new o(this,i);w._init();l.intlTelInputGlobals.instances[w.id]=w;f.data(this,"plugin_"+a,w)}})}else{if(typeof i==="string"&&i[0]!=="_"){var v;this.each(function(){var w=f.data(this,"plugin_"+a);if(w instanceof o&&typeof w[i]==="function"){v=w[i].apply(w,Array.prototype.slice.call(c,1))}if(i==="destroy"){f.data(this,"plugin_"+a,null)}});return v!==h?v:this}}}});