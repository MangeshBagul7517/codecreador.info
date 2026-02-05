import React from "react";

const Section2 = ({ data }) => {


    return (
        <div className="bg-white max-w-[1200px] mx-auto px-4   py-10  ">
            <h1 className="heading--xl  text-gray-800 mb-6">
                {data?.title}
            </h1>
            <p className="text-gray-600 mb-10 ">{data?.description}</p>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {data?.objectives?.map((objective, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md"
                    >
                        <div className="text-5xl mb-4">{objective.icon}</div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">
                            {objective.title}
                        </h2>
                        <p className="text-gray-600">{objective.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section2;
