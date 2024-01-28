export function HowItWorksSectionMobile() {
  return null;
}

export function HowItWorksSectionPC() {
  return (
    <div className="relative shrink-0 w-[90rem] h-[62.5rem]">
      <div
        className="absolute z-20 top-1/2 left-1/2 bg-app-black shrink-0 w-[110rem] h-[110rem] px-[7.5rem]"
        style={{ transform: "translate(-50%, -50%) rotate(-20deg)" }}
      />
      <div className="absolute -top-[12.5rem] left-[13rem] z-[21] flex justify-center items-center border border-app-main/40 rounded-full w-[78.125rem] h-[78.125rem]">
        <div className="flex justify-center items-center border border-app-main/30 rounded-full w-[48.625rem] h-[48.625rem]">
          <div className="flex justify-center items-center border border-app-main/20 rounded-full w-[38.875rem] h-[38.875rem]" />
        </div>
      </div>
      <div
        className="absolute z-[22] top-1/2 left-1/2 bg-transparent shrink-0 w-[110rem] h-[110rem] px-[7.5rem] flex justify-center items-center"
        style={{ transform: "translate(-50%, -50%) rotate(-20deg)" }}
      >
        <div className="flex items-end" style={{ transform: "rotate(20deg)" }}>
          <div className="flex flex-col gap-[3.75rem]">
            <div className="flex flex-col" style={{ transform: "translate(-9rem, 2rem)" }}>
              <span className="text-[4.375rem] font-bold tracking-[0.125rem] text-app-white whitespace-nowrap">
                How It
              </span>
              <span className="text-[4.375rem] font-bold tracking-[0.125rem] text-app-main">Works</span>
            </div>
            <div className="flex items-end gap-[0.625rem] w-[24.25rem]" style={{ transform: "translate(-2rem, 2rem)" }}>
              <div className="w-[0.375rem] h-[3.25rem] rounded-[1.125rem] bg-app-main shrink-0" />
              <div className="flex flex-col gap-5 text-t16 text-app-white">
                <p>
                  To provide DApps with a simple and consistent chain-free capability, extensive foundational
                  infrastructure is required
                </p>
                <p>
                  Various messaging protocols cater to different needs, each with distinct considerations for security
                  and cost, and built on unique technologies
                </p>
              </div>
            </div>
            <div className="flex items-end gap-[0.625rem] w-[26.375rem]" style={{ transform: "translate(8rem, 2rem)" }}>
              <div className="w-[0.375rem] h-[3.25rem] rounded-[1.125rem] bg-app-main shrink-0" />
              <div className="flex flex-col gap-5 text-t16 text-app-white">
                <p>This complex yet orderly system demands significant integration and infrastructure development</p>
                <p>However, DApp developers no longer need to worry about these underlying protocols</p>
                <p>
                  With Darwinia Msgport service layer, direct usage is simplified, while the Darwinia open-source
                  community handle the intricate integration and construction efforts
                </p>
              </div>
            </div>
          </div>
          <img
            alt="..."
            src="/images/how-it-works.png"
            className="shrink-0 w-[52.625rem] h-[46.5rem]"
            style={{ transform: "translate(9rem, 0)" }}
          />
          <div
            className="w-[4.5rem] h-[4.5rem] rounded-full bg-app-main"
            style={{ transform: "translate(14rem, 2rem)" }}
          />
        </div>
      </div>
    </div>
  );
}
