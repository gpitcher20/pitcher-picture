import './App.css';
import Images from './components/images';


function App() {
  return (
    <BrowserRouter basename="/pitcher-picture">
      <>
        <Images photos={patPhotoList().concat(brumPhotoList())} />
      </>
    </BrowserRouter>

  )
}

export default App

function patPhotoList() {
  const photoPaths = import.meta.glob('../public/Photos/Aunt-Pat-2024/*.{jpg,jpeg,png}', {
    eager: true, 
    query: '?url',
    import: 'default'
  });
  const noPublicPath = Object.entries(photoPaths).map(([path, url]) => {
    return path.replace('../public', '');
  })

  return noPublicPath;
}
function brumPhotoList() {
  const photoPaths = import.meta.glob('../public/Photos/Brumfield/*.{jpg,jpeg,png}', {
    eager: true, 
    query: '?url',
    import: 'default'
  });
  const noPublicPath = Object.entries(photoPaths).map(([path, url]) => {
    return path.replace('../public', '');
  })

  return noPublicPath;
}