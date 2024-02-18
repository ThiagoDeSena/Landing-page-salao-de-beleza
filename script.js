let show = true
const menuContent = document.querySelector('.content')
const menuToggle = menuContent.querySelector('.menu-toggle')


menuToggle.addEventListener('click', ()=>{

    menuContent.classList.toggle('on',show)
    show = !show
})


function abrirWhatsApp(servico) {
    // Crie a variável com a mensagem predefinida
    const mensagem = "Olá, gostaria de saber mais sobre o preço da(o) ";
  
    // Adicione a opção escolhida à mensagem
    const mensagemFinal = mensagem + servico + "?";
  
    // Crie o link do WhatsApp com a mensagem e o número da loja
    const linkWhatsApp = `https://api.whatsapp.com/send?phone=5585986344404&text=${encodeURIComponent(mensagemFinal)}`;
  
    // Abra o link do WhatsApp em uma nova aba
    window.open(linkWhatsApp, "_blank");
  }
  

  function agendarHorario(){

    const mensagem = "Olá, quero agendar um horário para fazer meus cabelos!"

    const linkWhatsApp = `https://api.whatsapp.com/send?phone=5585986344404&text=${encodeURIComponent(mensagem)}`

    window.open(linkWhatsApp, "_blank")
  }

  function localizacao(){

    const linkMaps = `https://maps.app.goo.gl/TVqu7ktDEP1xxZ498`

    window.open(linkMaps,"_blank")
  }