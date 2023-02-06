import React from 'react'
import styled from 'styled-components'
import qrimg from '../assets/image-qr-code.png'

function Card() {
  return (
    <CardWrapper>
      <ImageWrapper src={qrimg} />
      <CardTitle>
        Improve your front-end
        skills by building projects
      </CardTitle>
      <CardCaption>
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
      </CardCaption>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  width: fit-content;
  height: fit-content;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 10px ;
  padding: 14px;
  background-color: #fff;
`;

const ImageWrapper = styled.img`
  width: 250px;
  border-radius: 10px;
`;

const CardTitle = styled.h2`
  max-width: 100%;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  font-size: 18px;
  max-width: 220px;
  margin-top: 18px;
  font-weight: 600;
  color: hsl(218, 44%, 22%);
  font-family: 'Outfit', sans-serif;
`;

const CardCaption = styled.p`
  color: hsl(220, 15%, 55%);
  font-family: 'Outfit', sans-serif;
  max-width: 220px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;
`;

export default Card