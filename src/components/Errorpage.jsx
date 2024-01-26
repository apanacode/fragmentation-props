const ErrorPage = ({ outgames }) => {
  return (
    <>{outgames.length === 0 ? <h4>ufff..! no games to play</h4> : null}</>
  );
};
export default ErrorPage;
