# vue-start-spa

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Notes
1. Installing font awesome
    ```
    npm install @fortawesome/fontawesome-free
    ```
    1. Then add these to `main.js`
        ```js
        import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
        ```
    1. Then you can add the icons as 
        ```html
        <template>
            <div>
                <i class="fas fa-moon"></i> <!-- Moon icon -->
                <i class="fas fa-sun"></i> <!-- Sun icon -->
            </div>
        </template>
        ```