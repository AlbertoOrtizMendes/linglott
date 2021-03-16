<!-- Tela de cadastro -->
<section id = 'telaDeCadastro' class='aeonis'>
  <div class='c flx-col'>
    <div class='svg flx-col' w3-include-html='assets/logo.html'></div>
    <form class='flx-col' action="signup.inc.php" method="post">
      <label for="">Name:</label>
      <input type="text" name="login" placeholder="Full name">
      <label for="">Email:</label>
      <input type="text" name="email" placeholder="Email">
      <label for="">User:</label>
      <input type="text" name="user" placeholder="User">
      <label for="">Password:</label>
      <input type="text" name="Password" placeholder="Password">
      <label for="">Confirm Password:</label>
      <input type="text" name="confirmPassword" placeholder="Confirm Password">
      <button class='pointer' id = 'btnEntrar' type="button" name="button">Sign up</button>
      <button class='pointer' id = 'fechaCadastro' type="button" name="button">&times</button>
    </form>
  </div>
</section>
