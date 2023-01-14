import React from "react";

const Form = () => {
    return (
        <form className="mt-6">
            <div className="flex items-center">
                <input
                    type="text"
                    className="flex-1 border border-solid border-gray-200 py-3 pl-4 focus:outline-none"
                    placeholder="Enter Your Todo Name"
                    id="name"
                />
                <button
                    type="submit"
                    className="ml-2 rounded bg-cyan-600 py-3 px-6 text-white"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Form;
