<script lang="ts">
  interface WorkaoundList {
    Title: string
    Symptom: string
    Workaround: string
    tags: string[]
  }
  import workaroundRaw from '../workaround.json'
  let search: string | undefined
  let workarounds: WorkaoundList[] = workaroundRaw.results
  $: visibleWorkarounds = search
    ? workarounds.filter((w) => {
        return (
          w.Title.toLowerCase().match(`${search!.toLowerCase()}.*`) ||
          w.tags
            .map((t) => t.toLowerCase())
            .join('')
            .match(`${search!.toLowerCase()}.*`)
        )
      })
    : workarounds
</script>

<div class="w-9/12 h-3/4 text-base sm:text-xl text-black dark:text-white">
  <input
    type="search"
    placeholder="ค้นหา"
    bind:value={search}
    class="border border-gray-300 dark:border-gray-500 bg-gray-200 dark:bg-white rounded-lg text-gray-800 p-2 my-4 w-full"
  />
  <div class="h-5/6 overflow-x-auto scrollbar-hide">
    {#each visibleWorkarounds as work}
      <div class="py-1">
        <h2 class="underline font-bold text-base sm:text-xl">{work.Title}</h2>
        <div
          class="flex flex-row gap-6 sm:gap-8 text-gray-800 dark:text-gray-200 text-sm sm:text-lg pb-1"
        >
          <p class="font-medium min-w-fit w-10 sm:w-16 shrink-0">อาการ</p>
          <ul class="list-disc">
            {#each work.Symptom.split('\n') as symptom}
              <li>{symptom}</li>
            {/each}
          </ul>
        </div>
        <div
          class="flex flex-row gap-6 sm:gap-8 text-gray-800 dark:text-gray-200 text-sm sm:text-lg pb-1"
        >
          <p class="font-medium min-w-fit w-10 sm:w-16 shrink-0">วิธีแก้</p>
          <ul class="list-disc">
            {#each work.Workaround.split('\n') as workaroundLine}
              <li>{workaroundLine}</li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</div>
