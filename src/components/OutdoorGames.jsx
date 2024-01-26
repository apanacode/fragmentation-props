import Games from "./Games";

const OutdoorGames = ({ outgames }) => {
  return (
    <ul className="list-group">
      {outgames.map((gaming) => (
        <Games key={gaming} allgames={gaming} />
      ))}
    </ul>
  );
};

export default OutdoorGames;
