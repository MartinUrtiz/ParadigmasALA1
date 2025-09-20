Parte A: JavaScript (paradigma estructurado)
1. Generalización simbólica

Las reglas escritas del lenguaje JavaScript incluyen:

Sintaxis: basada en C (uso de { } para bloques, ; opcional, if, while, for, etc.).

Tipos de datos: primitivos (number, string, boolean, null, undefined, symbol, bigint) y objetos.

Estructuras de control: condicionales (if, else, switch), iterativas (for, while, do…while).

Declaración de variables: let, const, var (con diferencias en alcance y mutabilidad).

Funciones: pueden declararse de forma tradicional (function) o expresiva (funciones flecha).

Ámbito: léxico, con alcance por bloque (cuando se usa let o const).

En el paradigma estructurado se restringe su uso a estructuras de control, funciones y procedimientos, evitando características de POO (clases, objetos) o funcionales avanzadas.

2. Creencias de los profesionales

Versatilidad: se cree que es mejor por su capacidad de ejecutarse en cualquier navegador y también en servidores (Node.js).

Facilidad de aprendizaje: sintaxis simple y flexible en comparación con C o Java.

Ecosistema amplio: existen muchas librerías, frameworks y documentación.

Flexibilidad: aunque puede ser un arma de doble filo, se valora que permite programar de varias formas (estructurado, funcional, POO).

Rapidez de prototipado: muy útil para proyectos web rápidos.

Parte B: Elección del lenguaje (JavaScript estructurado)
1. ¿Tiene una sintaxis y semántica bien definida? ¿Existe documentación oficial?

Sí. Su estándar está definido en ECMAScript (ECMA-262) y la documentación oficial se encuentra en sitios como MDN Web Docs.

2. ¿Es posible comprobar el código producido en ese lenguaje?

Sí, el código puede ejecutarse en cualquier navegador o en Node.js. No requiere compilación previa, pero sí es posible usar herramientas de verificación (linters, tests).

3. ¿Es confiable?

Depende del programador. JavaScript tiene tipado dinámico, lo que puede generar errores difíciles de detectar. Sin embargo, con buenas prácticas y herramientas (como TypeScript) puede volverse más seguro.

4. ¿Es ortogonal?

En parte. JavaScript no es completamente ortogonal porque algunas operaciones no están permitidas en todos los contextos (ejemplo: break no funciona fuera de bucles/switch). Pero sí mantiene coherencia en estructuras de control y operadores.

5. Características de consistencia y uniformidad

Consistencia: tiene reglas uniformes para bloques, funciones y variables.

Inconsistencias: existen detalles históricos confusos (ejemplo: coerción automática de tipos como [] + {}).

6. ¿Es extensible? ¿Hay subconjuntos del lenguaje?

Sí. Puede extenderse mediante librerías y frameworks. También existen subconjuntos o "estilos":

Strict Mode ("use strict";) que impone reglas más estrictas.

Subconjuntos usados en frameworks (p. ej., TypeScript es un superset de JS).

7. ¿El código producido es transportable?

Sí. Uno de los mayores beneficios de JavaScript es que corre en cualquier navegador y sistema operativo sin modificaciones. Además, con Node.js es portable en servidores.
