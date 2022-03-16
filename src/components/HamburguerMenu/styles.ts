import styled from "styled-components";

export const MenuToggle = styled.div`
  width: 40px;
  height: 30px;
`;

export const MenuToggleBar = styled.div`
  background-color: var(--text-title);
  height: 5px;
  width: 100%;
  margin: 6px auto;
`;

export const Logo = styled.img``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Navigation = styled.nav`
  padding-top: 3.5rem;
  padding-bottom: 4.5rem;
`;

export const UnorganizedList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  gap: 3rem;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  button {
    padding: 18px 36px;
    border-radius: 35px;
    font-size: 1.7rem;
  }
`;

interface MenuOptionInterface {
  isSelected: boolean;
}

export const MenuOption = styled.a<MenuOptionInterface>`
  font-size: 2.7rem;
  font-weight: ${(props) => (props.isSelected ? "800" : "400")};
  text-decoration: none;
  color: var(--text-title);
`;

export const UserPopoverContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
