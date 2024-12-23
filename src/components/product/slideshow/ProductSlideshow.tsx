'use client';

import { useState } from 'react';
import { Swiper as SwiperObjet } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './slideshow.css';
import Image from 'next/image';



interface Props {
    images: string[];
    title: string;
    className?: string;
}

export const ProductSlideshow = ({ images, title, className }: Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObjet>();

    return (
        <>
            <div className={className}>
                {/* swiper principal */}
           
                <Swiper
                    style={{
                        width:'50vw',
                        height:'800px',
                    }}
                    // {{
                    //     '--swiper-navigation-color': '#fff',
                    //     '--swiper-pagination-color': '#fff',
                    // } as React.CSSProperties
                    // }
                    spaceBetween={10}
                    navigation={true}
                    autoplay={{
                        delay: 2500
                    }}
                    thumbs={ {
                        swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null 
                    } }
                    modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                    className="mySwiper2"
                >
                    {
                        images.map(image => (
                            <SwiperSlide key={image}>
                                <Image
                                    width={1024}
                                    height={800}
                                    src={`/products/${image}`}
                                    alt={title}
                                    className='rounded-lg object-fill '
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                {/* swiper inferior */}
                <Swiper
                    style={{
                        width:'50vw',
                    }}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {
                        images.map(image => (
                            <SwiperSlide key={image}>
                                <Image
                                    width={300}
                                    height={300}
                                    src={`/products/${image}`}
                                    alt={title}
                                    className='rounded-lg object-fill'
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </>
    );
};