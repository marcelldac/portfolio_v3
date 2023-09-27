import { Box } from "@chakra-ui/react";

import Project from "../components/Project";
import skills from "../utils/skills";

export default function Projects() {

  const img = {
    p1: "https://github-production-user-asset-6210df.s3.amazonaws.com/83461178/264431707-70fdf994-3127-4722-ac50-fd2f687c9752.png",
    p2: "https://github-production-user-asset-6210df.s3.amazonaws.com/83461178/264448350-f2bb0bb8-3003-4d8f-82ee-c67eea16edc0.png",
    p3: 'https://github-production-user-asset-6210df.s3.amazonaws.com/83461178/264450036-6a688523-8609-480a-ad9f-f6f08c5a58b4.png',
    p4: 'https://github-production-user-asset-6210df.s3.amazonaws.com/83461178/264451971-cabfa5ac-6ff2-4d72-a96a-4d8833de382a.png',
    p5: 'https://github-production-user-asset-6210df.s3.amazonaws.com/83461178/264454681-d3ae0b97-6a89-4a26-a792-228f09e881f2.png',
    p6: 'https://github-production-user-asset-6210df.s3.amazonaws.com/83461178/264456263-f73130fc-c3a5-41a7-bf4c-3d4c460b8284.png',
    p7: 'https://github-production-user-asset-6210df.s3.amazonaws.com/83461178/268435778-07114689-599b-424d-a9d0-a71a7c97b250.png',
    p8: 'https://github-production-user-asset-6210df.s3.amazonaws.com/83461178/268437038-9fbd5a7a-04b4-4bfb-a7f8-042cac07cf70.png',
    p9: 'https://github-production-user-asset-6210df.s3.amazonaws.com/83461178/270091743-9978722a-e987-4500-b522-8309f00665bf.png',
    p10: 'https://github-production-user-asset-6210df.s3.amazonaws.com/83461178/270149382-048066f2-081f-4b69-a029-14ec26ac0ae9.png',
    p11: 'https://github-production-user-asset-6210df.s3.amazonaws.com/83461178/270899323-68a48172-69ea-4a7c-a488-e2c4ae490f81.png',
  }

  const desc = {
    p1: "A beginner's guide to React Native for those who want to start with the framework. React Native was the first framework I worked with. Initially, I encountered some difficulties in understanding important topics like Async Storage and Redux Saga. I created this guide so that people don't feel as lost as I did when I started.",
    p2: 'A NPM lib with UI which generates a custom QR Code from any link provided by the user. Made in React.js.',
    p3: 'A Finance system REST Api in Golang using continuous integration with Circle CI, using MVC architecture.',
    p4: 'An app for inventory management of any desired product by the user, built using Next.js with Chakra-UI.',
    p5: 'An initial prototype of a mental health-related application that I am developing. Built using React Native and Styled Components.',
    p6: 'A website that generates a thumbnail from a link and provides it for download, built using Python and the Flask framework.',
    p7: 'A zip code finder. The user puts your postal code info and the system returns information about it.',
    p8: 'My old portfolio. Made with ReactJs, it is my 2.0 version of portfolio. (this is 3.0.).',
    p9: 'The User Management System is a robust Java Spring Boot application designed to streamline the management of user data within an organization. This project implements a full-fledged CRUD (Create, Read, Update, Delete) functionality for user entities, offering a secure and efficient way to handle user information.',
    p10: 'A Simple Password Manager made in Python. It is not yet at the production level.',
    p11: 'DacTI is my project that commercializes websites and IT projects in general, at an affordable price!',
  }

  const links = {
    p1: 'https://github.com/marcelldac/react-native-guide',
    p2: 'https://www.npmjs.com/package/q-coder',
    p3: 'https://github.com/marcelldac/finance-system-api',
    p4: 'https://inventory-control-nextjs-p4myb0qy6-marcelldac.vercel.app/',
    p5: '',
    p6: 'https://github.com/marcelldac/thumbnail-downloader',
    p7: 'https://github.com/marcelldac/zip-code-finder',
    p8: 'https://github.com/marcelldac/portfolio',
    p9: 'https://github.com/marcelldac/crud_usuarios',
    p10: 'https://github.com/marcelldac/password-generator',
    p11: 'https://dacti-xi.vercel.app/',
  }

  return (
    <Box m={30}>
      <Project title='DacTI Project' src={img.p11} description={desc.p11} skills={[skills.javascript, skills.react_js]} link={links.p11} />
      <Project title="Password Manager" src={img.p10} description={desc.p10} skills={[skills.python]} link={links.p10} />
      <Project title="Users CRUD" src={img.p9} description={desc.p9} skills={[skills.java]} link={links.p9} />
      <Project title='My Portfolio v2.0' src={img.p8} description={desc.p8} skills={[skills.javascript, skills.react_js]} link={links.p8} />
      <Project title='Zip Code Finder' src={img.p7} description={desc.p7} skills={[skills.javascript, skills.react_js]} link={links.p7} />
      <Project title='React Native Guide' src={img.p1} description={desc.p1} skills={[skills.react_native, skills.javascript]} link={links.p1} />
      <Project title='Q-Coder NPM Package' src={img.p2} description={desc.p2} skills={[skills.typescript, skills.react_js]} link={links.p2} />
      <Project title='Finance System API' src={img.p3} description={desc.p3} skills={[skills.golang]} link={links.p3} />
      <Project title='Inventory Control System' src={img.p4} description={desc.p4} skills={[skills.javascript, skills.nextjs, skills.chakraui]} link={links.p4} />
      <Project title='React Native Health App' src={img.p5} description={desc.p5} skills={[skills.javascript, skills.react_native]} link={links.p5} />
      <Project title='Thumbnail Downloader' src={img.p6} description={desc.p6} skills={[skills.python, skills.flask]} link={links.p6} />
    </Box>
  )
}