import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('')

    const handleUpClick = () => {
        // console.log('Converted to Uppercase: ' + text);
        const newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to Uppercase', 'success')
    }
    const handleLoClick = () => {
        // console.log('Converted to Uppercase: ' + text);
        const newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to Lowercase', 'success')
    }
    const handleOnChange = (event) => {
        // console.log('On change');
        setText(event.target.value)
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert('Text copied to clipboard', 'success')
    }
    const handleExtraSpaces = () => {
        // let newText = text.split(/\s+/) - if you want to merge paragraphs also
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert('Extra spaces removed', 'success')
    }
    const handleClearText = () => {
        setText('')
    }

    return (
        <>
            <div className='container' style={{ color: `${props.mode === 'dark' ? 'white' : 'black'}` }}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: `${props.mode === 'light' ? 'white' : '#46484b'}`, color: `${props.mode === 'dark' ? 'white' : 'black'}` }} value={text} placeholder="Enter text here" onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className={`mx-1 my-1 btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={handleUpClick} >Convert to Uppercase</button>
                <button disabled={text.length === 0} className={`mx-1 my-1 btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={handleLoClick} >Convert to Lowercase</button>
                <button disabled={text.length === 0} className={`mx-1 my-1 btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={handleCopy} >Copy Text</button>
                <button disabled={text.length === 0} className={`mx-1 my-1 btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                <button disabled={text.length === 0} className={`mx-1 my-1 btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={handleClearText} >Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: `${props.mode === 'dark' ? 'white' : 'black'}` }}>
                <h4>Your text summary</h4>
                <p>{text.split(/\s+/).filter(ele => ele.length !== 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).length} minutes read</p>
            </div>
        </>
    )
}
