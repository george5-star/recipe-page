import data from "../data.json";

const Nutrition = () => {
  const tableData = data.nutrition.map((nutrition, index) => (
    <tr className="pt-2 pb-5 ps-3" key={index}>
      <td className="border-b py-3 border-neutral-light-grey">
        {nutrition.name}
      </td>
      <td className="border-b py-3 border-neutral-light-grey text-primary-nutmeg font-bold">
        {nutrition.value}
      </td>
    </tr>
  ));
  return (
    <>
      <h2 className="subheading">Nutrition</h2>
      <p className="my-3">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className="w-full">
        <thead></thead>
        <tbody>{tableData}</tbody>
        <tbody></tbody>
      </table>
    </>
  );
};

export default Nutrition;
