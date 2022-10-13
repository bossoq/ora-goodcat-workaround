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
  <div class="h-5/6 overflow-x-auto">
    <table class="min-w-full">
      <thead class="font-bold align-text-top bg-teal-400 dark:bg-teal-800 sticky top-0">
        <tr>
          <th class="py-2 px-1 w-auto sm:w-36">หัวข้อ</th>
          <th class="py-2 px-1 w-1/3">อาการ</th>
          <th class="py-2 px-1 w-auto min-w-fit">วิธีแก้</th>
        </tr>
      </thead>
      <tbody class="align-text-top bg-teal-200 dark:bg-teal-600">
        {#each visibleWorkarounds as work}
          <tr class="border-b border-gray-50">
            <td class="py-3 px-1">{work.Title}</td>
            <td class="py-3 px-1">{work.Symptom}</td>
            <td class="py-3 px-1">
              {#each work.Workaround.split('\n') as line}
                - {line}
                {@html '<br>'}
              {/each}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
