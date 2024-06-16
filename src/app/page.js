import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="max-w-screen-xl mx-auto grid grid-cols-2">
        <div className="relative">
          <div className="fixed p-24">
            <h1 className="font-bold text-5xl">Brittany Chiang</h1>{" "}
            <p className="font-medium text-xl mt-3">Senior Frontend Engineer</p>
            <p className="text-text mt-4 w-72">
              I build pixel-perfect, engaging, and accessible digital
              experiences.
            </p>
            <ul className="mt-16">
              <li>
                <Link class="group flex items-center py-3 active" href="#about">
                  <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  class="group flex items-center py-3 active"
                  href={"#experience"}
                >
                  <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Experience
                  </span>
                </Link>
              </li>
              <li>
                <a class="group flex items-center py-3 active" href="#projects">
                  <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                  <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Projects
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-24 pr-24 text-text">
          <article
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="About me"
          >
            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                About
              </h2>
            </div>
            <div>
              <p class="mb-4">
                Back in 2012, I decided to try my hand at creating custom Tumblr
                themes and tumbled head first into the rabbit hole of coding and
                web development. Fast-forward to today, and I’ve had the
                privilege of building software for an
                <a
                  class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://us.mullenlowe.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="advertising agency (opens in a new tab)"
                >
                  advertising agency
                </a>
                , a
                <a
                  class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://starry.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="start-up (opens in a new tab)"
                >
                  start-up
                </a>
                , a
                <a
                  class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://www.apple.com/apple-music/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="huge corporation (opens in a new tab)"
                >
                  huge corporation
                </a>
                , and a
                <a
                  class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://upstatement.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="digital product studio (opens in a new tab)"
                >
                  digital product studio
                </a>
                .
              </p>
              <p class="mb-4">
                My main focus these days is building accessible user interfaces
                for our customers at
                <a
                  class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://www.klaviyo.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Klaviyo (opens in a new tab)"
                >
                  Klaviyo
                </a>
                . I most enjoy building software in the sweet spot where design
                and engineering meet — things that look good but are also built
                well under the hood. In my free time, I've also released an
                <a
                  class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://www.newline.co/courses/build-a-spotify-connected-app"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="online video course (opens in a new tab)"
                >
                  online video course
                </a>
                that covers everything you need to know to build a web app with
                the Spotify API.
              </p>
              <p>
                When I’m not at the computer, I’m usually rock climbing,
                reading, hanging out with my wife and two cats, or running
                around Hyrule searching for
                <span class="group/korok inline-flex lg:cursor-[url('/images/koroks/Elma.png'),_pointer] lg:font-medium lg:text-slate-200">
                  <span class="sr-only">Korok seeds</span>
                  <span
                    class="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]"
                    aria-hidden="true"
                  >
                    K
                  </span>
                  <span
                    class="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]"
                    aria-hidden="true"
                  >
                    o
                  </span>
                  <span
                    class="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]"
                    aria-hidden="true"
                  >
                    r
                  </span>
                  <span
                    class="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]"
                    aria-hidden="true"
                  >
                    o
                  </span>
                  <span
                    class="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]"
                    aria-hidden="true"
                  >
                    k
                  </span>
                  <span
                    class="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]"
                    aria-hidden="true"
                  >
                    &nbsp;
                  </span>
                  <span
                    class="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]"
                    aria-hidden="true"
                  >
                    s
                  </span>
                  <span
                    class="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]"
                    aria-hidden="true"
                  >
                    e
                  </span>
                  <span
                    class="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]"
                    aria-hidden="true"
                  >
                    e
                  </span>
                  <span
                    class="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]"
                    aria-hidden="true"
                  >
                    d
                  </span>
                  <span
                    class="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]"
                    aria-hidden="true"
                  >
                    s
                  </span>
                </span>
                .
              </p>
            </div>
          </article>
          <div
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Work experience"
          >
            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Experience
              </h2>
            </div>
            <div>
              <ol class="group/list">
                <li class="mb-12">
                  <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header
                      class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                      aria-label="2024 to Present"
                    >
                      2024 — Present
                    </header>
                    <div class="z-10 sm:col-span-6">
                      <h3 class="font-medium leading-snug text-slate-200">
                        <div>
                          <a
                            class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href="https://www.klaviyo.com"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
                          >
                            <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Senior Frontend Engineer, Accessibility.
                              <span class="inline-block">
                                Klaviyo
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p class="mt-2 text-sm leading-normal">
                        Build and maintain critical components used to construct
                        Klaviyo’s frontend, across the whole product. Work
                        closely with cross-functional teams, including
                        developers, designers, and product managers, to
                        implement and advocate for best practices in web
                        accessibility.
                      </p>
                      <ul
                        class="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            JavaScript
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            TypeScript
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            React
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Storybook
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="mb-12">
                  <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header
                      class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                      aria-label="2024 to Present"
                    >
                      2024 — Present
                    </header>
                    <div class="z-10 sm:col-span-6">
                      <h3 class="font-medium leading-snug text-slate-200">
                        <div>
                          <a
                            class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href="https://www.klaviyo.com"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
                          >
                            <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Senior Frontend Engineer, Accessibility.
                              <span class="inline-block">
                                Klaviyo
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p class="mt-2 text-sm leading-normal">
                        Build and maintain critical components used to construct
                        Klaviyo’s frontend, across the whole product. Work
                        closely with cross-functional teams, including
                        developers, designers, and product managers, to
                        implement and advocate for best practices in web
                        accessibility.
                      </p>
                      <ul
                        class="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            JavaScript
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            TypeScript
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            React
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Storybook
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="mb-12">
                  <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header
                      class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                      aria-label="2024 to Present"
                    >
                      2024 — Present
                    </header>
                    <div class="z-10 sm:col-span-6">
                      <h3 class="font-medium leading-snug text-slate-200">
                        <div>
                          <a
                            class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href="https://www.klaviyo.com"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
                          >
                            <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Senior Frontend Engineer, Accessibility.
                              <span class="inline-block">
                                Klaviyo
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p class="mt-2 text-sm leading-normal">
                        Build and maintain critical components used to construct
                        Klaviyo’s frontend, across the whole product. Work
                        closely with cross-functional teams, including
                        developers, designers, and product managers, to
                        implement and advocate for best practices in web
                        accessibility.
                      </p>
                      <ul
                        class="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            JavaScript
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            TypeScript
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            React
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Storybook
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li class="mb-12">
                  <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header
                      class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                      aria-label="2024 to Present"
                    >
                      2024 — Present
                    </header>
                    <div class="z-10 sm:col-span-6">
                      <h3 class="font-medium leading-snug text-slate-200">
                        <div>
                          <a
                            class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href="https://www.klaviyo.com"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
                          >
                            <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Senior Frontend Engineer, Accessibility.
                              <span class="inline-block">
                                Klaviyo
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clip-rule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </a>
                        </div>
                      </h3>
                      <p class="mt-2 text-sm leading-normal">
                        Build and maintain critical components used to construct
                        Klaviyo’s frontend, across the whole product. Work
                        closely with cross-functional teams, including
                        developers, designers, and product managers, to
                        implement and advocate for best practices in web
                        accessibility.
                      </p>
                      <ul
                        class="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            JavaScript
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            TypeScript
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            React
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Storybook
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          <article id="projects">
            <div class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                Projects
              </h2>
            </div>
            <div>
              <ul class="group/list">
                <li class="mb-12">
                  <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div class="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        <a
                          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                          href="https://www.newline.co/courses/build-a-spotify-connected-app"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Build a Spotify Connected App (opens in a new tab)"
                        >
                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            Build a Spotify Connected
                            <span class="inline-block">
                              App
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </h3>
                      <p class="mt-2 text-sm leading-normal">
                        Video course that teaches how to build a web app with
                        the Spotify Web API. Topics covered include the
                        principles of REST APIs, user auth flows, Node, Express,
                        React, Styled Components, and more.
                      </p>
                    </div>
                    <img
                      alt="Build a Spotify Connected App Newline course marketing card"
                      loading="lazy"
                      width="200"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      style={{ color: "transparent" }}
                      src="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=256&q=75"
                    />
                  </div>
                </li>
                <li class="mb-12">
                  <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div class="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        <a
                          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                          href="https://www.newline.co/courses/build-a-spotify-connected-app"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Build a Spotify Connected App (opens in a new tab)"
                        >
                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            Build a Spotify Connected
                            <span class="inline-block">
                              App
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </h3>
                      <p class="mt-2 text-sm leading-normal">
                        Video course that teaches how to build a web app with
                        the Spotify Web API. Topics covered include the
                        principles of REST APIs, user auth flows, Node, Express,
                        React, Styled Components, and more.
                      </p>
                      <a
                        class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                        href="https://github.com/bchiang7/spotify-profile"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="625 stars on GitHub (opens in a new tab)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="mr-1 h-3 w-3"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>625</span>
                      </a>
                      <ul
                        class="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            JavaScript
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            TypeScript
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            React
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Storybook
                          </div>
                        </li>
                      </ul>
                    </div>
                    <img
                      alt="Build a Spotify Connected App Newline course marketing card"
                      loading="lazy"
                      width="200"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      style={{ color: "transparent" }}
                      src="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=256&q=75"
                    />
                  </div>
                </li>
                <li class="mb-12">
                  <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div class="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        <a
                          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                          href="https://www.newline.co/courses/build-a-spotify-connected-app"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Build a Spotify Connected App (opens in a new tab)"
                        >
                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            Build a Spotify Connected
                            <span class="inline-block">
                              App
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </h3>
                      <p class="mt-2 text-sm leading-normal">
                        Video course that teaches how to build a web app with
                        the Spotify Web API. Topics covered include the
                        principles of REST APIs, user auth flows, Node, Express,
                        React, Styled Components, and more.
                      </p>
                    </div>
                    <img
                      alt="Build a Spotify Connected App Newline course marketing card"
                      loading="lazy"
                      width="200"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      style={{ color: "transparent" }}
                      src="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=256&q=75"
                    />
                  </div>
                </li>
                <li class="mb-12">
                  <div class="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <div class="z-10 sm:order-2 sm:col-span-6">
                      <h3>
                        <a
                          class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                          href="https://www.newline.co/courses/build-a-spotify-connected-app"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="Build a Spotify Connected App (opens in a new tab)"
                        >
                          <span class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            Build a Spotify Connected
                            <span class="inline-block">
                              App
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </span>
                        </a>
                      </h3>
                      <p class="mt-2 text-sm leading-normal">
                        Video course that teaches how to build a web app with
                        the Spotify Web API. Topics covered include the
                        principles of REST APIs, user auth flows, Node, Express,
                        React, Styled Components, and more.
                      </p>
                      <a
                        class="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
                        href="https://github.com/bchiang7/spotify-profile"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="625 stars on GitHub (opens in a new tab)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          class="mr-1 h-3 w-3"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span>625</span>
                      </a>
                      <ul
                        class="mt-2 flex flex-wrap"
                        aria-label="Technologies used"
                      >
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            JavaScript
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            TypeScript
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            React
                          </div>
                        </li>
                        <li class="mr-1.5 mt-2">
                          <div class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            Storybook
                          </div>
                        </li>
                      </ul>
                    </div>
                    <img
                      alt="Build a Spotify Connected App Newline course marketing card"
                      loading="lazy"
                      width="200"
                      height="48"
                      decoding="async"
                      data-nimg="1"
                      class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                      style={{ color: "transparent" }}
                      src="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=256&q=75"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
