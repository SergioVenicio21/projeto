$(document).ready(function() {
  app.
    route('/', function() {}).
    route('/fornecedores/', function() {
      app.utils.index('/fornecedores/', 'Excluir Fornecedor', 'Deseja realmente excluir este fornecedor?');
    }).
    route('/fornecedores/adicionar/', function() {
      services.city($('#city_id'));
      validators.mask();
      validators.provider($('#provider'));
    }).
    route('/fornecedores/editar/:id', function() {
      services.city($('#city_id'));
      validators.mask();
      validators.provider($('#provider'));
    }).
    route('/produtos/', function() {
      app.utils.index('/produtos/', 'Excluir Produto', 'Deseja realmente excluir este produto?');
    }).
    route('/produtos/adicionar/', function() {
      services.provider($('#provider_id'));
      validators.mask();
      validators.product($('#product'));
      app.utils.upload_image({
        'file_path': '#image',
        'preview': '#preview',
        'upload_button': '#image_file',
        'remove_button': '#image_remove',
        'fallback_image': '/static/img/no-img.png'
      });
    }).
    route('/produtos/editar/:id', function() {
      services.provider($('#provider_id'));
      validators.mask();
      validators.product($('#product'));
      app.utils.upload_image({
        'file_path': '#image',
        'preview': '#preview',
        'upload_button': '#image_file',
        'remove_button': '#image_remove',
        'fallback_image': '/static/img/no-img.png'
      });
    }).
    route('/usuarios/', function() {
      app.utils.index('/usuarios/', 'Excluir Usuário', 'Deseja realmente excluir este usuário?');
    }).
    route('/usuarios/adicionar/', function() {
      validators.mask();
      validators.user($('#user'));
    }).
    route('/usuarios/editar/:id', function() {
      validators.mask();
      validators.user($('#user'));
    });
  app.config.ajax();
  app.utils.back();
  app.run();
});
