import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ActivityComplete = () => {

    const openToast = () => toast.success("Wow Activity Completed!!");
    return (
        <div>
            <button onClick={openToast} className="btn bg-green-500 border-0 w-full mb-10">Activity Completed</button>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default ActivityComplete;