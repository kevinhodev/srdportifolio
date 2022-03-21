import { useCallback, useRef, useState, useEffect } from "react";
import classNames from "classnames";
import { useInViewport, useTheme } from "../../hooks";
import prerender from "../../utils/prerender";
import { numToMs } from "../../utils/style";
import "./index.css";

const Image = ({ className, style, reveal, delay = 0, src, ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const { themeType } = useTheme();
  const containerRef = useRef();
  const inViewport = useInViewport(containerRef, !src?.endsWith(".mp4"));

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={classNames("image", className, `image--${themeType}`, {
        "image--in-viewport": inViewport,
        "image--reveal": reveal,
      })}
      style={{ ...style, "--delay": numToMs(delay) }}
      ref={containerRef}
    >
      <ImageElements
        delay={delay}
        onLoad={onLoad}
        loaded={loaded}
        inViewport={inViewport}
        reveal={reveal}
        src={src}
        {...rest}
      />
    </div>
  );
};

const ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeHolder,
  delay,
  src,
  alt,
  reveal,
  ...rest
}) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [placeholderSize, setPlaceholderSize] = useState();
  const placeholderRef = useRef();
  const imgSrc = src || srcSet?.split(" ")[0];
  const showFullRes = !prerender && inViewport;

  useEffect(() => {
    const plugePlaceHolder = () => {
      setShowPlaceholder(false);
    };

    const placeholderElement = placeholderRef.current;
    placeholderElement.addEventListener("transitionend", plugePlaceHolder);

    return function cleanUp() {
      if (placeholderElement) {
        placeholderElement.removeEventListener(
          "transitionend",
          plugePlaceHolder
        );
      }
    };
  }, []);

  useEffect(() => {
    const { width, height } = placeholderRef.current;

    if (width && height) {
      setPlaceholderSize({ width, height });
    }
  }, []);

  const handlePlaceHolderLoad = (event) => {
    const { width, height } = event.target;
    setPlaceholderSize({ width, height });
  };

  return (
    <div
      className={classNames("image__element-wrapper", {
        "image__element-wrapper--reveal": reveal,
        "image__element-wrapper--in-viewport": inViewport,
      })}
      style={{ "--delay": numToMs(delay + 1000) }}
    >
      <img
        className={classNames("image__element", {
          "image__element--loaded": loaded,
        })}
        onLoad={onLoad}
        decoding="async"
        src={showFullRes ? imgSrc : undefined}
        srcSet={showFullRes ? srcSet : undefined}
        width={placeholderSize?.width}
        height={placeholderSize?.height}
        alt={alt}
        {...rest}
      />
      {showPlaceholder && (
        <img
          aria-hidden
          className={classNames("image__placeholder", {
            "image__placeholder--loaded": loaded,
          })}
          style={{ "--delay": numToMs(delay) }}
          ref={placeholderRef}
          src={placeHolder}
          onLoad={handlePlaceHolderLoad}
          width={placeholderSize?.width}
          height={placeholderSize?.height}
          decoding="async"
          alt=""
          role="presentation"
        />
      )}
    </div>
  );
};

export default Image;
