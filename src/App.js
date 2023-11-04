import React from 'react';
import { Header } from './components/header';
import { Breadcrumbs } from './components/breadcrumbs';
import { Sidebar } from './components/sidebar';
import { Contacts } from './components/contacts';
import { Title } from './components/title';
import { CategoryList } from './features/courses/categoryList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Breadcrumbs />
        <div className="row">
          <div className="column col-3 pl-0">
            <Sidebar />
            <Contacts />
          </div>
          <div className="column col-9 pr-0">
            <Title />
            <CategoryList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
