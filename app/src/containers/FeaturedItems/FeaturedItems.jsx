// styling
import styles from "./FeaturedItems.module.scss";

// local files
import { carousel } from "../../services/carousel";

const FeaturedItems = () => {
    return (
        <div className={styles.FeaturedItems}>
            {/* <Carousel>
                <Carousel.Item>
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
            </Carousel> */}

            <img src={carousel[3].src} alt={carousel[3].alt} />
        </div>
    );
};

export default FeaturedItems;
