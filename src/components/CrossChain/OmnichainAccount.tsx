import TitleAndTextSection from "./TitleAndTextSection";

const OmnichainAccount = () => {
  return (
    <section className="flex-col lg:flex-row flex items-center gap-[5rem] justify-center py-[6.25rem] px-[0.625rem]">
      <img
        src="/images/crossChain/omnichainAccount.png"
        alt="omnichainAccount"
        className="lg:w-[29.063] lg:h-[27.375rem]"
      />
      <TitleAndTextSection
        classes="lg:w-[34.375rem]"
        title="Omnichain Account"
        text="XAccount, standing for Cross-Chain Abstract Account, represents a pioneering approach to account abstraction
          at the cross-chain level. DApps on Darwinia will be able to interoperate with applications on other EVM chains
          through XAccount will be able to interoperate with applications on other EVM chains through XAccount."
      />
    </section>
  );
};

export default OmnichainAccount;
