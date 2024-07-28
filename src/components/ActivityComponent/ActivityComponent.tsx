import styles from './styles.module.css'

export const ActivityComponent = () => {
	return (
		<div className={styles.activityComponent}>
			<div className='section-header'>
				<span style={{ marginTop: 20 }}>ACTIVITY</span>
				<span>More Activity</span>
			</div>
			<div className='history-table'>
				<div className='table-header'></div>
				<div className='divider'></div>
				<div className='table-items'>
					<div className='table-item'></div>
					<div className='table-item'></div>
					<div className='table-item'></div>
				</div>
			</div>
		</div>
	)
}
