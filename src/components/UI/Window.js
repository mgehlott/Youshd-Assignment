import React from 'react'
import ReactModal from 'react-modal';
import user from '../../data/users';
import photo from '../../assets/Ellipse1.png';

ReactModal.setAppElement("#root");;

function Window({ item, show, onClose }) {
    console.log('window');
    return (
        <ReactModal
            isOpen={show}
            onRequestClose={onClose}
            className={"Modal"}
            overlayClassName={"Overlay"}>
            <div className='modal-header'>
                <h3>Project Members</h3>
                <button className='close-btn' onClick={onClose}>X</button>
            </div>
            <ul>
                {user.map(u => {
                    return <li className='modal-item'>
                        <img src={u.path} alt={u.name} />
                        <div>
                            <p className='user-name'>{u.name}</p>
                            <p className='user-email'>{u.email}</p>
                        </div>
                    </li>
                })}
            </ul>

        </ReactModal>
    )
}

export default Window
