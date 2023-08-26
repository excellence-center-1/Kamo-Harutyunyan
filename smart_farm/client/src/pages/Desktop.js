import React from "react";
import {Container} from "@mui/material";
import { MyBar } from "../components/Drawer";
import users from "../assets/static/users-svgrepo-com.svg";
import greenhouse from "../assets/static/greenhouse(1).png";
import field from "../assets/static/plantation.png";
import product from "../assets/static/healthy-food.png";
import transport from "../assets/static/tractor.png";
import {
    ImageList,
    ImageListItem,
    ImageListItemBar,
  } from '@mui/material';

  const imageListData = [
    {
      img: users,
      title: 'Users',
    },
    {
        img: greenhouse,
        title: 'Greenhouse',
    },
    {
        img: field,
        title: 'Fields',
    },
    {
        img: product,
        title: 'Products',  
    },
    {
        img: transport,
        title: 'Transports'
    }

  ];

  const getImageList = () => (
    <ImageList gap={12} sx={{ mb: 8,
        gridTemplateColumns:
        'repeat(auto-fill, minmax(280px, 1fr))!important'}}>
      {imageListData.map((item, index) => (
        <ImageListItem key={index}>
          <img src={item.img} alt={item.title} loading="lazy" style={{ width: "200px", height: "200px" }} />
          <ImageListItemBar title={item.title} sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%)',
                }} />
        </ImageListItem>
      ))}
    </ImageList>
  );
  
export const AdminDesktop = () => {
    return (
        <div style={{ display: 'flex' }}>
            <MyBar />
            <Container>
                {getImageList() } {/* Render the ImageList on the right side */}
            </Container>
        </div>
    
    );
}