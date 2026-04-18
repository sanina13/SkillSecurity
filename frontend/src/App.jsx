import { useState } from "react"
import FileUpload from "./components/FileUpload"
import ScanResults from "./components/ScanResults"
import "./App.css"

function App() {
    const [results, setResults] = useState(null)

    return (
        <div className="app">
            <div className="app-header">
                <h1>Skill<span>Security</span></h1>
                <p>Upload a .md skill file to scan for prompt injection</p>
            </div>
            <FileUpload onResults={setResults} />
            <ScanResults results={results} />
        </div>
    )
}

export default App
