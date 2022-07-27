import styled from "styled-components";

export const Container = styled.div`
  padding: 15rem 0;

  h1 {
    margin: 3rem 0;
  }
  .movie {
    display: flex;
    align-items: center;

    justify-content: center;
  }
  img {
    width: 200px;
    border-radius: 1rem;
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2rem;
    max-width: 50%;
  }
  button {
    margin-top: 1rem;
    padding: 17px 40px;
    border-radius: 50px;
    border: 0;
    background-color: white;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;

    font-size: 15px;
    transition: all 0.5s ease;
  }
  button:hover {
    background-color: #65499c;
    box-shadow: 10px 10px 37px 0px rgba(53, 0, 66, 0.17);
    color: #fff;
    transform: translateY(-7px);
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
  }
  .release-date {
    opacity: 0.5;
  }
`;
