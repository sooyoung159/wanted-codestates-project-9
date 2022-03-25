import styled from "styled-components";

const Notification = (props) => {
  let specialClasses = "";

  if (props.status === "copy") {
    specialClasses = "copy";
  }

  return (
    <Section>
      <p>{props.message}</p>
    </Section>
  );
};

export default Notification;

const Section = styled.section`
  position: fixed;
  width: 21rem;
  height: 2rem;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 10%;
  text-align: center;
  align-items: center;
  color: white;
  z-index: 30;
  > h2,
  p {
    font-size: 1rem;
    margin: 0;
  }
`;
