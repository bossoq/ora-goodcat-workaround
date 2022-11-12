<script lang="ts">
  import '../app.css'
  import Head from '$lib/components/Head.svelte'
  // import Kofi from '$lib/components/Kofi.svelte'
  import Menu from '$lib/components/Menu.svelte'
  // import Social from '$lib/components/Social.svelte'
  import ThemeSelector from '$lib/components/ThemeSelector.svelte'
  import Modal from '$lib/components/Modal.svelte'
  import { darkTheme, modalViewed } from '$lib/store'
  // import Tipme from '$lib/components/Tipme.svelte'
  import Topmenu from '$lib/components/Topmenu.svelte'

  const url = 'https://goodcat.bossoq.live'
  const title = 'Ora Good Cat Known Issues & Workarounds'
  const description = 'Ora Good Cat Known Issues & Workarounds gathering by Community'

  const navItems = [
    { name: 'Known Issues', url: '/' },
    { name: 'Checklist', url: '/checklist' }
  ]
  const menuItems = [
    { name: 'Made by bossoq', url: 'https://github.com/bossoq/ora-goodcat-workaround' }
  ]
  const imageUrl = `${url}/screenshot.jpg`
  const gtagId = 'G-7CKG0P7VL2'
  const themeIcons = ['🌞 Toggle Light mode', '🌙 Toggle Dark mode']
</script>

<Head {title} {description} {url} {imageUrl} {gtagId} />
<!-- <Kofi name="bossoq" label="Buy me Coffee" /> -->
<!-- <Social {url} {title} /> -->
<main class={$darkTheme ? 'dark' : ''}>
  <ThemeSelector {themeIcons} />
  <Topmenu items={navItems} />
  <!-- <Tipme label='เอาออกเพราะหมาปปมันชอบเห่า' /> -->
  <Menu items={menuItems} />
  {#if $modalViewed}
    <Modal />
  {/if}
  <slot />
</main>
