<template>
  <div class="app-main-layout">
    
    <NaviBar />

    <SidBar  />
    
    <main class="app-content full" >
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import NaviBar from "@/components/app/NaviBar";
import SidBar from "@/components/app/SidBar";

export default {
  name: "main-layout",
  data: () => ({
    isOpen: true
  }),
  components: {
    NaviBar,
    SidBar,
  },
};
</script>
