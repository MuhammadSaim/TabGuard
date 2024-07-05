import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import Controls from './components/shared/Controls';
import List from './components/shared/List';

const App = () => {
    const [list, setList] = useState(false);

    // const handleClick = async () => {
    //     let [tab] = await chrome.tabs.query({
    //         active: true,
    //         currentWindow: true,
    //     });
    //     console.log(tab);

    //     chrome.scripting.executeScript({
    //         target: { tabId: tab.id! },
    //         func: () => {
    //             alert('Hello from my extension');
    //         },
    //     });
    //     console.log('Click is clicked');
    // };

    const switchList = () => {
        setList(!list);
    };

    return (
        <div className="bg-slate-900 text-white">
            {list ? <List /> : <Controls />}
            <div className="text-center py-10">
                <Button onClick={switchList} colorScheme="green">
                    {list ? 'Show controls' : 'Show List'}
                </Button>
            </div>
        </div>
    );
};

export default App;
