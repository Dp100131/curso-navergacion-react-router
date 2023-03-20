# Versiones

- Los primeros React Routers. 💀
- React Router DOM. ❤
- Reach Router. 🤜🤛


# Estructura general

1. Router -> Provider.
2. Link -> Anchor.  
3. Route (path, render) -> Conditional render.

# Instalación de React Router DOM 6

``` npm install --save react-router-dom@6 ```

# Tipos de routers

- Browser router: ``` /slug ```
- Hash Router: ``` /#/slug ```
- Memory router: ¿Tener fe?

# BrewserRouter vs. HashRouter

- El backend no se da ni cuenta xd

# Link vs NavLink

Al navLink se le permiten poner funciones como parametros.

# useParams: rutas dinámicas

slug: mantener el componente igual y define su comportamiento dependiendo la url.

## useParams

- Ayuda a utilizar las variables en las rutas dinámicas.

# useNavigate: Historial de navegación

Navegar sin debender de enlaces de HTML, sino con código JavaScript.