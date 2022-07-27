import styled from "styled-components";

export const MovieLI = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 200px;
    border-radius: 1rem;
  }
  span {
    margin-top: 2rem;
  }
  span {
    font-weight: bold;
  }

  a {
    transition: all 0.3s;
  }
  a:hover {
    transform: scale(1.1);
  }
`;
