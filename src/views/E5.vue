<script setup lang="ts">
import axios from '../api/request.ts'
import { useRequest } from 'vue-request'

const { data } = useRequest(() => axios.get('/api/students'))

</script>
<template>
    <h1 v-if="data?.data.data.length === 0">暂无数据</h1>
</template>