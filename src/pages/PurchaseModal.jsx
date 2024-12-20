// src/components/PurchaseModal.js
import React, { useEffect, useRef } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

// eslint-disable-next-line react/prop-types
const PurchaseModal = ({ totalPrice, onClose }) => {
    const dialogRef = useRef(null);

  
    useEffect(() => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    }, []);

    // Close the modal when the dialog is dismissed
    const handleClose = () => {
        if (dialogRef.current) {
            dialogRef.current.close();
        }
        if (onClose) {
            onClose();
        }
    };

    return (
        <dialog ref={dialogRef} id="purchase_modal" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <AiOutlineCheckCircle className="text-green-500 text-6xl mx-auto" />
                <h3 className="font-bold text-xl mt-4 text-center">Payment Successful</h3>
                <p className="py-4 text-center text-gray-500">Thanks for your purchase.</p>
                <p className="text-gray-700 font-semibold text-center">Total: ${totalPrice}</p>
                <div className="modal-action">
                    <button
                        onClick={handleClose}
                        className="mt-6 bg-gray-200 hover:bg-gray-300 text-black font-medium py-2 px-4 rounded-lg w-full"
                    >
                        Close
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default PurchaseModal;
