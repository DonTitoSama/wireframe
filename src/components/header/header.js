import './header.sass';

const Header = () => {
    // Afficher la date du jour dans le header
    const currentDate = new Date();
    const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('fr-FR', options);

  return (
    <header className="header-container">
      <h1 id="title">CITATION ET ANNIVERSAIRES</h1>
      <div className="date ">{formattedDate}</div>
    </header>
  );
}

export default Header;
