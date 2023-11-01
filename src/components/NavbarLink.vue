<template>
    <router-link 
        :to="`/${index}`"
        class="nav-link"
        active-class="active" 
        :title="`This page goes to the ${page.link.text} page`"
    >{{page.link.text }}</router-link>
</template>

<script>
export default {
    props: ['page', 'index']
}
</script>