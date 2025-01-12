const Share = async ({ params }) => {
  const { rando } = await params;
  return (
    <>
      <h1>Welcome to meals page</h1>
      {rando === "meal1" && <p>This is meal one which is curry and tasty</p>}
      {rando === "meal2" && <p>This is meal two which is chicken and tasty</p>}
      {rando === "meal3" && (
        <p>This is meal three which is pasta and awesome</p>
      )}
    </>
  );
};

export default Share;
