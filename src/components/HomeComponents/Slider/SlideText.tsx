// SlideText.tsx
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlickSettings } from '../../../types/type';

const SlideText = () => {
    const settings: SlickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,          // فعال‌سازی تغییر خودکار
        autoplaySpeed: 3000,    // تنظیم زمان نمایش هر اسلاید
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const texts = [
        <div className='flex justify-center items-center gap-3'>
            <img src="imgs/icons/icons-hand.png" className='w-10' alt="" />
            <p className='flex'>به سایت فاکتورینو خوش آمدید  </p>
        </div>,
        <div className='flex justify-center items-center gap-3' >
            <img src="imgs/icons/icons-receipt.png" className='w-10' alt="" />
            <p>ثبت فاکتور خرید و فروش در سریع ترین زمان ممکن</p>
        </div>
        ,
        <div className='flex justify-center items-center gap-3'>
            <img src="imgs/icons/icons-parchment.png" className='w-10' alt="" />
            <p>امکان ثبت تاریخ</p>
        </div>
        ,
        <div className='flex justify-center items-center gap-3'>
            <img src="imgs/icons/icons-update.png" className='w-10' alt="" />
            <p> امکان بروز رسانی در سریع ترین زمان ممکن </p>
        </div>
        ,
    ];

    return (
        <div className='flex justify-center items-center'>
            <div className='bg-gray-200 rounded-xl mt-10 h-20 w-[900px] text-center'>
                <div>
                    <Slider {...settings}>

                        {texts.map((text, index) => (

                            <div key={index} style={{ padding: '20px', textAlign: 'center' }}>
                                <h2 className='text-2xl font-extrabold mt-4'>{text}</h2>
                            </div>

                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default SlideText;