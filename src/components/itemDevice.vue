<template>
  <div>
    <div class="text-left">
        <a  @click="$router.go(-1)" class="btn-previous cursor-pointer text-sm bg-white hover:bg-gray-500 ">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
            Devices
        </a>
    </div>
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
            <p>3.7/6GB</p>
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
                    <th scope="col" class="px-6 py-4 text-xs">Applications
                        <font-awesome-icon :icon="['fas', 'arrow-down']" />
                    </th>
                    <th scope="col" class="px-6 py-4 text-xs">Version
                        <font-awesome-icon :icon="['fas', 'arrow-down']" />
                    </th>
                    <th scope="col" class="px-6 py-4 text-xs">Icon
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
                            Mission X
                            <p class="text-xs">com.holomia.missionx_vr</p>
                            </router-link>   
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">2.0.13</td>
                        <td class="whitespace-nowrap px-6 py-4 flex ">
                            <img src="../assets/image/missionx.png" class="" alt="">
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-lg">
                            <font-awesome-icon :icon="['fas', 'circle']" size="xs" style="color: #23cd26;" /> 
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
                            Mission X
                            <p class="text-xs">com.holomia.missionx_vr</p>
                            </router-link>   
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">2.0.13</td>
                        <td class="whitespace-nowrap px-6 py-4 flex ">
                            <img src="../assets/image/missionx.png" class="" alt="">
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-lg">
                            <font-awesome-icon :icon="['fas', 'circle']" size="xs" style="color: #23cd26;" /> 
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
                            Mission X
                            <p class="text-xs">com.holomia.missionx_vr</p>
                            </router-link>   
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">2.0.13</td>
                        <td class="whitespace-nowrap px-6 py-4 flex ">
                            <img src="../assets/image/missionx.png" class="" alt="">
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-lg">
                            <font-awesome-icon :icon="['fas', 'circle']" size="xs" style="color: #23cd26;" /> 
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
                            Mission X
                            <p class="text-xs">com.holomia.missionx_vr</p>
                            </router-link>   
                        </td>
                        <td class="whitespace-nowrap px-6 py-4">2.0.13</td>
                        <td class="whitespace-nowrap px-6 py-4 flex ">
                            <img src="../assets/image/missionx.png" class="" alt="">
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-lg">
                            <font-awesome-icon :icon="['fas', 'circle']" size="xs" style="color: #23cd26;" /> 
                        Install pending
                        <p class="text-xs text-gray-400">will install when device comes online</p>
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
name: "item_Device"
}
</script>

<style scoped>
.btn-previous{
    padding: 0.5rem 1rem;
    border-radius: 8px;
}
</style>