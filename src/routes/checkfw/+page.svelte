<script lang="ts">
  import { Accordion, AccordionItem } from 'svelte-collapsible'
  import Usbheader from './usbheader.svelte'
  import Obdheader from './obdheader.svelte'
  import Usb from './usb.svelte'
  import Obd from './obd.svelte'
  import { activeCard } from '$lib/store'

  const duration = 0.5
  const easing = 'linear'
</script>

<div class="w-full h-screen flex flex-col justify-center items-center bg-white dark:bg-black">
  <h1 class="text-3xl sm:text-6xl dark:text-teal-200 text-teal-800 py-4">ORA Good Cat Check FW</h1>
  <div class="flex flex-col w-full sm:w-5/6 rounded-xl gap-2 h-3/4 overflow-x-auto scrollbar-hide">
    <Accordion {duration} {easing} bind:key={$activeCard}>
      <AccordionItem key="usb">
        <div slot="header" class="w-full">
          <Usbheader />
        </div>
        <div slot="body">
          <Usb />
        </div>
      </AccordionItem>
      <AccordionItem key="obd">
        <div slot="header" class="w-full">
          <Obdheader />
        </div>
        <div slot="body">
          <Obd />
        </div>
      </AccordionItem>
    </Accordion>
  </div>
</div>
