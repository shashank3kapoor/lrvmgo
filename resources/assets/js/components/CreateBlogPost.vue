<template>
  <div>
    <h1>Create a Blog</h1>
    <form v-on:submit.prevent="addBlogPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Title:</label>
            <input type="text" class="form-control" v-model="blogPost.title">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Body:</label>
              <textarea class="form-control col-md-6" v-model="blogPost.body" />
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Add Blog</button>
        </div>
    </form>
  </div>
</template>
<script>
  export default {
    data(){
        return{
          blogPost:{}
        }
    },
    methods: {
      addBlogPost(){
        let uri = 'http://localhost:8000/blogPosts';
        this.axios.post(uri, this.blogPost).then((response) => {
          this.$router.push({name: 'DisplayItem'})
        })
    }
  }
}
</script>