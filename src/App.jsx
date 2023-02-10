import "./App.css";
import Js from "./asset/js1.png";
import Express from "./asset/express.svg";
import react from "./asset/react.svg";
import nodejs from "./asset/nodejs.png";
import proj1 from "./asset/proj1.svg";
import instagram from "./asset/instagram.avif";
import github from "./asset/github.png";
import gitlab from "./asset/gitlab.svg";

function App() {
  return (
    <div className="b">
      <div className="h-screen rounded-bl-full  ">
        <div className="bg-negro  " style={{ height: "97vh" }}></div>
        <div className="bg-bule h-6"></div>
      </div>
      <div className="absolute w-full top-0 py-6 px-10">
        <div className="text-white   flex justify-between  items-center">
          <div>Ini logo</div>
          <ul className=" text-1xl flex items-center">
            <li className="mx-2 px-4 py-2 bg rounded hover:bg-bule hover:cursor-pointer hover:text-black transition-colors ease-out duration-500">
              Home
            </li>
            <li className="mx-2 px-4 py-2 bg rounded hover:bg-bule hover:cursor-pointer hover:text-black transition-colors ease-out duration-500">
              Service
            </li>
            <li className="mx-2 px-4 py-2 bg rounded hover:bg-bule hover:cursor-pointer hover:text-black transition-colors ease-out duration-500">
              About
            </li>
            <li className="mx-2 px-4 py-2 bg rounded hover:bg-bule hover:cursor-pointer hover:text-black transition-colors ease-out duration-500">
              Portofolio
            </li>
            <li className="mx-2 px-4 py-2 bg rounded hover:bg-bule hover:cursor-pointer hover:text-black transition-colors ease-out duration-500">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:flex-none md:items-start text-center md:text-left mt-44">
          <h1 className="text-bule text-6xl font-semibold">
            Fullstack Developer
          </h1>
          <h1 className="text-white mt-8 text-6xl font-semibold">
            Fadhil Rahman
          </h1>
          <p className="mt-5 text-white w-6/6 md:w-6/12 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            molestias cupiditate aliquid, harum labore accusamus nam veniam, id
            inventore esse necessitatibus illo.
          </p>
          <button className="mt-5 rounded py-2 px-5 w-40 text- bg-bule text-negro">
            Download CV
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center  w-full mt-20 mb-20">
        <div>
          <h1 className="text-5xl text-negro font-bold">Portofolio</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2   gap-10 mt-10 w-full text-negro">
          <div className="relative  flex mx-auto flex-col items-left  ">
            <img src={proj1} alt="" className="w-96  h-60" />
            <div className="bg-black h-48 opacity-30 w-96 top-6  absolute "></div>
            <h1 className="text-2xl font-medium text-left">Agrinesia</h1>
            <p className="w-96 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur id beatae eligendi ab? Beatae, repellat.
            </p>
          </div>
          <div className="relative  flex mx-auto flex-col items-left  ">
            <img src={proj1} alt="" className="w-96  h-60" />
            <div className="bg-black h-48 opacity-30 w-96 top-6  absolute "></div>
            <h1 className="text-2xl font-medium text-left">Agrinesia</h1>
            <p className="w-96 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur id beatae eligendi ab? Beatae, repellat.
            </p>
          </div>
          <div className="relative  flex mx-auto flex-col items-left  ">
            <img src={proj1} alt="" className="w-96  h-60" />
            <div className="bg-black h-48 opacity-30 w-96 top-6  absolute "></div>
            <h1 className="text-2xl font-medium text-left">Agrinesia</h1>
            <p className="w-96 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur id beatae eligendi ab? Beatae, repellat.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bule h-6"></div>
      <div className="flex justify-center bg-negro py-20">
        <div className=" w-full ">
          <h1 className="text-bule text-5xl font-semibold  text-center mb-10  ">
            My Skill
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
            <div className=" px-7  hover:cursor-pointer  items-center flex flex-col ">
              <img src={Js} alt="" className="h-12 w-h-12" />
              <p className=" font-semibold mt-3 text-2xl text-bule">
                Javascript
              </p>
              <p className="text-center text-white text-1xl font-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis, adipisci.
              </p>
            </div>
            <div className=" px-7 hover:text-bule hover:cursor-pointer  items-center flex flex-col ">
              <img src={react} alt="" className="h-12 w-h-12" />
              <p className=" font-semibold mt-3 text-2xl text-bule">React Js</p>
              <p className="text-center text-white text-1xl font-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis, adipisci.
              </p>
            </div>
            <div className=" px-7 hover:text-bule hover:cursor-pointer  items-center flex flex-col ">
              <img src={nodejs} alt="" className="h-12 w-h-12" />
              <p className=" font-semibold mt-3 text-2xl text-bule">Node Js</p>
              <p className="text-center text-white text-1xl font-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis, adipisci.
              </p>
            </div>
            <div className=" px-7 hover:text-bule hover:cursor-pointer  lg:col-start-2  items-center flex flex-col ">
              <img src={Express} alt="" className="h-12 w-h-12" />
              <p className=" font-semibold mt-3 text-2xl text-bule">
                Express Js
              </p>
              <p className="text-center text-white text-1xl font-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officiis, adipisci.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bule h-6"></div>
      <div className="w-full mt-20 mb-20">
        <h1 className="text-5xl text-center text-negro font-semibold">
          Contact
        </h1>
        <form action="" className="flex flex-col items-center mt-14  w-full">
          <div className="w-3/6 mb-8">
            <label htmlFor="" className="text-negro font-medium text-2xl ">
              Nama
            </label>
            <br></br>
            <input
              type="text"
              className="px-5 py-3 bg-abu focus:outline-none focus:border mt-3 w-full focus:border-negro rounded text-1xl"
            />
          </div>
          <div className="w-3/6 mb-8">
            <label htmlFor="" className="text-negro font-medium text-2xl ">
              Email
            </label>
            <br></br>
            <input
              type="text"
              className="px-5 py-3 bg-abu focus:outline-none focus:border mt-3 w-full focus:border-negro rounded text-1xl"
            />
          </div>
          <div className="w-3/6 mb-8">
            <label htmlFor="" className="text-negro font-medium text-2xl ">
              Deskripsi
            </label>
            <br></br>
            <textarea
              type="text"
              className="px-5 py-3 bg-abu focus:outline-none focus:border mt-3 w-full focus:border-negro rounded text-1xl"
            ></textarea>
          </div>
          <div className=" w-3/6">
            <button className="mt-5 rounded py-2 px-5 w-40 text- bg-negro text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="bg-negro pb-10">
        <div className=" text-white py-16 pl-10 w-5/6  flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="text-3xl font-medium">Unity Building</h1>
            <p className="text-2xl mt-4">Hubungi Saya</p>
            <p className="font-light mt-3">muhfadhilrachman@gmail.com</p>
            <p className="font-light ">Jl.Pahlawan No.32,</p>
            <p className="font-light ">Garut</p>
          </div>
          <div className="mt-8">
            <h1 className="text-3xl font-medium">Tautan</h1>
            <ul>
              <li className="my-2 hover:text-bule hover:cursor-pointer">
                Home
              </li>
              <li className="my-2 hover:text-bule hover:cursor-pointer">
                Portofolio
              </li>
              <li className="my-2 hover:text-bule hover:cursor-pointer">
                Skill
              </li>
              <li className="my-2 hover:text-bule hover:cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-white mx-5" />
        <div className="flex mt-20 justify-center">
          <div className="flex justify-center">
            <div className="border border-white  hover:bg-bule hover:cursor-pointer rounded-full flex mx-3 p-4">
              <img src={instagram} alt="" srcset="" className="h-6" />
            </div>
            <div className="border border-white mx-3 hover:bg-bule hover:cursor-pointer rounded-full flex  p-4">
              <img src={github} alt="" srcset="" className="h-6" />
            </div>
            <div className="border border-white mx-3 hover:bg-bule hover:cursor-pointer rounded-full p-4">
              <img src={gitlab} alt="" srcset="" className="h-6" />
            </div>
          </div>
        </div>
        <div className="w-full  text-center mt-3">
          <small className="text-white ">
            Dibuat dengan ❤️ oleh{" "}
            <span className="text-bule">Muhammad Fadhil Rahman</span>{" "}
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
