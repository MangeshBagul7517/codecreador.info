// ToastNotification.js
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastNotification = () => (
  <ToastContainer
    position="top-center"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    className="!z-50"
  />
);

export const showSuccessToast = (message) => {
  toast.success(message, {
    className: "bg-green-500 text-white rounded-md p-3 shadow-lg",
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    className: "bg-red-500 text-white rounded-md p-3 shadow-lg",
  });
};

export default ToastNotification;
