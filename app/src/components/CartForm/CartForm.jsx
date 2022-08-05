// styling
import styles from "./CartForm.module.scss";

const CartForm = () => {
    return (
        <div className={styles.CartForm}>
            <form>
                <h2>Billing details</h2>
                <label htmlFor="name">Full name: </label>
                <input
                    type="text"
                    name="name"
                    placeholder="enter your full name"
                    required
                />
                <label htmlFor="email">Email: </label>
                <input
                    type="text"
                    name="email"
                    placeholder="enter your email address"
                    required
                />
                <label htmlFor="address">Address: </label>
                <input
                    type="text"
                    name="address"
                    placeholder="enter your billing address"
                    required
                />

                <h2>Payment method</h2>
                <label htmlFor="cardNo">Card number: </label>
                <input
                    type="number"
                    name="cardNo"
                    placeholder="0000 0000 0000 0000"
                    required
                />
                <label htmlFor="expiry">Expiry: </label>
                <input
                    type="number"
                    name="expiry"
                    placeholder="MM/YYYY"
                    required
                />
                <label htmlFor="securityCode">Security code: </label>
                <input
                    type="number"
                    name="securityCode"
                    placeholder="XXX"
                    required
                />
            </form>

            <p>
                By clicking the button, you agree to the
                <a href="https://www.termsandconditionsgenerator.com/">
                    Terms and Conditions
                </a>
                .
            </p>
            <button>PLACE ORDER</button>
        </div>
    );
};

export default CartForm;
