import styles from './styles.module.css'

export const Statistics = () => {
	return (
		<div className={styles.statistics}>
			<div className='status'>
				<div className='status-header'>
					<span>Cryptocoin</span>
					<span>Updated</span>
					<span>Change</span>
					<span>Price</span>
				</div>
				<div className='status-item'></div>
			</div>
		</div>
	)
}
