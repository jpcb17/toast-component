import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';
import { ToastsContext } from '../ToastProvider';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};


function Toast({children, variant, id}) {
  const Icon = ICONS_BY_VARIANT[variant];
  const {removeToast} = React.useContext(ToastsContext);

  const toastRef = React.useRef();


  return (
    <div className={`${styles.toast} ${styles[variant]}`} ref={toastRef}>
      <div className={`${styles[variant]} ${styles.iconContainer}`}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {children}
      </p>
      <button className={styles.closeButton} aria-label='dismiss message' aria-live='off'>
        <X size={24} onClick={() => removeToast(id)}/>
   
      </button>
    </div>
  );
}

export default Toast;
