# Prueba técnica oferta Desarrollador Mobile

Este es un proyecto [Expo](https://expo.dev) creado con [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Primeros pasos

1. Instalar dependencias

   ```bash
   npm install
   ```

2. Iniciar la app

   ```bash
    npx expo start
   ```

En el output del terminal encontrarás opciones para abrir la app en:

- [build deaarrollo](https://docs.expo.dev/develop/development-builds/introduction/)
- [Emulador Android](https://docs.expo.dev/workflow/android-studio-emulator/)
- [Simulador iOS](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go),un sandbox limitado para probar la el desarrollo de la app con Expo (se recomienda usar este método, este utilicé para el desarrollo de la app, requiere instalar expo go en su dispositivo móvil).

Puedes editar los archivos del proyecto y verás los cambios reflejadoa en la app. Este proyecto utiliza routing basado en archivos [file-based routing](https://docs.expo.dev/router/introduction). (También tengo experiencia principalmente con apps hechas con react mative cli por si necesitan esa forma).

## Estructura del proyecto

- app: contiene los archivos de entrada a cada ruta de la app, como la pantalla de login, vista con bottom tabs de navegación.
- assets: contiene recursos visuales como imágenes para usar en la app.
- components: componentes compartidos o específicos de cada vista.
- hooks: contiene hooks de react para organizar funcionalidades basadas en states de react.
- store: contiene hooks o scripts para el almacenamiento de estados usando librería zustand.
- utils: contiene scripts con utilidades reutilizables como una instancia base de axios para requests http.


## Troubleshooting

Cualquier problema levantando la app favor dirigirse a d.antonio.romeroa@gmail.com