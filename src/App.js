import ButtonGroups from "./component/button-group";

function App() {
  return (
    <div className="p-4 container mx-auto">

      <header className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Hoşgeldin</h3>
        <nav className="flex gap-2.5">
          <ButtonGroups
          autoClose={true}
          buttons = {[
            {
              title: 'Yeni Ekle',
              attributes: {
                size: 'small',
                onclick: () => alert('ekle')
              }
            },
            {
              title: 'Ayarlar',
              attributes: {
                size:'small'
              }
            },
            {
              title: 'Çıkış Yap',
              attributes: {
                size: 'small',
                variant:'danger'
              }
            }
          ]}
          />

        </nav>
      </header>

    </div>
  );
}

export default App;



{/* <Button size='small'>Hello World</Button>
<Button>Hello world</Button>
<Button size='large'>Hello World</Button> */}