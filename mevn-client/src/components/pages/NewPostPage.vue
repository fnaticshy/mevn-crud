<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>New Post</h1>
                <form @submit.prevent="addPost">
                    <div class="form-group">
                        <input
                            class="form-control"
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Title"
                            v-model.trim="post.title"
                         >
                    </div>
                    <div class="form-group">
                        <input
                            class="form-control"
                            type="text"
                            name="description"
                            id="description"
                            placeholder="Description"
                            v-model.trim="post.description"
                        >
                    </div>
                    <div class="form-group">
                        <button
                            class="btn btn-block btn-primary"
                            type="submit"
                            name="addPost"
                            id="addPost"
                        >add new post</button>
                    </div>
                    <section>
                        <button
                            class="btn btn-success btn-block"
                            type="button"
                            @click="goBack()"
                        >go to posts page</button>
                    </section>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import PostsService from '@/services/PostsService'
    export default {
        name: 'NewPostPage',
        data () {
            return {
                post: {
                    title: '',
                    description: ''
                }
            }
        },
        methods: {
            async addPost () {
                if (this.post.title !== '' && this.post.description !== '') {
                    await PostsService.addNewPost({
                        title: this.post.title,
                        description: this.post.description
                    })
                    this.$router.push({ name: 'Posts' })
                } else {
                    alert('Empty fields!')
                }
            },
            goBack () {
                this.$router.push({ name: 'Posts' })
            }
        }
    }
</script>
