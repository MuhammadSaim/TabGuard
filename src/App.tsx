import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
    const handleClick = async () => {
        let [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true,
        });
        console.log(tab);

        chrome.scripting.executeScript({
            target: { tabId: tab.id! },
            func: () => {
                alert('Hello from my extension');
            },
        });
        console.log('Click is clicked');
    };

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={handleClick}>Click</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
