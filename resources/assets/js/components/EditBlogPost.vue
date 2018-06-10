<template>
    <div>
        <h1>Update BlogPost</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplayBlogPost' }" class="btn btn-success">Return to BlogPosts</router-link></div>
        </div>

        <form v-on:submit.prevent="updateBlogPost">
            <div class="form-group">
                <label>BlogPost Title</label>
                <input type="text" class="form-control" v-model="blogPost.name">
            </div>

            <div class="form-group">
                <label name="product_price">BlogPost Body</label>
                <input type="text" class="form-control" v-model="blogPost.price">
            </div>

            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                blogPost:{}
            }
        },

        created: function(){
            this.getBlogPost();
        },

        methods: {
            getBlogPost()
            {
              let uri = `http://localhost:8000/blogPosts/${this.$route.params.id}/edit`;
                this.axios.get(uri).then((response) => {
                    this.blogPost = response.data;
                });
            },

            updateBlogPost()
            {
              let uri = 'http://localhost:8000/blogPosts/'+this.$route.params.id;
                this.axios.patch(uri, this.blogPost).then((response) => {
                  this.$router.push({name: 'DisplayBlogPost'});
                });
            }
        }
    }
</script>