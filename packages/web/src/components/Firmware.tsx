import { TextContainer, Container, VersionContainer } from '../../styles/components/Firmware'
import { useDropzone } from 'react-dropzone'
import Upload from './Upload'

export const Firmware = () => {
  return (
    <Container>
      <h1>Versioning a new board</h1>
      <TextContainer>
        <input type="text" placeholder={'Name of project.'} />
        <input type="text" placeholder={'Compatible board name.'} />
      </TextContainer>
      <VersionContainer>
        <span>v.</span>
        <input type="number" min="0" />
        <span>.</span>
        <input type="number" min="0" />
        <span>.</span>
        <input type="number" min="0" />
      </VersionContainer>
      {/* <Dropzone accept={'application/octet-stream, application/zip'} onDropAccepted={() => {}} /> */}
      <Upload />
      <button>Send</button>
    </Container>
  )
}
