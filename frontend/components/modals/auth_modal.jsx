import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SessionFormSignUpContainer from '../session_form/session_form_signup_container';
import SessionFormLoginContainer from '../session_form/session_form_login_container';

const customStyles = {
  content : {
    top                   : '30%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class AuthModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e) {
    e.stopPropagation();
    e.preventDefault();
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

    render() {
       let formType;

       return (
         <div>
           {this.props.formType === "signup" ?
             <div>
             <button className="registerbutton" onClick={this.openModal}>Register</button>
               <Modal
                 isOpen={this.state.modalIsOpen}
                 onRequestClose={this.closeModal}
                 style={customStyles}
                 contentLabel="Example Modal"
               >
                 <button className="closebutton" onClick={this.closeModal}>X</button>
                 <SessionFormSignUpContainer formType={formType}/>
               </Modal>
             </div> : <div>
               <button className="myaccountbutton" onClick={this.openModal}>Sign in</button>
                 <Modal
                   isOpen={this.state.modalIsOpen}
                   onRequestClose={this.closeModal}
                   style={customStyles}
                   contentLabel="Example Modal"
                 >
                   <button className="closebutton" onClick={this.closeModal}>X</button>
                   <SessionFormLoginContainer formType={formType}/>
                 </Modal>
             </div>}
         </div>
       );
     }
   }

   export default AuthModal;
