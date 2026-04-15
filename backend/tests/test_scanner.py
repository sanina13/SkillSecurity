from scanner.detector import scan



def test_text_clean_return_zero_findings():
    text = "Text..."

    outcome = scan(text)

    assert outcome == [], "Clean text should not produce findings"
