import styles from './styles.module.css'

export const AssetsComponent = () => {
	return (
		<div className={styles.assetsComponent}>
			<div className='section-header'>
				<span>ASSETS</span>
				<span>More Assets</span>
			</div>
			<div className='card-list'>
				<div className='card-item'>
					<h2 className='card-title'>Bitcoin</h2>
					<div className='card'>
						<div className='card-content'>
							<div>
								<span>$</span>
								<span>1820</span>
							</div>
							<div></div>
							<div className='card-footer'>
								<div>
									<div>Profit</div>
									<div>+ 2,87%</div>
								</div>
								<div>
									<div>Loss</div>
									<div>- 0,17%</div>
								</div>
								<div>
									<div>Neutral</div>
									<div>2,70%</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
