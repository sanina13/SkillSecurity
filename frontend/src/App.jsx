import FileUpload from './components/FileUpload';

function App() {
  return (
    <div>
      <h1>SkillSecurity</h1>
      <p>Upload a .md skill file to scan for prompt injection</p>
      <FileUpload></FileUpload>
    </div>
  );
}

export default App;
