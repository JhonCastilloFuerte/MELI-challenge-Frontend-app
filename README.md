# Challenge Frontend Mercadolibre

## Descripción de la prueba:

En base a los diseños dados, construir las siguientes tres vistas:
- Caja de búsqueda
- Resultados de la búsqueda
- Detalle del producto

Las vistas son navegables de manera independiente y cuentan con su propia url:
- Caja de Búsqueda: “/”
- Resultados de la búsqueda:“/items?search=”
- Detalle del producto: “/items/:id”

Debe consultar el siguiente endpoint:
- https://api.mercadolibre.com/sites/MLA/search?q=:query

Construir los siguientes endpoints para ser utilizados desde las vistas:
- /api/items?q=:query
- /api/items/:id

## Levantamiento de la aplicación de forma local

Es necesario tener [node js]

Luego de clonar el repositorio es necesario instalar las dependencias del archivo package.json y node modules con 
```
[npm install]
```

Para inicializar la aplicación ejecute el comando:
```
[npm run dev] 
```

Si se quiere iniciar unicamente el servidor en express utilice este comando:

```
[npm run serve] 
```

## Stack tecnologico utilizado

- Cliente con React js utilizando Typescript
- Express para el servidor




