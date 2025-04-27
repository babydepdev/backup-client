import { useState } from "react"

const Restore = () => {
    const [file, setFile] = useState(null)
    console.log(file)

    const handleRestore = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("file", file)
        console.log(formData)
        fetch("http://172.20.10.3:8000/restore", {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <form onSubmit={(e) => handleRestore(e)}>
                <input
                    type="file"
                    id="restore-file"
                    name="restore-file"
                    accept=".tar,.tar.gz"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button type="submit" id="restore-button">Restore</button>
            </form>

        </div>
    )
}
export default Restore