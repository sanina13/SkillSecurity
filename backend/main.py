from fastapi import FastAPI, UploadFile
from scanner.detector import scan

app = FastAPI()

@app.get("/")

def root():
    return {"message": "SkillSecurity API"}

@app.post("/scan")
async def scan_file(file: UploadFile):
    content = await file.read()
    text = content.decode("utf-8")
    return scan(text)