import Carousel from "react-bootstrap/Carousel";
import styles from "./FeaturedItems.module.scss";

const FeaturedItems = ({ imageList }) => {
    return (
        <div className={styles.FeaturedItems}>
            <Carousel fade>
                <Carousel.Item interval={1500}>
                    {imageList.map((image, id) => {
                        return (
                            <img
                                key={id}
                                src={image.src}
                                className={styles.FeaturedItems__Images}
                                alt={image.alt}
                            />
                        );
                    })}
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default FeaturedItems;
