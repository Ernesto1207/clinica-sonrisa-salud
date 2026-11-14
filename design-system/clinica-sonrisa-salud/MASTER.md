# Design System Master — CLÍNICA DENTAL SONRISA & SALUD

> Generado siguiendo el flujo de `ui-ux-pro-max` (Product: Healthcare App / Medical Clinic; Style: Accessible & Ethical + Soft UI Evolution; enfoque en reducción de ansiedad del paciente).

## 1. Paleta de Colores (Salud, Calma y Bienestar)

| Token | Valor | Uso | Contraste |
|---|---|---|---|
| `--color-bg` | `#FAF9F5` | Fondo principal (marfil / blanco cálido) | — |
| `--color-surface` | `#FFFFFF` | Tarjetas, modales y formulario | — |
| `--color-sage-soft` | `#EFF4F0` | Bandas de respiro visual (verde salvia tenue) | — |
| `--color-fg` | `#132A2E` | Texto principal (azul petróleo profundo) | 14.1:1 sobre `#FAF9F5` |
| `--color-primary` | `#1D5B61` | Botones primarios y acentos de confianza | 7.4:1 con `#FFFFFF` (WCAG AAA) |
| `--color-sage` | `#4A6B5D` | Verde salvia terapéutico (etiquetas, iconos) | 5.7:1 con `#FFFFFF` (WCAG AA+) |
| `--color-muted-fg` | `#4B5E61` | Texto secundario y descripciones | 6.5:1 sobre `#FAF9F5` |
| `--color-accent` | `#B4693E` | Acento cálido sutil (estrellas, detalles) | 4.6:1 sobre `#FAF9F5` |
| `--color-border` | `#DCE4E0` | Bordes suaves de 1px | — |
| `--color-destructive` | `#C53030` | Errores de validación | 5.4:1 sobre `#FFFFFF` |
| `--color-success` | `#1F6F50` | Confirmación de cita | 6.0:1 sobre `#FFFFFF` |

## 2. Tipografía Humanista y Legible

- **Titulares:** `Plus Jakarta Sans` (weights: 500, 600, 700) — trazos abiertos, geométrico-humanistas que transmiten cercanía y claridad.
- **Cuerpo y Formularios:** `Open Sans` (weights: 400, 500, 600) — tipografía humanista de máxima legibilidad clínica y baja fatiga visual (`16px` base, `line-height: 1.65`).

## 3. Espaciado y Geometría

- Espaciado generoso (`24px`–`96px`) para evitar sensación de saturación.
- Esquinas suavizadas (`16px` en tarjetas, `9999px` en botones primarios) para transmitir calidez y seguridad.
- Sombras difusas mínimas (`0 8px 30px rgba(19, 42, 46, 0.05)`).

## 4. Reglas UX Orientadas a Reducir la Ansiedad

1. **Lenguaje claro y tranquilizador:** Explicar duración, qué incluye y ausencia de dolor antes de pedir el contacto.
2. **Cero sorpresas en la reserva:** Formulario paso a paso (3 pasos simples con indicador de progreso claro).
3. **Accesibilidad WCAG AA/AAA:** Contraste alto pero suave a la vista, navegación completa por teclado, trampa de foco en modales y soporte `prefers-reduced-motion`.
4. **Acceso humano inmediato:** Enlace directo a WhatsApp sin pop-ups intrusivos.

## 5. Anti-Patrones a Evitar

- **Prohibido:** Colores clínicos estridentes (azul eléctrico, verde neón, blanco hospitalario frío).
- **Prohibido:** Imágenes médicas invasivas (instrumental dentro de la boca, jeringas, procedimientos quirúrgicos).
- **Prohibido:** Pop-ups agresivos al entrar o salir, contadores de urgencia falsa o bloques de texto densos sin respiro.
