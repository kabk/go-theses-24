<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup>
	const meta = {
		title: 'KABK GD Theses 24',
		desc: '',
		image: '',
	}

	useHead({
		title: meta.title,
		ogTitle: meta.title,
	})

	useSeoMeta({
		title: meta.title,
		ogTitle: meta.title,
	})
</script>

<style></style>
