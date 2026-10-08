import Header from '../header/Header';
import Footer from '../footer/Footer';

export function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>);} 