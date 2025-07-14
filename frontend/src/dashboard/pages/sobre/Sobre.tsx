import './Sobre.css';

const Sobre = () => {
  return (
    <div className="sobre-container">
      <div className="logo-container">
        <img
          src="/logoColetivoVerde.png"
          alt="Logo Coletiv"
          className="logo-image"
        />
      </div>

      <div className="description-container">
        <p>
          O sistema COLETIVO é uma aplicação de controle financeiro voltada
          para grupo de pessoas que compartilham despesas em comum,
          pensado principalmente para pessoas que dividem moradia como
          por exemplo universitários, mas que também pode ser usado por
          quaisquer outros grupos que compartilhem despesas.
        </p>
      </div>

      <footer className="sobre-footer">
        <p>Os Supimpas © 2025 - Coletivo v1.0</p>
      </footer>
    </div>
  );
};

export default Sobre;
