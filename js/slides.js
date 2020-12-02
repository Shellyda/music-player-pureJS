$(function(){

/*Slides princípais aplicando plugin slick */
$('.mosaico .mosaico-wraper').slick({
		centerMode: false,//permite vejamos um pouco das fotos q estão fora do layout escolhido.
		dots:true,
		slidesToShow:1,//Define quantas imagens vão aparecer na tela!
		arrow:true,//Se devemos(true) ou não(false) mostrar os botões de navegação.
		border:false,
		autoplay: true,
        autoplaySpeed: 3000,
		responsive:[//Aplicação responsiva do plugin! - Um array que tem objetos dentro.

		{
			breakpoint:768,//Media queries 
			settings:{//Define os paramêtros!
				arrows:false,
				centerMode:true,
				slidesToShow:3 
			}
		},

		{
			breakpoint:580,
			settings:{
				arrows:false,
				centerMode:true,
				slidesToShow:2
			}
		},
		{
			breakpoint:380,
			settings:
			{
				arrows:false,
				centerMode:true,
				slidesToShow:1
			}
		}


		]
	});
 
 //bolinhas de navegação:
 $('.tratamentos .container').slick({
			centerMode:false,
			slidesToShow:3,
			arrows:false,
			infinite:false,//não permite que o slide seja infinito!
			responsive:[

				{
					breakpoint:768,
					settings:{
						arrows:false,
						dots:true,//bolinhas de navegação - estilizamos elas no arquivo de estilo do site. não utilizamos o estilo padrão do arquivo slick.css
						infinite:false,
						centerMode:false,
						slidesToShow:2
					}
				},
				{
					breakpoint:480,
					settings:{
						arrows:false,
						dots:true,
						infinite:false,
						centerMode:false,
						slidesToShow:1
					}
				}

			]
	});

//Assets - prev and next
let prev = document.querySelector('.slick-prev')  
window.load = prev.innerHTML = '<h1 class="arrows"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></h1>'

let next = document.querySelector('.slick-next')  
window.load = next.innerHTML = '<h1 class="arrows"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i></h1>'
});