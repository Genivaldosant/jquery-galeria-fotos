$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#reset').on('click', function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(event){
        event.preventDefault();
        const endereçoDaNovaImagem = $('#endereço-imagem-nova').val();
        const novoItem = $('<li style="display:none;"> </li>');
        $(`<img src="${endereçoDaNovaImagem}" />`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem-link"> 
                <a href="${endereçoDaNovaImagem}" target="_black">
                    ver imagem em tamanho real
                </a>
            </div>`
        ).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereço-imagem-nova').val('');
    })
})