<template>
    <div>
        <h1>BlogPosts</h1>

        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'CreateBlogPost' }" class="btn btn-primary">Create BlogPost</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>BlogPost Title</td>
                <td>BlogPost Body</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="blogPost in blogPosts">
                    <td>{{ blogPost.id }}</td>
                    <td>{{ blogPost.title }}</td>
                    <td>{{ blogPost.body }}</td>
                    <td><router-link :to="{name: 'EditBlogPost', params: { id: blogPost.id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteBlogPost(blogPost.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                blogPosts: []
            }
        },

        created: function()
        {
            this.fetchBlogPosts();
        },

        methods: {
            fetchBlogPosts()
            {
              let uri = 'http://localhost:8000/blogPosts';
              this.axios.get(uri).then((response) => {
                  this.blogPosts = response.data;
              });
            },
            deleteBlogPost(id)
            {
              let uri = `http://localhost:8000/blogPosts/${id}`;
              this.blogPosts.splice(id, 1);
              this.axios.delete(uri);
            }
        }
    }
</script>