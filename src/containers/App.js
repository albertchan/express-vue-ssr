import Vue from 'vue';

const template = `
<div id="app">
  <div class="header">
    <div class="inner">
      <router-link to="/" exact>
        <img class="logo" src="/assets/logo.png" alt="logo">
      </router-link>
      <router-link to="/top">Top</router-link>
      <router-link to="/new">New</router-link>
      <router-link to="/show">Show</router-link>
      <router-link to="/ask">Ask</router-link>
      <router-link to="/job">Jobs</router-link>
      <a class="github" href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank">
        Built with Vue.js
      </a>
    </div>
  </div>
  <transition name="fade" mode="out-in">
    <router-view class="view"></router-view>
  </transition>
</div>
`;

const App = {
  template: template
}

export default App;
