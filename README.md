# Documentación API Colores


Guía que permitirá conocer todo lo necesario para ejecutar y consumir la API de Colores.

## Requesitos

- Nodejs 14.x
- Mysql
- Insomnia

## Instalación de dependencias

1. Clonar el proyecto.
2. Ejecutar `npm install` para instalar todas las dependencias.

## Configuraciones

3. Ingresar a la carpeta `docs/database` y ejecutar query que se encuentra en el archivo `multiplicadb.sql`
4. Cambiar de nombre el archivo `.env.example` por `.env`, además, se debe ingresar las variables de entorno.
5. Importar la colección de insomnia que se encuentra en la carpeta `docs/insomnia-collection`.

Si ya tenemos todos los pasos ejecutados, estamos listos para correr el proyecto.

## Ejecutar el proyecto

- `npm run start` para ejecutar el proyecto.
- Consumir los servicios que se encuentran en la colección de insomnia.

# Servicios

### Listar Colores

Servicio permite obtener lista de colores activos, recibe parametros de paginación, por defecto cuanta con paginacón de 10 registros.

***Verbo: GET***

***Path:***
```
http://localhost:6000/api/v1/colors?page=1&size=10
```
***Response:***
```
{
  "page": 1,
  "totalPage": 2,
  "totalCount": 13,
  "data": [
    {
      "id": 1,
      "name": "cerulean",
      "color": "#98B2D1",
      "year": 2000,
      "pantoneValue": "15-4020"
    },
    {
      "id": 2,
      "name": "fuchsia rose",
      "color": "#C74375",
      "year": 2001,
      "pantoneValue": "17-2031"
    },
    {
      "id": 3,
      "name": "true red",
      "color": "#BF1932",
      "year": 2002,
      "pantoneValue": "19-1664"
    },
    {
      "id": 4,
      "name": "aqua sky",
      "color": "#7BC4C4",
      "year": 2003,
      "pantoneValue": "14-4811"
    },
    {
      "id": 5,
      "name": "tigerlily",
      "color": "#E2583E",
      "year": 2004,
      "pantoneValue": "17-1456"
    },
    {
      "id": 6,
      "name": "blue turquoise",
      "color": "#53B0AE",
      "year": 2004,
      "pantoneValue": "15-5217"
    },
    {
      "id": 7,
      "name": "sand dollar",
      "color": "#DECDBE",
      "year": 2006,
      "pantoneValue": "13-1106"
    },
    {
      "id": 8,
      "name": "chili pepper",
      "color": "#9B1B30",
      "year": 2007,
      "pantoneValue": "19-1557"
    },
    {
      "id": 9,
      "name": "blue iris",
      "color": "#5A5B9F",
      "year": 2008,
      "pantoneValue": "18-3943"
    },
    {
      "id": 10,
      "name": "mimosa",
      "color": "#F0C05A",
      "year": 2009,
      "pantoneValue": "14-0848"
    }
  ]
}
```

### Consular un color

Permite obtener un color en específico a través de un `id` que es ingresado por parametro.

***Verbo: GET***

***Path:***
```
http://localhost:6000/api/v1/colors/13
```

***Response:***

```
{
  "id": 13,
  "name": "white",
  "color": "#FFFFFF",
  "year": 2021,
  "pantoneValue": "14-4420"
}
```

### Crear un color

Permite crear un color.

***Verbo: POST***

***Path:***
```
http://localhost:6000/api/v1/colors
```

***Request:***

```
{
  "name": "white",
  "color": "#FFFFFF",
  "year": 2000,
  "pantoneValue": "14-4420"
}
```

***Response:***

```
{
  "id": 13,
  "name": "white",
  "color": "#FFFFFF",
  "year": 2000,
  "pantoneValue": "14-4420"
}
```


### Actualizar un color

Permite actualizar un color en específico, recibe por parametro el `id`, Además, permite ingresar a través del `body` los campos a actualizar no es necesario enviar todos los campos, si no, solo los campos a actualizar.

***Verbo: PATCH***

***Path:***
```
http://localhost:6000/api/v1/colors/13
```

***Request:***

```
{
  "year": 2021
}
```

***Response:***

```
{
  "id": 13,
  "name": "white",
  "color": "#FFFFFF",
  "year": 2021,
  "pantoneValue": "14-4420"
}
```

### Eliminar un color

Permite eliminar un color en específico, el `id` es ingresado por parámetro. Internamente en base de datos se realiza un eliminado lógico.

***Verbo: DELETE***

***Path:***
```
http://localhost:6000/api/v1/colors/13
```

***Response:***

```
{
  "id": 13,
  "name": "white",
  "color": "#FFFFFF",
  "year": 2021,
  "pantoneValue": "14-4420"
}
```









