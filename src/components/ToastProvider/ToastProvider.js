import React from "react";
import useKeydown from "../../hooks/use-keydown";

export const ToastsContext = React.createContext();
function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        variant,
        message,
      },
    ];
    setToasts(nextToasts);
  }

  function removeToast(id) {
    const nextToasts = toasts.filter((toast) => id !== toast.id);
    setToasts(nextToasts);
  }

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  },[]);

  useKeydown('Escape',handleEscape);

  

  return (
    <ToastsContext.Provider value={{ toasts, createToast, removeToast }}>
      {children}
    </ToastsContext.Provider>
  );
}

export default ToastProvider;
