import React from "react";

const Footer = () => {
    return (
        <div className="mt-5 flex items-start rounded bg-[#eee] py-4 px-3">
            <div className="flex-1">
                <p>Filter By: </p>
            </div>
            <form className="flex items-center space-x-3 text-base">
                <div>
                    <input
                        type="radio"
                        className="mr-1"
                        name="filter"
                        id="all"
                    />
                    <label htmlFor="all">All</label>
                </div>
                <div>
                    <input
                        type="radio"
                        className="mr-1"
                        name="filter"
                        id="completed"
                    />
                    <label htmlFor="completed">Completed</label>
                </div>
                <div>
                    <input
                        type="radio"
                        className="mr-1"
                        name="filter"
                        id="uncompleted"
                    />
                    <label htmlFor="uncompleted">Uncompleted</label>
                </div>
            </form>
        </div>
    );
};

export default Footer;
