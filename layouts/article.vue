<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- eslint-disable unused-imports/no-unused-vars -->
<script setup lang="ts">
	// import { useActiveScroll } from 'vue-use-active-scroll';

	const emit = defineEmits(['move']);

	const isSSR = ref(true);

	onMounted(() => (isSSR.value = false));
	// Ambil rute saat ini
	const route = useRoute();
	const { page: article } = useContent();

	const { toc } = useContent();

	// ['introduction', 'introduction-sub-1', 'quick-start']
	const ids = computed(() =>
		toc.value.links.flatMap(
			({ id, children = [] }: { id: string; children: any[] }) => [
				id,
				...children.map(({ id }) => id), // Flatten any nested link
			]
		)
	);

	// const { setActive, activeId } = useActiveScroll(ids, {
	// 	edgeOffset: { first: 300, last: -300 },
	// });
	// function scrollToHeading(id: string) {
	// 	const element = document.getElementById(id);
	// 	if (element) {
	// 		window.setTimeout(() => {
	// 			window.scrollBy({
	// 				top: element.getBoundingClientRect().top - 80, // Sesuaikan dengan tinggi header kamu
	// 				behavior: 'smooth',
	// 			});
	// 		}, 100);
	// 		emit('move', id);
	// 		setActive(id); // Set active element
	// 	}
	// }

	const networks = [
		{ network: 'email', icon: 'i-ph-envelope-duotone' },
		{ network: 'facebook', icon: 'i-ph-facebook-logo-duotone' },
		{ network: 'linkedin', icon: 'i-ph-linkedin-logo-duotone' },
		{ network: 'messenger', icon: 'i-ph-messenger-logo-duotone' },
		{ network: 'pinterest', icon: 'i-ph-pinterest-logo-duotone' },
		{ network: 'telegram', icon: 'i-ph-telegram-logo-duotone' },
		{ network: 'twitter', icon: 'i-ph-twitter-logo-duotone' },
		{ network: 'whatsapp', icon: 'i-ph-whatsapp-logo-duotone' },
	];

	const isLoaded = ref(false);
	const hashtags = computed(() => {
		return article.value?.tags ? article.value.tags.join(', ') : '';
	});



defineOgImageComponent('OgImage', {
  title: article.value.title,
  description: article.value.description,
})
</script>

<template>
	<div>
		<UContainer class="py-14 scroll-smooth md:py-16">
			<div class="max-w-4xl mx-auto">
				<UBreadcrumb
					:ui="{
						active: 'text-primary-800 font-bold dark:text-yellow',
						inactive: ' text-gray-600 font-light dark:text-gray-200',
					}"
					class="my-4 px-2 shadow py-1 ring-1 ring-gray-200 dark:ring-gray-800 rounded-lg text-lg bg-white dark:bg-gray-900 inset-x-0 text-center z-30"
					divider=">"
					:links="[
						{ label: 'Home', to: '/' },
						{ label: 'article', to: '/article' },
					]"
				/>

				<UCard>
					<template #header>
						<div class="flex justify-between text-sm">
							<p v-if="article?.author">@{{ article.author }}</p>
							<USkeleton
								v-else
								class="h-4 w-24"
							/>
							<UBadge
								v-if="article?.date"
								size="lg"
								color="white"
							>
								<time>
									{{ formatDate(article.date) }}
								</time>
							</UBadge>
							<USkeleton
								v-else
								class="h-4 w-16"
							/>
						</div>
					</template>
					<div class="aspect-w-16 aspect-h-9 relative">
						<NuxtImg
							v-show="isLoaded"
							class="w-full object-cover rounded"
							:src="article.img"
							:alt="article.title"
							:title="article.title"
							format="webp"
							loading="lazy"
							height="500"
							width="500"
							sizes="100vw sm:100vw md:100vw lg:100px"
							:placeholder="[100, 60, 35, 5]"
							@load="isLoaded = true"
						/>
						<USkeleton
							v-show="!isLoaded"
							class="size-full object-cover rounded"
							:ui="{ rounded: 'rounded' }"
						/>
					</div>
					<div class="pt-8 pb-4 mx-0 max-w-3xl">
						<h1
							v-if="isLoaded"
							class="font-bold text-3xl tracking-tight md:text-g3 text-balance headline font-title leading-tight title text-left"
						>
							{{ article.title }}
						</h1>
						<USkeleton
							v-else
							class="h-8 w-full"
						/>
					</div>
					<p
						v-if="isLoaded"
						class=""
					>
						{{ article.description }}
					</p>
					<USkeleton
						v-else
						class="h-4 w-full"
					/>
					<template #footer>
						<div v-if="article?.tags">
							<div class="flex flex-wrap">
								<NuxtLink
									v-for="(tag, n) in article.tags"
									:key="n"
									:to="`/tags#${tag}`"
									class="uppercase"
									:aria-label="tag"
									:title="tag"
									rel="noopener noreferrer nofollow"
								>
									<UBadge
										v-if="isLoaded"
										class="mr-2"
										size="md"
										color="gray"
									>
										{{ tag }}
									</UBadge>
									<USkeleton
										v-else
										class="h-4 w-16 mr-2"
									/>
								</NuxtLink>
							</div>
						</div>
					</template>
				</UCard>
				<!-- konten -->
				<UCard
					class="my-4 ring-gray-200 dark:ring-gray-800 flex-1 flex flex-col shadow hover:ring-gray-200 dark:hover:ring-ring-gray-800"
				>
					<div
						v-if="isLoaded"
						class="prose md:prose-lg mx-auto prose-p:tracking-tight max-w-4xl prose-permadi prose-img:mx-auto prose-img:w-full prose-md sm:prose-base prose-h2:text-balance dark:prose-p:text-brand-400 dark:prose-invert prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-img:rounded"
					>
						<slot />
					</div>
					<USkeleton
						v-else
						class="w-full h-64"
					/>
				 
				</UCard>
				<!-- Tambahkan Log untuk Debugging -->

				<!-- sticki butom -->
				<div class="sticky bottom-3 inset-x-0 text-center">
					<div
						class="inline-block relative group isolate rounded-lg background-gradient ring-1 ring-gray-200 dark:ring-gray-800 p-1 sm:p-3 bg-white dark:bg-gray-900"
					>
						<!-- <div class="flex items-center gap-x-1.5">
							<UPopover
								:popper="{ arrow: true, placement: 'top-end' }"
								overlay
							>
								<UTooltip text="Daftar Isi">
									<UButton
										aria-label="Daftar Isi"
										square
										color="gray"
										trailing-icon="i-ph-list-dashes-duotone"
									/>
								</UTooltip>
								<template #panel="{ close }">
									<div class="p-3 w-80">
										<h3>Daftar Isi</h3>
										<div
											v-for="(link, idx) in toc.links"
											:key="link.id"
											class="flex flex-col"
											:class="{ 'ml-1': link.depth === 3 }"
											@click="
												() => {
													scrollToHeading(link.id);
													close();
												}
											"
										>
											<NuxtLink
												:to="{ hash: `#${link.id}` }"
												class="text-sm my-1 px-2 p-1 line-clamp-1 ring-1 rounded-md ring-gray-200 hover:ring-gray-400 dark:hover:ring-gray-600 dark:ring-gray-800 text-left"
												:class="{
													ActiveLink:
														(isSSR && idx === 0) || activeId === link.id,
													'text-primary-800 ring-gray-800 bg-yellow dark:bg-yellow-600 dark:text-primary-900':
														activeId === link.id,
													'hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300':
														activeId !== link.id,
												}"
											>
												{{ link.text }}
											</NuxtLink>
										</div>
									</div>
								</template>
							</UPopover>
							<div
								class="block h-3 border-e border-gray-300 mx-1 dark:border-gray-600"
							/>
							<div class="hs-tooltip inline-block">
								<UPopover
									:popper="{ arrow: true }"
									overlay
								>
									<UTooltip text="Bagikan article">
										<UButton
											aria-label="Bagikan article"
											color="gray"
											trailing-icon="i-ph-share-fat-duotone"
										/>
									</UTooltip>
									<template #panel="{ close }">
										<div class="flex p-1 items-center gap-x-1.5">
											<ClientOnly>
												<ShareNetwork
													v-for="network in networks"
													:key="network.network"
													:network="network.network"
													:url="`https://permadi.dev${article._path}/`"
													:title="article.title"
													:description="article.description"
													:quote="article.quote"
													:hashtags="hashtags"
													twitter-user="dinarpermadi07"
												>
													<UButton
														:icon="network.icon"
														:aria-label="network.network"
														@click="close"
													/>
												</ShareNetwork>
											</ClientOnly>
										</div>
									</template>
								</UPopover>
							</div>
							<div
								class="block h-3 border-e border-gray-300 mx-1 dark:border-gray-600"
							/>
							 
							<div><Reactions /></div>
						</div> -->
					</div>
				</div>
				<PagePrevNext />
			</div>
		</UContainer>
	</div>
</template>

<style scoped>
	.h1 h2 h3 h4 {
		scroll-margin-top: 100px;
	}
</style>
