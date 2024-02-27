import { SygnalizacjaV2 } from "./zadanka_od_Krisa/SygnalizacjaV2";
import { SygnalizacjaV3 } from "./zadanka_od_Krisa/SygnalizacjaV3";
import { PolscyNobliściV2 } from "./zadanka_od_Krisa/PolscyNobliściV2";
import { Notatki } from "./zadanka_od_Krisa/Notatki";

const TydzienCzwarty = () => {
  return (
    <>
      <Notatki />
      <PolscyNobliściV2 />
      <SygnalizacjaV3 />
      <SygnalizacjaV2 />
    </>
  );
};

export default TydzienCzwarty;
