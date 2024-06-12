<script setup lang="ts">
import {useStorage, useMouse, useCounter} from "@vueuse/core"

// 使用 useStorage 获取存储的数据
const name = useStorage("name", "", sessionStorage)

// 使用 useMouse 获取鼠标的位置
const {x, y} = useMouse()

// 使用 useCounter 获取计数器的值
const {count, inc, dec} = useCounter()

</script>
<template>
    <input type="input" v-model="name" />
    <h3>{{ x }}</h3>
    <h3>{{ y }}</h3>
    <h3>{{ count }}</h3>
    <input type="button" @click="inc()" value="+1" />
    <input type="button" @click="dec()" value="-1" />
</template>