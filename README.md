# Inventario · Cantina 24 Horas

Aplicativo web de inventario, ventas, compras, gastos y reportes para uso interno.
Desarrollado por PUBLISELL.

## Estructura
```
index.html              Aplicativo completo (HTML + CSS + JS)
manifest.webmanifest    Permite instalarlo como app en celular, tablet y PC
sw.js                   Funcionamiento sin internet
vercel.json             Configuración de Vercel (caché y seguridad)
robots.txt              Evita que Google indexe el aplicativo
favicon.png             Ícono de la pestaña
icons/                  Íconos de la app instalada
```

## Acceso inicial
- Vendedor: PIN 0000
- Administrador: PIN 1234
Cámbialos en Configuración el día de la entrega.

## Despliegue
1. Sube todos los archivos a un repositorio de GitHub (privado).
2. En Vercel: Add New → Project → importar el repositorio → Deploy.

## Actualizar
1. Reemplaza `index.html` en GitHub.
2. En `sw.js` sube la versión (ej. `cantina-v1.0.1`).
3. Vercel publica solo en segundos.

## Datos
Los datos se guardan en el navegador del dispositivo (localStorage).
Hacer respaldo semanal: Configuración → Generar respaldo → Copiar.
