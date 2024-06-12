<script setup lang="ts">
import axios from '../api/request'
import { ref } from 'vue';

let student = ref({
    id: 1,
    name: 'John Doe',
    sex: 'male',
    age: 30
});

async function getData() {
    const response = await axios.get('/api/students');
    console.log(response.data);
}

async function postData() {
    // 发送POST请求到/api/student
    const response = await axios.post('/api/student', student.value);
    console.log(response.data);
}
</script>
<template>
    <input type="number" v-model="student.id" />
    <br>
    <input type="text" v-model="student.name" />
    <br>
    <!-- 创建一个可以加1减1的数字输入框 年龄 -->
    <input type="number" v-model.number="student.age" />
    <br>
    <!-- 创建两个勾选框 男和女 -->
    <input type="radio" id="male" value="male" v-model="student.sex">
    <label for="male">男</label>
    <input type="radio" id="female" value="female" v-model="student.sex">
    <label for="female">女</label>
    <br>
    <button @click="getData">获取</button>
    <br>
    <button @click="postData">提交</button>
</template>