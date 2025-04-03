import { HiOutlineCreditCard, HiOutlineDevicePhoneMobile, HiOutlineShieldCheck, HiOutlineTruck } from "react-icons/hi2";

export const roles = [
  {
    id: 1,
    title: "شرایط ارسال",
    description: "حدود ۲ الی ۶ روز کاری",
    icon: <HiOutlineTruck size={30} />,
  },
  {
    id: 2,
    title: "ضمانت کالا",
    description: "تا ۷ روز ضمانت عودت وجه",
    icon: <HiOutlineShieldCheck size={30} />,
  },
  {
    id: 3,
    title: "پشتیبانی",
    description: "پشتیبانی ۲۴ ساعته از تلگرام",
    icon: <HiOutlineDevicePhoneMobile size={30} />,
  },
  {
    id: 4,
    title: "پرداخت",
    description: "پرداخت امن از درگاه مطمئن",
    icon: <HiOutlineCreditCard size={30} />,
  },
];
