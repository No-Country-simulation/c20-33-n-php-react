import bags from "../../assets/img/bolsa.png";

export const SideBag = () => {
  return (
    <div className="hidden lg:block lg:w-1/3 xl:w-1/4 absolute bottom-0 right-0 p-4 h-auto  w-1024 h-1024">
      <img src={bags} alt="Bolsas" className="max-w-full h-auto" />
    </div>
  );
};
