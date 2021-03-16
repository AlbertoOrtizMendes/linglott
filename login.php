<!-- Tela de login -->
<section id = 'telaDeLogin' class='aeonis'>
  <div class='c flx-col'>
    <div class='svg flx-col' w3-include-html='assets/logo.html'></div>
    <form class='flx-col' action='login.inc.php' method="post">
      <label for="">Login:</label>
      <input type="text" name="login" placeholder="Login">
      <label for="">Senha:</label>
      <input type="text" name="password" placeholder="Password">
      <button class='pointer' id = 'btnEntrar' type="button" name="button">ENTRAR</button>
      <button class='pointer' id = 'fechaLogin' type="button" name="button">&times</button>
    </form>
  </div>
</section>
