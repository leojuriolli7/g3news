import { RootState } from "../../store/";
import { useSelector } from "react-redux";
import * as S from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SiteLogo from "../../assets/headerlogo.svg";
import { LanguageMenuHamburguer } from "../LanguageMenuHamburguer";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { UserPopover } from "../UserPopover";

export function HamburguerMenu() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { t }: { t: any } = useTranslation();
  const navigate = useNavigate();
  const history = useLocation();
  const isUserLogged = useSelector((state: RootState) => state.user.isLogged);

  return (
    <>
      <S.MenuToggle onClick={() => handleShow()} className="Menu">
        <S.MenuToggleBar />
        <S.MenuToggleBar />
        <S.MenuToggleBar />
      </S.MenuToggle>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <S.Logo src={SiteLogo} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <S.Container>
            <S.Navigation>
              <S.UnorganizedList>
                <S.ListItem>
                  <S.MenuOption
                    onClick={() => navigate("/")}
                    isSelected={history.pathname === "/"}
                  >
                    {t("home")}
                  </S.MenuOption>
                </S.ListItem>
                <S.ListItem>
                  <S.MenuOption
                    onClick={() => navigate("/games")}
                    isSelected={history.pathname === "/games"}
                  >
                    {t("games")}
                  </S.MenuOption>
                </S.ListItem>
                <S.ListItem>
                  <S.MenuOption
                    onClick={() => navigate("/giveaways")}
                    isSelected={history.pathname === "/giveaways"}
                  >
                    {t("giveaways")}
                  </S.MenuOption>
                </S.ListItem>
                <S.ListItem>
                  {isUserLogged ? (
                    <S.UserPopoverContainer>
                      <UserPopover />
                    </S.UserPopoverContainer>
                  ) : (
                    <Button
                      text={t("login")}
                      onClick={() => navigate("/login")}
                      type="button"
                    />
                  )}
                </S.ListItem>
              </S.UnorganizedList>
            </S.Navigation>
            <LanguageMenuHamburguer />
          </S.Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
