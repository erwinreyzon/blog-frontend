<script>
import axios from "axios";

export default {
  data: function () {
    return {
      posts: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      this.posts = response.data;
      console.log("All Posts", this.posts);
    });
  },
};
</script>

<template>
  <div class="index">
    <h1>Posts</h1>
    <div v-for="post in posts" v-bind:key="post.id">
      <p>{{ post.title }}</p>
      <p>{{ post.body }}</p>
      <p>{{ post.image }}</p>
      <a v-bind:href="`/posts/${post.id}`">Show More Info</a>
    </div>
  </div>
</template>
