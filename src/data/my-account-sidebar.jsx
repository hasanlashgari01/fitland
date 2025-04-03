import {
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineClipboardDocumentList,
  HiOutlineHeart,
  HiOutlineMapPin,
  HiOutlineUserCircle,
} from "react-icons/hi2";

export const items = [
  {
    id: 1,
    title: "حساب کاربری",
    path: "dashboard",
    icon: <HiOutlineUserCircle size={20} />,
  },
  {
    id: 2,
    title: "تاریخچه سفارشات",
    path: "orders",
    icon: <HiOutlineClipboardDocumentList size={20} />,
  },
  {
    id: 3,
    title: "علاقه مندی ها",
    path: "likes",
    icon: <HiOutlineHeart size={20} />,
  },
  {
    id: 4,
    title: "آدرس ها",
    path: "address",
    icon: <HiOutlineMapPin size={20} />,
  },
  {
    id: 5,
    title: "دیدگاه‌ها و نظرات",
    path: "comments",
    icon: <HiOutlineChatBubbleLeftEllipsis size={20} />,
  },
];
