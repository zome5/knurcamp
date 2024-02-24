export const Kółko = (props) => {
  const styleKółka = {
    width: "150px",
    aspectRatio: "1/1",
    backgroundColor: `${props.kolor ? props.kolor : "white"}`,
    borderRadius: "50%",
  };

  return (
    <>
      <div style={styleKółka}></div>
    </>
  );
};
