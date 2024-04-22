import "./App.css";
import dollar from "./assets/images/icon-dollar.svg";
import person from "./assets/images/icon-person.svg";

function App() {
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
              <h2 className="text-dark-grayish-cyan">Bill</h2>
              <div className="relative w-full bg-slate-100 rounded-md h-[3rem]">
                <span className="absolute w-4 h-4 top-[22px] left-[15px]">
                  <img src={dollar} alt="dollar icon" />
                </span>
                <input
                  type="number"
                  className="bg-transparent w-full h-full text-right  text-[24px] text-very-dark-cyan px-[15px] py-[8px] pl-[40px] outline-strong-cyan"
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-start gap-3">
              <h2 className="text-dark-grayish-cyan">Select Tip %</h2>
              <div className="grid gap-3 grid-cols-2 grid-rows-3 sm:grid-rows-2 sm:grid-cols-3 text-white text-[22px]">
                <div className=" py-[9px] bg-very-dark-cyan hover:bg-strong-cyan rounded-md cursor-pointer">
                  5%
                </div>
                <div className=" py-[9px] bg-very-dark-cyan hover:bg-strong-cyan rounded-md cursor-pointer">
                  10%
                </div>
                <div className=" py-[9px] bg-very-dark-cyan hover:bg-strong-cyan rounded-md cursor-pointer">
                  15%
                </div>
                <div className=" py-[9px] bg-very-dark-cyan hover:bg-strong-cyan rounded-md cursor-pointer">
                  25%
                </div>
                <div className=" py-[9px] bg-very-dark-cyan hover:bg-strong-cyan rounded-md cursor-pointer">
                  50%
                </div>
                <input
                  type="number"
                  className="text-center py-[5px] bg-slate-100 rounded-md outline-strong-cyan text-very-dark-cyan appearance-none"
                  placeholder="Custom"
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
                  className="bg-transparent w-full h-full text-right  text-[24px] text-very-dark-cyan px-[15px] py-[8px] pl-[40px] outline-strong-cyan no-spinners"
                  step="0"
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
                <p className="text-[35px] lg:text-[46px] leading-none">$0.00</p>
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
                <p className="text-[35px] lg:text-[46px] leading-none">$0.00</p>
              </div>
            </div>
            <button className="w-full py-3 rounded-md bg-strong-cyan hover:bg-strong-cyan">
              RESET
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default App;