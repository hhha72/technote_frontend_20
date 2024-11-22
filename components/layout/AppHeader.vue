<template>
    <header class="bg-gray-800 text-white p-4">
        <div class="my-auto flex flex-0 justify-between items-center">
            <button @click="$emit('toggle-sidebar')" class="text-2xl">☰</button>
            <h1 class="flex flex-grow pl-2 text-xl font-bold">게시판 관리</h1>
            <nav class="flex flex-0">
                <!-- <NuxtLink to="/" class="mx-2 hover:text-gray-300">홈</NuxtLink>
                <NuxtLink to="/board" class="mx-2 hover:text-gray-300">게시판</NuxtLink> -->
                <NuxtLink v-if="!isAuthenticated" to="/auth" class="mx-2 hover:text-gray-300">로그인</NuxtLink>
                <a v-else @click="logout" href="#" class="mx-2 hover:text-gray-300">로그아웃</a>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { useAuthApi } from '~/stores/api/auth';

const authStore = useAuthStore()
const authApi = useAuthApi()
const isAuthenticated = computed(() => authStore.isAuthenticated)

const logout = () => {
    authApi.logout()
    navigateTo('/')
}
</script>