<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificación de Correo Electrónico</title>
</head>
<body>
    <h1>¡Hola, {{ $user->name }}!</h1>
    <p>Gracias por registrarte en nuestra aplicación. Para completar tu registro, por favor verifica tu correo electrónico haciendo clic en el botón de abajo.</p>
    <p>
    <a href="{{ $verificationUrl }}" style="padding:10px 20px; background-color:#28a745; color:white; text-decoration:none;">
        Verificar Correo Electrónico
    </a>
    </p>
    <p>Si no solicitaste esta acción, puedes ignorar este correo.</p>
    <p>¡Gracias por unirte a nosotros!</p>
</body>
</html>
