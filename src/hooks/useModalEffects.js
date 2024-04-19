import { useEffect } from "react";


function useModalEffects(modalRef, isOpen, close) {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target) && isOpen) {
        close();
      }
    };

    document.addEventListener("click", handleOutsideClick, true);

    return () => document.removeEventListener("click", handleOutsideClick, true);
  }, [isOpen, close, modalRef]);

  useEffect(() => {
    const handlePressEscape = (e) => {
      if (modalRef.current && e.key === "Escape" && isOpen) {
        close();
      }
    };

    document.addEventListener("keydown", handlePressEscape, true);

    return () => document.removeEventListener("keydown", handlePressEscape, true);
  }, [isOpen, close, modalRef]);
  
}

export default useModalEffects