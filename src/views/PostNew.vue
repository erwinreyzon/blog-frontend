<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newPostParams: { body: "" },
      errors: [],
    };
  },
  methods: {
    createPost: function () {
      console.log("Making a new Post");

      axios
        .post("http://localhost:3000/posts.json", this.newPostParams)
        .then((response) => {
          console.log("Success", response.data);
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>

<template>
  <div class="post-new">
    <form v-on:submit.prevent="createPost()">
      <h2>Please Input a New Post</h2>
      <div>
        <div class="form-group">
          Title:
          <input type="text" v-model="newPostParams.title" />
        </div>
        <div class="form-group">
          Body:
          <input type="text" v-model="newPostParams.body" />
          <small>{{ 500 - newPostParams.body.length }}Characters Remaining</small>
        </div>
        <div class="form-group">
          Image URL:
          <input type="text" v-model="newPostParams.image" />
        </div>
      </div>
      <input type="submit" value="create" />
    </form>
  </div>
</template>
