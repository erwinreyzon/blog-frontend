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
};
</script>

<template>
  <h2>Post Show</h2>
  <p>{{ post }}</p>
  <a v-bind:href="`/posts/${post.id}/edit`">Edit</a>
  <div></div>
  <a href="/posts">Home</a>
</template>
