
const page = () => {
  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="col-md-12">
            <h1>Contact Us</h1>
          </div>
        </div>

        <div className="container">
          <div className="col-md-12">
            <hr />
          </div>
        </div>

        <div className="container">
          <div className="col-md-6 contacts">
            <h1>
              <span className="glyphicon glyphicon-user"></span> Jullian Engracio
            </h1>
            <p>
              <span className="glyphicon glyphicon-envelope"></span> Email:
              julzengracio@yahoo.ie
              <br />
              <span className="glyphicon glyphicon-link"></span> Facebook:
              www.facebook.com/julzengracio
              <br />
              <span className="glyphicon glyphicon-phone"></span> Mobile:
              08712345678
            </p>
          </div>
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label for="Title">Title:</label>
                <input
                  type="text"
                  name="title"
                  id="Title"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label for="Comment">Message:</label>
                <textarea
                  id="Comment"
                  rows="10"
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-default pull-right">
                Send <span className="glyphicon glyphicon-send"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
