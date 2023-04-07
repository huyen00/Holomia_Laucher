<template>
  <div>
    <div id="popup-modal" v-if="showHide_FormModel"  tabindex="-1" class="fixed top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
      <div class="relative w-full h-full max-w-4xl md:h-auto mx-auto top-1/4">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <img src="../assets/image/Cancel.png" class="absolute top-3 right-2.5" @click="closeModel()" alt="">
              <div class=" p-4 flex">
                <div class="w-2/5 text-left ml-3 img_download">
                  <img src="../assets/image/img_missionx.png" alt="">
                  <div class="flex justify-between p-2 text_application">
                    <h2 class="text-base text-white">Mission X</h2>
                    <p class="text-base text-white">Free</p>
                  </div>
                </div>
                <div class="w-3/5 text-left ml-5">
                  <h2 class="text-4xl font-semibold">Mission X</h2>
                  <p class="text-xl mt-3">PackageName: com.holomia.missionxtest</p>
                  <p class="text-xl mt-3">Version: 2.2.220329a</p>
                </div>
                
              </div>
              <div class="p-4 text-center">
                  
                 
                  <button data-modal-hide="popup-modal" type="button" class=" ml-2 text-white btn-download hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-2xl inline-flex items-center px-5 py-2.5 text-center mr-2">
                      Download App
                  </button>
                  
              </div>
          </div>
      </div>
    </div>
    <div class=" flex justify-between">
      <div class="flex mb-3">
        <button class="flex mr-3 p-2 btn-device text-sm">
          <img src="../assets/image/filters_lines.png" class="mr-2" alt="">
          Filters
        </button>
        <button class="flex btn-add p-2 mr-3 text-sm">
          <img src="../assets/image/plus.png" class="mr-2 " alt="">
          Add Device
        </button>
        <p class="p-2 text-sm">1 row selected</p>
      </div>
      <div class="form_search w-1/4">
        <form>   
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="block w-full p-2 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required>
            </div>
        </form>
      </div>
    </div>
    <div class="form_tags p-2 flex">
        <p class="py-2 px-3 mx-2 rounded-lg">Tags</p>
        <p class="py-2 px-3 mx-2 rounded-lg bg-yellow-300">library</p>
        <p class="py-2 px-3 mx-2 rounded-lg bg-gray-300">Holomia</p>
    </div>
    <div class="my-3 flex flex-wrap">
      <div class="item_application m-3">
          <div class="relative ">
            <img src="../assets/image/img_missionx.png" alt="">
            <div class="top-1 left-1 absolute z-10">
              <img src="../assets/image/CancelGame.png" alt="">
            </div>
              <a class="bottom-1 right-2 absolute z-10" @click="downloadGame()">
                <img src="../assets/image/download.png" alt="">
              </a>
          </div>
          <div class="flex justify-between p-2 text_application">
             <router-link to="/item-application">
                <h2 class="text-base text-white">Mission X</h2>
             </router-link> 
              <p class="text-base text-white">Free</p>
          </div>
        </div>
        <div class="item_application m-3">
          <div class="relative ">
            <img src="../assets/image/img_missionx.png" alt="">
            <div class="top-1 left-1 absolute z-10">
              <img src="../assets/image/CancelGame.png" alt="">
            </div>
              <a class="bottom-1 right-2 absolute z-10" @click="downloadGame()">
                <img src="../assets/image/download.png" alt="">
              </a>
          </div>
          <div class="flex justify-between p-2 text_application">
             <router-link to="/item-application">
                <h2 class="text-base text-white">Mission X</h2>
             </router-link> 
              <p class="text-base text-white">Free</p>
          </div>
        </div>
        <div class="item_application m-3">
          <div class="relative ">
            <img src="../assets/image/img_missionx.png" alt="">
            <div class="top-1 left-1 absolute z-10">
              <img src="../assets/image/CancelGame.png" alt="">
            </div>
              <a class="bottom-1 right-2 absolute z-10" @click="downloadGame()">
                <img src="../assets/image/download.png" alt="">
              </a>
          </div>
          <div class="flex justify-between p-2 text_application">
             <router-link to="/item-application">
                <h2 class="text-base text-white">Mission X</h2>
             </router-link> 
              <p class="text-base text-white">Free</p>
          </div>
        </div>
        <div class="item_application m-3">
          <div class="relative ">
            <img src="../assets/image/img_missionx.png" alt="">
            <div class="top-1 left-1 absolute z-10">
              <img src="../assets/image/CancelGame.png" alt="">
            </div>
              <a class="bottom-1 right-2 absolute z-10" @click="downloadGame()">
                <img src="../assets/image/download.png" alt="">
              </a>
          </div>
          <div class="flex justify-between p-2 text_application">
             <router-link to="/item-application">
                <h2 class="text-base text-white">Mission X</h2>
             </router-link> 
              <p class="text-base text-white">Free</p>
          </div>
        </div>
        <div class="item_application m-3">
          <div class="relative ">
            <img src="../assets/image/img_missionx.png" alt="">
            <div class="top-1 left-1 absolute z-10">
              <img src="../assets/image/CancelGame.png" alt="">
            </div>
              <a class="bottom-1 right-2 absolute z-10" @click="downloadGame()">
                <img src="../assets/image/download.png" alt="">
              </a>
          </div>
          <div class="flex justify-between p-2 text_application">
             <router-link to="/item-application">
                <h2 class="text-base text-white">Mission X</h2>
             </router-link> 
              <p class="text-base text-white">Free</p>
          </div>
        </div>
        <div class="item_application m-3">
          <div class="relative ">
            <img src="../assets/image/img_missionx.png" alt="">
            <div class="top-1 left-1 absolute z-10">
              <img src="../assets/image/CancelGame.png" alt="">
            </div>
              <a class="bottom-1 right-2 absolute z-10" @click="downloadGame()">
                <img src="../assets/image/download.png" alt="">
              </a>
          </div>
          <div class="flex justify-between p-2 text_application">
             <router-link to="/item-application">
                <h2 class="text-base text-white">Mission X</h2>
             </router-link> 
              <p class="text-base text-white">Free</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'applications_device',
    computed: {
  ...mapState("stores", {

  }),
  showHide_FormModel(){
    return this.$store.state.stores.showHide_FormModel
    // return this.$store.state.stores.showhide_FormModel
  }
 },
 methods: {
  downloadGame(){
    this.$store.commit('stores/showFormModel')
  },
  closeModel(){
    this.$store.commit('stores/closeFormModel')
  }
 }
}
</script>

<style scoped>
.form_tags{
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.item_application{
  width: 225px;
    height: 200px;
}
.text_application{
  background: #344054;
  
}
.img_download{
  width: 220px;
}
.img_download img{
  object-fit: cover;
}
.btn-download{
  background: #344054;
  color:#fff;
}
</style>