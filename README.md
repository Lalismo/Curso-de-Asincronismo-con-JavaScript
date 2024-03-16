# Curso-de-Asincronismo-con-JavaScript

## Qué es el asincronismo

### importantes para entender el asincronismo:. 

• 🧵 Thread: Thread para Javascript permite realizar programación multihilos en este entorno. En realidad,
simula la creación y ejecución de hilos, pero para el desarrollador es lo mismo. 
Ésto simplifica muchísimo la creación de aplicaciones Javascript.

• 🚫 Bloqueante: Una llamada u operación bloqueante no devuelve el control a la aplicación hasta que se ha completado.
 Por tanto el thread queda bloqueado en estado de espera.
 
• 🚿 No bloqueante: Una tarea no bloqueante se devuelve inmediatamente con independencia del resultado. Si se completó, devuelve los datos. Si no, un error.

• 🎞️ Síncrono: Las tareas se ejecutan de forma secuencial, se debe esperar a que se complete para continuar con la siguiente tarea. 

• 🚦 Asíncrono: Las tareas pueden ser realizadas más tarde, lo que hace posible que una respuesta sea procesada en diferido. 
La finalización de la operación I/O (entrada/salida) se señaliza más tarde, mediante un mecanismo específico como por ejemplo un callback,
una promesa o un evento, lo que hace posible que la respuesta sea procesada en diferido.


## Even Loop

Bucle de eventos es un patrón de diseño que espera y distribuye eventos o mensajes en un programa y es una tarea asignada
para mover del Task Queue al Stack, solo si el Stack está vacío.

### Memory Heap

Los objetos son asignados a un montículo (Espacio grande en la memoria no organizado).

### Call Stack(pila)

Apila de forma organizada las intrucciones de nuestro programa.

### Task Queue

Cola de tareas, se maneja de concurrencia, se agregan las tareas que ya están listas para pasar al Stack(pila).

### MicroTask Queue

Las promesas tiene otra forma distinta de ejecutarse y una prioridad superior.

### Web APIs

JavaScript fue pensado para generar las interacciones que se tienen con el usuario: setTimeout, XMLHttpRequest, File Reader, DOM.
Node: fs,https

Ejemplo [Ejemplo de funcionamiento de Even Loop](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMTAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D).