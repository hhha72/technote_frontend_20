<template>
    <aside :class="['bg-gray-200 w-64 p-4 transition-all', { '-ml-64': !isOpen }]">
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/" class="block py-2 hover:text-gray-600">홈</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/board" class="block py-2 hover:text-gray-600">게시판</NuxtLink>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<script setup>
defineProps({
    isOpen: Boolean
})
</script>
