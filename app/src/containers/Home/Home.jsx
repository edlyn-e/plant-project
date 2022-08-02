// styling
import styles from "./Home.module.scss";

// local pages
import FeaturedItems from "../FeaturedItems/FeaturedItems";
import ProductGrid from "../ProductGrid";

const Home = () => {
    return (
        <div className={styles.Home}>
            <FeaturedItems />
            <section className={styles.Home__section}>
                <h1>OUR CLOTHING</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quod consectetur, laboriosam neque consequatur tempore
                    accusamus. Esse, ullam illo eligendi id pariatur similique
                    deserunt expedita, voluptate cupiditate, sed placeat amet
                    animi? Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Odit repudiandae incidunt labore quidem error ut unde
                    praesentium. Quidem, temporibus ratione. Ducimus error sunt
                    molestias esse praesentium deleniti saepe placeat eligendi.
                </p>
            </section>

            <ProductGrid />
        </div>
    );
};

export default Home;
