CLASE CasoDePrueba

&#x09;Atributos

&#x09;	Id

&#x09;	Titulo

&#x09;	Precondición

&#x09;	Pasos

&#x09;	Resultado\_esperado

&#x09;	Resultado\_obtenido

&#x09;	Estado

&#x09;	Evidencia

&#x09;Métodos

&#x09;	Ejecutar

&#x09;	Registrar Resultado

FIN CLASE



Objeto ISUA-001:

&#x09;id = "ISUA-001"

&#x09;título = "Iniciar sesión con Usuario Administrador"

&#x09;Precondición = "La página web carga en menos de 2.1 segundos"

&#x09;		"El usuario ingresado está registrado en el sistema"

&#x09;		"La contraseña ingresada está registrada en el sistema"

&#x09;Pasos = "Abrir https://panel.qas.kipu.com.pe"

&#x09;	"Digitar credencial de usuario"

&#x09;	"Digitar credencial de contraseña"

&#x09;	"Dar click en Inicio de Sesión"

&#x09;Resultado\_esperado: "200, pasó"

&#x09;Resultado\_obtenido: "200, pasó";"400, no pasó";"422, formato incorrecto"

&#x09;Estado: "Pasó";"No pasó";"Formato incorrecto"

&#x09;Evidencia: "Screenshot del panel inspeccionar(F12)"

