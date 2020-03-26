import React, { constructor } from 'react';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';

constructor(CameraPreview) ,{ }


const cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'rear',
    tapPhoto: true,
    previewDrag: true,
    toBack: true,
    alpha: 1
  }
  
  // start camera
  this.cameraPreview.startCamera(cameraPreviewOpts).then(
    (res: any) => {
      console.log(res)
    },
    (err: any) => {
      console.log(err)
    });
  
  // Set the handler to run every time we take a picture
  this.cameraPreview.setOnPictureTakenHandler().subscribe((result: any) => {
    console.log(result);
    // do something with the result
  });
  
  
  // picture options
  const pictureOpts: CameraPreviewPictureOptions = {
    width: 1280,
    height: 1280,
    quality: 85
  }
  
  // take a picture
  this.cameraPreview.takePicture(this.pictureOpts).then((imageData: string) => {
    this.picture = 'data:image/jpeg;base64,' + imageData;
  }, (err: any) => {
    console.log(err);
    this.picture = 'assets/img/test.jpg';
  });
  
const CameraPreviewPage: React.FC = () => {
    return(
        <h1>Hiiiiibfdsgrrs</h1>
    )
}

export default CameraPreviewPage;