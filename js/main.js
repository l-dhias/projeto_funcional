$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        
    })

})
$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(00) 00000-0000'
})

$('#cpf').mask('000.000.000-00', {
    placeholder : '000.000.000-00'
})

$('#cep').mask('00000-000',{
    placeholder: '000000-000'
})

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        cpf: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        }
    },
        messages: {
            nome: 'Campo nome OBRIGATÓRIO',
            email: 'Campo nome OBRIGATÓRIO',
            telefone: 'Campo nome OBRIGATÓRIO',
            mensagem: 'Campo nome OBRIGATÓRIO',
            veiculo: 'Campo nome OBRIGATÓRIO'
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }

})
