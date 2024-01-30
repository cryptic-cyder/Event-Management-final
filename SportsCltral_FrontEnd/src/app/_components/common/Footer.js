import Link from "next/link";
const Footer = () => {
  return (
    <div >
      <footer>
        <div className="container">
          <div className="row">
            <section>
              <div className="footerContent col-md-4">
                {/* <p className="footerContent1">
                  <strong>S</strong>
                  <span className="small footerSubtext">ports Club of</span>
                  <strong>A</strong>
                  <span className="small footerSubtext">rt</span>
                  <strong>D</strong>
                  <span className="small footerSubtext">esign and</span>
                  <strong>T</strong>
                  <span className="small footerSubtext">echnology</span>
                </p> */}

                <p className="footerSubtext2">
                Address: Kaptai, Highway রাউজান পাহাড়তলী সড়ক, Chattogram 4349
                </p>
              </div>
            </section>
            <section>
              <div className="footcontent col-md-4">
              Chittagong - 4349, Bangladesh ; 
                <br />
                CALL TO. Tel: +880-31-714946, +880-31-714911.
                <br />
                Mail: registrar@cuet.ac.bd, iict@cuet.ac.bd
              </div>
            </section>
            <section>
              <div className="footcontent col-md-4">
                Follow Us:
                <br />
                {/* <img src=}  /> */}
                <Link href='https://www.facebook.com/sccuet/'>
                  <img src="images/facebook.jpg" />
                </Link>
                <Link href="https://www.google.com/search?q=cuet+sports+club&rlz=1C1CHBF_enBD916BD916&oq=cuet+sports+club&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg9MgYIAhBFGDwyBggDEEUYPdIBCTU2MjdqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8">
                  <img src="images/googleplus.png" />
                </Link>
                <Link href='https://www.youtube.com/channel/UC681dZemaj5jXHQcBg5rjsA'>
                  <img src="images/youtube.png" />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
