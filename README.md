# Inventario · Cantina 24 Horas — v2 (Supabase)

Aplicativo web de inventario, ventas, compras, gastos y reportes. Datos en la nube (Supabase),
acceso simultáneo desde varios dispositivos. Desarrollado por PUBLISELL.

## Estructura
```
index.html              Aplicativo completo
config.js               ← ÚNICO archivo a editar: URL, clave anon y correos
manifest.webmanifest    Instalación como app
sw.js                   Carga rápida (no guarda datos de Supabase)
vercel.json             Caché y seguridad en Vercel
robots.txt              Evita que Google indexe el aplicativo
favicon.png, icon-192.png, icon-512.png, apple-touch-icon.png   Íconos
```

## Puesta en marcha
1. Supabase → New project (región: East US).
2. SQL Editor → pegar schema.sql → Run.
3. Authentication → Users → Add user (2 usuarios, Auto Confirm).
4. SQL Editor → asignar roles en la tabla perfiles → Run.
5. Authentication → desactivar "Allow new users to sign up".
6. Editar `config.js` con URL, clave anon y correos.
7. Subir todo a GitHub → Vercel redepliega solo.

## Seguridad
- Vendedor: solo vende, ve sus ventas y el stock. No ve costos ni ganancias.
- Admin: todo.
- Toda operación de stock se valida en el servidor (funciones SQL), no en el navegador.
- La clave anon es pública por diseño. Nunca subir la clave service_role.

## Actualizar
Reemplaza el archivo en GitHub y sube la versión en `sw.js` (ej. `cantina-v2.0.1`).
