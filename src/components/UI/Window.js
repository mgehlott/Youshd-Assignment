import React from 'react'
import ReactModal from 'react-modal';

ReactModal.setAppElement("#App");;

function Window({ item, show, onClose }) {
    console.log('window');
    return (
        <ReactModal
            isOpen={show}
            onRequestClose={onClose}
            className={"Modal"}
            overlayClassName={"Overlay"}>
            <div className='close-modal-btn'>
                <h1 style={{ flex: "1 90%" }}>{item.title}</h1>
                <button className='close-btn' onClick={onClose}>X</button>
                <div>
                    <h2>Descriptioon</h2>
                    <p>lkdksfsdkf</p>
                </div>
            </div>

        </ReactModal>
    )
}

export default Window
