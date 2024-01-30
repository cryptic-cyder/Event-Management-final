import Events from "./_components/sections/Events";

const page = () => {
  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="col-md-12">
            <h1>What we organize</h1>
          </div>
        </div>
        <div className="container">
          <div className="col-md-12">
            <hr />
          </div>
        </div>
        <Events/>
      </div>
    </div>
  );
};

export default page;
