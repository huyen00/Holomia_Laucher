<template>
  <div class="top-0 fixed w-full z-10 header_app">
    <ul class="flex justify-end">
        <li class="mx-2 p-3 text-xl">
            <a href="" class="relative">
                <font-awesome-icon :icon="['far', 'bell']" />
                <p class="circle absolute"></p>
            </a>
            
        </li>
        <li class="mx-2 p-3 text-xl">
            <a href="">
                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            </a>
        </li>
        <li class="mx-2 p-2 text-xl">
            <a href="">
                <img src="../assets/image/avt.png" alt="">
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "header_app"
}
</script>

<style scoped>
.header_app{
    background: #eaecf0;
}
.circle{
    background: #bd0f0f;
  width: 5px;
  height: 5px;
  border-radius: 50%; 
    top: -10px;
    right: -5px;
}
</style>