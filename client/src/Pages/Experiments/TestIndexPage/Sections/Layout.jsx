import React from "react";
import "./section.css";

const Layout = () => {
  return (
    <>
      <p className="basic-text-muted">
        Since I wanted the index to be available at all times for quick access,
        it was necessary to find some space along the edges of the screen since
        the center will be occupied by the main page content or the article.
        <br />
        <br />
        The two sides of the screen were out question for obvious reasons. And
        having the index at the top felt like a distraction with the navbar,
        headers, other CTAs, etc.
        <br />
        <br />
        The bottom felt natural and logical - it is away from the top half of
        the screen where the focus is typically, it is easy for one handed use
        cases in mobile devices and it felt like a natural extension of the
        native experience in mobile apps.
        {/* <br />
        <br /> */}
        {/* <img
          style={{ width: "100%" }}
          src={
            "https://imharsh.s3.eu-north-1.amazonaws.com/DOF_IS.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaDmFwLXNvdXRoZWFzdC0yIkcwRQIgBkcIgF546857DYrjhRqRY2Dn4mR08wOoJWwyAxUZEMcCIQCmBMbMnvMpBPwRCMK%2F6BWMw5SX8aJxnditPvu%2FcSf%2FGirkAghJEAEaDDEyNDI1NzQzMTExMSIMWM2ooajOnZCvlLkvKsECHV41uciGep1P35GUD6ExiVSNES1VOrF3DNB43Fe%2By4bUVptohLCfGkC20hjL3c%2BWVBQXTwTJt%2BcIuwnZahQgWCgINnYuvWEmCiG6EaRrVgbLvqG0apaqJmOY6iJ2D8BGpiTyETW8eIErDaRrJpHz5gE2lL47AlluXilFSPdmkMIH1580SCj2noCOW%2FP4UlprKELmTrap3ZHcPVlaFzrhfAwLUoXyKDpaDGPM1Ik9PczRCa2NnM3KdXqUdfHcdiYSuIifNRchGgKoC1YjX0emGFldmoh%2BMx8%2Be09d55aKRvQo70x9G6yWEPxqNgJLoKqD3NzNwRXF8SP7lAeFif1qpENbrC%2B1k2XM2KFhN21iSmxV96G4rgXYWwSbsVJmEcZq7lvj4%2FVksJBVg6oo5elnCqNrGb0V2aTTzD9eQ%2Bq2XahoMMSJ4LAGOrMCIYkheP5UeW73hSTl7X7ARcRfq3Qr8u4JCtN688lJ1AWgupKgLaI62qUBE1an3vzU%2BTVOulBNIWqTxL8OOfdmTa6%2BWxi3B7sBrPZdKeWkknupsRJzSLXazvUOW9Dm7EA9HrymAmCWS8pD0cOA6qLlGUTaDUd587aXOnP%2Felp0IP3OJ06ESJv%2B8kMW5NDbBK38yC5gSlvuFw3%2BTaUKMSjpxMSUYX4vFo8qkBv7maBaVwRigWezRGf%2B%2BlQ2wXqPnt1ssXVk8rvJ3IxcQCHNgUkrM8%2FC0XOfAgJka%2BdJD2Jd9xsyJyGPmxqD%2FuctL9GdmSaAPA89RHYSwxcmvzzSJEM1MOz5%2BbpxDuw02r7PXw5ru1KTVxlMweuvnXrgBw%2B2frQGss5WWzETH4dWunPpM4SRHV0S8w%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240411T155103Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIARZ3SR5ZD6RCQT54T%2F20240411%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Signature=81c1a7c02d5b95098bd1e36b774e26c1e9c64e5866aef546d631c256b524ca97"
          }
          alt="MOCKUP"
        /> */}
        <br />
        <br />I didn't want to move the index to different parts for different
        screen sizes - on the left like a typical table on contents in Wikipedia
        or any PDF reader and then move it to the bottom for smaller screens. In
        order to keep the consistency of the layout, the tray floats at a fixed
        position at the bottom by default and for smaller sizes, hugs the edges
        of the screen for smaller screens.
      </p>
    </>
  );
};

export default Layout;
