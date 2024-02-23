const MultipleCheckDropdown = () => {
  const items = [
    {
      checked: false,
      value: "A",
      item: {
        name: "A",
        id: "a",
      },
    },
    {
      checked: false,
      value: "B",
      item: {
        name: "B",
        id: "b",
      },
    },
  ];

  return (
    <>
      <div className="dropdown-con">
        {items.map((item) => (
          <div className="dropdown-item">
            <input type="checkbox" value={item.checked}></input>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MultipleCheckDropdown;
