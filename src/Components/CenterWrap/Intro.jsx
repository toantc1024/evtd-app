import React, { Fragment } from "react";
import MockHover from "./MockHover";
const Intro = () => {
  return (
    <Fragment>
      <div className="min-h-[100vh] flex flex-col items-center justify-center">
        <div className=" p-8 w-full h-full flex">
          {/* Col 1 */}
          <MockHover />

          <div className="flex h-full w-auto min-w-[500px] px-4 items-center justify-center">
            <div className="flex flex-col gap-4">
              <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-b from-blue-500 to-purple-500 py-4 px-4">
                Tra từ vựng ngay trên trang
              </h1>
            </div>
          </div>
        </div>

        <div className="flex h-full w-auto min-w-[500px] px-4 items-center justify-center">
          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-b from-blue-500 to-purple-500 py-4 px-4"></h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Intro;
