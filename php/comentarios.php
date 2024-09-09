<?php
include("conection.php");

// Consulta SQL para obtener datos
$sql = "SELECT id, nombre, comentario FROM sugerencia";
$result = $conex->query($sql);

// Comprobar si hay resultados
if ($result->num_rows > 0) {
    // Salida de datos en formato HTML
    while($row = $result->fetch_assoc()) {
        echo '<div class="information-1">';
        echo '<h3>' . $row["nombre"] . '</h3>';
        echo '<p>' . $row["comentario"] . '</p>';
        echo '<a href="#" data-id="' . $row["id"] . '"> </a>';
        echo '</div>';
    }
} else {
    echo "0 results";
}
$conex->close();
?>
