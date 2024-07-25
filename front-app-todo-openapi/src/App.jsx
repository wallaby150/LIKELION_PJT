import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import TodoContainer from "./todos/TodoContainer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Layout 하위에 선언한 것임으로, Home은 Layout의 Outlet에 출력
        index는 상위조건 , /,와 동일하면 */}
          <Route index element={<Home />}></Route>
          <Route path="/todos/*" element={<TodoContainer />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
