import { Box, Button, TabList, TabPanel, TabPanels, Tabs, Text, useMultiStyleConfig, useTab } from '@chakra-ui/react';
import React from 'react';

export default function CustomTabs() {
  const CustomTab = React.forwardRef((props, ref) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref })
    const isSelected = !!tabProps['aria-selected']

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig('Tabs', tabProps)

    return (
      <Button __css={styles.tab} {...tabProps}>
        <Box as='span' mr='2'>
          {isSelected ? '😎' : '😐'}
        </Box>
        {tabProps.children}
      </Button>
    )
  })

  return (
    <Tabs>
      <TabList>
        <CustomTab>As a Teacher</CustomTab>
        <CustomTab>As a Developer</CustomTab>
        <CustomTab>As a Student</CustomTab>
      </TabList>
      <TabPanels>
        <TabPanel ml={2} fontSize={17}>
          <Text as='b'>At Unijorge:</Text>
          <ul>
            <li>Weekly Programming Logic Workshops</li>
            <li>HTML5 and CSS3: Build Your First Website.</li>
            <li>ReactJs: Creating Your First Web App (Part 1 and 2).</li>
            <li>ReactJs: State Management with Redux.</li>
            <li>NodeJs: Building an Image Upload API using MongoDB.</li>
          </ul>
        </TabPanel>
        <TabPanel ml={2} fontSize={17}>
          <Text as='b'>Full-stack Developer</Text>
          <Text>Passionate about programming. I began my studies at around the age of 14 with the Python language. I always strive to understand the lowest levels of structures and comprehend that programming language is merely a tool.</Text>
        </TabPanel>
        <TabPanel ml={2} fontSize={17}>
          <Text as='b'>Computer Scientist (almost)</Text>
          <ul>
            <li>Undergraduate student at Unijorge majoring in Computer Science, currently in the 4th semester.</li>
            <li>Former teaching assistant in the Web Development course.</li>
            <li>Participant in scientific research on data analysis using machine learning:
              I had the opportunity to delve into data analysis, considering the use of machine learning to enhance the process. Techniques such as clustering and decision trees have already been employed in the development of the research project.</li>
          </ul>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}