// styling
import styles from "./ProductPage.module.scss";

// library imports
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Carousel from "react-bootstrap/Carousel";
import { FaRegStar } from "react-icons/fa";

// local
import { getProductByID } from "../../services/server";
import ProductInput from "../../components/ProductInput/ProductInput";

const ProductPage = () => {
    // Refactoring:
    // reduce repetition where possible.
    // i.e. check what you actually need.
    // is 'getImages' needed? What does getItem retrieve from the database?

    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [images, setImages] = useState([]);

    const getItem = async () => {
        const info = await getProductByID(id);
        setItem(info);
    };

    const getImages = async () => {
        const info = await getProductByID(id);
        const images = info.images;
        setImages(images);
    };

    useEffect(() => {
        getItem();
        getImages();
    }, []);

    return (
        <div className={styles.ProductPage}>
            <div className={styles.ProductPage__gallery}>
                <Carousel>
                    {images.map((img, index) => {
                        return (
                            <Carousel.Item interval={90000} key={index}>
                                <img
                                    src={img}
                                    alt="alt text"
                                    className={
                                        styles.ProductPage__gallery_image
                                    }
                                />
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </div>
            <div className={styles.ProductPage__item}>
                <article className={styles.ProductPage__item_description}>
                    {/* header section - name, price, reviews */}
                    <header>
                        <h4 className={styles.ProductPage__item_name}>
                            {item.name}
                        </h4>
                        <h3 className={styles.ProductPage__item_price}>
                            ${item.price}
                        </h3>
                        <p>
                            <FaRegStar /> <FaRegStar /> <FaRegStar />{" "}
                            <FaRegStar /> <FaRegStar /> <br />
                            (No reviews yet)
                        </p>
                    </header>

                    {/* select size section */}
                    <section>
                        <ProductInput product={item} id={id} />
                    </section>

                    <section section className={styles.ProductPage__item_info}>
                        <h5>Description: </h5>
                        <p>{item.description}</p>

                        <h5>Care Instructions:</h5>
                        <p>{item.description}</p>
                    </section>
                </article>
            </div>
        </div>
    );
};

export default ProductPage;
