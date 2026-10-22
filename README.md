# Respira

Prototipo de un ejercicio de respiración guiada, hecho con HTML, CSS y JavaScript, sin frameworks ni dependencias.

**Demo:** https://iam2203.github.io/respira/

## Qué hace

- Guía una **respiración en caja**: 4 s Inhala → 4 s Sostén → 4 s Exhala → 4 s Sostén, en ciclo.
- Un círculo crece al inhalar, se mantiene, se encoge al exhalar y se mantiene.
- Un texto indica la fase actual.
- Un botón inicia y detiene el ejercicio. Al detenerlo, todo vuelve al estado inicial.

## Decisiones de accesibilidad

- **Movimiento reducido:** si el dispositivo tiene activada la preferencia de reducir movimiento (`prefers-reduced-motion`), el círculo se queda quieto y solo cambia el texto de la fase. El movimiento en pantalla puede causar mareo o malestar a algunas personas, y eso va en contra del propósito de un ejercicio para calmarse.
- **Lector de pantalla:** el texto de la fase es una región `aria-live="polite"`, así que cada cambio de fase se anuncia sin interrumpir lo que el lector esté diciendo.
- **Teclado:** el control es un `<button>` nativo, usable con Tab, Enter y Espacio, con foco visible (`:focus-visible`).
- **Contraste:** todos los pares de texto y fondo cumplen WCAG AA (4.5:1 o más), y el borde del botón supera 3:1.
- **Idioma:** la página declara `lang="es"` para que los lectores de pantalla usen pronunciación en español.
- **Tamaño de letra:** los textos y espaciados usan `rem`, así que respetan el tamaño de letra que el usuario configuró en su navegador.

## Diseño responsivo

Pensado primero para celular. El círculo se dimensiona con `vmin` para caber en cualquier tamaño y orientación de pantalla, y una media query ajusta los textos en pantallas más grandes.

## Cómo correrlo

No requiere instalación:

```bash
git clone https://github.com/IAM2203/respira.git
cd respira
open index.html
```

(`open` es de macOS; en otros sistemas, abre `index.html` con cualquier navegador.)

## Aviso

Prototipo independiente, **no afiliado a The Trevor Project**.

¿Necesitas hablar con alguien? [The Trevor Project México](https://www.thetrevorproject.mx/ayuda/)
