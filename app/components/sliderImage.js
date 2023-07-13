import React, { useRef, useState } from 'react';
import { Button, Image } from "@nextui-org/react";
export default function SliderImage(){
    const imageContainerRef = useRef(null);

  const scrollImages = (scrollOffset) => {
    const newScrollLeft = imageContainerRef.current.scrollLeft + scrollOffset;
    imageContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });

  };
    return (
        <div className="flex p-12" style={{ backgroundColor: "#E3E6ED" }}>
            <div className="basis-1/3">
                <h3>Title Slider</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="ml-6 basis-2/3 flex flex-col">
                <div ref={imageContainerRef}  className='flex overflow-x-hidden'>
                    <div className="flex-shrink-0 mr-6 rounded-md">
                    <Image
                        src="/img5.jpg"
                        css={{ h: "300px", br:'$lg' }}
                        objectFit="cover"
                        alt=''
                    />
                    </div>
                    <div className="flex-shrink-0 mr-6">
                        <Image
                        src="/img5.jpg"
                        css={{ h: "300px", br:'$lg' }}
                        objectFit="cover"
                        alt=''
                    />
                    </div>
                    <div className="flex-shrink-0 mr-6">
                        <Image
                        src="/img5.jpg"
                        css={{ h: "300px", br:'$lg' }}
                        objectFit="cover"
                        alt=''
                    />
                    </div>
                    <div className="flex-shrink-0 mr-6">
                        <Image
                        src="/img5.jpg"
                        css={{ h: "300px", br:'$lg' }}
                        objectFit="cover"
                        alt=''
                    />
                    </div>
                    <div className="flex-shrink-0 mr-6">
                        <Image
                        src="/img5.jpg"
                        css={{ h: "300px", br:'$lg' }}
                        objectFit="cover"
                        alt=''
                    />
                    </div>
                    <div className="flex-shrink-0">
                        <Image
                        src="/img5.jpg"
                        css={{ h: "300px", br:'$lg' }}
                        objectFit="cover"
                        alt=''
                    />
                    </div>
                </div>
                <div className="flex mt-4">
                    <Button
                    auto
                    color='primary'
                    className='mr-2'
                    icon={<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='currentColor' viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                }
                    onClick={() => scrollImages(-300)}
                    >
                    </Button>
                    <Button
                    auto
                    color='primary'
                    icon={<svg xmlns="http://www.w3.org/2000/svg" height="1em" fill='currentColor' viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>}
                    onClick={() => scrollImages(300)}
                    >
                    </Button>
                </div>
            </div>
            
        </div>
    )
}