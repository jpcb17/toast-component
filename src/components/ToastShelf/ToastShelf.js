import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastsContext } from "../ToastProvider";

function ToastShelf() {
  console.log("shelf");
  const { toasts } = React.useContext(ToastsContext);

  return (
    <ol className={styles.wrapper} role="region" aria-live="polite">
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.variant} id={toast.id}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
