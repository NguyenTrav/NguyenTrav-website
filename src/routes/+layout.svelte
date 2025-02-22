<script>
	let { children } = $props();
	import '../app.css';
	import Header from "../components/Header.svelte";
	import '@fontsource-variable/doto';
	import '@fontsource-variable/inter';
	import mirror from "../lib/assets/mirror.jpg?enhanced";
	import { onMount } from "svelte";
   	onMount(async () => {

      const {spotlight} = await import('$lib')
      const {navScroll} = await import('$lib')

      spotlight();
      navScroll();
   })

</script>

<div class="relative cursor-none" data-spotlight>
	<div class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
	<div>
	   <section>
		  <!-- <div class="bg-red-500 sm:bg-orange-500 md:bg-yellow-500 lg:bg-green-500 xl:bg-teal-500">Media Query</div> -->
		  <!-- <img class="mx-auto h-screen block sm:hidden md:block xl:hidden" src="{mirror}" alt="cliffjump"/> -->
		  <enhanced:img class="mx-auto" src="{mirror}" alt="mirror"/>

		  <p class="coordinates font-thin tracking-tight text-center">48°27'32"N 122°36'28"W 2024.06.08</p>
	   </section>
	   <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
		  <div class="lg:flex lg:justify-between lg:gap-4">
			<Header/>
			{@render children()}
		  </div> 
	   </div> 
	</div> 
 </div>

