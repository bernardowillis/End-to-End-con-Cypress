**ID del caso:** TC-01
**Nombre del caso:** Login exitoso
**Objetivo:** Verificar que el usuario pueda iniciar sesión con credenciales correctas.
**Datos de entrada:** Email: [correcto@correcto.com](mailto:correcto@correcto.com), Contraseña: Correcto123
**Pasos a seguir:**

1. Ingresar el email y la contraseña correctos.
2. Dar clic en “Entrar”.
   **Resultado esperado:** El sistema redirige a `dashboard.html` y muestra el mensaje “Bienvenido, Señor CORRECTO, email: [correcto@correcto.com](mailto:correcto@correcto.com)”.

---

**ID del caso:** TC-02
**Nombre del caso:** Contraseña inválida
**Objetivo:** Validar que se muestre un error si la contraseña es incorrecta.
**Datos de entrada:** Email: [correcto@correcto.com](mailto:correcto@correcto.com), Contraseña: contraseñaerronea
**Pasos a seguir:**

1. Ingresar el email correcto y una contraseña incorrecta.
2. Dar clic en “Entrar”.
   **Resultado esperado:** Se muestra el mensaje “Credenciales inválidas” y el usuario permanece en la página de login.

---

**ID del caso:** TC-03
**Nombre del caso:** Email no registrado
**Objetivo:** Validar que se muestre un error si el email no existe en el sistema.
**Datos de entrada:** Email: [noexiste@noexiste.com](mailto:noexiste@noexiste.com), Contraseña: Correcto123
**Pasos a seguir:**

1. Ingresar un email no registrado y una contraseña cualquiera.
2. Dar clic en “Entrar”.
   **Resultado esperado:** Se muestra el mensaje “Credenciales inválidas” y el usuario permanece en la página de login.

---

**ID del caso:** TC-04
**Nombre del caso:** Campos vacíos
**Objetivo:** Validar que el sistema no permita iniciar sesión sin datos.
**Datos de entrada:** Ninguno
**Pasos a seguir:**

1. No ingresar ningún dato.
2. Dar clic en “Entrar”.
   **Resultado esperado:** Se muestra el mensaje “campos obligatorios!”.

---

**ID del caso:** TC-05
**Nombre del caso:** Normalización del correo
**Objetivo:** Verificar que el login funcione aunque el correo tenga espacios o mayúsculas.
**Datos de entrada:** Email: “  [CORRECTO@Correcto.com](mailto:CORRECTO@Correcto.com)  ”, Contraseña: Correcto123
**Pasos a seguir:**

1. Ingresar el correo con espacios y mayúsculas.
2. Dar clic en “Entrar”.
   **Resultado esperado:** El sistema redirige a `dashboard.html` y muestra “Bienvenido, Señor CORRECTO, email: [correcto@correcto.com](mailto:correcto@correcto.com)”.

---

**ID del caso:** TC-06
**Nombre del caso:** Envío con tecla Enter
**Objetivo:** Validar que el formulario funcione al presionar Enter.
**Datos de entrada:** Email: [correcto@correcto.com](mailto:correcto@correcto.com), Contraseña: Correcto123
**Pasos a seguir:**

1. Ingresar el email y la contraseña correctos.
2. Presionar la tecla Enter.
   **Resultado esperado:** El sistema redirige a `dashboard.html` correctamente.
