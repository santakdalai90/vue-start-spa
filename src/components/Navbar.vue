<template>
    <nav 
        class="navbar navbar-expand-sm" 
        :class="[`navbar-${theme}`, `bg-${theme}`]"
    >
        <div class="container-fluid">
            <!-- Brand -->
            <a class="navbar-brand" href="#">My Vue</a>

            <!-- Links -->
            <ul class="nav navbar-nav">
                <li v-for="(page, idx) in publishedPages" class="nav-item" :key="idx">
                    <navbar-link
                        :page="page"
                        :index="idx"
                    ></navbar-link>
                    
                </li>
                <li>
                    <router-link 
                        to="/pages"
                        class="nav-link" 
                        active-class="active"
                    >Pages</router-link>
                </li>
            </ul>
            <form class="d-flex">
                <button 
                    class="btn btn-primary" 
                    @click.prevent="changeTheme()"
                >
                    <i v-if="theme == 'dark'" class="fas fa-sun"></i>
                    <i v-else class="fas fa-moon"></i>
                </button>
            </form>
        </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue'

export default {
    components: {
        NavbarLink
    },
    inject: ['$pages', '$bus'],
    created() {
        this.getThemeSetting()

        this.pages = this.$pages.getAllPages()

        this.$bus.$on('page-updated', () => {
            this.pages = [...this.$pages.getAllPages()]
        })
    },
    computed: {
        publishedPages() {
            return this.pages.filter(p => p.published)
        }
    },
    data() {
        return {
            theme: 'dark',
            pages: []
        }
    },
    methods: {
        changeTheme() {
            let theme = 'light'
            if (this.theme == 'light') {
                theme = 'dark'
            }

            this.theme = theme
            this.storeThemeSetting()
        },
        storeThemeSetting() {
            localStorage.setItem('theme', this.theme)
        },
        getThemeSetting() {
            let theme = localStorage.getItem('theme')
            if (theme) {
                this.theme = theme
            }
        }
    }
}
</script>