import styles from "../../styles/Ninjas.module.css";
import axios from "axios";
import Link from 'next/link'

export const getStaticProps = async () => {
    const result = await axios(
        "https://jsonplaceholder.typicode.com/users"
    );
    const data = await result.data
    return { props: { ninjas: data } }
};

export default function index({ ninjas }) {
    return (
        <div>
            <h1>All Ninjas</h1>
            {ninjas.map(ninja => (
                <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
                    <a className={styles.single}>
                        <h3>{ninja.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
    );
}
