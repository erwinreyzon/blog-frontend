<script>
export default {
  data: function () {
    return {
      isLoggedIn: !!localStorage.jwt,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">BLoGR</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/posts">Post</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/new">New Post</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup">Signup</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <nav>
    <span>
      <router-link to="/">Home</router-link>
    </span>
    |
    <span>
      <router-link to="/about">About</router-link>
    </span>
    |
    <span>
      <router-link to="/test">Test</router-link>
    </span>
    |
    <span v-if="!isLoggedIn">
      <router-link to="/signup">SignUp</router-link>
    </span>
    |
    <span v-if="!isLoggedIn">
      <router-link to="/login">Login</router-link>
    </span>
    |
    <span>
      <router-link to="/posts">Posts</router-link>
    </span>
    |
    <span>
      <router-link to="/posts/new">New Posts</router-link>
    </span>
    |
    <span v-if="isLoggedIn">
      <router-link to="/logout">Logout</router-link>
    </span>
  </nav>
  <div class="container">
    <router-view />
  </div>
</template>

<style>
body {
  background-image: url("/src/assets/organic-tiles.webp");
}

#app {
  font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;
}
</style>
