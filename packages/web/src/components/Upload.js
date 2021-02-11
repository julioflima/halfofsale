import React, { Component } from 'react'

import Dropzone from 'react-dropzone'

import { DropContainer, UploadMessage } from '../../styles/components/Upload'

export default class Upload extends Component {
  renderDragMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMessage>Drag files into here... (Only *.bin and *.png.)</UploadMessage>
    }

    if (isDragReject) {
      return <UploadMessage type="error">File not supported.</UploadMessage>
    }

    return <UploadMessage type="success">Drop files here.</UploadMessage>
  }

  render() {
    const { onUpload } = this.props

    return (
      <Dropzone accept="application/zip, application/*" onDropAccepted={onUpload}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            styles={{ width: '100%', height: '10rem' }}
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    )
  }
}
