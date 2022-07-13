import axios from 'axios'

export const getStaticPaths = async () => {
    const result = await axios('https://jsonplaceholder.typicode.com/users');
    const data = result.data

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const result = await axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = result.data

    return {
        props: {
            ninja: data
        }
    }
}


export default function Details({ ninja }) {
    return (
        <div>
            <h1>{ninja.name}</h1>
            <p>{ninja.email}</p>
            <p>{ninja.website}</p>
            <p>{ninja.address.city}</p>
        </div>
    )
}
