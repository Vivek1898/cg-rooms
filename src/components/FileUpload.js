import React, { useState } from "react";

import Resizer from "react-image-file-resizer";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import { CopyOutlined ,DeleteOutlined} from '@ant-design/icons';
import { Avatar, Badge,Tag,Input,Tooltip,Button,Image,Typography  } from "antd";
const { Paragraph,Text,Link } = Typography;
const FileUpload = ({ Imagevalues, setImagevalues, loadingDelete,setLoadingDelete,visible,setVisible}) => {

 
  const fileUploadAndResize = (e) => {
    // console.log(e.target.files);
    // resize
    let files = e.target.files; // 3
    let allUploadedFiles = Imagevalues.images;


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
     
                setImagevalues({ ...Imagevalues, images: allUploadedFiles });
                console.log(Imagevalues)
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
            <div
             
              key={image.public_id}
             
              style={{ cursor: "pointer" }}
            >
                 <Image
        preview={visible}
        width={200}
        src={image.url}
        onClick={() => setVisible(true)}
      />
    {loadingDelete ? (
            <LoadingOutlined className="text-danger h1" />
          ) : (
    
<Button  icon={<DeleteOutlined />}    onClick={() => handleImageRemove(image.public_id)}>Delete</Button>
          )}


<Text copyable code>{image.url}</Text>

     
            </div>

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
