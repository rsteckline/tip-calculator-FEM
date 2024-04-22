import { useEffect } from "react";
import "./App.css";
import dollar from "./assets/images/icon-dollar.svg";
import person from "./assets/images/icon-person.svg";
import { useState } from "react";
import { useRef } from "react";

function App() {
  const billInputRef = useRef(null);
  const peopleInputRef = useRef(null);

  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");

  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const onChangeBill = (e) => {
    setBill(e.target.value);
  };
  const onChangeTip = (e) => {
    setTip(e.target.value);
  };
  const onChangePeople = (e) => {
    setPeople(e.target.value);
  };

  const handleReset = () => {
    setBill("");
    setTip("");
    setPeople("");

    setTipAmount(0);
    setTotal(0);
  };

  useEffect(() => {
    if (bill == "0") {
      billInputRef.current.classList.add("outline-orange-500");
    } else {
      billInputRef.current.classList.remove("outline-orange-500");
    }
    if (people == "0") {
      peopleInputRef.current.classList.add("outline-orange-500");
    } else {
      peopleInputRef.current.classList.remove("outline-orange-500");
    }

    if (bill && tip && people) {
      setTipAmount((bill * tip) / 100 / people);
      setTotal(bill / people + (bill * tip) / 100 / people);
    }
  }, [bill, tip, people]);

  return (
    <main className="w-full h-screen flex justify-center lg:items-center bg-dark-blue">
      <div className="flex flex-col gap-8 lg:gap-10 max-w-[520px] lg:mx-[1.3rem] mt-[48px] lg:mt-[2rem] lg:mb-[4rem] lg:max-w-[928.2px]">

      <div className="w-full text-center text-[30px] lg:text-[25px] tracking-[0.25em] text-dark-grayish-cyan">
          <h1>
            SPLI
            <br />
            TTER
          </h1>
        </div>

        <div className="w-full lg:h-[478px] h-full grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 p-[38px] bg-white text-center rounded-t-3xl lg:rounded-b-3xl gap-[3rem]">
          <div className="flex flex-col justify-between h-full row-span-2 lg:row-auto">
            <div className="w-full flex flex-col items-start gap-3">
              <div className="flex justify-between w-full">
                <h2 className="text-dark-grayish-cyan">Bill</h2>
                <p className={`text-orange-600 ${tip === 0 ? "hidden" : ""}`}>
                  Can't be zero
                </p>
              </div>
              <div className="relative w-full bg-slate-100 rounded-md h-[3rem]">
                <span className="absolute w-4 h-4 top-[22px] left-[15px]">
                  <img src={dollar} alt="dollar icon" />
                </span>
                <input
                  type="number"
                  ref={billInputRef}
                  className="bg-transparent w-full h-full text-right  text-[24px] text-very-dark-cyan px-[15px] py-[8px] pl-[40px] outline-strong-cyan"
                  placeholder="0"
                  value={bill}
                  onChange={onChangeBill}
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-start gap-3">
              <h2 className="text-dark-grayish-cyan">Select Tip %</h2>
              <div className="grid gap-3 grid-cols-2 grid-rows-3 sm:grid-rows-2 sm:grid-cols-3 text-white text-[22px]">
              <button
                  className={`py-[9px] bg-very-dark-cyan hover:bg-strong-cyan rounded-md cursor-pointer ${
                    tip === 5 && "bg-strong-cyan"
                  }`}
                  onClick={() => setTip(5)}
                >
                  5%
                </button>
                <button
                  className={`py-[9px] bg-very-dark-cyan hover:bg-strong-cyan rounded-md cursor-pointer ${
                    tip === 10 && "bg-strong-cyan"
                  }`}
                  onClick={() => setTip(10)}
                >
                  10%
                </button>
                <button
                  className={`py-[9px] bg-very-dark-cyan hover:bg-strong-cyan rounded-md cursor-pointer ${
                    tip === 15 && "bg-strong-cyan"
                  }`}
                  onClick={() => setTip(15)}
                >
                  15%
                </button>
                <button
                  className={`py-[9px] bg-very-dark-cyan hover:bg-strong-cyan rounded-md cursor-pointer ${
                    tip === 25 && "bg-strong-cyan"
                  }`}
                  onClick={() => setTip(25)}
                >
                  25%
                </button>
                <button
                  className={`py-[9px] bg-very-dark-cyan hover:bg-strong-cyan rounded-md cursor-pointer ${
                    tip === 50 && "bg-strong-cyan"
                  }`}
                  onClick={() => setTip(50)}
                >
                  50%
                </button>
                <input
                  type="number"
                  className="text-center py-[5px] bg-slate-100 rounded-md outline-strong-cyan text-very-dark-cyan appearance-none"
                  placeholder="Custom"
                  value={tip}
                  onChange={onChangeTip}
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-start gap-3">
              <h2 className="text-dark-grayish-cyan">Number of people</h2>
              <div className="relative w-full bg-slate-100 rounded-md h-[3rem]">
                <span className="absolute w-4 h-4 top-[15px] left-[15px]">
                  <img src={person} alt="person icon" />
                </span>
                <input
                  type="number"
                  ref={peopleInputRef}
                  className="bg-transparent w-full h-full text-right  text-[24px] text-very-dark-cyan px-[15px] py-[8px] pl-[40px] outline-strong-cyan no-spinners"
                  placeholder="0"
                  value={people}
                  onChange={onChangePeople}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[50px] lg:justify-between bg-very-dark-cyan w-full h-full p-[25px] lg:p-[2.5rem] rounded-2xl">
            <div className="flex flex-col gap-[35px] lg:gap-[1.5rem] mt-[.3125rem]">
              <div className="flex justify-between text-strong-cyan">
                <div className="text-start">
                  <h3 className="text-white text-[14px] lg:text-[1rem]">
                    Tip Amount
                  </h3>
                  <p className="text-[11px] lg:text-[12.5px] text-grayish-cyan">
                    / person
                  </p>
                </div>
                <p className="text-[35px] lg:text-[46px] leading-none">
                  ${tipAmount.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between text-strong-cyan">
                <div className="text-start">
                  <h3 className="text-white text-[14px] lg:text-[1rem]">
                    Total
                  </h3>
                  <p className="text-[11px] lg:text-[12.5px] text-grayish-cyan">
                    / person
                  </p>
                </div>
                <p className="text-[35px] lg:text-[46px] leading-none">
                  ${total.toFixed(2)}
                </p>
              </div>
            </div>
            <button
              className="w-full py-3 rounded-md bg-green-400 hover:bg-strong-cyan"
              onClick={handleReset}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default App;