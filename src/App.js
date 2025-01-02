import Button from "./component/button/index";

function App() {
  return (
    <div className="p-10">
      <header className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Hoşgeldin</h3>
        <nav className="flex gap-2.5">
          <Button size="small">Yeni Ekle</Button>
          <Button size="small">Ayarlar</Button>
          <Button size="small">Çıkış Yap</Button>
        </nav>
      </header>
    </div>
  );
}

export default App;



{/* <Button size='small'>Hello World</Button>
<Button>Hello world</Button>
<Button size='large'>Hello World</Button> */}