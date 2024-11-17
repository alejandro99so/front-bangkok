import styles from "../styles/circularLayout.module.css";

type PentagonLayoutProps = {
  centralImage: string;
  surroundingImages: { src: string; label: string }[];
};

export default function PentagonLayout({
  centralImage,
  surroundingImages,
}: PentagonLayoutProps) {
  return (
    <div className={styles.pentagonContainer}>
      {/* Imagen central */}
      <div className={styles.centralImage}>
        <img src={centralImage} alt="Central" />
      </div>

      {/* Imágenes alrededor */}
      {surroundingImages.map((image, index) => (
        <div
          key={index}
          className={`${styles.surroundingImage} ${styles[`position${index}`]}`}
        >
          <img src={image.src} alt={image.label} />
          <p>{image.label}</p>
        </div>
      ))}
    </div>
  );
}
