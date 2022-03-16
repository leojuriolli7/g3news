import { useSelector } from "react-redux";
import { RootState } from "../../store/";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/User.store";
import DefaultUserImage from "./default-user-image.png";
import * as S from "./styles";
import { useTranslation } from "react-i18next";

export function UserPopover() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t }: { t: any } = useTranslation();

  const profileImage = useSelector(
    (state: RootState) => state.user.profileImage
  );

  const handleClick = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <S.Container className="userpopover">
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={
          <Popover>
            <Popover.Body>
              <S.UnorganizedList>
                <S.ListItem>
                  <S.MenuLink onClick={() => navigate("/profile")}>
                    {t("goToProfile")}
                  </S.MenuLink>
                </S.ListItem>
                <S.ListItem>
                  <S.MenuLink onClick={() => handleClick()}>
                    {t("logout")}
                  </S.MenuLink>
                </S.ListItem>
              </S.UnorganizedList>
            </Popover.Body>
          </Popover>
        }
      >
        <S.ProfileContainer src={profileImage || DefaultUserImage} />
      </OverlayTrigger>
    </S.Container>
  );
}
