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
    sortTitle: function () {
      let sortedTitles = this.posts;
      sortedTitles = sortedTitles.sort((x, y) => {
        let a = x.title.toLowerCase(),
          b = y.title.toLowerCase();
        return a == b ? 0 : a > b ? 1 : -1;
      });
      return sortedTitles;
    },
  },
};
</script>

<template>
  <div class="index">
    <h1>Posts</h1>
    <!-- Search filter by title -->
    <input v-model="nameFilter" type="text" list="titles" />
    <!-- Gives datalist options for search filter above -->
    <datalist id="titles">
      <option v-for="post in posts" v-bind:key="post.id">{{ post.title }}</option>
    </datalist>
    <button v-on:click="sortTitle()">Sort By Title</button>
    <div v-for="post in titleFilter()" v-bind:key="post.id">
      <p>{{ post.title }}</p>
      <!-- <p>{{ post.body }}</p>
      <img :src="post.image" :alt="post.title" /> -->
      <p>Created: {{ relativeTime(post.created_at) }}</p>
      <a v-bind:href="`/posts/${post.id}`">Show More Info</a>
    </div>
  </div>
</template>
