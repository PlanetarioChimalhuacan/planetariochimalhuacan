<?php
include("conection.php");

if(isset($_POST['send'])){
    $nom = trim($_POST['user']);
    $mail = trim($_POST['mail']);
    $com = trim($_POST['message']);

    // Validar si todos los campos están llenos
    if(empty($nom) || empty($mail) || empty($com)){
        ?>
        <script>
            alert('Rellena todos los campos');
            window.location.href='login.php';
        </script>
        <?php
        exit; // Detener la ejecución del código
    }

    // Insertar nuevo usuario
    $sql_insert_user = "INSERT INTO sugerencia (id,nombre,Correo,comentario) VALUES ('0','$nom', '$mail', '$com')";
    $res_insert_user = mysqli_query($conex, $sql_insert_user);

    if($res_insert_user){
        ?>
        <script>
            alert('Comentario registrado');
            window.location.href='../';
        </script>
        <?php
    }else{
        ?>
        <script>
            alert('Ocurrió un error al registrar el usuario');
            window.location.href='../';
        </script>
        <?php
    }
}
?>
