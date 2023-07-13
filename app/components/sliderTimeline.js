import React, { useRef } from "react";
import { Button } from "@nextui-org/react";

export default function SliderTimeline() {
  const timelineRef = useRef(null);

  const scrollTimeline = (scrollOffset) => {
    const newScrollLeft = timelineRef.current.scrollLeft + scrollOffset;
    timelineRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex py-12 px-20" style={{ backgroundColor: "#1D4080", color: "#FFFFFF" }}>
      <div className="basis-1/3 flex-shrink-0">
        <h3>Title Slider</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="ml-6 basis-2/3 flex flex-col">
        <div
          className="overflow-x-hidden"
          ref={timelineRef}
        >
            <ol class="items-center sm:flex">
                <li class="mb-6 sm:mb-0 flex-shrink-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-white">Timeline Title</h3>
                        <p class="text-white max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque scelerisque diam non nisi semper, et elementum lorem
                            ornare. Maecenas placerat facilisis mollis. Duis sagittis
                            ligula in sodales vehicula.</p>
                    </div>
                </li>
                <li class="mb-6 sm:mb-0 flex-shrink-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-white">Timeline Title</h3>
                        <p class="text-white max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque scelerisque diam non nisi semper, et elementum lorem
                            ornare. Maecenas placerat facilisis mollis. Duis sagittis
                            ligula in sodales vehicula.</p>
                    </div>
                </li>
                <li class="mb-6 sm:mb-0 flex-shrink-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-white">Timeline Title</h3>
                        <p class="text-white max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque scelerisque diam non nisi semper, et elementum lorem
                            ornare. Maecenas placerat facilisis mollis. Duis sagittis
                            ligula in sodales vehicula.</p>
                    </div>
                </li>
                <li class="mb-6 sm:mb-0 flex-shrink-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-white">Timeline Title</h3>
                        <p class="text-white max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque scelerisque diam non nisi semper, et elementum lorem
                            ornare. Maecenas placerat facilisis mollis. Duis sagittis
                            ligula in sodales vehicula.</p>
                    </div>
                </li>
                <li class="mb-6 sm:mb-0 flex-shrink-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-white">Timeline Title</h3>
                        <p class="text-white max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque scelerisque diam non nisi semper, et elementum lorem
                            ornare. Maecenas placerat facilisis mollis. Duis sagittis
                            ligula in sodales vehicula.</p>
                    </div>
                </li>
                <li class="mb-6 sm:mb-0 flex-shrink-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-white">Timeline Title</h3>
                        <p class="text-white max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque scelerisque diam non nisi semper, et elementum lorem
                            ornare. Maecenas placerat facilisis mollis. Duis sagittis
                            ligula in sodales vehicula.</p>
                    </div>
                </li>
                <li class="mb-6 sm:mb-0 flex-shrink-0">
                    <div class="flex items-center">
                        <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        </div>
                        <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div class="mt-3 sm:pr-8">
                        <h3 class="text-white">Timeline Title</h3>
                        <p class="text-white max-w-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Quisque scelerisque diam non nisi semper, et elementum lorem
                            ornare. Maecenas placerat facilisis mollis. Duis sagittis
                            ligula in sodales vehicula.</p>
                    </div>
                </li>
            </ol>
          {/*<ol className=" border-neutral-300 dark:border-neutral-500 md:flex md:gap-6 md:border-l-0 md:border-t">
            <li className="flex-shrink-0">
              <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                <div className="-ml-5 mr-3 h-9 w-9 rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-5 md:ml-0 md:mr-0 z-99"></div>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                  01.07.2021
                </p>
              </div>
              <div className="ml-4 mt-2 pb-5 md:ml-0">
                <h4 className="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                <p className="mb-3 max-w-sm text-neutral-500 dark:text-neutral-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula.
                </p>
              </div>
            </li>
            <li className="flex-shrink-0">
              <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                <div className="-ml-5 mr-3 h-9 w-9 rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-5 md:ml-0 md:mr-0"></div>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                  01.07.2021
                </p>
              </div>
              <div className="ml-4 mt-2 pb-5 md:ml-0">
                <h4 className="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                <p className="mb-3 max-w-sm text-neutral-500 dark:text-neutral-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula.
                </p>
              </div>
            </li>
            <li className="flex-shrink-0">
              <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                <div className="-ml-5 mr-3 h-9 w-9 rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-5 md:ml-0 md:mr-0"></div>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                  01.07.2021
                </p>
              </div>
              <div className="ml-4 mt-2 pb-5 md:ml-0">
                <h4 className="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                <p className="mb-3 max-w-sm text-neutral-500 dark:text-neutral-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula.
                </p>
              </div>
            </li>
            <li className="flex-shrink-0">
              <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                <div className="-ml-5 mr-3 h-9 w-9 rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-5 md:ml-0 md:mr-0"></div>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                  01.07.2021
                </p>
              </div>
              <div className="ml-4 mt-2 pb-5 md:ml-0">
                <h4 className="mb-1.5 text-xl font-semibold">Title of section 1</h4>
                <p className="mb-3 max-w-sm text-neutral-500 dark:text-neutral-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula.
                </p>
              </div>
            </li>
  </ol>*/}
        </div>

        <div className="flex mt-4">
          <Button
            auto
            color="primary"
            className="mr-2"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            }
            onClick={() => scrollTimeline(-300)}
          ></Button>
          <Button
            auto
            color="primary"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            }
            onClick={() => scrollTimeline(300)}
          ></Button>
        </div>
      </div>
    </div>
  );
}
