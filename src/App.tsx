import './App.css';

function App() {
  return (
    <div className="App">
      {/* Banner Section */}
      <header className="banner">
        <h1>Welcome to Our Company</h1>
        <p>Specializing in Plastic Pallets for the Printing Industry</p>
      </header>

      {/* Navigation Menu */}
      <nav className="menu">
        <ul>
          <li><a href="#home">Trang chủ</a></li>
          <li><a href="#products">Sản phẩm</a></li>
          <li><a href="#about">Giới thiệu</a></li>
          <li><a href="#contact">Liên hệ</a></li>
        </ul>
      </nav>

      {/* Featured Products Section */}
      <section id="products" className="products">
        <h2>Sản phẩm tiêu biểu</h2>
        <div className="product-cards">
          <div className="card">
            <img src="/path/to/sample-image.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>Short description of Product 1.</p>
          </div>
          <div className="card">
            <img src="/path/to/sample-image.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>Short description of Product 2.</p>
          </div>
          <div className="card">
            <img src="/path/to/sample-image.jpg" alt="Product 3" />
            <h3>Product 3</h3>
            <p>Short description of Product 3.</p>
          </div>
          <div className="card">
            <img src="/path/to/sample-image.jpg" alt="Product 4" />
            <h3>Product 4</h3>
            <p>Short description of Product 4.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits">
        <h2>Ưu điểm vượt trội</h2>
        <ul>
          <li>Durable and long-lasting pallets.</li>
          <li>Lightweight and easy to handle.</li>
          <li>Cost-effective for the printing industry.</li>
          <li>Environmentally friendly materials.</li>
        </ul>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About Our Company</h2>
        <p>We are a leading provider of plastic pallets designed specifically for the printing industry. Our mission is to deliver high-quality, sustainable solutions to our clients.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email: contact@company.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Printing Lane, Industry City</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Our Company. All rights reserved.</p>
        <p><a href="https://facebook.com">Facebook</a></p>
      </footer>
    </div>
  );
}

export default App;
