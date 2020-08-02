<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a href="http://localhost:3000">server</a>
    </div>
    <router-view/>
  </div>
</template>
