(function(e){function a(a){for(var o,r,c=a[0],l=a[1],s=a[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);f&&f(a);while(d.length)d.shift()();return t.push.apply(t,s||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(t.splice(a--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},i={app:0},t=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"e46d70a3","chunk-0206bfa0":"8361e341","chunk-04b93936":"c09a5fbf","chunk-13a6037e":"107aa002","chunk-16015154":"a1972d68","chunk-17977988":"55c64237","chunk-2c06842c":"daa792fb","chunk-2d208d90":"dc6a21ee","chunk-2d21d0e2":"72d2d10c","chunk-2d22c123":"1ce17133","chunk-2e80bb9a":"59f089d2","chunk-3145fe0f":"0950cee0","chunk-328f70dd":"cecaed6e","chunk-3807499c":"1b5a6d16","chunk-3c94cd2f":"24d3b73c","chunk-3dc647fd":"efb7a517","chunk-4cdd78c0":"5a479a00","chunk-515a8379":"c609dc4d","chunk-53ccb27e":"424b953f","chunk-59974754":"a2bc4fa3","chunk-766a929b":"59378ed3","chunk-839300a6":"578d3c5c","chunk-c796899c":"7c82b9dd",comple:"6223dacf",creditos:"62d1b815",glosario:"a4eff243",intro:"5c843454",referencias:"d91f632e",tema1:"21618ed4",tema2:"4dbb2cfc",tema3:"56be0fae"}[e]+".js"}function l(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3c94cd2f":1,"chunk-3dc647fd":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};r[e]?a.push(r[e]):0!==r[e]&&n[e]&&a.push(r[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3c94cd2f":"1dbe8d4a","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"905aabe6","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"f17838b6","chunk-766a929b":"80951d97","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"c0789c1a",creditos:"0001902f",glosario:"df5c54da",intro:"0e433876",referencias:"a9bed263",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",i=l.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var s=t[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===o||u===i))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],u=s.getAttribute("data-href");if(u===o||u===i)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var o=a&&a.target&&a.target.src||i,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete r[e],f.parentNode.removeChild(f),n(t)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=i[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=i[e]=[a,n]}));a.push(o[2]=t);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var d=new Error;s=function(a){u.onerror=u.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(a)},l.m=e,l.c=o,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)l.d(n,o,function(a){return e[a]}.bind(null,o));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=a,s=s.slice();for(var d=0;d<s.length;d++)a(s[d]);var f=u;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},i=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,l=n("2877"),s=Object(l["a"])(c,r,i,!1,null,null,null),u=s.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),f=n("8c4f"),p=n("ae58"),m=n("7e58");d["a"].use(f["a"]);var h=new f["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:m["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=h,b=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Bocetación e ilustración",descripcionCurso:"La ilustración juega un papel muy importante en el diseño que presenta un alto valor en contenido gráfico y visual. Se caracteriza por su versatilidad de componentes, técnicas, formas, manejo de recursos, entre otros. Por medio de ella se transmiten mensajes claros y concisos que llegan al espectador de una manera directa que permite una comprensión total de cualquier tema. ",imagenBannerPrincipal:n("ae0a"),fondoBannerPrincipal:n("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Del boceto a la ilustración",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Definición del proyecto",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Correcciones y aprobación ",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Software y herramientas",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Software seleccionado",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Principales herramientas",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:" Manejo de capas",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Manejo de textos",hash:"t_2_4"},{icono:"far fa-file-alt",numero:"2.5",titulo:"Importación y exportación",hash:"t_2_5"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Ilustración",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Fases",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Clasificación de ilustraciones",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Técnicas",hash:"t_3_3"},{icono:"far fa-file-alt",numero:"3.4",titulo:"Composición y perspectiva",hash:"t_3_4"},{icono:"far fa-file-alt",numero:"3.5",titulo:"Creación de ambientes, personajes y props",hash:"t_3_5"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Adobe. (s.f.). Conceptos básicos de las capas.",link:"https://helpx.adobe.com/es/photoshop/using/layer-basics.html"},{referencia:"Adobe. (s.f.). Creación y modificación de pinceles.",link:"https://helpx.adobe.com/es/photoshop/using/creating-modifying-brushes.html#:~:text=El%20panel%20Ajustes%20del%20pincel,la%20pintura%20a%20la%20imagen"},{referencia:"Adobe. (s.f.). Exportación de archivos en Photoshop.",link:"https://helpx.adobe.com/la/photoshop/using/export-artboards-layers.html"},{referencia:"Desarrolloweb.com (2019). Herramientas Principales de Photoshop.",link:"https://desarrolloweb.com/articulos/herrameintas-principales-photoshop.html"},{referencia:"Dupon L. (2004). 1.001 trucos publicitarios. Redbook.",link:""},{referencia:"EcuRed. (s.f). Indígenas Guane.",link:"https://www.ecured.cu/Ind%C3%ADgenas_Guane"},{referencia:"García, H. (s.f.). Ilustración publicitaria. ",link:"http://ilustrandoenlaescueladearte.blogspot.com/2014/10/ilustracion-publicitaria.html"},{referencia:"Izquierdo, T. (2019). Diseño gráfico y web.",link:"https://taniaizquierdo.com/diccionario-diseno-grafico/#TRACKING"},{referencia:"Kalous, P. (2010). Una introducción a las herramientas de color Illustrator. ",link:"https://design.tutsplus.com/es/tutorials/an-introduction-to-illustrators-color-tools--vector-3549"},{referencia:"Mora, J (2020). Fotoaprendizaje. ",link:"https://www.fotoaprendizaje.com/las-principales-herramientas-de-photoshop/"},{referencia:"Onlineprinters Blog. (2021). Insertar imagen en Photoshop. ",link:"https://www.onlineprinters.es/blog/insertar-imagen-photoshop/"},{referencia:"Photoshop CS6. (s.f). Administrar las importaciones.",link:"https://www.ediciones-eni.com/open/mediabook.aspx?idR=0a4640d38bbb887a4614fb8486747d43"},{referencia:"Significados. (2015). Significado de interfaz.",link:"https://www.significados.com/interfaz/"}],glosario:[{termino:"Análoga",significado:"Que tiene analogía con algo (RAE). "},{termino:"Incipiente",significado:"que empieza (RAE). "},{termino:"Kerning",significado:"corrección visual del tracking (espacio entre letras), en dos caracteres consecutivos que no armonizan bien entre ellos, quedando demasiado separados y perdiendo legibilidad (Izquierdo, 2019)."},{termino:"Pantone",significado:"sistema de identificación de colores de impresión creados por la empresa Pantone (Izquierdo, 2019)."},{termino:"Tracking ",significado:"nombre para denominar la interletra, que no es otra cosa que el espacio entre letras (Izquierdo, 2019)."}],complementario:[{texto:"BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”",tipo:"Video",link:"https://www.google.com/"},{texto:"Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49",tipo:"Página web",descarga:"/downloads/prueba.pdf"},{texto:"Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.",tipo:"Artículo científico",link:"https://www.google.com/"},{texto:"Economía de Rosquilla. (s.f.).",tipo:"Página web",descarga:"/downloads/prueba.pdf"},{texto:"2 minutos para entender el desarrollo sostenible – Spanish",tipo:"Video",link:"https://www.google.com/"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Guillermo Eduardo González Tarazona",cargo:"Instructor Experto Temático",centro:"Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica"},{nombre:"Gloria Amparo López Escudero",cargo:"Diseñadora Instruccional",centro:"Regional Distrito Capital - Centro de Gestión Industrial "},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Revisor Metodológico y Pedagógico",centro:"Regional Distrito Capital – Centro de Diseño y Metrología"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrector de estilo",centro:"Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:["Yuly Andrea Rey Quiñonez"],cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Andres Bolaño Rey",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:["Zuleidy María Ruiz Torres"],cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:["Wilson Andrés Arenales Cáceres"],cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:["Gilberto Junior Rodriguez Rodriguez"],cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:["Ludwyng Corzo García"],cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:["Ángela María Maldonado Jaime"],cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:["Lina Marcela Perez Manchego"],cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:["Lady Adriana Ariza Luque"],cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:["Arnulfo Beltrán Mojica"],cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Magdi Khalifah Gamboa",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:g,store:b["a"],render:function(e){return e(u)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"core-js":"^3.15.2","ecored-base-pkg":"3.0.3","pug":"^3.0.2","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"~2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},ae0a:function(e,a,n){e.exports=n.p+"img/banner-princiapal.449e7444.svg"},e6b0:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.76129f5f.png"}});
//# sourceMappingURL=app.6cb5c945.js.map