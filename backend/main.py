from fastapi import FastAPI, UploadFile, HTTPException
from scanner.detector import scan

app = FastAPI()

@app.get("/")

def root():
    return {"message": "SkillSecurity API"}

@app.post("/scan")
async def scan_file(file: UploadFile):

    if file.filename.endswith(".md"):
        content = await file.read()
        text = content.decode("utf-8")
        return scan(text)

    raise HTTPException(status_code=400, detail="Only .md files are accepted")

