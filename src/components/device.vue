<template>
  <div class="device">
    <div id="popup-modal" v-if="showHide_FormModel" tabindex="-1" class="fixed top-0 left-0 right-0 z-50  p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
      <div class="relative w-full h-full max-w-2xl md:h-auto mx-auto top-1/4">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <!-- <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Close modal</span>
              </button> -->
              <div class=" p-4 flex">
                <div class="w-2/5 text-left">
                  <h2 class="text-lg font-semibold">G02 - VIVE Focus 3</h2>
                  <p class="text-sm mt-2">SERIAL NUMBER</p>
                  <span class="text-xs font-semibold">966623b007c8039c</span>
                </div>
                <div class="w-3/5 text-left ml-3">
                  <p class="text-gray-500">Update Device Name</p>
                  <input type="search" class="block w-full p-2 mt-2 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                </div>
              </div>
              <div class="p-4 text-right">
                  
                  <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="closeModel()">Cancel</button>
                  <button data-modal-hide="popup-modal" type="button" class=" ml-2 text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                      Save
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
    <div class="flex flex-col rounded-lg border bg-white dark:border-neutral-600 dark:bg-neutral-800">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" class="px-6 py-4 text-xs"> <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></th>
              <th scope="col" class="px-6 py-4 text-xs">ID
                <font-awesome-icon :icon="['fas', 'arrow-down']" />
              </th>
              <th scope="col" class="px-6 py-4 text-xs">Name
                <font-awesome-icon :icon="['fas', 'arrow-down']" />
              </th>
              <th scope="col" class="px-6 py-4 text-xs">Device Type
                <font-awesome-icon :icon="['fas', 'arrow-down']" />
              </th>
              <th scope="col" class="px-6 py-4 text-xs">Default App
                <font-awesome-icon :icon="['fas', 'arrow-down']" />
              </th>
              <th scope="col" class="px-6 py-4 text-xs">User Owner
                <font-awesome-icon :icon="['fas', 'arrow-down']" />
              </th>
              <th scope="col" class="px-6 py-4 text-xs">Status
                <font-awesome-icon :icon="['fas', 'arrow-down']" />
              </th>
              <th scope="col" class="px-6 py-4 text-xs">Time Login
                <font-awesome-icon :icon="['fas', 'arrow-down']" />
              </th>
            </tr>
          </thead>
          <tbody >
       
            <tr class="border-b dark:border-neutral-500" v-for="(item, index) in devices" :key="index">
              <td class="whitespace-nowrap px-6 py-4 font-medium">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              </td>
              <td class="whitespace-nowrap px-6 py-4">1</td>
              <td class="whitespace-nowrap px-6 py-4 text-sm text-black font-semibold name_device_col">
                <router-link to="/device/item-device">
                  {{ item.name }}
                  <p class="text-xs">{{ item.device_id }}</p>
                </router-link>
                
              </td>
              <td class="whitespace-nowrap px-6 py-4">{{ item.brand }}</td>
              <td class="whitespace-nowrap px-6 py-4 flex " >
              <div v-if="item.default_app">
                <img :src=" item.default_app.icon" class="ml-2" alt="">
                {{item.default_app.appName}}
               
              </div>
             
                
              </td>
              <td class="whitespace-nowrap px-6 py-4">Tungamirai</td>
              <td class="whitespace-nowrap px-6 py-4 flex">
                <div><font-awesome-icon :icon="['fas', 'circle']"  style="color: #23cd26;" class="icon_on" /> on</div>
                <div class="flex mx-2"> <font-awesome-icon :icon="['fas', 'wifi']"  class="ml-2" /></div>
                <div class="mx-2"><font-awesome-icon :icon="['fas', 'battery-full']"  class="ml-2" /><span class="text-xs ml-1">{{ item.battery *100}} %</span></div>
              </td>
              <td class="whitespace-nowrap px-6 py-4">{{
             item.last_login?  formatDate( item.last_login.created_at) : null }}</td>
              <td class="whitespace-nowrap px-6 py-4"> 
                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2" ><font-awesome-icon :icon="['fasl', 'trash']"  style="color: #949494;" class="mr-2"/></button>
                <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2" @click="updateDevice()"><font-awesome-icon :icon="['fasl', 'pen']"  style="color: #949494;" class="ml-2" /></button>
              </td>
        
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <nav v-if="pagination && devices.length > 0" class="m-4">
      <ul class="pagination justify-center">
      <!-- {{ currentPage }} -->
        <li class="page-item" :class="{'disabled' : currentPage === 1}">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
        </li>
        <li v-for="page in pagesNumber" :key="page" class="page-item"
            :class="{'active': page == pagination.meta.current_page}">
          <a href="javascript:void(0)" @click.prevent="changePage(page)" class="page-link">{{ page }}</a>
        </li>
        <li class="page-item" :class="{'disabled': currentPage === pagination.meta.last_page }">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Next</a>
        </li>
        <span style="margin-top: 8px;"> &nbsp; <i>Displaying {{ pagination.data.length }} of {{ pagination.meta.total }} entries.</i></span>
      </ul>
    </nav>
  </div>
</div>
  
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
 name: 'device_quest',
 computed: {
  ...mapState("stores", {

  }),
  showHide_FormModel(){
    return this.$store.state.stores.showHide_FormModel
  },
  devices(){
     return this.$store.state.stores.device;
  },
  // phan trang
  pagination(){
     return this.$store.state.stores.pagination;
  },
  currentPage(){
    return this.$store.state.stores.currentPage;
  },
  offset(){
    return this.$store.state.stores.offset;
  },
  pagesNumber() {
      if (!this.pagination.meta.to) {
        return []
      }
      let from = this.pagination.meta.current_page - this.offset
      if (from < 1) {
        from = 1
      }
      let to = from + (this.offset * 2)
      if (to >= this.pagination.meta.last_page) {
        to = this.pagination.meta.last_page
      }
      let pagesArray = []
      for (let page = from; page <= to; page++) {
        pagesArray.push(page)
      }
      return pagesArray
    },
  
 },
 mounted(){
  this.fetchDevice()
 },
 methods: {
  fetchDevice(){
    this.$store.dispatch("stores/getDevice").then(response=>{
    this.$store.commit('stores/set_device', response.data)
    

  })
  },
  
  updateDevice(){
    this.$store.commit('stores/showFormModel')
  },
  closeModel(){
    this.$store.commit('stores/closeFormModel')
  },
  // phan trang
  changePage(pageNumber){
    this.$store.commit('stores/changePage',pageNumber)
    this.fetchDevice()
  }
 }
}
</script>

<style>
.btn-add{
  background: #012E3F;
  color:#FFFF;
  border-radius:10px;
  font-size: 14px;
}
.icon{
  color:#ffffff;
}
.btn-device{
  border:1px solid #D0D5DD;
  border-radius:10px;
  font-size: 14px;
}
.head_table{
  font-size:12px;
  color: #8A92A6;
}
.name_device_col p{
  color: #837e7eba;
}
#popup-modal{
  background: #00000085;
}
.icon_on{
  width: 8px;
  height: 8px;
}
</style>