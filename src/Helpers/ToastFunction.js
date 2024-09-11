import { Slide, toast } from "react-toastify";

export default function ToastFunction({ text, type = "info", duration }) {
  if (type === "info")
    return toast.info(text, {
      position: "bottom-center",
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

  if (type === "success")
    return toast.success(text, {
      position: "bottom-center",
      autoClose: duration,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
}
