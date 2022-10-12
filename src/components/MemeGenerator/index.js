import {Component} from 'react'
import {
  MemeContainer,
  GeneratedMeme,
  ControlContainer,
  Heading,
  InputLabelContainer,
  InputLabel,
  InputContainer,
  DropDownMenu,
  DropdownItem,
  CustomButton,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    bottomText: '',
    topText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    imageUrlInput: '',
    bottomTextInput: '',
    topTextInput: '',
    fontSizeInput: '',
  }

  onClickGenerateMeme = event => {
    event.preventDefault()

    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state

    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: fontSizeInput,
    })
  }

  onChangeImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  renderMeme = () => {
    const {imageUrl, bottomText, topText, fontSize} = this.state

    return (
      <GeneratedMeme data-testid="meme" image={imageUrl}>
        <MemeText fontSize={fontSize} type="topText">
          {topText}
        </MemeText>
        <MemeText fontSize={fontSize}>{bottomText}</MemeText>
      </GeneratedMeme>
    )
  }

  renderFormContainer = () => {
    const {
      imageUrlInput,
      bottomTextInput,
      topTextInput,
      fontSizeInput,
    } = this.state

    return (
      <ControlContainer onSubmit={this.onClickGenerateMeme}>
        <InputLabelContainer>
          <InputLabel htmlFor="image">Image URL</InputLabel>
          <InputContainer
            placeholder="Enter the Image Url"
            id="image"
            type="text"
            value={imageUrlInput}
            onChange={this.onChangeImageUrl}
          />
        </InputLabelContainer>
        <InputLabelContainer>
          <InputLabel htmlFor="topText">Top Text</InputLabel>
          <InputContainer
            placeholder="Enter the Top Text"
            id="topText"
            type="text"
            value={topTextInput}
            onChange={this.onChangeTopText}
          />
        </InputLabelContainer>
        <InputLabelContainer>
          <InputLabel htmlFor="bottomText">Bottom Text</InputLabel>
          <InputContainer
            placeholder="Enter the Bottom Text"
            id="bottomText"
            type="text"
            value={bottomTextInput}
            onChange={this.onChangeBottomText}
          />
        </InputLabelContainer>
        <InputLabelContainer>
          <InputLabel htmlFor="fontSize">Font Size</InputLabel>
          <DropDownMenu
            value={fontSizeInput}
            onChange={this.onChangeFontSize}
            id="fontSize"
          >
            {fontSizesOptionsList.map(eachOption => (
              <DropdownItem
                value={eachOption.optionId}
                key={eachOption.optionId}
              >
                {eachOption.displayText}
              </DropdownItem>
            ))}
          </DropDownMenu>
        </InputLabelContainer>
        <CustomButton type="submit" onClick={this.onClickGenerateMeme}>
          Generate
        </CustomButton>
      </ControlContainer>
    )
  }

  render() {
    return (
      <MemeContainer>
        <Heading>Meme Generator</Heading>
        {this.renderMeme()}
        {this.renderFormContainer()}
      </MemeContainer>
    )
  }
}

export default MemeGenerator
