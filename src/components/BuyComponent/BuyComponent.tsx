import { useEffect, useState } from 'react'
import { useGetCurrenciesQuery } from '../../store/services/cryptoApi'
import styles from './styles.module.css'

export const BuyComponent = () => {
	const [selectedCurrency, setSelectedCurrency] = useState('')
	const [amount, setAmount] = useState<number>(0)
	const [wallet, setWallet] = useState<{ currency: string; amount: number }[]>(
		[]
	)

	const { data, error, isLoading } = useGetCurrenciesQuery(null)

	useEffect(() => {
		setSelectedCurrency(data?.result.name)
	}, [data])

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selected = data?.result.find(
			currency => currency.name === e.target.value
		)
		setSelectedCurrency(selected || null)
	}

	const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAmount(Number(e.target.value))
	}

	const handleBuy = () => {
		if (selectedCurrency && amount > 0) {
			setWallet([...wallet, { currency: selectedCurrency, amount }])
			setAmount(0)
		}
	}

	console.log(data)

	return (
		<div className={styles.buyComponent}>
			<input
				type='text'
				placeholder='amount'
				value={amount}
				onChange={handleAmountChange}
				className={styles.input}
			/>
			<input type='text' disabled />
			<select
				value={selectedCurrency?.name}
				onChange={handleSelectChange}
				className={styles.select}
			>
				{data?.result.map(result => (
					<option key={result.id} value={result.name}>
						{result.name}
					</option>
				))}
			</select>
			<button onClick={handleBuy} className={styles.button}>
				buy
			</button>
		</div>
	)
}
