import { Box, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Controls from './components/shared/Controls';
import List from './components/shared/List';
import { decrypt, encrypt } from './lib/encryption';

const App = () => {
    const [list, setList] = useState(false);

    const switchList = () => {
        setList(!list);
    };

    useEffect(() => {
        let text: string = 'This is my test message';

        let encrypted: string = encrypt(text);

        console.log('Encrypted Message: ' + encrypted);
        console.log('Decrypt Message: ' + decrypt(encrypted));
    }, [list]);

    return (
        <Box bg="#0f172a" minW={600} minH={380} px={10} py={15} color="white">
            {list ? <List /> : <Controls />}
            <div className="text-center py-10">
                <Button onClick={switchList} colorScheme="green">
                    {list ? 'Show controls' : 'Show List'}
                </Button>
            </div>
        </Box>
    );
};

export default App;
