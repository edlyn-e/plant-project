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
                        <Carousel.Item key={id} interval={5000}>
                            <img
                                src={image.src}
                                className={styles.FeaturedItems__Images}
                                alt={image.alt}
                            />
                        </Carousel.Item>
                    );
                })}

                {/* <Carousel.Item>
                    <img
                        src={carousel[3].src}
                        alt={carousel[3].alt}
                        className={styles.FeaturedItems__Images}
                    />
                </Carousel.Item> */}
            </Carousel>
            {/* 
            <img
                src={carousel[3].src}
                alt={carousel[3].alt}
                className={styles.FeaturedItems__Images}
            /> */}
        </div>
    );
};

export default FeaturedItems;
