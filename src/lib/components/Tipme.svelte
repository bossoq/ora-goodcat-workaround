<script lang="ts">
  export let name: string
  export let label = '☕️ Buy me a coffee'
  const baseUrl = 'https://tipme.in.th/'
</script>

<div class="select-none absolute bottom-0 left-0 m-4 text-sm sm:text-base">
  <a href={baseUrl + name} target="_blank">
    <button class="rounded-2xl p-2 bg-red-600 text-black dark:text-white">{label}</button>
  </a>
</div>
