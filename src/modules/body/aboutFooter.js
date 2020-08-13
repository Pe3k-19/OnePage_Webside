import React, { useState } from "react";
export default function AboutFooter() {
  //HOOKS
  const [openDiv, setOpenDiv] = useState({
    div1: "",
    div2: "",
    div3: "",
    div4: "",
  });

  const OpenDiv1 = () => {
    return setOpenDiv({
      div1: (
        <div className="openDiv1">
          ZMEŇ SVOJ ŽIVOT <p>V SPOLOČENSKOM POSTAVENÍ</p>
        </div>
      ),
    });
  };

  const OpenDiv2 = () => {
    return setOpenDiv({
      div2: (
        <div className="openDiv2">
          ZMEŇ SVOJ ŽIVOT <p>VO SVOJEJ KARIERE</p>
        </div>
      ),
    });
  };

  const OpenDiv3 = () => {
    return setOpenDiv({
      div3: (
        <div className="openDiv3">
          ZMEŇ SVOJ ŽIVOT <p>VO VZDELÁVANÍ</p>
        </div>
      ),
    });
  };

  const OpenDiv4 = () => {
    return setOpenDiv({
      div4: (
        <div className="openDiv2">
          ZMEŇ SVOJ ŽIVOT <p>S FINANČNOU NEZÁVISLOSŤOU</p>
        </div>
      ),
    });
  };

  const CloseDiv = () => {
    return (
      setOpenDiv({ div1: "" }),
      setOpenDiv({ div2: "" }),
      setOpenDiv({ div3: "" }),
      setOpenDiv({ div4: "" })
    );
  };

  return (
    <div className="aboutFooter">
      <div
        className="image1"
        onClick={() => OpenDiv1()}
        onMouseLeave={() => CloseDiv()}
      >
        {openDiv.div1}
      </div>
      <div className="image234">
        <div
          className="image2"
          onClick={() => OpenDiv2()}
          onMouseLeave={() => CloseDiv()}
        >
          {openDiv.div2}
        </div>
        <div
          className="image3"
          onClick={() => OpenDiv3()}
          onMouseLeave={() => CloseDiv()}
        >
          {openDiv.div3}
        </div>
        <div
          className="image4"
          onClick={() => OpenDiv4()}
          onMouseLeave={() => CloseDiv()}
        >
          {openDiv.div4}
        </div>
      </div>
    </div>
  );
}
