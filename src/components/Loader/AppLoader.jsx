import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import AnimationFile from "../../assets/animations/default-loader.json";
import styles from "./Loader.module.css";
import { Typography } from "@mui/material";

function AppLoader({ visible: isVisible = false }) {
  const [showLoader, setLoader] = useState(false);

  useEffect(() => {
    if (!!isVisible) {
      setLoader(true);
    } else {
      setLoader(false);
    }
  }, [isVisible]);

  if (!showLoader) return null;

  return (
    <div className={styles.loader}>
      <Lottie animationData={AnimationFile} loop={true} />
    </div>
  );
}

export default AppLoader;
