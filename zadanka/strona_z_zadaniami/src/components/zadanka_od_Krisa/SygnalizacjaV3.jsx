import { useEffect, useState } from "react";

export const SygnalizacjaV3 = () => {
  const [biegaj, setBiegaj] = useState(false);
  const Kółko = (props) => {
    const [color, setColor] = useState("#fff");
    const style = {
      width: "150px",
      aspectRatio: "1/1",
      backgroundColor: `${color}`,
      borderRadius: "50%",
    };
    const nowyKolor =
      props.kolejnosc === 1
        ? "red"
        : props.kolejnosc === 2
        ? "yellow"
        : "green";
    const zapal = async () => {
      setColor(nowyKolor);
    };

    const zgaś = async () => {
      setColor("#fff");
    };

    useEffect(() => {
      if (props.odtwarzanie) {
        const mujInterwał = setInterval(async () => {
          await new Promise((resolve) =>
            setTimeout(resolve, props.kolejnosc * 1000)
          );
          zapal();
          await new Promise((resolve) => setTimeout(resolve, 1000));
          zgaś();
        }, 4000);

        return () => {
          clearInterval(mujInterwał);
        };
      }
    }, []);
    return (
      <>
        <div style={style}></div>
      </>
    );
  };

  return (
    <>
      <h1>SygnalizacjaV2</h1>
      <article
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Kółko kolejnosc={1} odtwarzanie={biegaj}></Kółko>
        <Kółko kolejnosc={2} odtwarzanie={biegaj}></Kółko>
        <Kółko kolejnosc={3} odtwarzanie={biegaj}></Kółko>
        {biegaj && <p>działa</p>}
        <button
          onClick={() => {
            biegaj === false ? setBiegaj(true) : setBiegaj(false);
          }}
        >
          START / STOP
        </button>
      </article>
    </>
  );
};
