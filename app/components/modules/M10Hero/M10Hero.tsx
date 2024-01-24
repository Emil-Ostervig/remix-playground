
import styles from "./M10Hero.module.css";
import { M010HeroModule } from "~/api/types";
import { ComponentShadeContext } from "~/context/ComponentShadeContext/ComponentShadeContext";

export type M10HeroProps = M010HeroModule;
export const M10Hero = ({
  image,
  video,
  headline,
  subHeadline,
  callToAction,
}: M10HeroProps) => {
  const hasMedia = !!(image || video);

  return (
    <div className={styles.container}>
      <ComponentShadeContext.Provider value={hasMedia ? "light" : "dark"}>
        <div className={styles.m10}>
          <div>
            <div className={styles.content}>
              {headline ? (
                <h1>
                  {headline}
                </h1>
              ) : null}
              {subHeadline ? (
                <p >{subHeadline}</p>
              ) : null}
              {callToAction?.url ? (
                <button
                  className={styles.link}
                >
                  {callToAction.title}
                </button>
              ) : null}
            </div>
          </div>
          {hasMedia && (
              <div className={styles.mediaWrapper}>
                {image && (
                  <img
                    src={image.src}
                    alt={image.alt || ""}
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                )}
              </div>
            )}
        </div>
      </ComponentShadeContext.Provider>
    </div>
  );
};
