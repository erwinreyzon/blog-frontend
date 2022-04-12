<script>
import axios from "axios";

export default {
  data: function () {
    return {
      post: {},
    };
  },
  created: function () {
    axios.get("http://localhost:3000/posts/" + this.$route.params.id + ".json").then((response) => {
      this.post = response.data;
      console.log(response.data);
    });
  },
  methods: {
    updatePost: function (post) {
      console.log("Making a new Post");

      axios
        .patch("http://localhost:3000/posts/" + post.id + "json", this.post)
        .then((response) => {
          console.log("Success", response.data);
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>

<template>
  <h2>Post Edit</h2>
  <form v-on:submit.prevent="updatePost(post)">
    <h2>Please Update Post</h2>
    <div>
      <div class="form-group">
        Title:
        <input type="text" v-model="post.title" />
      </div>
      <div class="form-group">
        Body:
        <input type="text" v-model="post.body" />
      </div>
      <div class="form-group">
        Image URL:
        <input type="text" v-model="post.image" />
      </div>
    </div>
    <input type="submit" value="update" />
  </form>

  <a href="/posts">Post Index</a>
</template>
