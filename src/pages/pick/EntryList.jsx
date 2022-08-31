import { useState } from 'react'
import './pick.css'
const EntryList = (props) => {
    const [name, setName] = useState('')

    const submitHandler = () => {
        name && props.addEntry(name)
        setName('')
    }

    return (
        <div className='input-container'>
            <input
                className='input'
                type='text'
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='Enter item name' />
            <div className='button-container'>
                <button onClick={submitHandler}>Cancel</button>
                <button onClick={submitHandler}>Add</button>
            </div>
        </div>
    )
}

export default EntryList