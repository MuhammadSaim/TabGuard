import { useState } from 'react';
import Controls from './components/shared/Controls';
import List from './components/shared/List';
import { Button } from './components/ui/button';

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
        <>
            {list ? <List /> : <Controls />}
            <div className="text-center py-10">
                <Button
                    onClick={switchList}
                    // className="bg-white text-slate-900 px-3 py-4"
                >
                    {list ? 'Show controls' : 'Show List'}
                </Button>
            </div>
        </>
    );
};

export default App;
