<script setup lang="ts">
import axios from '../api/request'
import { ref, onMounted } from 'vue';
import { Student, SpringList } from '../model/Model8080'

// 学生数组
const students = ref<Student[]>([]);

// 获取学生信息
async function getStudents() {
    const resp = await axios.get<SpringList<Student>>('/api/students');
    console.log(resp.data.data);
    students.value = resp.data.data;
}

// 页面挂载后获取学生信息
onMounted(() => {
    getStudents();
})

</script>
<template>
    <div class="outer">
        <div class="title">学生列表</div>
        <div class="thead">
            <div class="row bold">
                <div class="col">编号</div>
                <div class="col">姓名</div>
                <div class="col">性别</div>
                <div class="col">年龄</div>
            </div>
        </div>
        <div class="tbody">
            <div v-if="students.length === 0">暂无学生信息</div>
            <!-- 遍历学生数组，此处使用template目的是为了在页面上不显示这一个else的标签，若想显示则使用div标签即可 -->
            <template v-else>
                <div class="row" v-for="s of students">
                    <div class="col">{{ s.id }}</div>
                    <div class="col">{{ s.name }}</div>
                    <div class="col">{{ s.sex }}</div>
                    <div class="col">{{ s.age }}</div>
                </div>
            </template>
        </div>
    </div>
</template>

<!-- <style scoped>
        /* html,body {
            font-family: 华文行楷;
            font-size: 20px;
        } */
        
        .title {
            margin-bottom: 10px;
            font-size: 30px;
            color: #333;
            text-align: center;
        }

        .row bold {
            background-color: #fff;
            display: flex;
            justify-content: center;
        }

        .col {
            border: 1px solid #f0f0f0;
            width: 15%;
            height: 35px;
            text-align: center;
            line-height: 35px;
        }

        .thead {
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
        }
    </style> -->