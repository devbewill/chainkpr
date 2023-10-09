const ChangelogItem = ({ entry }) => {
  return (
    <div key={entry.version} className="flex flex-col mb-10 py-10 border-b-2">
      <span className="text-sm text-gray-400">Version {entry.version}</span>
      <Datetime></Datetime>
      <p className="text-xl font-bold pb-2">{entry.released}</p>

      {entry.list.map((change) => {
        const typesColor =
          change.type === "changed"
            ? "#7BCDBA"
            : change.type === "fixed"
            ? "#9799CA"
            : "#f489e1";
        return (
          <div key={change.title} className="flex-column lg:flex my-2">
            <div className="flex lg:w-2/12">
              <span
                className="leading-7 px-4 h-fit text-center text-white rounded-md uppercase font-bold text-sm"
                style={{ backgroundColor: typesColor }}
              >
                {change.type}
              </span>
            </div>
            <div className="flex flex-col lg:w-10/12 gap-y-1">
              <span className="text-md font-semibold">{change.title}</span>
              <span className="text-sm text-gray-700">
                {change.description}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChangelogItem;
