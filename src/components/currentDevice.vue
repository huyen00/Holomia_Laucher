<template>
  <div>
    <div class="my-4 flex">
        <div class="mr-3">
            <img src="../assets/image/quest2.png" alt="">
        </div>
        <div class=" mx-3 text-left">
            <h2 class="text-4xl font-semibold">G02 - Oculus Quest 2</h2>
            <p class="text-sm text-gray-400 my-2">Serial Number</p>
            <p class="my-2">6a3fb8 2efc6c48c2</p>
            <div class="flex my-2">
                <font-awesome-icon :icon="['fas', 'circle']"  style="color: #23cd26;" class="mx-1" /> on
                <font-awesome-icon :icon="['fas', 'wifi']"  class="mx-3" />
                <font-awesome-icon :icon="['fas', 'battery-full']"  class="mx-3" />
            </div>
            <p class="text-sm text-gray-400 my-2">Available Memory</p>
            <p class="font-semibold">3.7/6GB</p>
        </div>
    </div>
    <div>
        <ul
  class="mb-5 flex list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row"
  role="tablist"
  data-te-nav-ref>
  <li role="presentation">
    <a
      href="#tabs-home"
      class="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-home"
      data-te-nav-active
      role="tab"
      aria-controls="tabs-home"
      aria-selected="true"
      :class="tab =='application' ? 'text-orange-500' : ''"
            @click="showTab('application')">Application</a
    >
  </li>
  <li role="presentation">
    <a
      href="#tabs-profile"
      class="focus:border-transparen my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-profile"
      role="tab"
      aria-controls="tabs-profile"
      aria-selected="false"
      :class="tab =='manager_file' ? 'text-orange-500' : ''"
            @click="showTab('manager_file')"
      >Manager File</a
    >
  </li>
  <li role="presentation">
    <a
      href="#tabs-messages"
      class="my-2 block border-x-0 border-t-0 border-b-2 border-transparent px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-messages"
      role="tab"
      aria-controls="tabs-messages"
      aria-selected="false"
      :class="tab =='setting' ? 'text-orange-500' : ''"
            @click="showTab('setting')"
      >Setting</a
    >
  </li>
</ul>
<div class="mb-6">
  <div
    class=" opacity-0 opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-home"
    role="tabpanel"
    aria-labelledby="tabs-home-tab"
    data-te-tab-active>
    Tab 1 content
  </div>
  <div
    class=" opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-profile"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab">
    Tab 2 content
  </div>
  <div
    class="opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-messages"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab">
    Tab 3 content
  </div>
  
</div>
    </div>

  </div>
</template>

<script>
export default {
name: 'current_device',
computed:{
    tab(){
      return this.$store.state.stores.tab
    },
    eventByCategory(){
            return this.$store.getters['stores/eventByCategory']
    }
},
methods: {
    showTab(name){
      this.$store.commit('stores/showTab', name)

    },

  },
}
</script>

<style>

</style>