import "./styles.css";

window.Telegram.WebApp.MainButton.show();
window.Telegram.WebApp.MainButton.setText("Alouuu");
window.Telegram.WebApp.MainButton.onClick(() => {
  window.Telegram.WebApp.showAlert("Alouuu");
});

export default function App() {
  return (
    <div className="App">
      <h1>Chupa Memo</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div className="Body">
        <img src="https://usagif.com/wp-content/uploads/2020/b72nv6/evrbddancen0w-49.gif" />
      </div>
    </div>
  );
}
