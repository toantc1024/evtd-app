import React from "react";
import logo from "../../logo.svg";
const MockHover = () => {
  return (
    <div className="flex h-full w-full flex items-center justify-center px-4 flex-col gap-2">
      <div
        role="status"
        class="space-y-2.5 max-w-xl bg-white p-4 rounded-lg border-[1px]  "
      >
        <div class="flex items-center w-full space-x-2">
          <div class="h-2.5 bg-slate-100 rounded-full w-32"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-24"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[480px]">
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-24"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[400px] ">
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>

          <div class="flex items-center justify-center font-bold border-[1px] rounded-full  w-full relative">
            <p className="text-transparent text-sm  bg-clip-text bg-gradient-to-b from-blue-500 to-purple-500">
              education
            </p>
            <div className="animate-bounce w-10 h-10 rounded-full absolute top-[-30px] right-[-50px] flex gap-2 ">
              <img
                className="w-10 h-10 border-[1px] rounded-full cursor-pointer"
                src={logo}
              />
              <div className="bg-white border-[1px] p-2 flex-nowrap flex items-center justify-center min-w-[100px] rounded-full">
                <span className="text-sm">Giáo dục</span>
              </div>
            </div>
          </div>

          <div class="h-2.5 bg-slate-100 rounded-full  w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[480px]">
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-24"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[440px]">
          <div class="h-2.5 bg-slate-100 rounded-full w-32"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-24"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[360px]">
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-80"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
      <div
        role="status"
        class="space-y-2.5 max-w-lg bg-white p-4 rounded-lg border-[1px]"
      >
        <div class="flex items-center w-full space-x-2">
          <div class="h-2.5 bg-slate-100 rounded-full w-32"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-24"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[480px]">
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-24"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[400px] ">
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>

          <div class="h-2.5 bg-slate-100 rounded-full  w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[480px]">
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-24"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[440px]">
          <div class="h-2.5 bg-slate-100 rounded-full w-32"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-24"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>
        </div>
        <div class="flex items-center w-full space-x-2 max-w-[360px]">
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-80"></div>
          <div class="h-2.5 bg-slate-100 rounded-full w-full"></div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default MockHover;
