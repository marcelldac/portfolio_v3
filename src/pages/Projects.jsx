import {Box} from "@chakra-ui/react";
import Project from "../components/Project";

export default function Projects(){

  const skills = {
    "react_native": "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    "javascript": "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E",
  }

  const src = {
    p1: "https://github-production-user-asset-6210df.s3.amazonaws.com/83461178/264431707-70fdf994-3127-4722-ac50-fd2f687c9752.png"
  }

  const description = {
    p1: "A beginner's guide to React Native for those who want to start with the framework. React Native was the first framework I worked with. Initially, I encountered some difficulties in understanding important topics like Async Storage and Redux Saga. I created this guide so that people don't feel as lost as I did when I started."
  }

  return(
    <Box bgColor='gray.700' w={['400px','800px','1300px']} display='flex' justifyContent='center'>
      <Project title='React Native Guide' src={src.p1} description={description.p1} skills={[skills.react_native, skills.javascript]}/>
      {/* Q-coder */}
      {/* Finance System API */}
      {/* Inventory Control System */}
      {/* React Native Health App */}
      {/* Thumbnail Downloader */}
    </Box>
  )
}