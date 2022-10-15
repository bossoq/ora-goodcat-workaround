<script lang="ts">
  import { page } from '$app/stores'
  interface Item {
    name: string
    url: string
  }
  export let items: Item[] = []
</script>

<nav
  class="flex flex-row text-xs sm:text-base text-right fixed top-2 right-0 p-2 z-10 text-emerald-800 dark:text-emerald-200"
>
  {#each items as { name, url }}
    <a href={url} class="select-none mr-2" target="_self" rel="noreferrer">
      <button
        class="rounded-lg p-2 text-black bg-teal-200 hover:bg-teal-300 dark:text-gray-800 dark:bg-teal-400 hover:dark:bg-teal-500 font-semibold {$page
          .url.pathname === url
          ? 'underline border-4 border-red-500 dark:border-red-400'
          : 'border-4 border-transparent'}">{name}</button
      ></a
    >
  {/each}
</nav>
