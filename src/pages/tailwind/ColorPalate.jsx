const ColorPalate = ({ colors }) => {
  return (
    <div className="content-end">
      <div className="grid grid-cols-5 rounded-xl overflow-hidden">
        {colors.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color.value }}
            className=" w-full  h-10"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalate;
