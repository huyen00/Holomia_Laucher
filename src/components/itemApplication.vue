<template>
  <div>
    <div class="text-left  ">
        <a  @click="$router.go(-1)" class="btn-previous px-3 py-3 cursor-pointer text-sm bg-white hover:bg-gray-500 ">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
            Applications
        </a>
    </div>
    <div class="my-4 flex">
        <div class="mr-3">
            <img src="../assets/image/img_missionx.png" alt="">
        </div>
        <div class=" mx-3 text-left">
            <h2 class="text-4xl font-semibold">Mission X</h2>
            <p class="text-sm  my-2">Version: 4.03.2023</p>
            <p class="my-2 text-sm ">Size: 98.07 MB</p>
            <div class="flex my-2 mt-4">
                <button class="px-3 py-2 bg-gray-400 rounded-lg">
                    <font-awesome-icon :icon="['fab', 'app-store']" />
                    Meta Quest 1</button>
                    <button class="px-3 py-2 mx-2 bg-gray-400 rounded-lg">
                    <font-awesome-icon :icon="['fab', 'app-store']" />
                    Holomia Q1</button>
            </div>
        </div>
    </div>
    <div class=" my-3 flex justify-between">
        <h2 class="text-2xl font-semibold">Devices</h2>
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
                    <th scope="col" class="px-6 py-4 text-xs">ID
                        <font-awesome-icon :icon="['fas', 'arrow-down']" />
                    </th>
                    <th scope="col" class="px-6 py-4 text-xs">Device Name
                        <font-awesome-icon :icon="['fas', 'arrow-down']" />
                    </th>
                    <th scope="col" class="px-6 py-4 text-xs">Version
                        <font-awesome-icon :icon="['fas', 'arrow-down']" />
                    </th>
                    <th scope="col" class="px-6 py-4 text-xs">Tags
                        <font-awesome-icon :icon="['fas', 'arrow-down']" />
                    </th>
                    <th scope="col" class="px-6 py-4 text-xs">Status
                        <font-awesome-icon :icon="['fas', 'arrow-down']" />
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap px-6 py-4">1</td>
                        <td class="whitespace-nowrap px-6 py-4 text-base text-black font-semibold name_device_col">
                            <router-link to="/device/item-device">
                                G02 - VIVE Focus 3
                            <p class="text-xs">6a3fb82efc6c48c2</p>
                            </router-link>   
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">2.0.13</td>
                        <td class="whitespace-nowrap px-6 py-4 flex ">
                            Infinity
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-lg">
                            <font-awesome-icon :icon="['fas', 'circle']" size="xs" style="color: #9fa2a8;" class="circle" />
                        Install pending
                        <p class="text-xs text-gray-400">will install when device comes online</p>
                        </td>
                        <td class="whitespace-nowrap px-6 py-4"> 
                            <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2" ><font-awesome-icon :icon="['fasl', 'trash']"  style="color: #949494;" class="mr-2"/></button>
                            <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2" @click="updateDevice()"><font-awesome-icon :icon="['fasl', 'pen']"  style="color: #949494;" class="ml-2" /></button>
                        </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap px-6 py-4">1</td>
                        <td class="whitespace-nowrap px-6 py-4 text-base text-black font-semibold name_device_col">
                            <router-link to="/device/item-device">
                                G02 - VIVE Focus 3
                            <p class="text-xs">6a3fb82efc6c48c2</p>
                            </router-link>   
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">2.0.13</td>
                        <td class="whitespace-nowrap px-6 py-4 flex ">
                            Infinity
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-lg">
                            <font-awesome-icon :icon="['fas', 'circle']" size="xs" style="color: #23cd26;" class="circle" /> 
                        Installed
                        
                        </td>
                        <td class="whitespace-nowrap px-6 py-4"> 
                            <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2" ><font-awesome-icon :icon="['fasl', 'trash']"  style="color: #949494;" class="mr-2"/></button>
                            <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2" @click="updateDevice()"><font-awesome-icon :icon="['fasl', 'pen']"  style="color: #949494;" class="ml-2" /></button>
                        </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap px-6 py-4">1</td>
                        <td class="whitespace-nowrap px-6 py-4 text-base text-black font-semibold name_device_col">
                            <router-link to="/device/item-device">
                                G02 - VIVE Focus 3
                            <p class="text-xs">6a3fb82efc6c48c2</p>
                            </router-link>   
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">2.0.13</td>
                        <td class="whitespace-nowrap px-6 py-4 flex ">
                            Infinity
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-lg">
                            <font-awesome-icon :icon="['fas', 'circle']" size="xs" style="color: #23cd26;" class="circle" /> 
                        Installed
                        
                        </td>
                        <td class="whitespace-nowrap px-6 py-4"> 
                            <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2" ><font-awesome-icon :icon="['fasl', 'trash']"  style="color: #949494;" class="mr-2"/></button>
                            <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2" @click="updateDevice()"><font-awesome-icon :icon="['fasl', 'pen']"  style="color: #949494;" class="ml-2" /></button>
                        </td>
                    </tr>
                    <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-nowrap px-6 py-4">1</td>
                        <td class="whitespace-nowrap px-6 py-4 text-base text-black font-semibold name_device_col">
                            <router-link to="/device/item-device">
                                G02 - VIVE Focus 3
                            <p class="text-xs">6a3fb82efc6c48c2</p>
                            </router-link>   
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">2.0.13</td>
                        <td class="whitespace-nowrap px-6 py-4 flex ">
                            Infinity
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-lg">
                            <font-awesome-icon :icon="['fas', 'circle']" size="xs" style="color: #23cd26;" class="circle" /> 
                        Installed
                        
                        </td>
                        <td class="whitespace-nowrap px-6 py-4"> 
                            <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2" ><font-awesome-icon :icon="['fasl', 'trash']"  style="color: #949494;" class="mr-2"/></button>
                            <button class="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-2" @click="updateDevice()"><font-awesome-icon :icon="['fasl', 'pen']"  style="color: #949494;" class="ml-2" /></button>
                        </td>
                    </tr>
                    
                </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
name: ' itemApplication'
}
</script>

<style scoped>
.btn-previous{
    /* padding: 0.5rem 1rem; */
    border-radius: 8px;
}
.circle{
    width: 10px;
    height: 10px;
}
</style>