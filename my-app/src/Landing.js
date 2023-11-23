import React from "react";

export default function Landing() {
  return (
    <div>
      <div className="text-center w-3/6 ml-auto mr-auto mt-24">
        <p className="font-bold text-5xl w-80 text-center -ml-8 md:ml-auto md:mr-auto">
          Group Chat for Everyone
        </p>
        <p className="mt-6 text-gray-500 text-center">
          Meet makes it easy to connect with others face-to-face virtually{" "}
          <br />
          <span>and collaborate across any device</span>
        </p>
        <br />
        <div>
          <button className="p-3 pr-6 pl-6 hover:bg-purple-700 bg-teal-500 text-white font-semibold border-2 mr-2 rounded-3xl">
            Download <span className="bg-transparent text-teal-200 ">v1.3</span>
          </button>
          <button className="p-3 pr-6 pl-6 bg-purple-700 text-white font-semibold hover:bg-teal-500 border-2 mr-2 rounded-3xl">
            What is it
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <p className="p-5 mt-24 w-12 h-12 flex justify-center items-center border border-gray-300 rounded-full text-gray-500 font-semibold">
          01
        </p>
      </div>

      <div className="grid grid-cols-2 mt-6 ml-16 md:grid-cols-3 lg:grid-cols-4 lg:mt-16 lg:ml-24 lg:mr-24">
        <img
          src="https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-44 h-44 mr-4 mb-4 lg:w-64 lg:h-64 rounded-xl hover:-translate-y-6"
        />

        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-44 h-44 mr-4 mb-4 lg:w-64 lg:h-64 rounded-xl hover:-translate-y-6"
        />

        <img
          src="https://images.unsplash.com/photo-1454923634634-bd1614719a7b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-44 h-44 mr-4 mb-4 lg:w-64 lg:h-64 rounded-xl hover:-translate-y-6 "
        />
        <img
          src="https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-44 h-44 mr-4 mb-4 lg:w-64 lg:h-64 rounded-xl hover:-translate-y-6"
        />
      </div>

      <div className="text-center w-3/6 ml-auto mr-auto mt-24">
        <p className="uppercase mb-4 text-teal-500 font-serif">
          Built for modern use
        </p>
        <p className="font-bold text-5xl w-96 text-center md:ml-16 -ml-16 lg:ml-auto lg:mr-auto">
          Smarter meetings, all in one place
        </p>
        <p className="mt-6 text-gray-500 text-center">
          Send messages, share files, show your screen, and record your <br />
          <span>
            meetings- all in one workspace. Control who can join with invite-
          </span>
          <br />
          <span>only team access, data encryption, and data export</span>
        </p>
        <br />
      </div>
      <div className="relative mt-24">
      <div className="w-full flex justify-center items-center">
        <p className="p-5 mt-24 w-12 h-12 flex justify-center items-center border z-10 absolute -top-32 border-gray-300 rounded-full text-gray-500 font-semibold">
          02
        </p>
      </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 pt-24 pb-24 p-32 bg-opacity-25"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <p className="bg-transparent text-white text-3xl font-bold w-48 z-10 relative ">
            Experience more together
          </p>

          <p className="bg-transparent text-white md:w-44 mt-4 relative z-10">
            Stay connected with reliable HD meetings and unlimted one- on-one
            and group video sessions
          </p>

          <button className="p-3 border-purple-700 mt-4 lg:ml-24 w-48 h-16 pr-6 pl-6 bg-purple-700  hover:border-teal-500 hover:bg-teal-500 text-white font-semibold border-2 z-10 rounded-3xl">
            Download{" "}
            <span className="bg-transparent text-purple-200">v1.3</span>
          </button>
        </div>

        <div className="absolute z-index-0 overlay bg-teal-700 opacity-40 w-full h-full top-0 left-0 right-0 bottom-0"></div>
      </div>
    </div>
  );
}
