<script setup lang="ts">
import { ref } from 'vue';

class User {
  id: number;
  name: string;
  sex: string;
  age: number;
  
  constructor(id: number, name: string, sex: string, age: number) {
    this.id = id;
    this.name = name;
    this.sex = sex;
    this.age = age;
  }
}

let user = ref(new User(1, '张三', '男', 20));

async function changeMsg() {
  try {
    const response = await fetch('http://localhost:8080/api/students');
    const data = await response.json();
    console.log(data); 
    user.value = data.data[1];
  } catch (error) {
    console.error('请求失败:', error);
  }
}

try {
  const resp = await get('http://localhost:8080/api/students')
  console.log(resp);
} catch (error) {
  console.error('请求失败:', error);
}

function get(url:string) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(new Error(xhr.statusText));
      }
    };
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
  });
}


</script>

<script lang="ts">
export default {
  data() {
    return {
      user: new User(1, '张三', '男', 20)
    }
}


</script>

<template>
  <h1>{{user}}</h1>
  <input type="button" value="修改user" @click="changeMsg">
  
</template>