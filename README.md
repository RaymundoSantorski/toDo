# Aplicación de tareas 
## Configuración
Recuerda instalar las dependencias
```
    npm install
```

## Función crear
Tiene dos flags, name(n) y state(s), el flag name es obligatorio

Crea una tarea sin terminar
```
    node app create -n "Nueva tarea"
```

Crea una tarea ya terminada
```
    node app create --name "Nueva tarea" -s true
```

Los dos valores aceptados para state son **true** y **false**

## Función borrar
El único flag es name(n), es obligatorio
```
    node app delete --name "Nueva tarea"
```

## Función actualizar 
Flag name(n) obligatorio, flag state(s) con un valor por defecto **true**
```
    node app update -n "Nueva tarea"
```

## Función listar
Flag state(s)

Lista todas las tareas almacenadas
```
    node app list
```

Lista las tareas terminadas
```
    node app list --state true
```

Lista las tareas sin terminar
```
    node app list -s false
```

## Función limpiar
Flag state(s), obligatorio con valores **true**, **false** y **all**.

Elimina todas las tareas almacenadas
```
    node app clear -s all
```

Elimina todas las tareas sin terminar
```
    node app clear -s false
```

Elimina todas las tareas terminadas
```
    node app clear -s true
```

## Función **Marcar todos**
Flag state(s) obligatorio, valores **true** y **false**

Marca todas las tareas como completadas
```
    node app all -s true
```

Marca todas las tareas como incompletas
```
    node app all -s false
```