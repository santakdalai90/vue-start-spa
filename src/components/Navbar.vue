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
                <li v-for="(page, idx) in pages" class="nav-item" :key="idx">
                    <navbar-link
                        :page="page"
                        :isActive="activePage === idx"
                        @click.prevent="navLinkClick(idx)"
                    ></navbar-link>
                    
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
    props: ['pages', 'activePage', 'navLinkClick'],
    data() {
        return {
            theme: 'dark',
        }
    },
    methods: {
        changeTheme() {
            let theme = 'light'
            if (this.theme == 'light') {
                theme = 'dark'
            }

            this.theme = theme
        }
    }
}
</script>