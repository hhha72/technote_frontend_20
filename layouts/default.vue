<template>
	<div class="flex flex-col min-h-screen">
		<AppHeader @toggle-sidebar="toggleSidebar" />
		<div class="flex flex-grow">
			<AppSidebar :is-open="isSidebarOpen" />
			<div class="flex-grow p-4">
				<NuxtPage />
			</div>
		</div>
		<AppFooter />
	</div>
</template>

<script setup>
import { ref } from 'vue'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
	isSidebarOpen.value = !isSidebarOpen.value
}
</script>
