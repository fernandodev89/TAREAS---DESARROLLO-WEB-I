### FERNANDO DAVID CONTRERAS MORAN 
### 1631023

# TAREAS CON REACT 

Este proyecto es una lista de tareas donde se pueden crear, marcar como completadas, eliminar y filtrar entre todas, pendientes o completadas.  
Además, las tareas se guardan en el **localStorage** para que no se borren al recargar la página.

---

## Hooks usados

### useState
Se usó para guardar la información que cambia dentro de la app:  
- La lista de tareas (`tasks`).  
- El texto que se escribe en el input (`newTask`).  
- El filtro que indica qué mostrar: todas, pendientes o completadas (`filter`).  

### useState
El useEffect sirve para ejecutar código cuando pasa algo en el componente (después de que se renderiza).
En este proyecto lo usamos para guardar las tareas en el localStorage cada vez que cambian.
De esa forma, aunque se recargue la página, las tareas no se pierden.

---
**Config Syncs**
![Config Syncs](/Tareas-proyect/public/doppler.png)
---
---
**Secretos en GitHub**
![Config Syncs](/Tareas-proyect/public/gitSecrets.png)
---
# URL del CDN de CloudFront **[Acceder a la página realizada](https://d1hufcivnbkedy.cloudfront.net/ "Tareas")**