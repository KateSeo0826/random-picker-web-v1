import { useState } from 'react'
import EntryList from './EntryList'
import Button from '../../shared-component/button/button'
import './pick.css'
const Pick = () => {
	const [entryList, setEntryList] = useState([])
	const [randomEntry, setRandomEntry] = useState(null)
	const [duplicateOn, setDuplicateOn] = useState(false)
	const [isShown, setIsShown] = useState(false)
	const addEntry = name => {
		setEntryList((entryList) => {
			return [name, ...entryList]
		})
		console.log(name)
	}

	const removeEntry = id => {
		const newEntry = [...entryList]
		newEntry.splice(id, 1)
		setEntryList(newEntry)
	}

	const pickRandomEntry = () => {
		let newEntry = [...new Set(entryList)]

		if (duplicateOn) newEntry = [...entryList]

		setRandomEntry(newEntry.sort((e1, e2) => 0.5 - Math.random())[0])
		console.log(entryList, newEntry)
	}
	const handleClick = () => {
		setIsShown(prevState => !prevState)
	}
	return (
		<>
			<div className='two-button-box'>
				<div className='add-item-box'>
					<h2>New Item</h2>
					<button onClick={handleClick}>ADD Items</button>

				</div>
				<div className='duplicate-box'>
					<h2>Duplicate</h2>
					<button onClick={() => setDuplicateOn(!duplicateOn)}>{!duplicateOn ? 'On' : 'Off'}</button>
				</div>
			</div>
			<div className='item-container'>
				{entryList.map((name, id) => (
					<ul key={id}>
						<li >{name}</li>
						<button onClick={() => removeEntry(id)}  >X</button>
					</ul>
				))
				}
			</div>
			{isShown && (
				<EntryList addEntry={addEntry} />
			)}
			<div className='randomItem-box'>
				<h2>{randomEntry}</h2>
			</div>
			<div className='pick-button-box'>
				<Button mode onClick={pickRandomEntry}>Pick</Button>
			</div>
		</>
	)
}

export default Pick
