import styled from "styled-components";

export const Container = styled.div``;

export const UnorganizedList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  list-style: none;

  &:nth-child(1) {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }

  &:nth-child(2) {
    padding-bottom: 1rem;
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: var(--nav-text);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 1rem;

  &:hover {
    background: #f2f2f2;
  }
`;

export const ProfileContainer = styled.img`
  cursor: pointer;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
  background: var(--background);
  object-fit: cover;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;
