import React from "react";
import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastsContext } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  console.log('playground');
  const [variant, setVariant] = React.useState("notice");
  const [message, setMessage] = React.useState("");
  const {createToast} = React.useContext(ToastsContext);


  const textAreaRef = React.useRef();

  function addToast(e) {
    e.preventDefault();
    createToast(message,variant);
    setMessage("");
    setVariant("notice");
    textAreaRef.current.focus();
  }


  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {<ToastShelf />}

      <form onSubmit={addToast}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                ref={textAreaRef}
                id="message"
                className={styles.messageInput}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((value) => (
                <label key={value} htmlFor={`variant-${value}`}>
                  <input
                    id={`variant-${value}`}
                    type="radio"
                    name="variant"
                    value={value}
                    checked={value === variant}
                    onChange={(e) => setVariant(e.target.value)}
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button type="submit">Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
