import "./App.css";
import Js from "./asset/js1.png";
import Express from "./asset/express.svg";
import react from "./asset/react.svg";
import nodejs from "./asset/nodejs.png";
import proj1 from "./asset/proj1.svg";
import github from "./asset/github.png";
import gitlab from "./asset/gitlab.svg";
import fishlog from "./asset/fishlog.png";
import ecommerce from "./asset/ecommerce.png";
import { Link } from "react-scroll";

function App() {
  const handleWa = () => {
    window.open("https://wa.me/0881022077883");
  };
  return (
    <div className="b w-screen">
      <div className="h-screen rounded-bl-full  w-screen">
        <div className="bg-negro h-[137vh] sm:h-[97vh] "></div>
        <div className="bg-bule h-6"></div>
      </div>
      <div className="absolute w-full top-0 py-6 px-10" id="home">
        <div className="text-white   flex justify-between  items-center">
          <p>MyPorto</p>
          <ul className=" text-1xl flex items-center">
            <Link to="home" smooth duration={400}>
              <li className="mx-2 px-4 py-2 bg rounded hover:bg-bule hover:cursor-pointer hover:text-black transition-colors ease-out duration-500">
                Home
              </li>
            </Link>

            <Link to="skill" smooth duration={400}>
              <li className="mx-2 px-4 py-2 bg rounded hover:bg-bule hover:cursor-pointer hover:text-black transition-colors ease-out duration-500">
                skill
              </li>
            </Link>
            <Link to="portofolio" smooth duration={400}>
              <li className="mx-2 px-4 py-2 bg rounded hover:bg-bule hover:cursor-pointer hover:text-black transition-colors ease-out duration-500">
                Portofolio
              </li>
            </Link>
            <Link to="contact" smooth duration={400}>
              <li className="mx-2 px-4 py-2 bg rounded hover:bg-bule hover:cursor-pointer hover:text-black transition-colors ease-out duration-500">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col items-center md:flex-none md:items-start text-center md:text-left mt-44">
          <h1 className="text-bule text-6xl font-semibold ">
            Software engineer
          </h1>
          <h1 className="text-white mt-8 text-6xl font-semibold">
            Fadhil Rahman
          </h1>
          <p className="mt-5 text-white w-6/6 md:w-6/12 ">
            Saya seorang Junior Software Engineer dengan pengalaman belajar
            programming sejak bulan Agustus 2021. Memiliki pengalaman kerja
            sebagai React JS Developer selama 5 bulan. Juga lulusan bootcamp
            fullstack MERN (MongoDB, ExpressJs, ReactJS, dan NodeJs) selama 4
            bulan di
            <a href="https://eduwork.id/" className="text-[#346eeb] underline">
              {" "}
              Eduwork.id
            </a>
          </p>
          <div className="">
            <button
              className="mt-5 rounded py-2 px-5 w-40 text- bg-bule text-negro"
              onClick={handleWa}
            >
              Contact me
            </button>{" "}
            <button className="mt-5 ml-3 rounded py-2 px-5 w-40 text- bg-bule text-negro">
              Download CV
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col items-center  w-full pt-72 sm:pt-20 mb-20"
        id="portofolio"
      >
        <div>
          <h1 className="text-5xl text-negro font-bold">Portofolio</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2   gap-10 mt-10 w-full text-negro">
          <div className="  flex mx-auto flex-col items-left  relative ">
            <img src={proj1} alt="" className="w-96  h-60 " />
            <div className="w-max px-2 mb-2 rounded bg-negro text-white">
              <small>Work</small>
            </div>
            <div className="bg-black h-48 opacity-30 w-96 top-6  absolute "></div>

            <h1 className="text-2xl font-medium text-left">
              Agrinesia Dashboard
            </h1>
            <div className="flex justify-between">
              <small>Sagara Technology</small>
              <small>maret 2022 - agustus 2022</small>
            </div>
            <h3 className="mt-3 font-semibold">Jobdesk:</h3>
            <p className="w-96 ">
              Membuat sebuah dashboard untuk mendata pembelian dan penjualan
              perusahaan
            </p>
            <div className="mt-3 ">
              <span className="font-semibold">Stack : </span>
              <span className="italic">
                React Js, ANT Design, Redux Saga, Formik
              </span>
            </div>
          </div>
          <div className="  flex mx-auto flex-col items-left  relative ">
            <img src={fishlog} alt="" className="w-96  h-48 mt-6 " />
            <div className="w-max px-2 mb-2 mt-5 rounded bg-negro text-white">
              <small>Work</small>
            </div>
            <div className="bg-black h-48 opacity-30 w-96 top-6  absolute "></div>

            <h1 className="text-2xl font-medium text-left">WMS Fishlog</h1>
            <div className="flex justify-between">
              <small>Sagara Technology</small>
              <small>maret 2022 - agustus 2022</small>
            </div>
            <h3 className="mt-3 font-semibold">Jobdesk:</h3>
            <p className="w-96 ">
              Slicing Design yang di sediakan ui/ux, dan mengintegrasikan api ke
              dalam website
            </p>
            <div className="mt-3 ">
              <span className="font-semibold">Stack : </span>
              <span className="italic">
                React Js, Bootstrap, Redux Saga, React-Hook-Form
              </span>
            </div>
          </div>
          <div className="  flex mx-auto flex-col items-left  relative ">
            <img src={ecommerce} alt="" className="w-96  h-48 mt-6 " />
            <div className="w-max px-2 mb-2 mt-5 rounded bg-negro text-white">
              <small>Bootcamp</small>
            </div>
            <div className="bg-black h-48 opacity-30 w-96 top-6  absolute "></div>

            <h1 className="text-2xl font-medium text-left">Ecommerce</h1>
            <div className="flex justify-between">
              <small>Eduwork</small>
              <small>Mei 2023</small>
            </div>
            <h3 className="mt-3 font-semibold">Jobdesk:</h3>
            <p className="w-96 ">
              Membuat Fullstack project berupa ecommerce dengan React sebagai
              client side dan express sebagai server side
            </p>
            <div className="mt-3 ">
              <span className="font-semibold">Stack : </span>
              <span className="italic">
                React Js, Redux Toolkit, Express JS, MongoDB
              </span>
            </div>
            <h3 className="mt-3">
              <span className=" font-semibold">Source Code</span> :{" "}
              <a
                href="https://github.com/fadhilrachman/tugas_akhir_frontend"
                className="text-[#346eeb] underline"
              >
                Frontend
              </a>{" "}
              <a
                href="https://github.com/fadhilrachman/studi_kasus_mern"
                className="text-[#346eeb] underline"
              >
                Backend
              </a>
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-bule h-6"></div>
      <div className="flex justify-center bg-negro py-20" id="skill">
        <div className=" w-full ">
          <h1 className="text-bule text-5xl font-semibold  text-center mb-10  ">
            My Skill
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
            <div className=" px-7  hover:cursor-pointer  items-center flex flex-col ">
              <img
                src="https://miro.medium.com/v2/resize:fit:792/1*lJ32Bl-lHWmNMUSiSq17gQ.png"
                alt=""
                className="h-12 w-h-12"
              />
              <p className=" font-semibold mt-3 text-2xl text-bule">
                HTML & CSS
              </p>
              <p className="text-center text-white text-1xl font-light">
                Markup language dalam pengembangan web untuk membuat struktur,
                konten, dan tampilan halaman dengan mudah
              </p>
            </div>
            <div className=" px-7  hover:cursor-pointer  items-center flex flex-col ">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                alt=""
                className="h-12 w-h-12"
              />
              <p className=" font-semibold mt-3 text-2xl text-bule">
                Tailwind CSS
              </p>
              <p className="text-center text-white text-1xl font-light">
                Tailwind CSS adalah framework CSS yang memungkinkan pembuatan
                desain web yang cepat dan efisien
              </p>
            </div>
            <div className=" px-7  hover:cursor-pointer  items-center flex flex-col ">
              <img src={Js} alt="" className="h-12 w-h-12" />
              <p className=" font-semibold mt-3 text-2xl text-bule">
                Javascript
              </p>
              <p className="text-center text-white text-1xl font-light">
                bahasa pemrograman web yang sering digunakan untuk membuat
                halaman web interaktif, dan berinteraksi dengan server.
              </p>
            </div>
            <div className=" px-7 hover:text-bule hover:cursor-pointer  items-center flex flex-col ">
              <img src={react} alt="" className="h-12 w-h-12" />
              <p className=" font-semibold mt-3 text-2xl text-bule">React Js</p>
              <p className="text-center text-white text-1xl font-light">
                Library JavaScript untuk membangun antarmuka pengguna yang
                interaktif dan reusable
              </p>
            </div>
            <div className=" px-7 hover:text-bule hover:cursor-pointer  items-center flex flex-col ">
              <img
                src="https://cdn.zapier.com/storage/blog/4ec8fc7dc3a75758a3913bab9e5a4fd8_2.500x278.png"
                alt=""
                className="h-12 w-h-12"
              />
              <p className=" font-semibold mt-3 text-2xl text-bule">Redux</p>
              <p className="text-center text-white text-1xl font-light">
                Library JavaScript untuk mengelola state aplikasi secara
                terpusat dan diprediksi, memudahkan pengembangan aplikasi yang
                skalabel dan mudah diuji
              </p>
            </div>
            <div className=" px-7 hover:text-bule hover:cursor-pointer  items-center flex flex-col ">
              <img src={nodejs} alt="" className="h-12 w-h-12" />
              <p className=" font-semibold mt-3 text-2xl text-bule">Node Js</p>
              <p className="text-center text-white text-1xl font-light">
                Runtime lingkungan JavaScript yang berbasis server-side, dengan
                menggunakan JavaScript di luar lingkungan browser
              </p>
            </div>
            <div className=" px-7 hover:text-bule hover:cursor-pointer    items-center flex flex-col ">
              <img src={Express} alt="" className="h-12 w-h-12" />
              <p className=" font-semibold mt-3 text-2xl text-bule">
                Express Js
              </p>
              <p className="text-center text-white text-1xl font-light">
                Kerangka kerja Node.js yang ringan dan mudah digunakan untuk
                membangun aplikasi web dengan cepat
              </p>
            </div>
            <div className=" px-7 hover:text-bule hover:cursor-pointer    items-center flex flex-col ">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                alt=""
                className="h-12 w-h-12"
              />
              <p className=" font-semibold mt-3 text-2xl text-bule">
                Typescript
              </p>
              <p className="text-center text-white text-1xl font-light">
                Peningkatan JavaScript dengan tipe statis.
              </p>
            </div>
            <div className=" px-7 hover:text-bule hover:cursor-pointer    items-center flex flex-col ">
              <img
                src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2019/07/image2-1.png?fit=600%2C315&ssl=1"
                alt=""
                className="h-12 w-h-12"
              />
              <p className=" font-semibold mt-3 text-2xl text-bule">SQL</p>
              <p className="text-center text-white text-1xl font-light">
                Bahasa pemrograman khusus untuk mengelola dan mengakses basis
                data relasional
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bule h-6"></div>
      <div className="w-full pt-20 mb-20" id="contact">
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
            <p className="font-light mt-3">+62 881-022-07883</p>
            <p className="font-light ">Jl.Pahlawan No.32,</p>
            <p className="font-light ">Garut</p>
          </div>
          <div className="mt-8">
            <h1 className="text-3xl font-medium">Tautan</h1>
            <ul>
              <Link to="home" smooth duration={400}>
                <li className="my-2 hover:text-bule hover:cursor-pointer">
                  Home
                </li>
              </Link>
              <Link to="portofolio" smooth duration={400}>
                <li className="my-2 hover:text-bule hover:cursor-pointer">
                  Portofolio
                </li>
              </Link>
              <Link to="skill" smooth duration={400}>
                <li className="my-2 hover:text-bule hover:cursor-pointer">
                  Skill
                </li>
              </Link>
              <Link to="contact" smooth duration={400}>
                <li className="my-2 hover:text-bule hover:cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <hr className="border-white mx-5" />
        <div className="flex mt-20 justify-center">
          <div className="flex justify-center">
            <a href="https://www.linkedin.com/in/fadhil-rahman-856096247/">
              <div className="border border-white  hover:bg-bule hover:cursor-pointer rounded-full flex mx-3 p-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/LinkedIn_logo_In-Black.svg/1200px-LinkedIn_logo_In-Black.svg.png"
                  alt=""
                  srcset=""
                  className="h-6"
                />
              </div>
            </a>
            <a href="https://github.com/fadhilrachman">
              <div className="border border-white mx-3 hover:bg-bule hover:cursor-pointer rounded-full flex  p-4">
                <img src={github} alt="" srcset="" className="h-6" />
              </div>
            </a>
            <a href="https://gitlab.com/muhfadhilrachman">
              <div className="border border-white mx-3 hover:bg-bule hover:cursor-pointer rounded-full p-4">
                <img src={gitlab} alt="" srcset="" className="h-6" />
              </div>
            </a>
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
