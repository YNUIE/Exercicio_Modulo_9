$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        var tarefa = $('#input-tarefa').val();
        if (tarefa !== '') {
            $('#lista-tarefas').append('<li><span>' + tarefa + '</span><button class="botao-excluir">Excluir</button></li>');
            $('#input-tarefa').val('');
        }
        return false;
    });

    $(document).on('click', 'span', function() {
        //$(this).parent().remove();
        $(this).toggleClass('riscar');
    });

    $(document).on('click', '.botao-excluir', function() {
        $(this).parent().remove();
    });



});
