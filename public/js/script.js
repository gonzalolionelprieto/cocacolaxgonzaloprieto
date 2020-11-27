function imgSlider(anything){
	document.querySelector('.coca-cola').src =anything;
}

function cambiarFondo(color){
	const sec =document.querySelector('.sec');
	sec.style.background=color;
}

function menuToggle(){
	const toggleMenu=document.querySelector('.toggleMenu');
	const nav=document.querySelector('.nav');
	toggleMenu.classList.toggle('active');
	nav.classList.toggle('active');
}


function cambiarParrafoCL(){
	const parrafo =document.querySelector('.parrafo');
	const info=document.querySelector('.info');
	parrafo.innerHTML="La de siempre, original y deliciosa, la que refresca a millones de personas en todo el mundo. Fue creada en 1886 por el farmacéutico Dr. John Pemberton, siendo la bebida que desde hace más de 130 años, te acompaña de una forma especial en ciertos momentos cotidianos de tu vida.¡Sin olvidarnos de los momentos únicos! ¿Recuerdas cuando en 1985, Coca-Cola fue el primer refresco que viajó al espacio?";
	info.href="https://www.cocacoladeargentina.com.ar/content/dam/journey/ar/es/private/marcas/info-nutricional/coca-cola.jpg";


	
}

function cambiarParrafoZR(){
	const parrafo =document.querySelector('.parrafo');
	const info=document.querySelector('.info');
	parrafo.innerHTML="Seguramente, alguna vez has soñado con una bebida de delicioso sabor, sin tener que preocuparte por el contenido en azúcar o calorías. Coca-Cola Zero Azúcar, es la bebida que siempre has estado esperando.Disponible desde el año 2005, esta versión sin azúcar y sin calorías, refresca hoy a millones de personas en más de 140 países de todo el mundo.";
	info.href="https://www.cocacoladeargentina.com.ar/content/dam/journey/ar/es/private/marcas/info-nutricional/coca-cola-sinAzucares.jpg";


	
}

function cambiarParrafoLG(){
	const parrafo =document.querySelector('.parrafo');
	const info=document.querySelector('.info');
	parrafo.innerHTML="Una variante ligera de Coca-Cola, sin azúcar, sin calorías. Con un sabor único y todo su gran poder refrescante.Lanzada al mercado en el año 1982 y disponible en Europa desde 1983, Coca-Cola sabor light acompaña tus pequeños momentos cotidianos, haciéndolos más especiales desde hace más de 30 años¿Sabías que en conjunto Coca-Cola sabor Light y Coca-Cola Zero Azúcar son los refrescos carbonatados sin azúcares y sin calorías más consumidos del mundo?";
	info.href="https://www.cocacoladeargentina.com.ar/content/dam/journey/ar/es/private/marcas/info-nutricional/coca-cola-light.jpg";


	
}
