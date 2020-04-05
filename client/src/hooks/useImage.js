import { useState, useEffect } from 'react'

export const useImage = () => {
  const [file, setFile] = useState()
  const [previewUrl, setPreviewUrl] = useState()

  const imageHandler = e => {
    if (e.target.files) setFile(e.target.files[0])
  }

  useEffect(() => {
    if (!file) return

    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result)
    }
    fileReader.readAsDataURL(file)
  }, [file])

  return {
    imageHandler,
    file,
    previewUrl,
    setPreviewUrl
  }
}
