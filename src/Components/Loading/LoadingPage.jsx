import React from "react";

const LoadingPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-20 ">
        <div className="relative w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-2 left-2 w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin-slow"></div>
        </div>

        <p className="mt-8 text-2xl font-semibold text-blue-700 animate-pulse tracking-wide">
          LOADING PAGE PLEASE WAIT
        </p>

        <div className="flex space-x-2 mt-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-150"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
