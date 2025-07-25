# Microservicios: Time Server & Time Client

Este repositorio contiene dos microservicios desarrollados con NestJS:

- **time-server**: Expone la hora actual mediante TCP.
- **time-client**: Consulta la hora al servidor y la expone vía HTTP.

## Estructura

```
microservices/
├── time-server/
│   └── src/
│       ├── app.controller.ts
│       ├── app.module.ts
│       ├── app.service.ts
│       └── main.ts
└── time-client/
    └── src/
        ├── app.controller.ts
        ├── app.module.ts
        ├── app.service.ts
        └── main.ts
```

## Funcionamiento

### time-server

- Escucha conexiones TCP en el puerto `8877`.
- Al recibir `{ cmd: 'get_time' }`, responde con la hora actual en formato ISO.

### time-client

- Expone el endpoint HTTP `/time`.
- Al recibir una petición GET, consulta la hora al `time-server` por TCP y responde con la hora recibida.

## Pruebas

1. **Instalar dependencias**  
   Ejecuta en cada carpeta:
   ```sh
   npm install
   ```

2. **Ejecutar time-server**  
   En `time-server`:
   ```sh
   npm run start
   ```

3. **Ejecutar time-client**  
   En `time-client`:
   ```sh
   npm run start
   ```

4. **Consultar la hora**  
   Desde terminal:
   ```sh
   curl http://localhost:8877/time
   ```

5. **Ejecutar tests**  
   En cada carpeta:
   ```sh
   npm run test
   ```

## Notas

- Ambos servicios deben estar corriendo para la consulta de hora.
- Puedes modificar los puertos en los archivos `src/main.ts`.