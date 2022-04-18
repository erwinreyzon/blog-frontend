<script>
import axios from "axios";
import moment from "moment";

export default {
  data: function () {
    return {
      posts: [],
      nameFilter: "",
    };
  },
  created: function () {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      this.posts = response.data;
      console.log("All Posts", this.posts);
    });
  },
  methods: {
    relativeTime: function (date) {
      return moment(date).fromNow();
    },
    titleFilter: function () {
      return this.posts.filter((post) => {
        var lowerNameFilter = this.nameFilter.toLowerCase();
        var lowerTitle = post.title.toLowerCase();
        return lowerTitle.includes(lowerNameFilter);
      });
    },
  },
};
</script>

<template>
  <div class="index">
    <h1>Posts</h1>
    <input v-model="nameFilter" type="text" />
    <div v-for="post in titleFilter()" v-bind:key="post.id">
      <p>{{ post.title }}</p>
      <!-- <p>{{ post.body }}</p>
      <img :src="post.image" :alt="post.title" /> -->
      <p>Created: {{ relativeTime(post.created_at) }}</p>
      <a v-bind:href="`/posts/${post.id}`">Show More Info</a>
    </div>
  </div>
</template>
