import React, { useState } from 'react';

function Calci() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="w-auto h-screen mt-0 bg-neutral-600 md:bg-neutral-700">
      <div className="w-auto h-screen mt-0 ">
        <p className="text-center text-4xl text-green-300 md:text-lime-300 font-mono font-bold">Calculator!</p>
        <div className="m-auto mb-3 w-45 mt-32 grid h-auto  sm:w-2/3 rounded-3xl bg-red-200 sm:h-auto md:w-2/3 lg:w-1/2 sm:bg-red-300 hover:shadow-red-200 drop-shadow-lg shadow-xl">
          <input
            id="I2"
            type="text"
            placeholder="0"
            className="m-auto sm:h-16 mt-3 w-2/3 border shadow-md rounded-lg bg-cyan-100 h-11 pl-2 pd-2 text-gray-600  hover:shadow-cyan-200 text-3xl font-extrabold"
            value={input}
            readOnly
          />
          <div className="m-auto">
            <button
              className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-yellow-200 font-semibold text-violet-900 shadow-lg"
              onClick={() => handleButtonClick('7')}
            >
              7
            </button>
            <button
              className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-yellow-200 font-semibold text-violet-900 shadow-lg"
              onClick={() => handleButtonClick('8')}
            >
              8
            </button>
            <button
              className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-yellow-200 font-semibold text-violet-900 shadow-lg"
              onClick={() => handleButtonClick('9')}
            >
              9
            </button>
            <button
              className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-lime-400 font-semibold text-violet-900 shadow-lg"
              onClick={() => handleButtonClick('+')}
            >
              +
            </button>
          </div>
                

        <div className="m-auto">
        <button
            className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-yellow-200 font-semibold text-violet-900 shadow-lg"
            onClick={() => handleButtonClick('4')}
        >
            4
        </button>
        <button
            className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-yellow-200 font-semibold text-violet-900 shadow-lg"
            onClick={() => handleButtonClick('5')}
        >
            5
        </button>
        <button
            className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-yellow-200 font-semibold text-violet-900 shadow-lg"
            onClick={() => handleButtonClick('6')}
        >
            6
        </button>
        <button
            className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-lime-400 font-semibold text-violet-900 shadow-lg"
            onClick={() => handleButtonClick('-')}
        >
            -
        </button>
        </div>

        <div className="m-auto">
        <button
            className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-yellow-200 font-semibold text-violet-900 shadow-lg"
            onClick={() => handleButtonClick('1')}
        >
            1
        </button>
        <button
            className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-yellow-200 font-semibold text-violet-900 shadow-lg"
            onClick={() => handleButtonClick('2')}
        >
            2
        </button>
        <button
            className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-yellow-200 font-semibold text-violet-900 shadow-lg"
            onClick={() => handleButtonClick('3')}
        >
            3
        </button>
        <button
            className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-lime-400 font-semibold text-violet-900 shadow-lg"
            onClick={() => handleButtonClick('*')}
        >
            *
        </button>
        </div>

        <div className="m-auto mb-4">
        <button
            className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-red-400 font-semibold text-violet-900 shadow-lg"
            onClick={() => handleButtonClick('C')}
        >
            C
        </button>
        <button
            className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-yellow-200 font-semibold text-violet-900 shadow-lg"
            onClick={() => handleButtonClick('0')}
        >
            0
        </button>
        <button
            className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-lime-400 font-semibold text-violet-900 shadow-lg"
            onClick={() => handleButtonClick('=')}
        >
            =
        </button>
        <button
            className="w-10 h-10 sm:h-16 text-3xl hover:bg-indigo-400 mt-2 mr-2 sm:w-20 rounded-xl border bg-lime-400 font-semibold text-violet-900 shadow-lg"
            onClick={() => handleButtonClick('/')}
        >
            /
        </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Calci;