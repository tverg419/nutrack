import React from 'react';
import { Flex } from '@chakra-ui/react'
import PieChart from './PieChart';
function Index(props) {
    return (
        <div>
            <Flex>
                <h1>Welcome to the Home Page</h1>
                <PieChart/>
            </Flex>
        </div>
    );
}

export default Index;