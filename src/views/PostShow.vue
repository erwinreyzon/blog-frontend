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
    destroyPost: function (post) {
      axios.delete("http://localhost:3000/posts/" + post.id).then((response) => {
        console.log("Post Deleted", response);
        this.$router.push("/posts");
      });
    },
  },
};
</script>

<template>
  <h2>Post Show</h2>
  <p>{{ post }}</p>
  <a v-bind:href="`/posts/${post.id}/edit`">Edit</a>
  <br />
  <button v-on:click="destroyPost(post)">Destroy Post</button>
  <br />
  <a href="/posts">Home</a>
</template>
