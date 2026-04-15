import re

def scan(text):
    findings = []
    overrideFind = override_attempt(text)
    if not overrideFind is None:
        findings.append(overrideFind)

    return findings

def override_attempt(text):
    text_lower = text.lower()
    if re.search(r"you\s+are\s+now\s+a", text_lower):
        return{
            "rule": "role-override", "severity": "critical"
        }
    return None