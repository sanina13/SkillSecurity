import { useState } from "react"

function FileUpload({ onResults }) {
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false)

    async function handleScan() {
        if (!file) return

        setLoading(true)
        const formData = new FormData()
        formData.append("file", file)

        try {
            const response = await fetch("http://localhost:8000/scan", {
                method: "POST",
                body: formData,
            })
            const data = await response.json()
            onResults(data)
        } catch (error) {
            console.log("Erro:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <div className={`upload-area ${file ? "has-file" : ""}`}>
                <div className="upload-icon">🔍</div>
                <label className="upload-label">
                    Choose .md file
                    <input
                        className="upload-input"
                        type="file"
                        accept=".md"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </label>
                {file && <p className="file-name">{file.name}</p>}
                {!file && <p className="upload-hint">Only .md files accepted — max 1MB</p>}
            </div>

            <button
                className="scan-button"
                onClick={handleScan}
                disabled={!file || loading}
            >
                {loading ? (
                    <>
                        <span className="loading-spinner"></span>
                        Scanning...
                    </>
                ) : (
                    "Scan for injections"
                )}
            </button>
        </div>
    )
}

export default FileUpload
