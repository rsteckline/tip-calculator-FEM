import "./App.css";
import dollar from "./assets/images/icon-dollar.svg";
import person from "./assets/images/icon-person.svg";

function App() {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-dark-blue">
      <div className="flex flex-col gap-10 max-w-[928.2px] m-[1.3rem] mb-[4rem] mt-[4rem]">
        <div className="w-full text-center text-[30px] tracking-[0.4em] text-dark-grayish-cyan">
          <h1>
            SPLI
            <br />
            TTER
          </h1>
        </div>

        <div className="w-full h-[478px] grid grid-cols-2 p-[38px] bg-white text-center rounded-3xl gap-[3rem]">
          <div className="flex flex-col justify-between h-full">
            <div className="w-full flex flex-col items-start gap-3">
              <h2 className="text-dark-grayish-cyan">Bill</h2>
              <div className="relative w-full bg-slate-100 rounded-md h-[3rem]">
                <span className="absolute w-4 h-4 top-[22px] left-[15px]">
                  <img src={dollar} alt="dollar icon" />
                </span>
                <input type="text" className="bg-transparent w-full h-full text-right  text-[24px] text-very-dark-cyan px-[15px] py-[8px] pl-[40px] outline-strong-cyan" />
              </div>
            </div>
            <div className="w-full flex flex-col items-start gap-3">
              <h2 className="text-dark-grayish-cyan">Select Tip %</h2>
              <div className="grid gap-3 grid-cols-3 grid-rows-2 text-white text-[22px]">
                <div className=" py-[9px] bg-very-dark-cyan hover:bg-strong-cyan rounded-md">5%</div>
                <div className=" py-[9px] bg-very-dark-cyan hover:bg-strong-cyan rounded-md">10%</div>
                <div className=" py-[9px] bg-very-dark-cyan hover:bg-strong-cyan rounded-md">15%</div>
                <div className=" py-[9px] bg-very-dark-cyan hover:bg-strong-cyan rounded-md">25%</div>
                <div className=" py-[9px] bg-very-dark-cyan hover:bg-strong-cyan rounded-md">50%</div>
                <input
                  type="text"
                  className="text-center py-[5px] bg-slate-100 rounded-md outline-strong-cyan text-very-dark-cyan"
                  placeholder="Custom"
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-start gap-3">
              <h2 className="text-dark-grayish-cyan">Number of people</h2>
              <div className="relative w-full bg-slate-100 rounded-md h-[3rem]">
                <span className="absolute w-4 h-4 top-[22px] left-[15px]">
                  <img src={person} alt="person icon" />
                </span>
                <input type="text" className="bg-transparent w-full h-full text-right  text-[24px] text-very-dark-cyan px-[15px] py-[8px] pl-[40px] outline-strong-cyan" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-very-dark-cyan w-full h-full p-[2.5rem] rounded-2xl">
            <div className="flex flex-col gap-[1.75rem] mt-[.3125rem]">
              <div className="flex justify-between text-strong-cyan">
                <div className="text-start">
                  <h3 className="text-white ">Tip Amount</h3>
                  <p className="text-[12.5px] text-grayish-cyan">/ person</p>
                </div>
                <p className="text-[46px] leading-none">$0.00</p>
              </div>
              <div className="flex justify-between text-strong-cyan">
                <div className="text-start">
                  <h3 className="text-white ">Total</h3>
                  <p className="text-[12.5px] text-grayish-cyan">/ person</p>
                </div>
                <p className="text-[46px] leading-none">$0.00</p>
              </div>
            </div>
            <button className="w-full py-2.5 rounded-md bg-strong-cyan hover:bg-light-grayish-cyan">
              RESET
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;