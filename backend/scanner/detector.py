import re

def scan(text):
    findings = []
    override_find = override_attempt(text)
    functions_list = [override_find]

    for func in functions_list:
        if not func is None:
            findings.append(func)
            
    return findings

def override_attempt(text):
    list_regex = [r"you\s+are\s+now\s+a", r"forget\s+(everything|all)", r"act\s+as\s+(if\s+you\s+(were|are)|a|an)\s"]
    for reg in list_regex:
        if re.search(reg, text, re.IGNORECASE):
            return{
                "rule": "role-override", "severity": "critical"
            }
    return None