import styled from "styled-components";

export const Container = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorContainer = styled(Container)`
  min-height: 90vh;
`;

export const ProfileContainer = styled.main.attrs({
  className: "animate__animated animate__zoomIn",
})`
  background-color: var(--shape);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 25px;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
  padding: 0 5rem 8rem 5rem;
`;

export const ProfileDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProfileTitle = styled.h1`
  font-size: 3rem;
  padding-top: 2rem;
  margin: 0;
`;

export const ErrorTitle = styled(ProfileTitle)`
  padding-top: 4rem;
`;

export const ErrorDescription = styled.h2`
  padding-top: 1rem;
`;

export const ErrorLink = styled.a`
  text-decoration: underline;
  padding-top: 2rem;
  cursor: pointer;
  color: var(--nav-text);
  font-size: 1.25rem;

  &:hover {
    color: var(--nav-text);
    filter: brightness(1.7);
  }
`;

export const ProfileImage = styled.img`
  margin-top: 5rem;
  width: 8rem;
  height: 8rem;
  box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border: 5px solid var(--text-title);
  object-fit: cover;
`;

export const ProfileName = styled.h2`
  margin-top: 1.2rem;
  color: var(--text-title);
`;
