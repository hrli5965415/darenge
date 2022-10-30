import { useEffect, useRef } from "react";

export const usePopupHook = () => {
  const popupsRef = useRef(null);
  const popupBtnsRef = useRef(null);
  const currentPopupRef = useRef(null);
  const currentPopupBtnRef = useRef(null);
  const isEventListenerRef = useRef(false);
  const isPopupBtnEventListenterRef = useRef(false);
  const myFunctionRef = useRef([]);

  const eventFuntion = (e, i) => {
    if (e.target.className === "popup-btn") {
      //click on btn to show popup
      if (!currentPopupRef.current) {
        currentPopupRef.current =
          popupBtnsRef.current[i].querySelector(".popup");
        currentPopupBtnRef.current = popupBtnsRef.current[i];

        currentPopupBtnRef.current.style.setProperty(
          "--popup-btn-after",
          "block"
        );

        currentPopupRef.current.classList.add("popup-show");

        if (currentPopupRef.current.getBoundingClientRect().x < 0) {
          currentPopupRef.current.style.transform = "translateX(85%)";
        } else if (currentPopupRef.current.getBoundingClientRect().x > 350) {
          currentPopupRef.current.style.transform = "translateX(50%)";
        }

        //click on btn to remove popup
      } else {
        currentPopupRef.current.classList.remove("popup-show");

        currentPopupBtnRef.current.style.setProperty(
          "--popup-btn-after",
          "none"
        );
        currentPopupBtnRef.current = null;
        currentPopupRef.current = null;
      }
    }
  };

  useEffect(() => {
    popupBtnsRef.current = document.getElementsByClassName("popup-btn");
    popupsRef.current = document.getElementsByClassName("popup");

    const functionWrapper = (e) => {
      if (
        currentPopupRef.current &&
        !e.target.classList.contains("popup-btn") &&
        !e.target.classList.contains("popup")
      ) {
        currentPopupRef.current.classList.remove("popup-show");
        currentPopupBtnRef.current.style.setProperty(
          "--popup-btn-after",
          "none"
        );

        currentPopupBtnRef.current = null;
        currentPopupRef.current = null;
      }
    };

    //only executing when there is no eventListener, to prevent duplicate eventListener
    window.addEventListener("click", functionWrapper);

    isEventListenerRef.current = true;

    for (let i = 0; i < popupBtnsRef.current.length; i++) {
      popupBtnsRef.current[i].addEventListener(
        "click",
        (myFunctionRef.current[i] = (e) => eventFuntion(e, i))
      );
    }

    // not sure if removing eventListener is necessary
    // return () => {
    //   console.log('useeffect return fire');
    //   for (let i = 0; i < popupBtns.length; i++) {
    //     console.log('remove forloop fire');
    //     popupBtns[i].removeEventListener('click', myFunctionRef.current = (e) => eventFuntion(e, i))
    //   }
    // }
    return () => {
      window.removeEventListener("click", functionWrapper);
      for (let i = 0; i < popupBtnsRef.current.length; i++) {
        popupBtnsRef.current[i].removeEventListener(
          "click",
          myFunctionRef.current[i]
        );
      }
    };
  });
};
