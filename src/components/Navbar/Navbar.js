import React from "react";
import messages from "./../../assets/Local/messages";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentLang } from "../../store/actions/Lang";
import { Link } from "react-router-dom";
import { Btn } from "../Controls/Button/Button";

export default function Navbar() {
  const lang = useSelector(state => state.locale.lang);
  const dispatch = useDispatch();
  const message = messages[lang];
  const switchLanguage = lang => {
    dispatch(setCurrentLang(lang === "ar" ? "en" : "ar"));
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand">{message.hello}</a>
        <div className="d-flex align-items-center">
          <Link to="/" className="text-white mx-3">
            Private Route
          </Link>
          <Btn handleClick={() => switchLanguage(lang)} text={message.langBtn} />
        </div>
      </nav>
    </>
  );
}
