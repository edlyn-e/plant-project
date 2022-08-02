// styling
import styles from "./Sorting.module.scss";

const Sorting = () => {
    return (
        <div className={styles.Sorting}>
            <select>
                <option default>SORT BY</option>
                <option>Recommended</option>
                <option>Newest</option>
                <option>Popular</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
            </select>

            <select>
                <option default>FILTER</option>
                <option>xx-small</option>
                <option>x-small</option>
                <option>small</option>
                <option>medium</option>
                <option>large</option>
                <option>x-large</option>
                <option>xx-large</option>
                <option>xxx-large</option>
            </select>

            <select>
                <option default>TYPE</option>
                <option>Tops</option>
                <option>Outerwear</option>
                <option>Bottoms</option>
            </select>

            <select>
                <option default>MATERIAL</option>
                <option>Cotton</option>
                <option>Leather</option>
                <option>Denim</option>
                <option>Acrylic</option>
                <option>Sustainable</option>
            </select>

            <select>
                <option default>COLOUR</option>
                <option>Neutrals</option>
                <option>Darks</option>
                <option>Lights</option>
                <option>Warm</option>
                <option>Cool</option>
            </select>
        </div>
    );
};

export default Sorting;
