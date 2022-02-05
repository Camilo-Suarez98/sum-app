import Input from "./components/Input";
import styled from "styled-components";

const App = () => {
  return (
    <Style>
      <Title>SumApp</Title>
      <Input />
    </Style>
  );
}

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: cursive;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background-color: #001E6C;
  color: #FFAA4C;
`

const Title = styled.h1`
  margin-bottom: 25px;
`

export default App;
