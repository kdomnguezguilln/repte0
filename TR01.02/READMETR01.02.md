## 1. Explicación de la expresión regular proporcionada

```javascript
const patro = /^\s*(-?\d+(?:\.\d+)?)\s*([+\-*/%])\s*(-?\d+(?:\.\d+)?)\s*$/;
```

Esta expresión regular sirve para comprobar que el usuario introduce una operación matemática correctamente. Permite escribir dos números, un operador matemático entre ellos y espacios opcionales.

- `^`: indica el inicio del texto.
- `\s*`: permite poner espacios.
- `-?`: permite que el número sea negativo.
- `\d+`: acepta uno o más dígitos.
- `(?:\.\d+)?`: permite utilizar números decimales.
- `([+\-*/%])`: acepta los operadores `+`, `-`, `*`, `/` y `%`.
- `( )`: guarda los números y el operador para utilizarlos después.
- `$`: indica el final del texto.

Por ejemplo, acepta operaciones como `5 + 3`, `10 / 2` o `-4 * 2.5`.

## 2. Mi propia expresión regular

Para mi calculadora he creado esta expresión regular:

```javascript
const miPatro = /^\d+\s*[+\-*/]\s*\d+$/;
```

Esta expresión regular comprueba que el usuario introduzca dos números y un operador matemático entre ellos.

- `^`: indica el inicio del texto.
- `\d+`: acepta uno o más dígitos.
- `\s*`: permite poner espacios.
- `[+\-*/]`: acepta suma, resta, multiplicación y división.
- `$`: indica el final del texto.

### ¿Cómo la implementaría en mi calculadora?

Primero, utilizaría `test()` para comprobar si la operación introducida por el usuario cumple el formato de mi expresión regular.

```javascript
const operacion = "5 + 3";

if (miPatro.test(operacion)) {
    console.log("Operación correcta");
} else {
    console.log("Operación incorrecta");
}
```
