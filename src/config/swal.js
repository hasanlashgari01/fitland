import Swal from "sweetalert2";

const Toast = Swal.mixin({
  title: "از حذف محصول اطمینان دارید؟",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#d33",
  confirmButtonText: "حذف",
  cancelButtonText: "لغو",
  reverseButtons: true,
});

export default Toast;
