// styling
import styles from "./FeaturedItems.module.scss";

// local files
import { carousel } from "../../services/carousel";

// library imports
import Carousel from "react-bootstrap/Carousel";

const FeaturedItems = () => {
    return (
        <div className={styles.FeaturedItems}>
            <Carousel>
                {carousel.map((image, id) => {
                    return (
                        <Carousel.Item key={id} interval={8000}>
                            <img
                                src={image.src}
                                className={styles.FeaturedItems__Images}
                                alt={image.alt}
                            />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default FeaturedItems;
