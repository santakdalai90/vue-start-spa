# vue-start-spa

## Notes
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

1. To install router
    ```
    npm install vue-router --save
    ```