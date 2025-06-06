import CometChatApp from "./CometChat/CometChatApp";
const App = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden",
      }}
    >
      <CometChatApp />
    </div>
  );
};

export default App;
