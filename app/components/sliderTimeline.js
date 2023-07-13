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
    <div
      className="flex py-12 px-20"
      style={{ backgroundColor: "#1D4080", color: "#FFFFFF" }}
    >
      <div className="basis-1/3 flex-shrink-0">
        <h3>Title Slider</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="ml-6 basis-2/3 flex flex-col">
        <div className="overflow-x-hidden" ref={timelineRef}>
          <ol class="items-center sm:flex">
            <li class="mb-6 sm:mb-0 flex-shrink-0">
              <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white 0 sm:ring-8 shrink-0"></div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <h3 class="text-white">Timeline Title</h3>
                <p class="text-white max-w-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula.
                </p>
              </div>
            </li>
            <li class="mb-6 sm:mb-0 flex-shrink-0">
              <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white sm:ring-8 shrink-0"></div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <h3 class="text-white">Timeline Title</h3>
                <p class="text-white max-w-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula.
                </p>
              </div>
            </li>
            <li class="mb-6 sm:mb-0 flex-shrink-0">
              <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white sm:ring-8 shrink-0"></div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <h3 class="text-white">Timeline Title</h3>
                <p class="text-white max-w-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula.
                </p>
              </div>
            </li>
            <li class="mb-6 sm:mb-0 flex-shrink-0">
              <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white sm:ring-8 shrink-0"></div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <h3 class="text-white">Timeline Title</h3>
                <p class="text-white max-w-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula.
                </p>
              </div>
            </li>
            <li class="mb-6 sm:mb-0 flex-shrink-0">
              <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white sm:ring-8 shrink-0"></div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <h3 class="text-white">Timeline Title</h3>
                <p class="text-white max-w-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula.
                </p>
              </div>
            </li>
            <li class="mb-6 sm:mb-0 flex-shrink-0">
              <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white sm:ring-8 shrink-0"></div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <h3 class="text-white">Timeline Title</h3>
                <p class="text-white max-w-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula.
                </p>
              </div>
            </li>
            <li class="mb-6 sm:mb-0 flex-shrink-0">
              <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white sm:ring-8 shrink-0"></div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <h3 class="text-white">Timeline Title</h3>
                <p class="text-white max-w-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque scelerisque diam non nisi semper, et elementum lorem
                  ornare. Maecenas placerat facilisis mollis. Duis sagittis
                  ligula in sodales vehicula.
                </p>
              </div>
            </li>
          </ol>
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
