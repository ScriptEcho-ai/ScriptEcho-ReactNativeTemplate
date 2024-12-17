import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.tsx';

function App() {
  useEffect(() => {
    // 设置定时器，延迟10秒后发送postMessage
    const timer = setTimeout(() => {
      window.parent?.postMessage({ 'action': 'on-code-ok' }, '*');
    }, 10000); // 10000毫秒 = 10秒

    // 清理定时器
    return () => clearTimeout(timer);
  }, []); // 空依赖数组意味着只在组件挂载时执行

  return (
    <Router>
      <Routes>
        <Route path="/test" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;