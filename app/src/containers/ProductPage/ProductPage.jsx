// styling
import styles from "./ProductPage.module.scss";

// library imports
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Carousel from "react-bootstrap/Carousel";

// local
import { getProductByID } from "../../services/server";

const ProductPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [size, setSize] = useState([]);
    const [images, setImages] = useState([]);

    const getItem = async () => {
        const info = await getProductByID(id);
        setItem(info);
    };

    const getSizeButton = async () => {
        const info = await getProductByID(id);
        const sizes = info.size;
        setSize(sizes);
    };

    const getImages = async () => {
        const info = await getProductByID(id);
        const images = info.images;
        setImages(images);
    };

    console.log(images);

    useEffect(() => {
        getItem();
        getSizeButton();
        getImages();
    }, []);

    return (
        <div className={styles.ProductPage}>
            {/* gallery */}
            <div className={styles.ProductPage__gallery}>
                <Carousel>
                    {images.map((img) => {
                        return (
                            <Carousel.Item interval={90000}>
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
                        <p>some reviews can go here...</p>
                    </header>

                    {/* select size section */}
                    <section>
                        <p>Select size:</p>
                        {size.map((btn, index) => {
                            return (
                                <button
                                    key={index}
                                    className={styles.ProductPage__item_btn}
                                >
                                    {btn}
                                </button>
                            );
                        })}
                        <div className={styles.ProductPage__size_guide}>
                            Size Guide
                        </div>
                    </section>

                    <section className={styles.ProductPage__item_incDec}>
                        <button> - </button> <input type="text" />
                        <button> + </button>
                    </section>

                    <section section className={styles.ProductPage__item_shop}>
                        <button>Add to cart</button>
                        <button>Add to wishlist</button>
                        <button>Find in store</button>
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
