import React from 'react';
import Popup from 'reactjs-popup';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindowClose} from "@fortawesome/free-regular-svg-icons";
import {Scrollbars} from "react-custom-scrollbars";
import {DialogItemCheck} from "./DialogItemCheck";

const AddDialogModal = (props) => {

    return (
        <Popup
            trigger={<button className="btn_send__new">Создать диалог</button>}
            modal
            nested
        >
            {close => (
                <div className="modal">
                    <button className="icon_template close" onClick={close}><FontAwesomeIcon icon={faWindowClose}/></button>
                    <div className="header">Начать диалог с...</div>
                    <hr/>
                    <div className="content">
                        <Scrollbars style={{width: 400, height: 450}}>
                        {' '}
                            <DialogItemCheck friendsList={props.friendsList} onAddDialog={props.onAddDialog}/>
                        </Scrollbars>
                    </div>
                </div>
            )}
        </Popup>
    );
};

export default AddDialogModal;



// import React, {Component, useState} from "react";
// import PureModal from 'react-pure-modal';
// import 'react-pure-modal/dist/react-pure-modal.min.css';
//
// export class AddDialog extends Component{
//
//     static toggleModal = () => {
//         this.setState(true);
//     }
//
//     render() {
//         const [modal, setModal] = useState(false);
//         return(
//             <PureModal
//                 header="Выберите друга"
//                 footer={<div><button>Cancel</button><button>Save</button></div>}
//                 isOpen={modal}
//                 closeButton='close'
//                 closeButtonPosition='bottom'
//                 onClose={() => {
//                     setModal(false)
//                     return true;
//                 }}
//             >
//                 <p>Your content</p>
//             </PureModal>
//         );
//     }
// }