import { useRef } from "react";
import { populars, services } from "../../data/footer-links";
import FooterLinks from "./footer-links";

const Footer = () => {
  const textRef = useRef(null);

  const moreHandler = () => {
    if (textRef.current) {
      const { style } = textRef.current;

      if (!style.height || style.height === 56 + "px") {
        style.height = textRef.current.scrollHeight + "px";
      } else {
        style.height = 56 + "px";
      }
    }
  };

  return (
    <footer className="bg-sky-950 mt-32 px-9.5 pt-7.5 pb-12 text-white lg:py-17.5">
      <div className="container">
        <div className="flex flex-col">
          <div className="lg:flex lg:flex-wrap lg:flex-row-reverse">
            <div className="mb-10">
              <p>برای دریافت تخفیف های بیشتر ما را دنبال کنید!</p>
              <div className="mt-4 mb-8 h-10"></div>
              <div>
                <h3>خبرنامه فیت‌لند</h3>
                <label htmlFor="">
                  <input type="text" />
                </label>
              </div>
            </div>

            <div className="flex h-55 flex-1 gap-10">
              <FooterLinks data={populars} />
              <FooterLinks data={services} />
            </div>
          </div>

          <div>
            <div className="lg:mt-16 lg:w-162.5">
              <h3>فروشگاه اینترنتی فیت‌لند</h3>
              <p
                className="mt-4 overflow-hidden text-justify text-sm leading-loose text-neutral-300 transition-all max-lg:h-14"
                ref={textRef}
              >
                فروشگاه لوازم ورزشی فیت‌لند در سال 1403 کار خود را به صورت حرفه ای آغاز کرد و با هدف ارائه جدیدترین
                محصولات ورزشی از لوازم فوتبال، فوتسال، والیبال، بسکتبال، تنیس و... همچنین پوشاک ورزشی و تجهیزات سفر، از
                برند های معتبر دنیا در محیطی کاربرپسند، قابل اطمینان و با مجربترین مشاوران و کارشناسان ورزشی فعالیت می
                کند. فروشگاه فیت‌لند دارای نماد اعتماد از وزارت صنعت معدن و تجارت می باشد و تمامی محصولات خود را با 7
                روز ضمانت بازگشت همراه با گارانتی اصالت و سلامت فیزیکی، با سریع ترین روش های ارسال به سراسر ایران در
                اختیار مشتریان خود قرار می دهد.
              </p>
              <div className="mt-2 flex cursor-pointer justify-center select-none lg:hidden" onClick={moreHandler}>
                بیشتر
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
