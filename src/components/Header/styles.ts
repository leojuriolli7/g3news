import styled from "styled-components";

export const Container = styled.header`
  background: var(--header-background);
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  @media (max-width: 1050px) {
    margin-left: 30px;
  }
`;

export const Image = styled.img`
  width: 130px;

  &:hover {
    cursor: pointer;
    filter: brightness(2);
  }

  @media (max-width: 370px) {
    display: none;
  }
`;

export const ImageSmaller = styled(Image)`
  display: none;
  width: 40px;

  @media (max-width: 370px) {
    display: block;
  }
`;

export const Navigation = styled.nav`
  .Menu {
    display: none;

    @media (max-width: 715px) {
      display: block;
      margin-right: 30px;
    }
  }
`;
export const UnorganizedList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0;

  @media (max-width: 1050px) {
    padding-right: 50px;
  }

  @media (max-width: 715px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
`;

interface MenuOptionInterface {
  isSelected: boolean;
}

export const MenuOption = styled.a<MenuOptionInterface>`
  font-weight: ${(props) => (props.isSelected ? "800" : "400")};
  color: var(--nav-text);
  text-decoration: none;
  font-size: 1.3rem;

  &:hover {
    cursor: pointer;
    color: #6c7ebe;
  }
`;
