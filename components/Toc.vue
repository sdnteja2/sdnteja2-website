<script setup lang="ts">
import { useActiveScroll } from 'vue-use-active-scroll'

const emit = defineEmits(['move'])
const { toc } = useContent()
const targets = computed(() =>
  toc.value.links.flatMap(({ id, children = [] }: { id: string, children: { id: string }[] }) => [
    id,
    ...children.map(({ id }) => id),
  ]),
)

const { setActive, activeId } = useActiveScroll(targets)
function scrollToHeading(id: string) {
  const element = document.getElementById(id)
  if (element) {
    window.setTimeout(() => {
      window.scrollBy({
        top: element.getBoundingClientRect().top - 80, // Sesuaikan dengan tinggi header kamu
        behavior: 'smooth',
      })
    }, 100)
    emit('move', id)
    setActive(id) // Set active element
  }
}

const isSSR = ref(true)

onMounted(() => (isSSR.value = false))
</script>

<template>
  <aside>
    <nav>
      <ul>
        <li v-for="(link, idx) in toc.links" :key="link.id">
          <NuxtLink
            :to="{ hash: `#${link.id}` }"
            :class="{
              ActiveLink: (isSSR && idx === 0) || activeId === link.id,
              ParentActive: link.children?.some(({ id }) => id === activeId), // If any nested child is active
            }"
            @click="() => { scrollToHeading(link.id) }"
          >
            {{ link.text }}
          </NuxtLink>
          <!-- Nested List - Start -->
          <ul v-if="link.children">
            <li v-for="child in link.children" :key="child.id">
              <NuxtLink
                :to="{ hash: `#${child.id}` }"
                :class="{ ActiveLink: activeId === child.id }"

                @click="() => { scrollToHeading(child.id) }"
              >
                {{ child.text }}
              </NuxtLink>
            </li>
          </ul>
          <!-- Nested List - End -->
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
aside {
  position: sticky;
  top: 0;
  align-self: start;
}

ul {
  list-style: none;
  display: grid;
  gap: 5px;
}

a {
  text-decoration: none;
  color: #111;
  white-space: nowrap;
}

.ActiveLink,
.Child {
  background: red;
}

.ParentActive {
  background: #ff00004a;
}
</style>
