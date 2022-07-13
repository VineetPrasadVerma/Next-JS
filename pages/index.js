import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/Head'

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Ninja List | Home
                </title>
            </Head>
            <div>
                <h1 className={styles.title}>Ninja List</h1>
                <p className={styles.text}>Lorem ipsum</p>
                <p className={styles.text}>Lorem ipsum</p>
                <p className={styles.text}>Lorem ipsum</p>
                <Link href="/ninjas/"><a className={styles.btn} >See Ninja Listing</a></Link>
            </div>
        </>
    )
}
