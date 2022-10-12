import styled from 'styled-components'

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
  width: 100vw;
  box-sizing: content-box;
  box-shadow: 0px 0px 5px #000000;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const GeneratedMeme = styled.div`
  display: flex;
  height: 40vh;
  width: 50vw;
  background-image: url(${props => props.image});
  background-size: cover;
  order: 0;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    order: 1;
    width: 40vw;
  }
`

export const ControlContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 80vh;
  @media screen and (min-width: 768px) {
    width: 50%;
    order: -1;
  }
`

export const Heading = styled.h1`
  font-size: 20px;
  color: #35469c;
  font-family: 'Consolas';
  font-weight: 800;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`
export const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 10vh;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 50vw;
  }
`
export const InputLabel = styled.label`
  font-family: 'Consolas';
  font-size: '15px';
  color: #7e858e;
  font-weight: 1000;
  margin-bottom: 5px;
`
export const InputContainer = styled.input`
  width: 100%;
  height: 60vh;
  outline: none;
`
export const DropDownMenu = styled.select`
  font-size: 15px;
  background-color: #ffffff;
  font-family: 'Consolas';
  outline: none;
  padding: 8px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const DropdownItem = styled.option`
  color: #7e858e;
  font-family: 'Consolas';
  font-size: 14px;
`
export const CustomButton = styled.button`
  width: 150px;
  background-color: #0b69ff;
  padding: 10px;
  border-style: none;
  color: #ffffff;
  font-size: 15px;
  border-radius: 10px;
`
export const MemeText = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  font-family: 'Consolas';
  font-weight: 800;
`
