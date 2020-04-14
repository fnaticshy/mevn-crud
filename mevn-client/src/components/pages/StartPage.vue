<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>start page</h1>
                <router-link :to="{ name: 'Posts'}">posts</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StartPage"
    }
</script>

<style scoped>

</style>