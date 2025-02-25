<script>
	let { children } = $props();
	import '../app.css';

	import '@fontsource-variable/doto';
	import '@fontsource-variable/inter';

	import cliffjumpsm from "../lib/assets/cliffjump800.jpg?enhanced";
	import cliffjumpmd from "../lib/assets/cliffjump1400.jpg?enhanced";
	import cliffjumplg from "../lib/assets/cliffjump2000.jpg?enhanced";

	import Header from "../components/Header.svelte";
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
		<!-- <div class="bg-red-500 sm:bg-orange-500 md:bg-green-500 lg:bg-blue-500 xl:bg-violet-500">Media Query</div> -->
		  <enhanced:img class="mx-auto md:hidden w-96" src="{cliffjumpsm}" alt="cliffjump" loading="lazy"/>		  
		  <enhanced:img class="mx-auto hidden md:block lg:hidden w-1/2" src="{cliffjumpmd}" alt="cliffjump" loading="lazy"/>
		  <enhanced:img class="mx-auto hidden lg:block lg:w-2/5 xl:w-1/4" src="{cliffjumplg}" alt="cliffjump" loading="lazy"/>
		  <p class="coordinates font-thin tracking-tight text-center pt-2 md:pt-4">48°27'32"N 122°36'28"W 2024.06.08</p>
	   </section>
	   <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
		  <div class="lg:flex lg:justify-between lg:gap-4">
			<Header/>
			{@render children()}
		  </div> 
	   </div> 
	</div> 
 </div>

