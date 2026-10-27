# Wottrich — Panel de herramientas para iPad

Este es el paquete que se instala en el iPad. Contiene las seis herramientas:
cronómetro de natación, rutinas de gym, pizarra comparativa, analizador de video,
calculadora nutricional y cronómetro simple.

## Cómo subirlo

1. Creá un repositorio nuevo en GitHub que se llame `wottrich`.
2. Subí el contenido de esta carpeta (el archivo `index.html` tiene que quedar
   en la raíz del repositorio, junto con `apps`, `icons`, `sw.js`,
   `manifest.webmanifest` y `logo.png`).
3. Activá Pages: **Settings → Pages → Branch: main / root → Save**.
4. Esperá un minuto y abrí `https://<tu-usuario>.github.io/wottrich/` en Safari del iPad.

## Instalalo en la pantalla de inicio

En Safari del iPad: botón **Compartir** (cuadradito con flecha hacia arriba) →
**Añadir a la pantalla de inicio**. Abrilo desde ahí: se abre a pantalla completa
y funciona sin internet.

## Pasos siguientes

- La primera vez, el iPad arranca vacío. Para traer tus datos:
  abrí el cronómetro dentro del panel → **Config → Restaurar** con un respaldo
  que hayas descargado del otro aparato, o conectate a la nube y tocá **Bajar ahora**.
- **Guardar copia de seguridad** (abajo del panel) descarga un `.json` con todo lo
  guardado en el iPad. **Restaurar desde una copia** lo vuelve a cargar.
  Ojo: ese archivo incluye la dirección y la clave de tu nube, así que guardalo en un
  lugar privado.
- Cada herramienta tiene un botón redondo `←` abajo a la izquierda para volver al
  panel. Si te estorba, arrastralo con el dedo a otro lugar y queda guardado.
