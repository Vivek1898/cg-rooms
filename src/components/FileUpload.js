import React, { useState } from "react";

import Resizer from "react-image-file-resizer";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import { CopyOutlined ,DeleteFilled} from '@ant-design/icons';
import { Avatar, Badge,Tag,Input,Tooltip,Button,Image,Typography  } from "antd";
const { Paragraph,Text,Link } = Typography;
const FileUpload = ({ Imagevalues, setImagevalues, loadingDelete,setLoadingDelete,visible,setVisible,Images,setImages}) => {

 
  const fileUploadAndResize = (e) => {
    // console.log(e.target.files);
    // resize
    let files = e.target.files; // 3
    let allUploadedFiles = Imagevalues.images;
 let temp=Images

    if (files) {
      setLoadingDelete(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            // console.log(uri);
            axios
              .post(
                `${process.env.REACT_APP_GLOBAL_API}/api/upload/addimage`,
                { image: uri },
              
              )
              .then((res) => {
                console.log("IMAGE UPLOAD RES DATA", res);
                setLoadingDelete(false);
                allUploadedFiles.push(res.data);
                 temp.push(res.data.url)
                setImages( temp);
                setImagevalues({ ...Imagevalues, images: allUploadedFiles });
                console.log(Images)
              })
              .catch((err) => {
                setLoadingDelete(false);
                console.log("CLOUDINARY UPLOAD ERR", err);
              });
          },
          "base64"
        );
      }
    }
    // send back to server to upload to cloudinary
    // set url to images[] in the parent component state - ProductCreate
  };

  const handleImageRemove = (public_id) => {
    setLoadingDelete(true);
    // console.log("remove image", public_id);

   let temp=Images
    axios
      .post(
        `${process.env.REACT_APP_GLOBAL_API}/api/upload/removeimage`,
        { public_id },
       
      )
      .then((res) => {
        setLoadingDelete(false);
        const { images } = Imagevalues;
        let filteredImages = images.filter((item) => {
          return item.public_id !== public_id;
        });
      
        setImagevalues({ ...Imagevalues, images: filteredImages });
        console.log(filteredImages);

      temp.splice(0, temp.length);
      setImages(temp)
       
        filteredImages.forEach((x, i) =>temp.push(x.url));
        console.log("temop => " )
        console.log(temp)
        setImages( temp);
        temp.splice(0, temp.length);
        console.log("Images => ")
        console.log(Images)
      })
      .catch((err) => {
        console.log(err);
        setLoadingDelete(false);
      });
  };

  return (
    <>
      <div className="row">
   
      {!loadingDelete ?(  Imagevalues.images &&
          Imagevalues.images.map((image) => (
            <Badge
             
              key={image.public_id}
             
              style={{ cursor: "pointer" }}
            >
                 <Image
                 className="m-1 p-1"
        preview={visible}
        width={200}
        src={image.url}
        onClick={() => setVisible(true)}
      />
    {loadingDelete ? (
            <LoadingOutlined className="text-danger h1" />
          ) : (
    
<Button  icon={<DeleteFilled />} 
    className="text-danger " 
   onClick={() => handleImageRemove(image.public_id)}
   style={{display:"flex"}}
   >Delete</Button>
          )}


{/* <Text copyable code>{image.url}</Text> */}

     
            </Badge>

          ))):(

            <LoadingOutlined className="text-danger h1" />
          )}
      </div>
      <div className="row">
        <label className="btn btn-primary btn-raised mt-3">
          Upload Images
          <input
            type="file"
            multiple
            hidden
            accept="images/*"
            onChange={fileUploadAndResize}
          />
        </label>
      </div>
    </>
  );
};

export default FileUpload;
