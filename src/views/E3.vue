<script setup lang="ts">
import { ref, watch } from 'vue';

// 使用 Storage 函数
const name = useStorage("name")

// 定义一个函数，用于获取 Storage 中的数据
function useStorage(n: string) {
    // 创建一个 ref，用于存储数据
    const name = ref(sessionStorage.getItem("name") ?? "")

    // 定义一个 watch 函数，用于监听数据的变化
    watch(name, (newVal, oldVal) => {
        console.log(`数据发生变化，从${oldVal}->${newVal}`)
        // 将新数据设置到 Storage 中
        sessionStorage.setItem(n, newVal)
    })
    // 有两种storage
    // 1. sessionStorage 单次会话的存储，浏览器关闭后就清除了
    // 2. localStorage 持久化的存储，除非手动删除，否则数据会一直保存

    // 返回数据
    return name;
}
</script>
<template>
    <input type="input" v-model="name" />
</template>