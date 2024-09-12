// *** SCREEN IMPORTS ***
import Layout from "@/Stacks/Layout";
//  *** REDUX IMPORTS ***
import { store } from "store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}
