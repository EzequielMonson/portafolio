<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Leer los datos JSON de Angular
$data = json_decode(file_get_contents("php://input"), true);

// Validar datos recibidos
if (!isset($data['name'], $data['email'], $data['message'])) {
    http_response_code(400);
    echo json_encode(["message" => "Faltan datos"]);
    exit;
}

$nombre = htmlspecialchars($data['name']);
$email = htmlspecialchars($data['email']);
$mensaje = nl2br(htmlspecialchars($data['message']));

$to = "ezemonson2024@gmail.com";
$subject = "Contacto Landing";

// Definir el cuerpo del email con diseño
$cuerpo = "
<html>
<body style='width:800px; font-family:Arial, Helvetica, sans-serif; background-color:#f9f9f9; padding:20px;'>

    <div style='background-color:#333; color:#fff; padding:15px; text-align:center; font-size:20px; font-weight:bold;'>
        Mensaje enviado a través del Sitio Dexus
    </div>

    <div style='background:#e5e5e5; padding:10px; margin-top:15px;'>
        <strong>Nombre:</strong> <span style='font-weight:normal'>$nombre</span>
    </div>
    
    <div style='background:#e5e5e5; padding:10px;'>
        <strong>Email:</strong> <span style='font-weight:normal'>$email</span>
    </div>

    <div style='background:#fff; padding:10px;'>
        <strong>Mensaje:</strong><br>
        <span style='font-weight:normal'>$mensaje</span>
    </div>

    <div style='background:#333; color:#fff; padding:10px; text-align:center; margin-top:15px; font-size:14px;'>
        © 2025 Ezequiel Monson.
    </div>

</body>
</html>
";

// Configurar encabezados
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/html;charset=UTF-8\r\n";
$headers .= "From: ezemonson2024@gmail.com\r\n";
$headers .= "Reply-To: $email\r\n";

// Enviar correo y responder JSON
if (mail($to, $subject, $cuerpo, $headers)) {
    echo json_encode(["message" => "Correo enviado con éxito"]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Error al enviar el correo"]);
}
?>
