function ScanResults({ results }) {
  if (!results) return null;

  if (results.total_findings === 0) {
    return (
      <div className="results">
        <div className="clean-result">
          <div className="clean-icon">✅</div>
          <h3>No injections detected</h3>
          <p>This skill file appears to be clean</p>
        </div>
      </div>
    );
  }

  return (
    <div className="results">
      <div className="results-header">
        <h2>Scan complete</h2>
        <p className="results-filename">{results.filename}</p>
      </div>

      <div className="summary">
        <div className="summary-card critical">
          <div className="summary-count">{results.summary.critical}</div>
          <div className="summary-label">Critical</div>
        </div>
        <div className="summary-card high">
          <div className="summary-count">{results.summary.high}</div>
          <div className="summary-label">High</div>
        </div>
        <div className="summary-card medium">
          <div className="summary-count">{results.summary.medium}</div>
          <div className="summary-label">Medium</div>
        </div>
      </div>

      <div className="findings-list">
        {results.findings.map((finding, index) => (
          <div className="finding-item" key={index}>
            <span className={`finding-severity ${finding.severity}`}>
              {finding.severity}
            </span>
            <div className="finding-info">
              <div className="finding-rule">{finding.rule}</div>
              <div className="finding-matched">
                Matched: <code>{finding.matched_text}</code>
              </div>
            </div>
            <span className="finding-line">L{finding.line}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScanResults;
