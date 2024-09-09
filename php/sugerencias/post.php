<?php
include("../conection.php");

if(isset($_POST['send'])){
    $nom = trim($_POST['name']);
    $fecha = trim($_POST['date']);
    $ques = trim($_POST['quejas']);

    // Validar si todos los campos están llenos
    if(empty($nom) || empty($fecha) || empty($ques)){
        ?>
        <script>
            alert('Rellena todos los campos');
            window.location.href='index.html';
        </script>
        <?php
        exit; // Detener la ejecución del código
    }

    // Insertar nuevo usuario
    $sql_insert_user = "INSERT INTO quejas (id,nombre,fecha,mensaje) VALUES ('0','$nom', '$fecha', '$ques')";
    $res_insert_user = mysqli_query($conex, $sql_insert_user);

    if($res_insert_user){
        ?>
        <script>
            alert('Registro exitoso');
            alert('Se notificara cualquier respuesta al correo adjuntado');
            window.location.href='../../';
        </script>
        <?php
    }else{
        ?>
        <script>
            alert('Ocurrió un error al registrar el usuario');
            window.location.href='';
        </script>
        <?php
    }
}
?>