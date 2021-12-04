// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

//dropdown
function abreSelect(id, pergunta) {
    var altura = $(id).prop("scrollHeight");
    altura = altura + "px";
    if ($(id).height() > 0) {
      $(id).css({ height: "0" });
      $(id).removeClass("ativo");
      $(pergunta).removeClass("virado");
      //console.log('0');
    } else {
      $(id).css({ height: altura });
      $(id).addClass("ativo");
      $(pergunta).addClass("virado");
      //console.log('mais que 0');
    }
  }
  $("#conteudoFake input").click(function () {
    console.log("cliquei");
    var qnt = 0;
    $("#conteudoFake input:checked").each(function () {
      if ($(this).attr("checked")) {
        qnt -= 1;
        //console.log(qnt);
      } else {
        qnt += 1;
        //console.log(qnt);
      }
    });
    if (qnt >= 1) {
      $("#triggerFake").text(qnt + " item(s) selecionado(s)");
    } else {
      $("#triggerFake").text("Selecione..");
    }
  });
  $(document).ready(function(){
	var accordionOpen = $('.first_depth p'),
			secondDepth = $('.second_depth');
	
	accordionOpen.on('click',function(){
			accordionOpen.closest('.first_depth').removeClass('on');
			$(this).closest('.first_depth').addClass('on');
			
	});
});
