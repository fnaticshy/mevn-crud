<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <section
                     v-if="posts.length"
                     class="panel.panel-success"
                >
                    <h3 class="panel-heading">
                        List of posts:
                    </h3>
                    <table class="table table-striped">
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                        <tr
                            v-for="post of posts"
                            :key="post.title"
                        >
                            <td>{{ post.title }}</td>
                            <td>{{ post.description }}</td>
                            <td>
                                <router-link
                                     tag="button"
                                     class="btn btn-warning btn-sm mr-2"
                                    :to="{ name: 'EditPost', params: { id: post._id } }"
                                >
                                    edit post
                                </router-link>
                                <button
                                    class="btn btn-danger btn-sm"
                                    type="button"
                                    @click="removePost(post._id)"
                                >
                                    delete
                                </button>
                            </td>
                        </tr>
                    </table>
                    <div>
                        <router-link
                            tag="button"
                            class="btn btn-success btn-sm mr-2"
                            :to="{ name: 'NewPost' }"
                        >Create Post</router-link>
                    </div>
                </section>
                <section v-else>
                    <p>There are no posts ... Lets add one now!</p>
                    <div>
                        <router-link
                                tag="button"
                                class="btn btn-success btn-sm mr-2"
                                :to="{ name: 'NewPost' }"
                        >Create Post</router-link>
                    </div>
                </section>

            </div>
        </div>
    </div>
</template>

<script>
    import PostsService from '@/services/PostsService'

    export default {
        name: 'PostsPage',
        data () {
            return {
                posts: []
            }
        },
        methods: {
            async getPosts () {
                const response = await PostsService.fetchPosts()
                this.posts = response.data.posts
            },
            async removePost (value) {
                console.log(value)
                await PostsService.deletePost(value)
                this.getPosts()
            }
        },
        mounted () {
            this.getPosts()
        }
    }
</script>