<script lang="ts">
  interface CheckListType {
    Header: string
    Subheader: string[]
  }
  import checklistRaw from '../../checklist.json'
  import { checklistStore } from '$lib/store'
  let checklists: CheckListType[] = checklistRaw.checklist
</script>

<div class="flex flex-col w-9/12 h-3/4 text-base sm:text-xl text-black dark:text-white">
  <div class="flex flex-row items-center justify-between">
    <p class="text-xs sm:text-sm">*Checklist มีระบบ Auto Save*</p>
    <button
      class="text-xs sm:text-sm bg-teal-200 hover:bg-teal-300 text-black dark:bg-teal-400 dark:hover:bg-teal-500 dark:text-gray-800 font-bold py-2 px-4 rounded max-w-fit self-end"
      on:click={() => ($checklistStore = {})}>Clear All</button
    >
  </div>
  <div class="h-5/6 my-4 overflow-x-auto">
    {#each checklists as checklist, hidx}
      <p class="my-2 font-bold underline">{checklist.Header}</p>
      {#each checklist.Subheader as subheader, idx}
        <div class="flex items-baseline mb-2 align-baseline">
          <input
            type="checkbox"
            id={`h${hidx + 1}s${idx + 1}`}
            bind:checked={$checklistStore[`h${hidx + 1}s${idx + 1}`]}
            class="mr-2 w-4 h-4"
          />
          <label for={`h${hidx + 1}s${idx + 1}`} class="font-medium w-full">{subheader}</label>
        </div>
      {/each}
    {/each}
  </div>
</div>
