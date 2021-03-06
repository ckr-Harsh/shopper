import React from 'react'
import datas from './localDB'
import SingleItem from './SingleItem'
import styles from './Homepage.module.css'

const HomePage = () => {
    return (
        <div className={styles.homepage}>
            {
                datas.map(data => {
                    return <SingleItem key={data.id} id={data.id} image={data.image}
                                        title={data.title} description={data.description} price={data.price} qty={data.qty}/>
                })
            }
        </div>
    )
}

export default HomePage
