<head>
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />

     <style> 
     
      h1, header, p, li, span {
         font-family: "Inter", serif;
         font-optical-sizing: auto;
      }

      .coordinates {
         font-family: "Doto", serif;
         font-optical-sizing: auto;
         font-variation-settings:
            "ROND" 0;
      }

      .nav-indicator.hover {
         .nav-dash {
            background-color: rgb(226 232 240 / var(--tw-bg-opacity, 1));
            width: 4rem;
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
         }

         .nav-text {
            color: rgb(226 232 240 / var(--tw-text-opacity, 1));
         }
      }

     </style>
     
</head>

<body class="bg-emerald-950 leading-relaxed text-slate-300 antialiased selection:bg-violet-300 selection:text-violet-900">
   <div class="relative cursor-none" data-spotlight>
      <div class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
      <div>
         <section>
            <div class="bg-red-500 sm:bg-orange-500 md:bg-yellow-500 lg:bg-green-500 xl:bg-teal-500">Media Query</div>
            <img class="mx-auto h-screen block sm:hidden md:block xl:hidden" src="./src/lib/assets/cliffjump.jpeg" alt="cliffjump"/>
            <img class="mx-auto h-screen md:hidden" src="./src/lib/assets/bonsai.jpeg" alt="cliffjump"/>
            <p class="coordinates font-thin tracking-tight text-center">48°27'32"N 122°36'28"W 2024.06.08</p>
         </section>
         <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
            <div class="lg:flex lg:justify-between lg:gap-4">
               <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
                  <div>
                     <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl -ml-1"><a href="/">Travis Nguyen</a></h1>                     
                     <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Full Stack Developer</h2>                     
                     <p class="mt-4 max-w-xs leading-normal">I build user experiences for the web inspired by films, art, and people.</p>
                     <nav class="nav hidden lg:block" aria-label="In-page jump links">
                           <ul class="mt-16 w-max">
                              <li>
                                 <a id="about-nav" class="nav-indicator group flex items-center py-3" href="#about" data-ref="about">
                                 <span class="nav-dash mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                 <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span></a>
                              </li>
                              <li>
                                 <a id="experience-nav" class="nav-indicator group flex items-center py-3" href="#experience" data-ref="experience">
                                    <span class="nav-dash mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                    <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span></a>
                              </li>
                              <li>
                                 <a id="projects-nav" class=" nav-indicator group flex items-center py-3" href="#projects" data-ref="projects">
                                    <span class="nav-dash mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                    <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span></a>
                              </li>
                           </ul>
                     </nav>
                  </div>
                  <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
                     <li class="mr-5 shrink-0 text-xs">
                           <a class="block hover:text-slate-200" href="https://github.com/NguyenTrav/" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)" title="GitHub"><span class="sr-only">GitHub</span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                           </a>
                     </li>
                     <li class="mr-5 shrink-0 text-xs">
                           <a class="block hover:text-slate-200" href="https://www.linkedin.com/in/nguyentrav/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn"><span class="sr-only">LinkedIn</span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
                           </a>
                     </li>
                     <li class="mr-5 shrink-0 text-xs">
                           <a class="block hover:text-slate-200" href="mailto:nguyentrav@gmail.com" target="_blank" rel="noreferrer noopener" aria-label="Gmail (opens in a new tab)" title="Gmail"><span class="sr-only">Gmail</span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 220" fill="currentColor" class="h-6 w-6" aria-hidden="true"><path d="M108,0C48.353,0,0,48.353,0,108s48.353,108,108,108s108-48.353,108-108S167.647,0,108,0z M156.657,60L107.96,98.498L57.679,60H156.657z M161.667,156h-109V76.259l50.244,38.11c1.347,1.03,3.34,1.545,4.947,1.545c1.645,0,3.073-0.54,4.435-1.616l49.374-39.276V156z"/></svg>
                           </a>
                     </li>
                  </ul>
               </header>
         
               <main class="pt-24 lg:w-[52%] lg:py-24"> 
                  <section id="about" class="nav-scroll mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About">
                     <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                        <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
                     </div>  
                     <div>
                        <p class="mb-4">
                           I'm a developer that draws inspiration from films, art, and the people around me. The storytelling, cinematography, and emotional depth of movies have shaped my approach to development and design. 
                           I thrive in environments where art meets strategy, and believe in crafting accessible user experiences that resonate with audiences. 
                        </p>  
                        <p class="mb-4">
                           My time as a full stack developer, designer and systems engineer bring a unique perspective in addressing human problems through digital mediums. 
                           By drawing from art, I bring fresh, imaginative ideas to every project I take on.
                        </p>
                        <p class="mb-4">
                           Catch me at the theatre watching the latest A24 movie, exploring a local art gallery, traveling with my film camera, or bouldering to get over my fear of heights.
                        </p>
                     </div>
                  </section>
                  <section id="experience" class="nav-scroll mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
                     <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                        <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
                     </div>  
                     <div>
                           <ol class="group/list">
                              <li class="mb-12">
                                 <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-emerald-950/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                    <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2021 to Present">2021 — Present</header>
                                    <div class="z-10 sm:col-span-6">
                                       <h3 class="font-medium leading-snug text-slate-200" style="font-weight:700;">
                                          <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green-300 focus-visible:text-green-300  group/link text-base" href="https://www.pragroup.com/" target="_blank" rel="noreferrer noopener" aria-label="Portfolio Recovery Associates (opens in a new tab)">
                                             <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                             <span>
                                                Full Stack Developer · PRA Group<!-- --> 
                                                <span class="inline-block">
                                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                      <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                                   </svg>
                                                </span>
                                             </span>
                                          </a>
                                       </h3>
                                       <p class="mt-2 text-sm leading-normal">
                                          I had the pleasure of designing user experiences that prioritized understanding and respect for individuals facing financial hardship. Built and maintained PRA Pay web app to allow individuals to start their debt recovery journey. The application aimed to reduce stress, offering a more compassionate, supportive experience that encouraged users to take control of their situation. I developed features that allowed users to set up flexible payment plans seamlessly. Lead the development of adding a digital wallet, A/B testing, multi-factor authentication, ACH bank validation and orchestrated releases.
                                       </p>
                                       <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                                          <li class="mr-1.5 mt-2">
                                             <div class="flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">.NET Framework</div>
                                          </li>
                                          <li class="mr-1.5 mt-2">
                                             <div class="flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">Vue.js</div>
                                          </li>
                                          <li class="mr-1.5 mt-2">
                                             <div class="flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">HTML</div>
                                          </li>
                                          <li class="mr-1.5 mt-2">
                                             <div class="flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">CSS</div>
                                          </li>
                                          <li class="mr-1.5 mt-2">
                                             <div class="flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">JavaScript</div>
                                          </li>
                                          <li class="mr-1.5 mt-2">
                                             <div class="flex items-center rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">jQuery</div>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </li>
                              <li class="mb-12">
                              <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                 <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-emerald-950/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                 <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2019 to 2022">2019 — 2022</header>
                                 <div class="z-10 sm:col-span-6">
                                    <h3 class="font-medium leading-snug text-slate-200">
                                       <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green-300 focus-visible:text-green-300  group/link text-base" href="https://nguyentrav.com/" target="_blank" rel="noreferrer noopener" aria-label="Travis Nguyen (opens in a new tab)">
                                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                          <span>
                                             Full Stack Developer · Freelance
                                             <span class="inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                   <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                                </svg>
                                             </span>
                                          </span>
                                       </a>
                                    </h3>
                                    <p class="mt-2 text-sm leading-normal">
                                       Led a project to consult and redesign a local restaurant's website, enhancing its branding and user experience. I collaborated closely with the client to tell their family story and cultural heritage. Upgrading to modern visual design, accessibility standards, mobile responsiveness, and changing needs of customers during the pandemic. The end result was a website that not only reflected the restaurant’s story but could continue serving its community.                                     
                                    </p>
                                    <ul class="mt-2 flex flex-wrap" aria-label="Related links">
                                       <li class="mr-4">
                                          <a class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-green-300 focus-visible:text-green-300" href="https://ricepaper-tasteofvietnam.com/" target="_blank" rel="noreferrer noopener" aria-label="Rice Paper (opens in a new tab)">
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3" aria-hidden="true">
                                                <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
                                                <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
                                             </svg>
                                             <span>Rice Paper</span>
                                          </a>
                                       </li>
                                    </ul>
                                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                                       <li class="mr-1.5 mt-2">
                                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">HTML</div>
                                       </li>
                                       <li class="mr-1.5 mt-2">
                                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">CSS</div>
                                       </li>
                                       <li class="mr-1.5 mt-2">
                                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">JavaScript</div>
                                       </li>
                                       <li class="mr-1.5 mt-2">
                                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">jQuery</div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </li>
                           <li class="mb-12">
                              <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                 <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-emerald-950/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                 <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2017 to 2021">2017 — 2021</header>
                                 <div class="z-10 sm:col-span-6">
                                    <h3 class="font-medium leading-snug text-slate-200">
                                       <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green-300 focus-visible:text-green-300  group/link text-base" href="https://www.boozallen.com/" target="_blank" rel="noreferrer noopener" aria-label="Booz Allen (opens in a new tab)">
                                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                          <span>
                                             Systems Engineer · Booz Allen Hamilton
                                             <span class="inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                   <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                                </svg>
                                             </span>
                                          </span>
                                       </a>
                                    </h3>
                                    <p class="mt-2 text-sm leading-normal">
                                       Our team supported the firm's Exchange environment for over 25,000 employees. I provided critical support by ensuring the stability, performance, and security of the platform. Worked closely with the Security and Law Department to develop a web app to capture external email threats for risk analysis and contain data spills. Built automation scripts using PowerShell and Microsoft Graph REST API to optimize the infrastructure, and troubleshoot issues that arose to minimize downtime, and migrate on-premise users to the cloud.                                    </p>
                                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                                       <li class="mr-1.5 mt-2">
                                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">PowerShell</div>
                                       </li>
                                       <li class="mr-1.5 mt-2">
                                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">Exchange</div>
                                       </li>
                                       <li class="mr-1.5 mt-2">
                                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">Power Apps</div>
                                       </li>
                                       <li class="mr-1.5 mt-2">
                                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">SharePoint</div>
                                       </li>
                                       <li class="mr-1.5 mt-2">
                                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">Power BI</div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </li>
                           <li class="mb-12">
                              <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                 <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-emerald-950/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                 <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="Summer 2016">Summer 2016</header>
                                 <div class="z-10 sm:col-span-6">
                                    <h3 class="font-medium leading-snug text-slate-200">
                                       <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green-300 focus-visible:text-green-300  group/link text-base" href="https://www.boozallen.com/" target="_blank" rel="noreferrer noopener" aria-label="Booz Allen (opens in a new tab)">
                                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                          <span>
                                             System Admin Intern · Booz Allen Hamilton
                                             <span class="inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                   <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                                </svg>
                                             </span>
                                          </span>
                                       </a>
                                    </h3>
                                    <p class="mt-2 text-sm leading-normal">
                                       Assisted the Exchange team to migration user mailboxes from on-premise to the cloud. I also organized over 1000 email distribution lists. Furthermore, created documentation for processes that increased efficiency and productivity of our Support team.                                    
                                    </p>
                                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                                       <li class="mr-1.5 mt-2">
                                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">PowerShell</div>
                                       </li>
                                       <li class="mr-1.5 mt-2">
                                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">Exchange</div>
                                       </li>
                                       <li class="mr-1.5 mt-2">
                                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300">SharePoint</div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </li>
                           <li class="mb-12">
                              <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                 <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-emerald-950/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                 <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="Summer 2015">Summer 2015</header>
                                 <div class="z-10 sm:col-span-6">
                                    <h3 class="font-medium leading-snug text-slate-200">
                                       <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green-300 focus-visible:text-green-300  group/link text-base" href="https://www.boozallen.com/" target="_blank" rel="noreferrer noopener" aria-label="Booz Allen (opens in a new tab)">
                                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                          <span>
                                             Software Tester Intern · Booz Allen Hamilton
                                             <span class="inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                   <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                                </svg>
                                             </span>
                                          </span>
                                       </a>
                                    </h3>
                                    <p class="mt-2 text-sm leading-normal">
                                       Converted the manual testing environment to an automated testing framework, significantly saving time and improving efficiency. As a result, we were able to streamline the testing cycle, delivering faster feedback to developers and accelerating the overall development process, all while maintaining a high level of test coverage and quality.                                    </p>
                                    <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
                                       <li class="mr-1.5 mt-2">
                                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">Java</div>
                                       </li>
                                       <li class="mr-1.5 mt-2">
                                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">Selenium</div>
                                       </li>
                                       <li class="mr-1.5 mt-2">
                                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-green-300 ">Blazemeter</div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </li>
                           </ol>
                           <div class="mt-12">
                              <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green-300 focus-visible:text-green-300 font-semibold text-slate-200 group/link text-base" href="./src/lib/assets/resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Resume (opens in a new tab)">
                                 <span class="inline-block">
                                    View Resume
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                       <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                    </svg>
                                 </span>
                              </a>
                           </div>
                        </div>
                  </section>
                  <section id="projects" class="nav-scroll mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Personal projects">   
                     <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                        <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
                     </div>  
                     <div>
                        <ul class="group/list">
                           <li class="mb-12">
                              <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                 <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-emerald-950/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                 <div class="z-10 sm:order-2 sm:col-span-6">
                                    <h3>
                                       <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-emerald-300 focus-visible:text-green-300  group/link text-base" href="https://nguyentrav.github.io/lights-out/" target="_blank" rel="noreferrer noopener" aria-label="Lights Out Game (opens in a new tab)">
                                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                          <span>
                                             Lights Out Game
                                             <span class="inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                   <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                                </svg>
                                             </span>
                                          </span>
                                       </a>
                                    </h3>
                                    <p class="mt-2 text-sm leading-normal">Recreation of the 1995 electronic game. The game consists of a 5 by 5 grid of lights. When the game begins, the lights randomly turn on. Pressing any of the lights will toggle it and the adjacent lights. The goal of the game is to switch all the lights off.</p>
                                 </div>
                                 <img alt="Lights Out board" width="200" height="48"  class="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" src="./src/lib/assets/lights_out.png">
                              </div>
                           </li>
                           <li class="mb-12">
                              <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                 <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-emerald-950/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                 <div class="z-10 sm:order-2 sm:col-span-6">
                                    <h3>
                                       <a class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-green-300 focus-visible:text-green-300  group/link text-base" href="https://nguyentrav.github.io/todo-app/" target="_blank" rel="noreferrer noopener" aria-label="Todo List App(opens in a new tab)">
                                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                          <span>
                                             Todo List App
                                             <span class="inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                                   <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path>
                                                </svg>
                                             </span>
                                          </span>
                                       </a>
                                    </h3>
                                    <p class="mt-2 text-sm leading-normal">A simple todo list app to keep your day organized.</p>
                                 </div>
                                 <img alt="" width="200" height="48"  class="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style="color:transparent" src="./src/lib/assets/todo_list.png">
                              </div>
                           </li>
                        </ul>
                     </div>              
                  </section>
                  <footer class="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                     <p class="coordinates font-normal tracking-tight">Built by Travis Nguyen with <a href="https://svelte.dev/" class="font-medium text-slate-400 hover:text-green-300 focus-visible:text-green-300" target="_blank" rel="noreferrer noopener" aria-label="Svelte (opens in a new tab)">Svelte</a> and <a href="https://tailwindcss.com/" class="font-medium text-slate-400 hover:text-green-300 focus-visible:text-green-300" target="_blank" rel="noreferrer noopener" aria-label="Tailwind CSS (opens in a new tab)">Tailwind CSS</a></p>
                     <p class="coordinates font-normal tracking-tight">Design inspired by <a href="https://open.spotify.com/track/3n6ei1V2Qhsi6BhEhm9opS?si=595a6a316bf04db2" class="font-medium text-slate-400 hover:text-green-300 focus-visible:text-green-300" target="_blank" rel="noreferrer noopener" aria-label="Mirror by Porter Robinson on Spotify (opens in a new tab)">Porter Robinson - Mirror</a></p>
                     <div class="pt-4">
                        <iframe title="mirror" style="border-radius:12px" src="https://open.spotify.com/embed/track/3n6ei1V2Qhsi6BhEhm9opS?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>                     </div>
                  </footer>
               </main>
            </div> 
         </div> 
      </div> 
   </div>
</body>

<script lang="ts">
	import { onMount } from "svelte";
   onMount(async () => {

      const {spotlight} = await import('$lib')
      const {navScroll} = await import('$lib')

      spotlight();
      navScroll();
   })
</script>

