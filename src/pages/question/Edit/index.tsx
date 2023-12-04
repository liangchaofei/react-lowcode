import React, { FC } from 'react'
import EditCanvas from './EditCanvas'
import styles from './index.module.scss'

const Edit: FC = () => {
    return (
        <div className={styles.container}>
            <div>header</div>
            <div className={styles['content-wrapper']}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        left
                    </div>
                    <div className={styles.main}>
                        <div className={styles['canvas-wrapper']}>
                            <EditCanvas />
                        </div>
                    </div>
                    <div className={styles.right}>
                        right
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit
