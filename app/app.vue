<template>
	<div class="relative h-screen w-screen">
		<!-- BgMount sebagai background -->
		<div class="fixed inset-0 z-0">
			<BgMount />
		</div>

		<!-- Konten utama -->
		<div
			class="relative flex z-10 flex-col justify-end pb-4 md:justify-center items-center h-full w-full px-2"
		>
			<div
				class="bg-[#FEBE14]/80 mx-auto border-2 px-2 max-w-4xl w-full py-6 border-black flex text-black flex-col justify-center rounded-lg"
			>
				<div class="flex w-full justify-center">
					<div id="logo">
						<Logo />
					</div>
				</div>

				<div
					class="items-center justify-center flex text-2xl text-center text-balance md:text-4xl py-8 flex-col"
				>
					<h2
						id="text"
						class="bg-primary font-black rounded-lg text-black inline-block"
					>
						WEBSITE SEDANG DALAM PERBAIKAN
					</h2>
				</div>
				<UCard
					:ui="{ body: 'p-2 sm:p-6' }"
					class="flex space-x-2 justify-center items-center bg-[#14102B] border-black"
				>
      
					<UButton
						target="_blank"

						size="xl"
						to="https://github.com/sdnteja2"
						variant="ghost"
						icon="i-ph-github-logo-duotone"
					/>
					<UButton
						target="_blank"

						size="xl"
						to="https://www.instagram.com/sdnteja2/"
						variant="ghost"
						icon="i-ph-instagram-logo-duotone"
					/>
				</UCard>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { $anime } = useNuxtApp();
	onMounted(() => {
		useAnime({ 
      targets: '#logo', 
      scale: [1, 0.9],
      duration: 500 ,
      direction: 'alternate',
      easing: 'bounce',
      loop: true,
    });
	});
	onMounted(() => {
		$anime({
			targets: '#text',
			scale: [1, 0.9],
			duration: 500,
			direction: 'alternate',
			loop: true,
			easing: 'linear',
		});
	});
</script>
